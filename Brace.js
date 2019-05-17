import React from 'react';
import styled from 'styled-components';

const BraceTop = styled.label`
  width: ${props => props.width};
  display: block;
  min-width: 35px;
  padding-bottom: 20px;
  position: relative;
  margin: 0 15px 15px;
  background-image: radial-gradient(
      circle at 0 0,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at 35px 0,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 35px 20px;
  background-position: center top;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 50%;
    height: 70%;
    border-top: 4px solid #fff;
    border-left: 1px solid #fff;
    border-top-left-radius: 30px;
    position: absolute;
    top: 100%;
    left: -15px;
    box-sizing: border-box;
    margin-top: -5px;
  }

  &:after {
    content: '';
    width: 50%;
    height: 70%;
    border-top: 4px solid #fff;
    border-right: 1px solid #fff;
    border-top-right-radius: 30px;
    position: absolute;
    top: 100%;
    right: -15px;
    box-sizing: border-box;
    margin-top: -5px;
  }
`;

const BraceBottom = styled.label`
  width: ${props => props.width};
  display: block;
  min-width: 35px;
  padding-top: 20px;
  position: relative;
  margin: 15px 15px 0 15px;
  background-image: radial-gradient(
      circle at 0 20px,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at 35px 20px,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 35px 20px;
  background-position: center bottom;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 50%;
    height: 70%;
    border-bottom: 4px solid #fff;
    border-left: 1px solid #fff;
    border-bottom-left-radius: 30px;
    position: absolute;
    top: 0;
    left: -15px;
    box-sizing: border-box;
    margin-top: -9px;
  }

  &:after {
    content: '';
    width: 50%;
    height: 70%;
    border-bottom: 4px solid #fff;
    border-right: 1px solid #fff;
    border-bottom-right-radius: 30px;
    position: absolute;
    top: 0;
    right: -15px;
    box-sizing: border-box;
    margin-top: -9px;
  }
`;

const BraceLeft = styled.label`
  height: ${props => props.height};
  display: block;
  min-height: 35px;
  width: 0;
  padding-right: 20px;
  position: relative;
  margin: 15px 15px 15px 0;
  background-image: radial-gradient(
      circle at -0.2px 0,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at -0.2px 35px,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 20px 35px;
  background-position: right center;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 70%;
    height: 50%;
    border-left: 4px solid #fff;
    border-top: 1px solid #fff;
    border-top-left-radius: 30px;
    position: absolute;
    top: -15px;
    left: 100%;
    box-sizing: border-box;
    margin-left: -5px;
  }

  &:after {
    content: '';
    width: 70%;
    height: 50%;
    border-left: 4px solid #fff;
    border-bottom: 1px solid #fff;
    border-bottom-left-radius: 30px;
    position: absolute;
    bottom: -15px;
    left: 100%;
    box-sizing: border-box;
    margin-left: -5px;
  }
`;

const BraceRight = styled.label`
  height: ${props => props.height};
  display: block;
  min-height: 35px;
  width: 0;
  padding-left: 20px;
  position: relative;
  margin: 15px 0 15px 15px;
  background-image: radial-gradient(
      circle at 20px 0,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at 20px 35px,
      rgba(255, 255, 255, 0) 15px,
      #fff 15.5px,
      #fff 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 20px 35px;
  background-position: right center;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 70%;
    height: 50%;
    border-right: 4px solid #fff;
    border-top: 1px solid #fff;
    border-top-right-radius: 30px;
    position: absolute;
    top: -15px;
    left: 0;
    box-sizing: border-box;
    margin-left: -9px;
  }

  &:after {
    content: '';
    width: 70%;
    height: 50%;
    border-right: 4px solid #fff;
    border-bottom: 1px solid #fff;
    border-bottom-right-radius: 30px;
    position: absolute;
    bottom: -15px;
    left: 0;
    box-sizing: border-box;
    margin-left: -9px;
  }
`;

function Brace({ side, ...rest }) {
  switch (side) {
    case 'top':
      return <BraceTop {...rest} />;
    case 'right':
      return <BraceRight {...rest} />;
    case 'bottom':
      return <BraceBottom {...rest} />;
    case 'left':
      return <BraceLeft {...rest} />;
    default:
      return <BraceTop {...rest} />;
  }
}

export default Brace;
