import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello Hackathon People,</h1>
    <p>My name is Sean Nguyen, I am 22 years old and I've been trying to learn how to code on and off for about three years.
    I am currently not working in order to focus all of my energy to improving my coding skills.</p>
    <p>Although I can sometimes be a homebody, my hobbies include camping, and traveling.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
