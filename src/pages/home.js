import '../theme-style.css'
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Feature from '../components/feature'
import Coaches from '../components/coaches'
import BecomeCoache from '../components/become-coach'
import Header from '../components/header'

const Home = () => (
  <>
    <Header />
    <Coaches />
    <Feature />
    <BecomeCoache />
  </>
)

export default Home
