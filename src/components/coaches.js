import '../theme-style.css'
import React from 'react'
import { coaches } from '../coach-data.json'

const Coaches = () => (
  <>
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
  </>
)

export default Coaches
