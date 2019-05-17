import React from 'react'
import Home from '../compoments/Home'
import { connect } from 'react-redux'

function index(props) {
  return (
    <>
     <Home/>
    </>
  )
}

export default connect(state => state)(index)