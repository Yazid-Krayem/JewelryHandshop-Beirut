import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blogd';
import Footer from './Footer';
import Header from './Header';


// CSS
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/animsition/css/animsition.min.css';
import '../vendor/select2/select2.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../fonts/themify/themify-icons.css';
import '../fonts/elegant-font/html-css/style.css';
import '../fonts/themify/themify-icons.css';
import '../css/util.css';
import '../css/main.css';
import '../vendor/lightbox2/css/lightbox.min.css';
import '../vendor/daterangepicker/daterangepicker.css';
import '../vendor/animate/animate.css';
import '../fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
/////
// slick slider 
import '../vendor/slick/slick.css';

// from moudles
import $ from "jquery";
//////////////////////




class Home extends Component {
  
  render(){
    
    return (
 
<div >
  <Header />
  {/* Slide1 */}
  
  {/* Banner */}
  <section className="banner bgwhite p-t-40 p-b-40">
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/necklace%2Fnecklace-10.jpg?alt=media&token=ba526250-427d-43ba-a645-8231687ac1bb' alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Dresses
              </a>
            </div>
          </div>
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/necklace%2Fnecklace-10.jpg?alt=media&token=ba526250-427d-43ba-a645-8231687ac1bb' alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Sunglasses
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/earring%2Fearring-3.jpg?alt=media&token=bc174cb1-cfa2-433d-a9ed-aa27c336b0e8' alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <Link to ="/earring"  className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Earrings
              </Link> 
              
            </div>
          </div>
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/necklace%2Fnecklace-9.jpg?alt=media&token=fbf0cf88-a4ab-4cb3-8812-f7caaef18e54' alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <Link to ="/necklace" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Necklace
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">
          {/* block1 */}
          <div className="block1 hov-img-zoom pos-relative m-b-30">
            <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/bracelet%2Fbracelet-6.jpg?alt=media&token=d4d6964b-8a08-4ad5-82f4-cd7d5ea10d6e' alt="IMG-BENNER" />
            <div className="block1-wrapbtn w-size2">
              {/* Button */}
              <Link to ="/bracelet" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                Bracelet
              </Link>
            </div>
          </div>
          {/* block2 */}
        </div>
      </div>
    </div>
  </section>
  {/* New Product */}
  
  {/* Blog */}
  <section className="blog bgwhite p-t-94 p-b-65">
    <div className="container">
      <div className="sec-title p-b-52">
        <h3 className="m-text5 t-center">
          Our Blog
        </h3>
      </div>
      <div className="row">
        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
          {/* Block3 */}
          <div className="block3">
            <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
              <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/earring%2Fearring-3.jpg?alt=media&token=bc174cb1-cfa2-433d-a9ed-aa27c336b0e8' alt="IMG-BWardLOG" />
            </a>
            <div className="block3-txt p-t-14">
              <h4 className="p-b-7">
                <a href="blog-detail.html" className="m-text11">
                Amethyst Apatite earrings
                </a>
              </h4>
              <span className="s-text6">By</span> <span className="s-text7">Nada Zeineh</span>
              <span className="s-text6">on</span> <span className="s-text7">July 22, 2017</span>
              <p className="s-text8 p-t-16">
                Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
          {/* Block3 */}
          <div className="block3">
            <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
              <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fblog-02.jpg?alt=media&token=bcd97545-53e9-4f82-8f61-ee975094359e' alt="IMG-BLOG" />
            </a>
            <div className="block3-txt p-t-14">
              <h4 className="p-b-7">
                <a href="blog-detail.html" className="m-text11">
                  The White Sneakers Nearly Every Fashion Girls Own
                </a>
              </h4>
              <span className="s-text6">By</span> <span className="s-text7">Nada Zeineh</span>
              <span className="s-text6">on</span> <span className="s-text7">July 18, 2017</span>
              <p className="s-text8 p-t-16">
                Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
          {/* Block3 */}
          <div className="block3">
            <a href="blog-detail.html" className="block3-img dis-block hov-img-zoom">
              <img src='https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/blank-images%2Fblog-02.jpg?alt=media&token=bcd97545-53e9-4f82-8f61-ee975094359e' alt="IMG-BLOG" />
            </a>
            <div className="block3-txt p-t-14">
              <h4 className="p-b-7">
                <a href="blog-detail.html" className="m-text11">
                  New York SS 2018 Street Style: Annina Mislin
                </a>
              </h4>
              <span className="s-text6">By</span> <span className="s-text7">Nada Zeineh</span>
              <span className="s-text6">on</span> <span className="s-text7">July 2, 2017</span>
              <p className="s-text8 p-t-16">
                Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Instagram */}

  {/* Shipping */}
  
  {/* Footer */}
  <Footer />
  {/* Back to top */}
  <div className="btn-back-to-top bg0-hov" id="myBtn">
    <span className="symbol-btn-back-to-top">
      <i className="fa fa-angle-double-up" aria-hidden="true" />
    </span>
  </div>
  {/* Container Selection1 */}
  <div id="dropDownSelect1" />

  {/* javascript */}

	<script  src="../vendor/jquery/jquery-3.2.1.min.js"></script>
	<script  src="../vendor/animsition/js/animsition.min.js"></script>
	<script  src="../vendor/bootstrap/js/popper.js"></script>
	<script  src="../vendor/bootstrap/js/bootstrap.min.js"></script>
	<script  src="../vendor/select2/select2.min.js"></script>
	{/* <script type="text/javascript">
		$(".selection-1").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script> */}

	<script  src="../vendor/slick/slick.min.js"></script>
	<script  src="../js/slick-custom.js"></script>

	<script  src="../vendor/countdowntime/countdowntime.js"></script>
	<script  src="../vendor/lightbox2/js/lightbox.min.js"></script>
	<script  src="../vendor/sweetalert/sweetalert.min.js"></script>
	{/* <script >
		$('.block2-btn-addcart').each(function(){
			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
			$(this).on('click', function(){
				swal(nameProduct, "is added to cart !", "success");
			});
		});

		$('.block2-btn-addwishlist').each(function(){
			var nameProduct = $(this).parent().parent().parent().find('.block2-name').html();
			$(this).on('click', function(){
				swal(nameProduct, "is added to wishlist !", "success");
			});
		});
	</script> */}
<script  src="../js/main.js"></script>

</div>


    );
  }
}

export default Home;
