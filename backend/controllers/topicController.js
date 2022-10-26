import asyncHandler from "express-async-handler";
import Topic from "../models/topicModel.js";

// @desc Fetch all topics
// @route GET /api/topics
// @access public
const getTopics = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const topics = await Topic.find({ ...keyword });
  res.json(topics);
});

// @desc Fetch single topic
// @route GET /api/topics/:id
// @access public
const getTopicById = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (topic) {
    res.json(topic);
  } else {
    res.status(404);
    throw new Error("Topic not found");
  }
});

// @desc Delete single topic
// @route DELETE /apic/topics/:id
// @access Private/Admin
const deleteTopic = asyncHandler(async (req, res) => {
  const topic = await Topic.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Create a topic
// @route POST /api/topics
// @access Private/Admin
const createTopic = asyncHandler(async (req, res) => {
  const topic = new Topic({
    title: "Sample title",
    image: "/images/sample.jpg",
    description: "Sample description",
    updateAt: "2022/10/22",
  });
  const createdTopic = await topic.save();
  res.status(201).json(createdTopic);
});

// @desc Update a topic
// @route /api/topics/:id
// @access Private/Admin
const updateTopic = asyncHandler(async (req, res) => {
  const { title, image, description, updateAt } = req.body;

  const topic = await Topic.findById(req.params.id);
  if (topic) {
    topic.title = title;
    topic.image = image;
    topic.description = description;
    topic.updateAt = updateAt;

    const updatedTopic = await topic.save();
    res.json(updatedTopic);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getTopics, getTopicById, deleteTopic, createTopic, updateTopic };
