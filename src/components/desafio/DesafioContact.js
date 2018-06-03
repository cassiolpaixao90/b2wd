import React, { PropTypes } from "react";
import { Link } from "react-router";
import DadosProfile from "../common/DadosProfile";
import SkilsProfile from '../common/SkillsProfile';

const DesafioContact = ({ contact }) => {

  let cont = { tel: '', cel: '', address: '', website: '', mail: '' };
  let dados = { name: '', image: '', profession: '', description: '' };
  let skills = [];
  const styleBorder = { borderTop: '1px solid #fff' };
  const styleColor = { color: '#fff' };

  const titleProfile = "Profile";
  const titleContact = "Contact";
  const titleSkills = "Skils";

  if (contact.profile !== undefined) {
    skills = contact.profile.skills;
    cont = contact.profile.contact;
    dados = { name: contact.profile.name, image: contact.profile.image, profession: contact.profile.profession, description: contact.profile.description };
  }

  return (
    <div className="sidebar sidebar-left">

      <DadosProfile dados={dados} />

      <section>
        <div className="profile post-content">
          <h3 style={styleColor}>{titleProfile.toUpperCase()}</h3>
          <hr style={styleBorder} />
          <p style={styleColor}>{dados.description}</p>
        </div>
      </section>

      <section>
        <div className="profile post-content">
          <h3 style={styleColor}>{titleContact.toUpperCase()}</h3>
          <hr style={styleBorder} />
          <span style={{ display: 'block', color: '#fff' }}>{cont.tel}</span>
          <span style={styleColor} >{cont.cel}</span>
          <p style={styleColor}>{cont.address}</p>
          <p style={styleColor}>{cont.website}</p>
          <p style={styleColor}>{cont.mail}</p>
        </div>
      </section>

       <section>
        <div className="profile post-content">
          <h3 style={styleColor}>{titleSkills.toUpperCase()}</h3>
          <hr style={styleBorder} />
          <SkilsProfile skills={skills} />
        </div>
      </section>
    </div>
  );
};

DesafioContact.protoTypes = {
  contact: PropTypes.array.isRequired
};

export default DesafioContact;
