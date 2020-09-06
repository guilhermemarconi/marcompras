import styled from 'styled-components';

import { colors } from 'style/variables';
import { pxToRem } from 'style/functions';

export const Wrapper = styled.button`
  display: block;
  width: ${pxToRem(60)};
  margin: 0;
  padding: 0;
  color: #ffffff;
  text-align: center;
  border: 0;
  border-radius: 0;
  appearance: none;

  &.edit {
    background-color: ${colors.secondary};
  }

  &.delete {
    background-color: ${colors.error};
  }
`;

export const IconWrapper = styled.span`
  display: block;
  margin-right: auto;
  margin-left: auto;

  svg {
    width: auto;
    height: ${pxToRem(22)};
    fill: currentColor;
  }
`;
