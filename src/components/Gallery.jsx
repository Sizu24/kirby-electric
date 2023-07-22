import React from "react";

function Gallery () {

  return (
    <div className="gallery">
      <h2 className="section__title">Enhancing Homes and Businesses</h2>
      <p className="section__subhead">Showcasing Our Exceptional Electrical Solutions</p>

      <div className="gallery-container">
        <div className="gallery__image-container gallery__image-container--one">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_158770492_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">Custom Living Room</h3>
        </div>
        <div className="gallery__image-container gallery__image-container--two">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_94044387_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">Cable Management</h3>
        </div>
        <div className="gallery__image-container gallery__image-container--three">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_588242024_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">EV Solutions</h3>
        </div>
        <div className="gallery__image-container gallery__image-container--four">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_246083887_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">Clean Energy</h3>
        </div>
        <div className="gallery__image-container gallery__image-container--five">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_567795780_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">Hotel Lighting</h3>
        </div>
        <div className="gallery__image-container gallery__image-container--six">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_570062540_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">Modern Living</h3>
        </div>
        <div className="gallery__image-container gallery__image-container--seven">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_601350213_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">Industrial Power</h3>
        </div>
        <div className="gallery__image-container gallery__image-container--eight">
          <img className="gallery__image" src="../src/assets/images/gallery/AdobeStock_63558488_Preview.jpeg" alt="" />
          <h3 className="gallery__image-title">Deck & Patio</h3>
        </div>
      </div>
      <a className="gallery__link button" href="">See All of Our Work</a>
    </div>
  );
}

export default Gallery;