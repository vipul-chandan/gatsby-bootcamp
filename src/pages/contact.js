import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <h2>From this page you can contact with us.</h2>
            <p>Follow me on <Link to="twitter.com">twitter</Link></p>
        </Layout>
    )
}

export default Contact