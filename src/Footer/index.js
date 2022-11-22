import React from 'react'
import { ArrowRightCircleFill } from 'react-bootstrap-icons';
import { FaFacebookSquare, FaTwitterSquare,FaInstagram } from 'react-icons/fa';




function Footer() {
  return (
    <div>
      <div className='my-5'>
        <div style={{ backgroundColor: "rgba(66,65,65,1.00)" }}>
          <div class="container">
            <div  >
              <div >


                <div style={{ textAlign: "center", fontSize: "25px" }} >
                  <p class="bottom-logo-title" style={{ color: "white" }}>About Us</p>
                </div>


                <div class="bottom-logo-caption" style={{ color: "white" }}>
                  <p> eTour is a tourism management  Lorem ipsum doler sit amet</p>
                  <p>EMAIL : www.etour.com <br />Phone : 111-222-33</p>

                </div>

              </div>

              <div >
                <article class="entry-item">
                  <div class="entry-content">
                    <h4 class="entry-title style-03 newsletter-title" style={{ color: "#849b0d" }}>
                      Sign Up
                    </h4>
                    <p style={{ color: "white" }}>
                      Sign up to get the latest news, announcements, special offers and event information
                    </p>
                    
                    <div class="enter-mail">
                      <form method="post" action="#">
                        <input class="mail-input" placeholder="Your email address" type="text" value="" name="mail" id="mail" />
                        <button type="submit" class="mail-submit" style={{ color: "white", fontSize: "20px" }}><ArrowRightCircleFill />
                        </button>
                      </form>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
              <div><a href="#" className='ms-4 text-white'><FaFacebookSquare size={25}/></a></div>
              <div><a href="#" className='ms-4 text-white'><FaTwitterSquare size={25}/></a></div>
              <div><a href="#" className='ms-4 text-white'><FaInstagram size={25}/></a></div>
            </div>
                  </div>
                </article>
              </div>

            </div>




            
          </div>
        </div>
        <div  style={{ backgroundColor: "rgba(232,214,196,1.00)" }}>
        <div class="container mt-4" style={{ marginBottom: "-2%" }}>

          <p class="text-center" style={{ marginTop: "-2%" }}>
            Copyright © 2021 <a href="https://eTour.com"> www.etour.com </a> All Rights Reserved.
          </p>
        </div>

      </div>
        

      </div>
     



    
    </div>
  );
}

export default Footer