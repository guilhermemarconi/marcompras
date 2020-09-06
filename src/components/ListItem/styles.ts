import styled from 'styled-components';

import { spaces, fonts, colors, transitions } from 'style/variables';
import { pxToRem } from 'style/functions';

export const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.border};
  overflow: hidden;
`;

export const ActionButtonsWrapper = styled.div`
  display: flex;
  height: ${pxToRem(60)};
`;

export const ActionButtonsSpacer = styled.div`
  flex: 1;
`;

export const Item = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding-right: ${spaces.lg};
  padding-left: ${spaces.lg};
  text-align: left;
  border: 0;
  border-radius: 0;
  appearance: none;
  will-change: transform;
  transition: transform ease-out ${transitions.speed.fast};
  transform: translateX(0);

  &.swipe-left {
    transform: translateX(-${pxToRem(120)});
  }

  &.swipe-right {
    transform: translateX(${pxToRem(120)});
  }
`;

export const CheckBox = styled.span``;

export const ItemName = styled.span`
  font-size: ${fonts.size.md};
`;

export const ItemDate = styled.span``;
