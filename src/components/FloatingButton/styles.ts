import styled from 'styled-components';

import { pxToRem, rgba } from 'style/functions';
import { spaces, colors } from 'style/variables';

export const Button = styled.button`
  position: fixed;
  right: ${spaces.md};
  bottom: ${spaces.md};
  width: ${pxToRem(60)};
  height: ${pxToRem(60)};
  border: 0;
  border-radius: 50%;
  background-color: ${colors.secondary};
  box-shadow: 0 ${pxToRem(3)} ${pxToRem(5)} ${rgba('#000', 0.4)};
  appearance: none;
  cursor: pointer;

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
    width: ${pxToRem(22)};
    height: ${pxToRem(2)};
  }

  &::after {
    width: ${pxToRem(2)};
    height: ${pxToRem(22)};
  }
`;
