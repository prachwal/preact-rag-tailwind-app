import { describe, it, expect } from 'vitest'
import { add, multiply, isEven } from './math'

describe('math utilities', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5)
      expect(add(10, 15)).toBe(25)
    })

    it('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2)
      expect(add(-5, 3)).toBe(-2)
    })

    it('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5)
    })

    it('should add zero', () => {
      expect(add(0, 5)).toBe(5)
      expect(add(5, 0)).toBe(5)
      expect(add(0, 0)).toBe(0)
    })
  })

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6)
      expect(multiply(4, 5)).toBe(20)
    })

    it('should multiply with zero', () => {
      expect(multiply(0, 5)).toBe(0)
      expect(multiply(5, 0)).toBe(0)
    })

    it('should multiply with negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6)
      expect(multiply(2, -3)).toBe(-6)
      expect(multiply(-2, -3)).toBe(6)
    })
  })

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(isEven(0)).toBe(true)
      expect(isEven(2)).toBe(true)
      expect(isEven(4)).toBe(true)
      expect(isEven(-2)).toBe(true)
      expect(isEven(100)).toBe(true)
    })

    it('should return false for odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(3)).toBe(false)
      expect(isEven(-1)).toBe(false)
      expect(isEven(99)).toBe(false)
    })
  })
})