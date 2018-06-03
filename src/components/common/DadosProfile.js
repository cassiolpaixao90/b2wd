import React, { PropTypes } from 'react';

const DadosProfile = ({ dados }) => {

  const styleBorder = {
    borderTop: '1px solid #fff'
  };

  const styleColor = {  color: '#fff' };

  return (
    <section >
      <div>
        <div className="diamond" style={{border: '3px double #fff'}}>
          <img src="https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png" alt="Avatar" />
        </div>

        <div className="profile">
          <h1 style={styleColor}>{dados.name.toUpperCase()}</h1>
          <p style={styleColor}>{dados.profession.toUpperCase()}</p>
          <hr style={styleBorder} />
        </div>
      </div>
    </section>
  );
};

DadosProfile.propTypes = {
  dados: PropTypes.object.isRequired
};

export default DadosProfile;
