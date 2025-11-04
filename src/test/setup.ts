/**
 * Vitest test setup configuration
 *
 * This file configures the testing environment by:
 * - Extending Vitest's expect with jest-dom matchers for DOM assertions
 * - Setting up automatic cleanup after each test to prevent test pollution
 */

import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/preact'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect with jest-dom matchers for better DOM assertions
expect.extend(matchers)

// Cleanup after each test to prevent DOM pollution between tests
afterEach(() => {
  cleanup()
})