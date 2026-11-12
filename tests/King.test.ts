import Difficulty from '@civ-clone/core-difficulty/Difficulty';
import King from '../King';
import { expect } from 'chai';

describe('King', (): void => {
  it('is a difficulty at level 3', (): void => {
    expect(Object.prototype.isPrototypeOf.call(Difficulty, King)).true;
    expect(King.level()).equal(3);
    expect(King.name).equal('King');
  });
});
