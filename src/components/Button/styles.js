import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

const SIZES = {
  small: '1rem',
  medium: '2rem',
  large: '3rem'
}

const getFontSize = props => {
  const size = SIZES[props.size];

  if (!size) {
    console.warn(`[Button Stuled Component] The size ${props.size} is not valid. 
    Use ${Object.keys(SIZES).join(', ')}`);
    return SIZES.small;
  }

  return size;
};

export const Link = styled(LinkWouter)`
  width: 100%;
  display: block;
  font-size: ${getFontSize};
  line-height: 2;
  color: #fff;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  opacity: 0.9;
  border-radius: 4px;

  :hover {
    cursor: pointer;
    opacity: 1;
  }

  [disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Button = Link.withComponent('button');