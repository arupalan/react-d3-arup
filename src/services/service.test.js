import { getFxSpot } from './fxrateservice';

it('returns the correct format', () => {
  return getFxSpot('GBP')
    .then(r => r.quotes)
    .then(([firstQuote]) => {
      expect(typeof firstQuote.base_currency).toBe('string');
      expect(typeof firstQuote.quote_currency).toBe('string');
      expect(typeof firstQuote.bid).toBe('string');
      expect(typeof firstQuote.ask).toBe('string');
      expect(typeof firstQuote.midpoint).toBe('string');
      expect(
        firstQuote.base_currency === 'GBP' || typeof firstMessage === 'string'
      ).toBeTruthy();
    });
});

it('Should have the correct number of Quotes', () => {
  return getFxSpot('GBP')
    .then(r => r.quotes)
    .then(q => {
      expect.assertions(1);
      expect(q.length).toEqual(215);
    });
});

it('Should have correct endpoint', () => {
  return getFxSpot('GBP').then(data => {
    expect.assertions(1);
    expect(data.meta.endpoint).toEqual('spot');
  });
});

it('Should pull correct base currency', () => {
  return getFxSpot('GBP').then(data => {
    expect.assertions(1);
    expect(data.quotes[0].base_currency).toEqual('GBP');
  });
});
