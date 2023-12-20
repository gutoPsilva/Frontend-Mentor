import { LowercaseTrimPipe } from './lowercase-trim.pipe';

describe('LowercaseTrimPipe', () => {
  it('create an instance', () => {
    const pipe = new LowercaseTrimPipe();
    expect(pipe).toBeTruthy();
  });
});
