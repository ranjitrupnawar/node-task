// test/utils.test.ts

import { expect } from 'chai';
import { add, multiply } from '../src/utils';

describe('Utils Functions', () => {
  describe('add()', () => {
    it('should return the sum of two numbers', () => {
      expect(add(1, 2)).to.equal(3);
      expect(add(-1, -2)).to.equal(-3);
      expect(add(-1, 2)).to.equal(1);
    });
  });

  describe('multiply()', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(2, 3)).to.equal(6);
      expect(multiply(-2, -3)).to.equal(6);
      expect(multiply(-2, 3)).to.equal(-6);
    });
  });
});
