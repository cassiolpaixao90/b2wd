import React, { PropTypes } from "react";
import { connect } from "react-redux";
import * as desafioActions from '../../actions/desafioActions';
import { bindActionCreators } from "redux";
import DesafioExperience from './DesafioExperience';
import DesafioContact from './DesafioContact';
import DesafioProfile from "./DesafioProfile";

class DesafioPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }


  // componentWillReceiveProps(nextProps) {
  //   this.setState({desagio: Object.assign({}, nextProps.desafio)});
  // }

   render() {
    const { desafio } = this.props;
    return (
      <div className="outer-wrap">
        <div className="content">
          <DesafioContact contact={desafio} />
          <DesafioProfile desafio={desafio} />
        </div>
      </div>
    );
  }

}

DesafioPage.propTypes = {
  desafio: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  // const contact = state.desafio.profiles.map(contacts => {
  //   return {
  //     contacts:contacts
  // }});
  // const experience
  // const skills
  // const eduction

  return {
    desafio: state.desafio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(desafioActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DesafioPage);

