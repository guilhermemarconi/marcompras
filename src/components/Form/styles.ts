import styled from 'styled-components';

import { pxToRem } from 'style/functions';
import { spaces, fonts, colors, transitions, zIndex } from 'style/variables';

export const Wrapper = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.minimum};
  width: 100vw;
  height: 100vh;
  background: ${colors.overlay};
  opacity: 0;
  transition: opacity ${transitions.easing} ${transitions.speed.fast};
  will-change: opacity;
  pointer-events: none;

  &.visible {
    opacity: 1;
  }
`;

export const MainForm = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.medium};
  width: 100vw;
  margin: 0;
  padding: ${spaces.lg} ${spaces.md} ${spaces.md};
  background: white;
  transition: transform ${transitions.easing} ${transitions.speed.fast};
  transform: translateY(100%);
  will-change: transform;

  &.visible {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: ${spaces.sm};
    left: 50%;
    width: ${pxToRem(40)};
    height: ${pxToRem(5)};
    border-radius: ${pxToRem(5)};
    background: ${colors.gray};
    transform: translateX(-50%);
  }
`;

export const Fieldset = styled.fieldset`
  position: relative;
  display: block;
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

export const Select = styled.select`
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

export const CloseButton = styled.button``;
