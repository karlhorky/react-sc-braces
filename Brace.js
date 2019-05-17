import React from 'react';
import styled from 'styled-components';

const defaults = {
  braceColor: '#000',
};

const BraceTop = styled.label`
  width: ${props => props.width};
  color: ${props => props.textColor || props.color || defaults.braceColor};
  display: block;
  min-width: 35px;
  padding-bottom: 30px;
  position: relative;
  margin: 0 15px 15px;
  background-image: radial-gradient(
      circle at 0 0,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at 35px 0,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 35px 20px;
  background-position: center bottom;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 50%;
    height: 15px;
    border-top: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-left: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
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
    height: 15px;
    border-top: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-right: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
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
  color: ${props => props.textColor || props.color || defaults.braceColor};
  display: block;
  min-width: 35px;
  padding-top: 30px;
  position: relative;
  margin: 15px 15px 0 15px;
  background-image: radial-gradient(
      circle at 0 20px,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at 35px 20px,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 35px 20px;
  background-position: center top;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 50%;
    height: 15px;
    border-bottom: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-left: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-bottom-left-radius: 30px;
    position: absolute;
    top: 0;
    left: -15px;
    box-sizing: border-box;
    margin-top: -10px;
  }

  &:after {
    content: '';
    width: 50%;
    height: 15px;
    border-bottom: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-right: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-bottom-right-radius: 30px;
    position: absolute;
    top: 0;
    right: -15px;
    box-sizing: border-box;
    margin-top: -10px;
  }
`;

const BraceLeft = styled.label`
  height: ${props => props.height};
  line-height: ${props => props.height};
  vertical-align: middle;
  color: ${props => props.textColor || props.color || defaults.braceColor};
  display: block;
  min-height: 35px;
  padding-right: 30px;
  position: relative;
  margin: 15px 15px 15px 0;
  background-image: radial-gradient(
      circle at -0.2px 0,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at -0.2px 35px,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 20px 35px;
  background-position: right center;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 15px;
    height: 50%;
    border-left: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-top: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-top-left-radius: 30px;
    position: absolute;
    top: -15px;
    left: 100%;
    box-sizing: border-box;
    margin-left: -5px;
  }

  &:after {
    content: '';
    width: 15px;
    height: 50%;
    border-left: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-bottom: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
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
  line-height: ${props => props.height};
  vertical-align: middle;
  color: ${props => props.textColor || props.color || defaults.braceColor};
  display: block;
  min-height: 35px;
  padding-left: 30px;
  position: relative;
  margin: 15px 0 15px 15px;
  background-image: radial-gradient(
      circle at 20px 0,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    ),
    radial-gradient(
      circle at 20px 35px,
      rgba(255, 255, 255, 0) 15px,
      ${props => props.braceColor || props.color || defaults.braceColor} 15.5px,
      ${props => props.braceColor || props.color || defaults.braceColor} 19px,
      rgba(255, 255, 255, 0) 19.5px
    );
  background-size: 20px 35px;
  background-position: left center;
  background-repeat: no-repeat;

  &:before {
    content: '';
    width: 15px;
    height: 50%;
    border-right: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-top: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-top-right-radius: 30px;
    position: absolute;
    top: -15px;
    left: 0;
    box-sizing: border-box;
    margin-left: -10px;
  }

  &:after {
    content: '';
    width: 15px;
    height: 50%;
    border-right: 4px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-bottom: 1px solid
      ${props => props.braceColor || props.color || defaults.braceColor};
    border-bottom-right-radius: 30px;
    position: absolute;
    bottom: -15px;
    left: 0;
    box-sizing: border-box;
    margin-left: -10px;
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
