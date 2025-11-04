import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';
import { useSignals } from '@/contexts/SignalsContext';

/**
 * Main application component that displays a counter with Vite and Preact logos.
 *
 * Features:
 * - Interactive counter button that increments on click using Preact signals
 * - Persistent dark mode toggle using localStorage
 * - Links to Vite and Preact documentation
 * - Responsive design with logos and styling
 *
 * @returns The main application JSX element
 */
export function App() {
  const { appVersion, counter, darkMode } = useSignals();

  return (
    <>
      <header>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://preactjs.com" target="_blank">
            <img src={preactLogo} class="logo preact" alt="Preact logo" />
          </a>
        </div>
        <h1>Vite + Preact + Signals</h1>
      </header>
      <main>
        <div class="card">
          <button
            type={'button'}
            onClick={counter.increment}>
              count is {counter.count}
          </button>
          <button
            type={'button'}
            onClick={() => darkMode.value = !darkMode.value}
            style={{ marginLeft: '10px' }}>
            {darkMode.value ? '🌙' : '☀️'}
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
          <p>Dark mode: {darkMode.value ? 'ON' : 'OFF'}</p>
        </div>
      </main>
      <footer>
        <p>
          Check out{' '}
          <a
            href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
            target="_blank"
          >
            create-preact
          </a>
          , the official Preact + Vite starter
        </p>
        <p class="read-the-docs">Click on the Vite and Preact logos to learn more <span className="version">v{appVersion.value}</span> </p>
      </footer>
    </>
  );
}
