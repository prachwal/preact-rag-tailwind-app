import type { Meta, StoryObj } from '@storybook/preact-vite';
import { App } from './app';
import { SignalsProvider } from './contexts/SignalsContext';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  decorators: [
    (Story) => (
      <SignalsProvider>
        <Story />
      </SignalsProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkMode: Story = {
  decorators: [
    (Story) => (
      <SignalsProvider>
        <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', minHeight: '100vh' }}>
          <Story />
        </div>
      </SignalsProvider>
    ),
  ],
};