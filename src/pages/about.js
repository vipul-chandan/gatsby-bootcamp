import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const About = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <h2>This is page about myself.</h2>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default About