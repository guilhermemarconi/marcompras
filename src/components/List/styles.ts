import styled from 'styled-components';

import { rgba } from 'style/functions';
import { spaces, colors, fonts } from 'style/variables';

export const EmptyList = styled.h2`
  margin-top: ${spaces.xl};
  color: ${rgba(colors.primary, 0.3)};
  font-size: ${fonts.size.xl};
  font-weight: ${fonts.weight.semiBold};
  text-align: center;
`;
