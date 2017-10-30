import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  `


class Navbar extends Component{
  render(){
    return (
      <div className="body">
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch/><input type="text"/>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </div>
    );
  }
}

export default Navbar