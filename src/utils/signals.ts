import { signal, computed, effect } from '@preact/signals';

/**
 * Utility functions for working with Preact signals.
 * Provides common patterns and helpers for reactive state management.
 */

/**
 * Creates a counter signal with increment/decrement methods.
 *
 * @param initialValue - The initial counter value (default: 0)
 * @returns Object with counter signal and control methods
 *
 * @example
 * ```ts
 * const counter = createCounter(5);
 * counter.increment(); // counter.value === 6
 * counter.decrement(); // counter.value === 5
 * counter.reset(); // counter.value === 5
 * ```
 */
export function createCounter(initialValue = 0) {
  const count = signal(initialValue);

  return {
    count,
    increment: () => count.value++,
    decrement: () => count.value--,
    reset: () => count.value = initialValue,
    set: (value: number) => count.value = value,
  };
}

/**
 * Creates a toggle signal with boolean state management.
 *
 * @param initialValue - The initial toggle state (default: false)
 * @returns Object with toggle signal and control methods
 *
 * @example
 * ```ts
 * const toggle = createToggle(true);
 * toggle.toggle(); // toggle.value === false
 * toggle.on(); // toggle.value === true
 * toggle.off(); // toggle.value === false
 * ```
 */
export function createToggle(initialValue = false) {
  const state = signal(initialValue);

  return {
    state,
    toggle: () => state.value = !state.value,
    on: () => state.value = true,
    off: () => state.value = false,
    set: (value: boolean) => state.value = value,
  };
}

/**
 * Creates a computed signal that tracks the length of an array signal.
 *
 * @param arraySignal - The array signal to track
 * @returns Computed signal with the array length
 *
 * @example
 * ```ts
 * const items = signal([1, 2, 3]);
 * const length = arrayLength(items); // length.value === 3
 * items.value.push(4); // length.value === 4
 * ```
 */
export function arrayLength<T>(arraySignal: { value: T[] }) {
  return computed(() => arraySignal.value.length);
}

/**
 * Creates a computed signal that filters an array signal based on a predicate.
 *
 * @param arraySignal - The array signal to filter
 * @param predicate - Function to test each element
 * @returns Computed signal with filtered array
 *
 * @example
 * ```ts
 * const numbers = signal([1, 2, 3, 4, 5]);
 * const evens = filterArray(numbers, n => n % 2 === 0);
 * // evens.value === [2, 4]
 * ```
 */
export function filterArray<T>(
  arraySignal: { value: T[] },
  predicate: (item: T) => boolean
) {
  return computed(() => arraySignal.value.filter(predicate));
}

/**
 * Creates a debounced computed signal that delays updates.
 *
 * @param sourceSignal - The source signal to debounce
 * @param delayMs - Delay in milliseconds (default: 300)
 * @returns Computed signal with debounced value
 *
 * @example
 * ```ts
 * const input = signal('');
 * const debouncedInput = debounce(input, 500);
 * // debouncedInput updates 500ms after input stops changing
 * ```
 */
export function debounce<T>(sourceSignal: { value: T }, delayMs = 300) {
  const debounced = signal(sourceSignal.value);

  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  effect(() => {
    const value = sourceSignal.value;
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      debounced.value = value;
    }, delayMs);
  });

  return debounced;
}

/**
 * Creates a signal that persists its value to localStorage.
 *
 * @param key - localStorage key
 * @param initialValue - Initial value if not found in localStorage
 * @returns Signal that syncs with localStorage
 *
 * @example
 * ```ts
 * const theme = persistentSignal('theme', 'light');
 * theme.value = 'dark'; // Saves to localStorage
 * // On page reload: theme.value === 'dark'
 * ```
 */
export function persistentSignal<T>(key: string, initialValue: T) {
  let parsedValue = initialValue;
  try {
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      parsedValue = JSON.parse(stored);
    }
  } catch {
    // Ignore errors (localStorage unavailable or invalid data)
  }

  const sig = signal<T>(parsedValue);

  effect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(sig.value));
    } catch {
      // Ignore errors (localStorage unavailable or quota exceeded)
    }
  });

  return sig;
}

declare const __APP_VERSION__: string;

/**
 * Signal containing the application version from package.json.
 * This value is injected at build time via Vite configuration.
 */
export const appVersion = signal(__APP_VERSION__);