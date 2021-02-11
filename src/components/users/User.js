import React from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Usertr=styled.tr`
    animation: fadeIn;
    animation-duration: 1s;
`

const User = ({ user}) => {
  const { id, name, email } = user;


  return (
    <Usertr>
      <td>{id}. </td>
      <td>{name}</td>
      <td>{email}</td>
    </Usertr>
  );
};

User.propTypes = {
  user:PropTypes.object.isRequired
}

export default User




