import React from 'react';
import profilPicture from 'src/images/profilPicture.jpg';

const Profil = () => (
  <div className="profil">
    <img
      className="profil__image"
      src={profilPicture}
      alt="profil_picture"
    />
    <div className="profil__text">
      <h1>Erica Clapton</h1>
      <p>Pro account</p>
    </div>
  </div>
);

export default Profil;
