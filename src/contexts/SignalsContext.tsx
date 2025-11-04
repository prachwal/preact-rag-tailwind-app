import { createContext, type ComponentChildren } from 'preact';
import { useContext } from 'preact/hooks';
import { effect } from '@preact/signals';
import { appVersion, createCounter, persistentSignal } from '@/utils/signals';

/**
 * Interface for the signals context
 */
interface SignalsContextType {
  appVersion: typeof appVersion;
  counter: ReturnType<typeof createCounter>;
  darkMode: ReturnType<typeof persistentSignal<boolean>>;
}

/**
 * Context for managing global signals
 */
const SignalsContext = createContext<SignalsContextType | null>(null);

/**
 * Provider component for signals context
 */
export function SignalsProvider({ children }: { children: ComponentChildren }) {
  // Global signals
  const counter = createCounter(0);
  const darkMode = persistentSignal('darkMode', false);

  // Effect for theme switching
  effect(() => {
    document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
  });

  const value: SignalsContextType = {
    appVersion,
    counter,
    darkMode,
  };

  return (
    <SignalsContext.Provider value={value}>
      {children}
    </SignalsContext.Provider>
  );
}

/**
 * Hook to use signals context
 */
export function useSignals() {
  const context = useContext(SignalsContext);
  if (!context) {
    throw new Error('useSignals must be used within a SignalsProvider');
  }
  return context;
}