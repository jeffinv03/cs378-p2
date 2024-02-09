import React from 'react';

const Header = () => {
  return (
    <div className="header-container text-center">
      <img src={`${process.env.PUBLIC_URL}/images/japaneselogo2.png`} className="img-fluid logo" alt="logo" />
      <div className="text-container">
        <div className="subheading">Fresh, Japanese hand crafted recipes</div>
      </div>
      <div className="text-container">
        <div className="titleSub">The Asian Choice of Austin!</div>
      </div>
    </div>
  );
};

export default Header;
