import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';



class Blog extends Component {
  render() { 
    return ( 
<React.Fragment>
<Header />
   <div>
 {/* Header Mobile */}
  {/* Menu Mobile */}
  <div className="wrap-side-menu">
    <nav className="side-menu">
      <ul className="main-menu">
        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
          <span className="topbar-child1">
            Free shipping for standard order over $100
          </span>
        </li>
        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
          <div className="topbar-child2-mobile">
            <span className="topbar-email">
              fashe@example.com
            </span>
            <div className="topbar-language rs1-select2">
              <select className="selection-1" name="time">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </li>
        <li className="item-topbar-mobile p-l-10">
          <div className="topbar-social-mobile">
            <a href="#" className="topbar-social-item fa fa-facebook" />
            <a href="#" className="topbar-social-item fa fa-instagram" />
            <a href="#" className="topbar-social-item fa fa-pinterest-p" />
            <a href="#" className="topbar-social-item fa fa-snapchat-ghost" />
            <a href="#" className="topbar-social-item fa fa-youtube-play" />
          </div>
        </li>
        <li className="item-menu-mobile">
          <a href="index.html">Home</a>
          <ul className="sub-menu">
            <li><a href="index.html">Homepage V1</a></li>
            <li><a href="home-02.html">Homepage V2</a></li>
            <li><a href="home-03.html">Homepage V3</a></li>
          </ul>
          <i className="arrow-main-menu fa fa-angle-right" aria-hidden="true" />
        </li>
        <li className="item-menu-mobile">
          <a href="product.html">Shop</a>
        </li>
        <li className="item-menu-mobile">
          <a href="blog.html">Blog</a>
        </li>
       
      </ul>
    </nav>
  </div>
  {/* Slide1 */}
  
  <section className="bgwhite p-t-60">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-lg-9 p-b-75">
          <div className="p-r-50 p-r-0-lg">
            {/* item blog */}
            <div className="item-blog p-b-80">
              <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
              <Link to="/blog-details"><img src="https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fblog-02.jpg?alt=media&token=bcd97545-53e9-4f82-8f61-ee975094359e" alt="IMG-BLOG" /></Link>
                <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                  28 Dec, 2018
                </span>
              </a>
              <div className="item-blog-txt p-t-33">
                <h4 className="p-b-11">
                  <Link to="/blog-details">
                  <a className="m-text24">
                    Amethyst Apatite
                  </a>
                  </Link>
                </h4>
                <div className="s-text8 flex-w flex-m p-b-21">
                  <span>
                    By Earhtly Trinknets
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    Cooking, Food
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    8 Comments
                  </span>
                </div>
                <p className="p-b-12">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                </p>
                <Link to="/blog-details">
                <a href="blog-detail.html" className="s-text20">
                  Continue Reading
                  <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                </a>
                </Link>
              </div>
            </div>
            {/* item blog */}
            <div className="item-blog p-b-80">
              <a href="blog-detail.html" className="item-blog-img pos-relative dis-block hov-img-zoom">
              <Link to="/blog-details">
                <img src="https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fblog-02.jpg?alt=media&token=bcd97545-53e9-4f82-8f61-ee975094359e" alt="IMG-BLOG" />
              </Link>
                <span className="item-blog-date dis-block flex-c-m pos1 size17 bg4 s-text1">
                  26 Dec, 2018
                </span>
              </a>
              <div className="item-blog-txt p-t-33">
                <h4 className="p-b-11">
                <Link to="/blog-details">
                  <a href="blog-detail.html" className="m-text24">
                    The White Sneakers Nearly Every Fashion Girls Own
                  </a>
                </Link>
                </h4>
                <div className="s-text8 flex-w flex-m p-b-21">
                  <span>
                    By Admin
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    Fashion, Life style
                    <span className="m-l-3 m-r-6">|</span>
                  </span>
                  <span>
                    8 Comments
                  </span>
                </div>
                <p className="p-b-12">
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                </p>
                <Link to="/blog-details">
                <a href="blog-detail.html" className="s-text20">
                  Continue Reading
                  <i className="fa fa-long-arrow-right m-l-8" aria-hidden="true" />
                </a>
                </Link>
              </div>
            </div>
            {/* item blog */}
          </div>
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
</div>
</React.Fragment>
     );
  }
}
 
export default Blog;
