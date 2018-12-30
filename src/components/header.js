import '../theme-style.css'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => (
  <section className="menu cid-rdrPOnuCJb" id="menu1-0" style={{}}>
    <nav className="headerbar sticky-nav">
      <div className="brand">
        <span className="brand-logo" style={{ marginRight: '8px' }}>
          <img
            src={require('../images/logo1.png')}
            width="55.87765957446808"
            height="55"
            className="mobirise-loader"
          />
        </span>
        <p className="brand-name mbr-fonts-style display-2">{siteTitle}</p>
      </div>
    </nav>
  </section>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
