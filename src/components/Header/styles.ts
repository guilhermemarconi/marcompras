import styled from 'styled-components';

import { colors, spaces, fonts } from 'style/variables';

export const Wrapper = styled.header`
  display: flex;
  padding: ${spaces.sm} ${spaces.md};
  color: white;
  font-size: ${fonts.size.xl};
  background: ${colors.primary};
  align-items: center;
  justify-content: space-between;
`;

export const LogoutButton = styled.button`
  padding: ${spaces.sm} 0;
  color: inherit;
  font-size: ${fonts.size.xs};
  border: none;
  background: none;
  appearance: none;
`;
