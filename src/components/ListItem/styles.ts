import styled from 'styled-components';

import { spaces, fonts, colors } from 'style/variables';

export const Wrapper = styled.div`
  border-bottom: 1px solid ${colors.border};
`;

export const ActionButtonsWrapper = styled.div``;

export const Item = styled.button`
  display: block;
  width: 100%;
  height: 60px;
  padding-right: ${spaces.lg};
  padding-left: ${spaces.lg};
  text-align: left;
  border: 0;
  border-radius: 0;
  appearance: none;
`;

export const CheckBox = styled.span``;

export const ItemName = styled.span`
  font-size: ${fonts.size.md};
`;

export const ItemDate = styled.span``;
