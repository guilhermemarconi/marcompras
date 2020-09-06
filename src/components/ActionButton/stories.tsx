import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ActionButton from '.';

export default {
  title: 'ActionButton',
  component: ActionButton,
} as Meta;

export const Edit: Story = () => <ActionButton action="edit" />;

export const Delete: Story = () => <ActionButton action="delete" />;
