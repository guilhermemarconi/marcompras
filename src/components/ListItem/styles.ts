import styled from 'styled-components';

import { spaces, fonts, colors, transitions } from 'style/variables';
import { pxToRem, rgba } from 'style/functions';

export const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid ${colors.border};
  overflow: hidden;
`;

export const ActionButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const ActionButtonsSpacer = styled.div`
  flex: 1;
`;

export const Item = styled.button`
  display: flex;
  width: 100%;
  min-height: ${pxToRem(60)};
  padding-right: ${spaces.lg};
  padding-left: ${spaces.lg};
  color: ${colors.primary};
  font-family: ${fonts.family};
  text-align: left;
  border: 0;
  border-radius: 0;
  background: white;
  appearance: none;
  will-change: transform;
  transition: transform ease-out ${transitions.speed.fast};
  transform: translateX(0);
  align-items: center;
  cursor: pointer;

  &.urgent {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: ${pxToRem(5)};
      height: 100%;
      background: ${colors.error};
    }
  }

  &.checked {
    background: ${colors.gray};
  }

  &.swipe-left {
    transform: translateX(-${pxToRem(120)});
  }

  &.swipe-right {
    transform: translateX(${pxToRem(120)});
  }
`;

export const CheckBox = styled.span`
  display: inline-flex;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  margin-right: ${spaces.sm};
  border: ${pxToRem(2)} solid ${rgba(colors.primary, 0.3)};
  border-radius: ${pxToRem(4)};
  background: transparent;
  align-items: center;
  justify-content: center;

  svg {
    width: ${pxToRem(10)};
    fill: white;
  }
`;

export const ItemName = styled.span`
  font-size: ${fonts.size.lg};
  flex: 1;
`;

export const ItemDate = styled.span``;

export const CheckBoxInput = styled.input`
  display: none;

  &:checked {
    ~ ${CheckBox} {
      border: 0;
      background: ${rgba(colors.primary, 0.5)};
    }

    ~ ${ItemName} {
      text-decoration: line-through;
    }
  }
`;
