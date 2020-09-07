import styled from 'styled-components';

import { pxToRem } from 'style/functions';
import { spaces, colors, fonts, transitions } from 'style/variables';

export const Form = styled.form`
  display: flex;
  height: 100vh;
  padding: ${spaces.xl} ${spaces.lg};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FieldSet = styled.fieldset`
  position: relative;
  display: block;
  width: 100%;
  margin: ${spaces.lg} 0;
  padding: 0;
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: ${fonts.size.md};
  transform: translateY(-50%);
  transition: ${transitions.default};
  pointer-events: none;

  &.alt {
    top: 0;
    font-size: ${fonts.size.xs};
    transform: translateY(-100%);
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: ${pxToRem(40)};
  margin: 0;
  padding: 0;
  font-family: ${fonts.family};
  font-size: ${fonts.size.md};
  border: 0;
  border-radius: 0;
  background: none;
  appearance: none;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  height: ${pxToRem(50)};
  margin: 0;
  padding: 0;
  color: white;
  font-family: ${fonts.family};
  font-size: ${fonts.size.xs};
  font-weight: ${fonts.weight.bold};
  letter-spacing: 0.075em;
  text-transform: uppercase;
  border: 0;
  border-radius: ${pxToRem(4)};
  background: ${colors.success};
  appearance: none;
`;
