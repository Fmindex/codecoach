import '../theme-style.css'
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Feature from '../components/feature'
import Coaches from '../components/coaches'
import BecomeCoache from '../components/become-coach'
import HowToUse from '../components/how-to-use'
import Header from '../components/header'

const Home = () => (
  <>
    <Header />
    <Feature />
    <Coaches />
    <HowToUse />
    <BecomeCoache />
  </>
)

export default Home
