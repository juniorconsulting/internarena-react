'use strict';

import * as actionCreators from '../../actions';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, Input} from 'react-bootstrap';

class Edit extends React.Component {

  logout() {
    this.props.actions.logoutUser(this.props.token);
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    //    var titleComponent =
    //          (
    //            <FormGroup controlId="formControlSelect">
    //              <ControlLabel>Title</ControlLabel>
    //              <FormControl componentClass="select">
    //                <option value="consultant">Consultant</option>
    //                <option value="partner">Partner</option>
    //              </FormControl>
    //            </FormGroup>
    //          );
    return (
      <div className="profile-container" id="edit-profile-form">
        <h2 className="heading">INFO</h2>
        <form>
          <Input
             type="text"
             onChange={this.handleChange}
             value={this.props.profile.firstName} />
          <Input
             type="text"
             onChange={this.handleChange}
             value={this.props.profile.lastName} />
          <select value={this.props.profile.title} onChange={this.handleChange}>
            <option value="CONSULTANT">Consultant</option>
            <option value="PARTNER">Partner</option>
          </select>
          <div className="toggle-container">
            <p>Active</p>
            <div className="switch">
              <input id="active-toggle" className="toggle" type="checkbox" />
              <label htmlFor="active-toggle"></label>
            </div>
            <p>Alumni</p>
          </div>
        </form>
        <Button bsStyle="primary" bsSize="large" onClick={this.props.hideForm}>SAVE</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  authId: state.auth.userid,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
