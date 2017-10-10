import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';
import { v4 } from 'uuid';

class Login extends React.Component {

  constructor (props) {
    super(props);
  }

  handleLogIn () {
    const { _username, _password } = this.refs;
    const { dispatch } = this.props;
    const action = {
      type: c.ADD_USER,
      username: _username.value,
      password: _password.value,
      id: v4()
    }
    dispatch(action);
    
  }
  render () {
    return (
      <div>

      </div>
    )
  }
}
