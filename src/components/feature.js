import '../theme-style.css'
import React from 'react'

const Feature = () => (
  <>
    <section className="features1 mbr-section cid-rdNIAcqyzH" id="features1-b">
      <div className="container">
        <h2 className="mbr-section-title mbr-fonts-style mbr-light display-2  align-center ">
          Feature
        </h2>
        <div className="mbr-row mbr-justify-content-center">
          <div className="card mbr-col-sm-12 mbr-col-md-6">
            <div className="card-wrapper">
              <div className="card-img">
                <img
                  src={require('../images/05.jpg')}
                  width="540"
                  height="360"
                  alt="Mobirise"
                  className="mobirise-loader"
                />
              </div>
              <div className="card-box">
                <h4 className="card-title mbr-fonts-style align-left mbr-light display-2">
                  Higher Perfomance
                </h4>
                <p className="mbr-text mbr-fonts-style align-left display-7">
                  We are FM ekkalak le elasonrhcai
                </p>
              </div>
            </div>
          </div>

          <div className="card mbr-col-sm-12 mbr-col-md-6">
            <div className="card-wrapper">
              <div className="card-img">
                <img
                  src={require('../images/02.jpg')}
                  height="360"
                  width="540"
                  alt="Mobirise"
                  className="mobirise-loader"
                />
              </div>
              <div className="card-box">
                <h4 className="card-title mbr-fonts-style align-left mbr-light display-2">
                  Flexibility and Results
                </h4>
                <p className="mbr-text mbr-fonts-style align-left display-7">
                  We are FM ekkalak le elasonrhcai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Feature
