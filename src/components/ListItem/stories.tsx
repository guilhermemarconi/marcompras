import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ListItem from '.';
import { generateUniqueId } from 'services/utils';

export default {
  title: 'ListItem',
  component: ListItem,
} as Meta;

export const Default: Story = () => (
  <ListItem id={generateUniqueId()} name="List item" />
);
