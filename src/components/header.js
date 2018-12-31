import '../theme-style.css'
import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <>
    <section className="header4 cid-rdrPUMJvk7 mbr-fullscreen" id="header4-1">
      <div className="container">
        <h1 className="mbr-fonts-style mbr-section-title align-left mbr-black mbr-bold display-1">
          CodeCoach
        </h1>
        <h2 className="mbr-fonts-style mbr-section-subtitle align-left mbr-black mbr-light display-2">
          Finding your coach
          <br />
          Solve your problems, together
          <br />
          <div className="mbr-section-btn align-left">
            <Link to="/home2/">
              <div
                className="btn btn-primary display-4"
                style={{ marginLeft: '0px', marginTop: '16px' }}
              >
                FIND YOUR COACH
              </div>
            </Link>
          </div>
        </h2>
      </div>
    </section>
  </>
)

export default Header
