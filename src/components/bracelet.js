import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Footer from './Footer';
import Header from './Header';

export default class Earring extends React.Component {
    render() {
    return (
    <div>
            <Header />
            <br />
            <br />
        <Gallery photos={PHOTO_SET} />
        <Footer />
    </div>

    );
    }
}

const PHOTO_SET = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/bracelet%2Fbracelet-1.jpg?alt=media&token=8e8b2df9-a713-4296-b2c9-3d5b7d491ba4',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/bracelet%2Fbracelet-4.jpg?alt=media&token=40c50319-f95f-4e87-9949-7ef8070e5c6d',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/bracelet%2Fbracelet-5.jpg?alt=media&token=4464e2a6-c5cf-4805-94f3-992e53b3a717',
    width: 1,
    height: 1
  },


];