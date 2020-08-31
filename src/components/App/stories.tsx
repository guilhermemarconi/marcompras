import { Story, Meta } from '@storybook/react/types-6-0';
import App from '.';

export default {
  title: 'App',
  component: App
} as Meta;

export const Default: Story = () => <App />;
