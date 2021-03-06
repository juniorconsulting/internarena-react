'use strict';

import * as actionCreators from '../../actions';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Button, Input} from 'react-bootstrap';

class Edit extends React.Component {

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

          <div className="jrc-toggle text-center">
            <Activity />
          </div>
        </form>
        <Button bsStyle="primary" bsSize="large" onClick={this.props.hideForm}>SAVE</Button>
      </div>
    );
  }
}

var Activity = React.createClass({
  getInitialState: function() {
    return {
      isChecked: true
    };
  },

  toggleChange: function() {
    this.setState({
      isChecked: !this.state.isChecked
    }, function() {
      console.log(this.state);
    });
  },

  render: function() {
    return (
      <div>
        <span>Aktiv </span>
        <input id="checkbox-active" name="active" className="cmn-toggle cmn-toggle-round"
               type="checkbox"
               checked={this.state.isChecked}
               onChange={this.toggleChange} />
        <label htmlFor="checkbox-active">s</label>
        <span> Alumni</span>
      </div>
    );
  }
});

const mapStateToProps = state => ({
  token: state.auth.token,
  authId: state.auth.userid,
  profile: state.profile
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
