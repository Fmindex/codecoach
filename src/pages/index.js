import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Home from '../pages/home'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="CodeCoach" keywords={[`Coach`, `Code`, `CodeCoach`]} />
    <Home />
  </Layout>
)

export default IndexPage
