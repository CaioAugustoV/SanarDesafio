import React from 'react'
import Home from '../compoments/Home'

import { connect } from 'react-redux'

function index(props) {
  // console.log(props.dispatch(loadData()))
  console.log(props)
  return (
    <>
     {/* <Home/>  */}
    </>
  )
}

export default connect(state => state)(index)