import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'
import Img from '../images/slide1.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div>
        <img className={indexStyles.bgimg} src={Img} alt="AltImg"></img>
        <div className={indexStyles.caption}>
          <span className={indexStyles.border}>GET STARTED WITH</span>
          <span className={indexStyles.border}>YOUR FIRST BLOG</span>
        </div>
      </div>
      <div className={indexStyles.content}>
        <h1>Hello.</h1>
        <h2>My self Vipul Chandan. I am a programer from Kurse</h2>      
      </div>
    </Layout>
  )
}

export default IndexPage