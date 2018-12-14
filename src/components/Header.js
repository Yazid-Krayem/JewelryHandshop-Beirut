import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blogd';
import Footer from './Footer';
import firebase from 'firebase'




class Header extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="wrap_header">
    {/* Logo */}
    <Link to="/"><img className="logo" src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/icons%2Fnada-zeineh.svg?alt=media&token=2573572f-1019-48f4-8b18-5e883f22e441' alt="IMG-LOGO" /></Link>
    
    {/* Menu */}
    <div className="wrap_menu">
      <nav className="menu">
        <ul className="main_menu">
          <li>
          <Link to="/">Home</Link>
          </li> 
          <li>
          <Link to="/blog">Blog</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header-icons">
      <div className="header-wrapicon2">
        <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/icons%2Ficon-header-02.png?alt=media&token=771e78f8-373f-4e47-a4cb-44f5a5bd415f' className="header-icon1 js-show-header-dropdown" alt="ICON" />
        <span className="header-icons-noti">0</span>
        {/* Header cart noti */}
        <div className="header-cart header-dropdown">
          <ul className="header-cart-wrapitem">
            <li className="header-cart-item">
              <div className="header-cart-item-img">
                <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fitem-cart-01.jpg?alt=media&token=0833b773-873d-47ff-9d97-70dca843cf46' alt="IMG" />
              </div>
              <div className="header-cart-item-txt">
                <a href="#" className="header-cart-item-name">
                  White Shirt With Pleat Detail Back
                </a>
                <span className="header-cart-item-info">
                  1 x $19.00
                </span>
              </div>
            </li>
            
            <li className="header-cart-item">
              <div className="header-cart-item-img">
                <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fitem-cart-01.jpg?alt=media&token=0833b773-873d-47ff-9d97-70dca843cf46' alt="IMG" />
              </div>
              <div className="header-cart-item-txt">
                <a href="#" className="header-cart-item-name">
                  Converse All Star Hi Black Canvas
                </a>
                <span className="header-cart-item-info">
                  1 x $39.00
                </span>
              </div>
            </li>
            <li className="header-cart-item">
              <div className="header-cart-item-img">
                <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fitem-cart-01.jpg?alt=media&token=0833b773-873d-47ff-9d97-70dca843cf46' alt="IMG" />
              </div>
              <div className="header-cart-item-txt">
                <a href="#" className="header-cart-item-name">
                  Nixon Porter Leather Watch In Tan
                </a>
                <span className="header-cart-item-info">
                  1 x $17.00
                </span>
              </div>
            </li>
          </ul>
    </div>
    </div>
    </div>
    </div>
    <div className="wrap_header_mobile">
    {/* Logo moblie */}
    <a href="index.html" className="logo-mobile">
      <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/icons%2Fnada-zeineh.svg?alt=media&token=2573572f-1019-48f4-8b18-5e883f22e441' alt="IMG-LOGO" />
    </a>
    {/* Button show menu */}
    <div className="btn-show-menu">
      {/* Header Icon mobile */}
      <div className="header-icons-mobile">
        <a href="#" className="header-wrapicon1 dis-block">
        </a>
        <span className="linedivide2" />
        <div className="header-wrapicon2">
          <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/icons%2Ficon-header-02.png?alt=media&token=771e78f8-373f-4e47-a4cb-44f5a5bd415f' className="header-icon1 js-show-header-dropdown" alt="ICON" />
          <span className="header-icons-noti">0</span>
          {/* Header cart noti */}
          <div className="header-cart header-dropdown">
            <ul className="header-cart-wrapitem">
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fitem-cart-01.jpg?alt=media&token=0833b773-873d-47ff-9d97-70dca843cf46' alt="IMG" />
                </div>
                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    White Shirt With Pleat Detail Back
                  </a>
                  <span className="header-cart-item-info">
                    1 x $19.00
                  </span>
                </div>
              </li>
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fitem-cart-01.jpg?alt=media&token=0833b773-873d-47ff-9d97-70dca843cf46' alt="IMG" />
                </div>
                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    Converse All Star Hi Black Canvas
                  </a>
                  <span className="header-cart-item-info">
                    1 x $39.00
                  </span>
                </div>
              </li>
              <li className="header-cart-item">
                <div className="header-cart-item-img">
                  <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fitem-cart-01.jpg?alt=media&token=0833b773-873d-47ff-9d97-70dca843cf46' alt="IMG" />
                </div>
                <div className="header-cart-item-txt">
                  <a href="#" className="header-cart-item-name">
                    Nixon Porter Leather Watch In Tan
                  </a>
                  <span className="header-cart-item-info">
                    1 x $17.00
                  </span>
                </div>
              </li>
            </ul>
            <div className="header-cart-total">
              Total: $75.00
            </div>
            <div className="header-cart-buttons">
              <div className="header-cart-wrapbtn">
                {/* Button */}
                <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                  View Cart
                </a>
              </div>
              <div className="header-cart-wrapbtn">
                {/* Button */}
                <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </div>
    </div>
  </div>
  
    
            </React.Fragment>
         );
    }
}
 
export default Header;
