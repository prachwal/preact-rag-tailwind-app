import { describe, it, expect, beforeEach, vi } from 'vitest';
import { signal } from '@preact/signals';
import {
  createCounter,
  createToggle,
  arrayLength,
  filterArray,
  debounce,
  persistentSignal
} from './signals';

describe('Signals Utilities', () => {
  describe('createCounter', () => {
    it('should create a counter with initial value', () => {
      const counter = createCounter(5);
      expect(counter.count.value).toBe(5);
    });

    it('should increment counter', () => {
      const counter = createCounter(0);
      counter.increment();
      expect(counter.count.value).toBe(1);
    });

    it('should decrement counter', () => {
      const counter = createCounter(5);
      counter.decrement();
      expect(counter.count.value).toBe(4);
    });

    it('should reset counter to initial value', () => {
      const counter = createCounter(10);
      counter.increment();
      counter.increment();
      counter.reset();
      expect(counter.count.value).toBe(10);
    });

    it('should set counter to specific value', () => {
      const counter = createCounter(0);
      counter.set(42);
      expect(counter.count.value).toBe(42);
    });
  });

  describe('createToggle', () => {
    it('should create toggle with initial value', () => {
      const toggle = createToggle(true);
      expect(toggle.state.value).toBe(true);
    });

    it('should toggle state', () => {
      const toggle = createToggle(false);
      toggle.toggle();
      expect(toggle.state.value).toBe(true);
      toggle.toggle();
      expect(toggle.state.value).toBe(false);
    });

    it('should turn on', () => {
      const toggle = createToggle(false);
      toggle.on();
      expect(toggle.state.value).toBe(true);
    });

    it('should turn off', () => {
      const toggle = createToggle(true);
      toggle.off();
      expect(toggle.state.value).toBe(false);
    });

    it('should set specific value', () => {
      const toggle = createToggle(false);
      toggle.set(true);
      expect(toggle.state.value).toBe(true);
    });
  });

  describe('arrayLength', () => {
    it('should return length of array signal', () => {
      const arr = signal([1, 2, 3]);
      const length = arrayLength(arr);
      expect(length.value).toBe(3);
    });

    it('should update when array changes', () => {
      const arr = signal([1, 2]);
      const length = arrayLength(arr);
      arr.value.push(3);
      expect(length.value).toBe(3);
    });
  });

  describe('filterArray', () => {
    it('should filter array based on predicate', () => {
      const arr = signal([1, 2, 3, 4, 5]);
      const evens = filterArray(arr, n => n % 2 === 0);
      expect(evens.value).toEqual([2, 4]);
    });

    it('should update when source array changes', () => {
      const arr = signal([1, 2, 3]);
      const evens = filterArray(arr, n => n % 2 === 0);
      arr.value.push(4, 5, 6);
      expect(evens.value).toEqual([2, 4, 6]);
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    it('should debounce signal updates', () => {
      const source = signal('initial');
      const debounced = debounce(source, 100);

      source.value = 'first';
      source.value = 'second';

      expect(debounced.value).toBe('initial');

      vi.advanceTimersByTime(100);
      expect(debounced.value).toBe('second');
    });

    it('should use default delay of 300ms', () => {
      const source = signal('initial');
      const debounced = debounce(source);

      source.value = 'updated';
      expect(debounced.value).toBe('initial');

      vi.advanceTimersByTime(300);
      expect(debounced.value).toBe('updated');
    });
  });

  describe('persistentSignal', () => {
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    };

    beforeEach(() => {
      Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
        writable: true,
      });
    });

    it('should load initial value from localStorage', () => {
      localStorageMock.getItem.mockReturnValue(JSON.stringify('stored-value'));
      const sig = persistentSignal('test-key', 'default');
      expect(sig.value).toBe('stored-value');
    });

    it('should use default value when localStorage is empty', () => {
      localStorageMock.getItem.mockReturnValue(null);
      const sig = persistentSignal('test-key', 'default');
      expect(sig.value).toBe('default');
    });

    it('should save to localStorage when value changes', () => {
      localStorageMock.getItem.mockReturnValue(null);
      const sig = persistentSignal('test-key', 'initial');

      sig.value = 'updated';
      expect(localStorageMock.setItem).toHaveBeenCalledWith('test-key', JSON.stringify('updated'));
    });
  });
});