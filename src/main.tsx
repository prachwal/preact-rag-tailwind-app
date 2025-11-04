import { render } from 'preact';
import '@/index.css';
import { App } from '.';
import { SignalsProvider } from '@/contexts/SignalsContext';

render(
  <SignalsProvider>
    <App />
  </SignalsProvider>,
  document.getElementById('app')!
);
