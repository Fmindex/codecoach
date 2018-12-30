import '../theme-style.css'
import React from 'react'
import { Link } from 'gatsby'
import { coaches } from './coach-data.json'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Home = () => (
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
    <section className="features2 mbr-section cid-rdrPXXtihu" id="features2-2">
      <div className="container">
        <h2 className="mbr-section-title mbr-fonts-style mbr-light display-2  align-center ">
          OUR COACH
        </h2>
        <div className="mbr-row mbr-justify-content-center">
          {coaches.map(({ name, description, avatar }) => (
            <div className="card mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-3">
              <div className="card-wrapper">
                <div className="card-img">
                  <img
                    src={avatar}
                    style={{ objectFit: 'cover' }}
                    width="255.49132947976878"
                    height="170"
                    alt="Mobirise"
                    className="mobirise-loader"
                  />
                </div>
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style align-left mbr-light display-2">
                    {name}
                  </h4>
                  <br />
                  <p className="mbr-text mbr-fonts-style align-left display-4">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="mbr-section-btn align-left">
            <a
              className="btn btn-sm btn-secondary display-4"
              href="https://mobirise.co"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="features10 cid-rdrSt1xk39" id="features10-4">
      <div className="container">
        <div className="mbr-row mbr-justify-content-center">
          <div className="image-block mbr-col-sm-12 mbr-col-md-6">
            <img
              src={require('../images/02.jpg')}
              width="540"
              height="360"
              alt="Mobirise"
              className="mobirise-loader"
            />
          </div>
          <div className="text-block mbr-col-sm-12 mbr-col-md-6">
            <h3 className="mbr-section-title mbr-fonts-style align-left display-5">
              BECOME OUR COACH
            </h3>
            <p className="mbr-fonts-style mbr-text align-left display-7">
              Complete the form and we will contact you to make a process
            </p>
            <div className="mbr-section-btn align-left">
              <a
                className="btn btn-sm btn-primary display-4"
                href="https://mobirise.co"
              >
                SEND CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Home
