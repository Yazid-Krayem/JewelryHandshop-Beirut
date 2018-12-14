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
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/earring%2Fearring-1.jpg?alt=media&token=714c7bb5-1bbe-4cc8-8cdc-326fe3b34989',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/earring%2Fearring-4.jpg?alt=media&token=5d04c84b-a3ec-4d95-84f2-b7d9552a942e',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/earring%2Fearring-8.jpg?alt=media&token=0e597cc4-1510-4a24-a9c9-228235b99aad',
    width: 1,
    height: 1
  },


];