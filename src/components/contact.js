import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Home from './Home';
import Blog from './Blogd';
import Footer from './Footer';
import Header from './Header';




class Contact extends Component {
    render() {
      return (
        <React.Fragment>
<div>
        <Header />
          {/* content page */}
  <section className="bgwhite p-t-66 p-b-60">
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-b-30">
          <div className="p-r-20 p-r-0-lg">
            <div className="contact-map size21" data-map-x="40.614439" data-map-y="-73.926781" data-pin="images/icons/icon-position-map.png" data-scrollwhell={0} data-draggable={1} />
          </div>
        </div>
        {/* MAP */}
        <div>
            <iframe id="Gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52992.22939329002!2d35.4692625804071!3d33.88928459744147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1543486313131"></iframe>
        </div>
        {/* MAP */}
        <div className="col-md-6 p-b-30">
          <form className="leave-comment">
            <h4 className="m-text26 p-b-36 p-t-15">
              Send us your message
            </h4>
            <div className="bo4 of-hidden size15 m-b-20">
              <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="name" placeholder="Full Name" />
            </div>
            <div className="bo4 of-hidden size15 m-b-20">
              <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="phone-number" placeholder="Phone Number" />
            </div>
            <div className="bo4 of-hidden size15 m-b-20">
              <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="email" placeholder="Email Address" />
            </div>
            <textarea className="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20" name="message" placeholder="Message" defaultValue={""} />
            <div className="w-size25">
              {/* Button */}
              <button className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <Footer />
  {/* Back to top */}
  <div className="btn-back-to-top bg0-hov" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="fa fa-angle-double-up" aria-hidden="true" />
    </span>
  </div>
  {/* Container Selection */}
  <div id="dropDownSelect1" />
  <div id="dropDownSelect2" />
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
  {/*===============================================================================================*/}
</div>
</React.Fragment>

);
}
}

export default Contact;