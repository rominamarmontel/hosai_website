import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  //存在するemailでそのemailのパスワードが合っていれば下記項目を
  //Json形式でレスポンス
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {//もしもそうでなければエラーで返す
    res.status(401)//throwで投げられたerrorもcatchできる
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })
  //もしもemailが既に存在したものであればエラーでレスポンス
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  //そうでなければ下記項目を作成できる
  const user = await User.create({
    name,
    email,
    password,
  })
  //作成したユーザーに下記データをJson形式でレスポンス
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {//失敗すればエラーで返す
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
  //idが一致したユーザーが存在すれば下記データをJson形式でレスポンス
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {//失敗すればエラーで返す
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {//idが一致したユーザーがいれば、
    //nameにリクエストされた名前もしくはnameそのものを代入
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    //もしもパスワード変更のリクエストがあればそのパスワードを代入
    if(req.body.password) {
      user.password = req.body.password
    }
    //ユーザーを保存してJson形式でレスポンス
    const updateUser = await user.save()
    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(updateUser._id),
    })
  } else {//失敗すればエラーを返す
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get user profile
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  //全てのユーザーを探してJson形式でレスポンス
  const users = await User.find({})
  res.json(users)
})

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  //オーダーidが一致したユーザーがいれば削除してメッセージを表示
  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {//idが一致したユーザーがいなければエラーメッセージ
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  //.select("-password")でチェーンを追加するとパスワードが含まれない
  const user = await User.findById(req.params.id).select('-password')
  //パスワードを含めないオーダーidが一致するユーザーを探す
  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  //オーダーidが一致するユーザーを探して更新する
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin //?? user.isAdmin// POST for Postman
    //更新したユーザーを保存する
    const updatedUser = await user.save()
    //更新した下記内容をjson形式にする
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    })
  } else {//失敗したらエラーメッセージ
    res.status(404)
    throw new Error('User not found')
  }
})

export { 
  authUser, 
  registerUser, 
  getUserProfile, 
  updateUserProfile, 
  getUsers,
  deleteUser, 
  getUserById,
  updateUser,
}