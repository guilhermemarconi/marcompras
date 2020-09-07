import styled from 'styled-components';

import { pxToRem, rgba } from 'style/functions';
import { spaces, colors, transitions, zIndex } from 'style/variables';

export const Button = styled.button`
  position: fixed;
  right: ${spaces.md};
  bottom: ${spaces.md};
  z-index: ${zIndex.medium};
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};
  border: 0;
  border-radius: 50%;
  background-color: ${colors.primary};
  box-shadow: 0 ${pxToRem(3)} ${pxToRem(10)} ${rgba('#000', 0.4)};
  appearance: none;
  transition: ${transitions.default};
  cursor: pointer;

  &:not(.visible) {
    opacity: 0;
    pointer-events: none;
  }

  &:active {
    outline: none;
    box-shadow: 0 ${pxToRem(1)} ${pxToRem(3)} ${rgba('#000', 0.4)};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }

  &::before {
    width: ${pxToRem(18)};
    height: ${pxToRem(2)};
  }

  &::after {
    width: ${pxToRem(2)};
    height: ${pxToRem(18)};
  }
`;
