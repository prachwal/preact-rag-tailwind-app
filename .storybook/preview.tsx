import type { Preview } from '@storybook/preact-vite'

import '../src/index.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div id="app">
        {/* @ts-expect-error: Storybook Preact story returns Node, not ReactNode */}
        {Story()}
      </div>
    ),
  ],
};

export default preview;