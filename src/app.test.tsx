import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/preact';
import { App } from '.';
import { SignalsProvider } from '@/contexts/SignalsContext';

describe('App', () => {
  it('should render the app with initial state', () => {
    render(<SignalsProvider><App /></SignalsProvider>);

    // Check if the main heading is rendered
    expect(screen.getByText('Vite + Preact + Signals')).toBeInTheDocument();

    // Check if the button with initial count is rendered
    expect(screen.getByText('count is 0')).toBeInTheDocument();

    // Check if logos are present
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument();
    expect(screen.getByAltText('Preact logo')).toBeInTheDocument();
  });

  it('should increment count when button is clicked', async () => {
    render(<SignalsProvider><App /></SignalsProvider>);

    const button = screen.getByText('count is 0');

    // Click the button
    fireEvent.click(button);

    // Check if count incremented
    expect(screen.getByText('count is 1')).toBeInTheDocument();
  });

  it('should increment count multiple times', async () => {
    render(<SignalsProvider><App /></SignalsProvider>);

    const button = screen.getByText('count is 0');

    // Click multiple times
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    // Check final count
    expect(screen.getByText('count is 3')).toBeInTheDocument();
  });

  it('should render links correctly', () => {
    render(<SignalsProvider><App /></SignalsProvider>);

    // Check if links are present
    expect(screen.getByText('create-preact')).toBeInTheDocument();
    expect(
      screen.getByText('Click on the Vite and Preact logos to learn more')
    ).toBeInTheDocument();
  });
});
