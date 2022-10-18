import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import '../index.css';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className='d-f_bar'>
      <Form.Control
        className='d-f'
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        SearchIcon='true'
        placeholder='Search'
      ></Form.Control>
    </Form>
  )
}

export default SearchBox