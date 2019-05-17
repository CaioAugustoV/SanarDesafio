import React from 'react'
import MainPage from '../common/MainPage'
import Header from './Header'
import Content from './Content'

export default function index() {
  return (
    <MainPage page="home">
      <Header/>
      <Content/>
    </MainPage>
  )
}
