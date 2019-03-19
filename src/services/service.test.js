import { getspotGBP } from './fxrateservice';

it('returns the correct format', () => {
  return getspotGBP().then(([firstMessage]) => {
    expect(typeof firstMessage.messageId).toBe('string');
    expect(typeof firstMessage.userId).toBe('string');
    expect(typeof firstMessage.fullName).toBe('string');
    expect(typeof firstMessage.timestamp).toBe('string');
    expect(typeof firstMessage.email).toBe('string');
    expect(typeof firstMessage.message).toBe('string');
    expect(
      firstMessage.avatar === null || typeof firstMessage === 'string'
    ).toBeTruthy();
  });
});

it('Sorts Messages by timestamp descending', () => {
  return getspotGBP().then(([firstMessage]) => {
    expect.assertions(1);
    expect(firstMessage.timestamp).toEqual('2017-02-27T13:47:25Z');
  });
});

it('Correctly builds set by matching Message UserId with Member Id', () => {
  return getspotGBP().then(data => {
    expect.assertions(1);
    expect(data.length).toEqual(100);
  });
});

it('Correctly Computes fullName', () => {
  return getspotGBP().then(([firstMessage]) => {
    expect.assertions(1);
    expect(firstMessage.fullName).toEqual('Amanda Baker');
  });
});
