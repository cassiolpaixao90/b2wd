import React, { PropTypes } from "react";
import DesafioContact from './DesafioContact';
const DesafioExperience = ({ title, typeKey, experiences }) => {

  let object = [];
  if( experiences.profile !== undefined){
    if( typeKey == "experience" ){
      object = experiences.profile.experience;
    }else if( typeKey == 'education'){
      object = experiences.profile.education;
    }
  }
  return (
    <div>
      <div className="main-area">
      <h1>{title}</h1>
        <hr className="divider" />
            <article className="post-content">
              {object.map(exp =>
                <div>
                    <h2>{exp.name}</h2>
                    <p>{exp.date}</p>
                    <p>{exp.description}</p>
                </div>
              )}
            </article>
      </div>
    </div>
    );
};

DesafioExperience.propTypes = {
  experiences: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  typeKey: PropTypes.string.isRequired
};

export default DesafioExperience;
