import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Footer from './Footer';
import Header from './Header';

export default class Necklace extends React.Component {
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
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/necklace%2Fnecklace-1.jpg?alt=media&token=f4c2f179-aa2a-4afa-b6d2-c26b21ab99dd',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/necklace%2Fnecklace-4.jpg?alt=media&token=da98e970-46a8-49c5-8165-159dce552a56',
    width: 1,
    height: 1
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/jewelryhandshop-beirut.appspot.com/o/necklace%2Fnecklace-8.jpg?alt=media&token=c7944b24-daa2-49aa-b900-6fadb60b02ba',
    width: 1,
    height: 1
} 
];