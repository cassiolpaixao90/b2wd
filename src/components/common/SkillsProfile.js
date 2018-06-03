import React, { PropTypes } from 'react';

const SillsProfile = ({ skills }) => {


  const progressBar = (skill) =>{
    return {
      height:'24px',
      width: `${skill.value}`,
      backgroundColor:'#fff'
    };
  };

  const styleBorder =() => {
    return {
      backgroundColor: '#000',
      border: '1px solid #fff'
    }
  };


  return (
    <div>
    {skills.map(skill =>
       <div style={{color: '#fff'}}>
       <p >{skill.name.toUpperCase()}</p>
        <div style={styleBorder()}>
          <div style={progressBar(skill)}></div>
          </div>
        </div>
      )}
    </div>
  );
};

SillsProfile.propTypes = {
  skills: PropTypes.array.isRequired
};

export default SillsProfile;

    //  {skills.map(exp =>
    //   <span></span>
    //   <div style={{backgroundColor: '#000', border: '1px solid #fff'}}>
    //     <div style={{height:'24px',width:, backgroundColor:'#fff'}}></div>
    //   </div>
    //   )}
