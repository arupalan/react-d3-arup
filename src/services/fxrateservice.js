import { timeParse } from 'd3-time-format';
import { getspotGBP, getspotUSD, getspotEUR, getspotCHF } from './data';
import { reject } from 'bluebird';

function parseFxData(d, parse) {
  return {
    date: parse(d.time),
    open: (+d.openBid + +d.openAsk) / 2,
    high: (+d.highAsk + +d.highAsk) / 2,
    low: (+d.lowBid + +d.lowAsk) / 2,
    close: (+d.closeBid + +d.closeAsk) / 2,
    volume: +d.volume,
  };
}

const parseFxDate = timeParse('%Y-%m-%dT%H:%M:%S.000000Z');

export function getFxCandles(ccypair) {
  return fetch(
    'https://api-fxtrade.oanda.com/v1/candles?instrument=' +
      ccypair +
      '&count=365&granularity=D&daily',
    {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer C1BLSxaTWZHkoBqdJf0vCym2',
      }),
    }
  )
    .then(response => Promise.all([response, response.json()]))
    .then(([response, json]) => {
      console.log('raw_data, response', json, response);
      if (!response.ok) {
        console.log('throwing error');
        throw new Error(json.message);
      }
      return json;
    })
    .then(data => data.candles.map(d => parseFxData(d, parseFxDate)))
    .catch(exception => {
      console.error(
        'Error:getFxCandles',
        new Map([
          [TypeError, 'There was a problem fetching the response.'],
          [SyntaxError, 'There was a problem parsing the response.'],
          [Error, exception.message],
        ]).get(exception.constructor)
      );
      return reject(exception);
    });
}

export function getFxSpot(ccy) {
  let promiseOANDA = null;
  switch (ccy) {
    case 'GBP':
      promiseOANDA = getspotGBP();
      break;

    case 'USD':
      promiseOANDA = getspotUSD();
      break;

    case 'CHF':
      promiseOANDA = getspotCHF();
      break;

    case 'EUR':
      promiseOANDA = getspotEUR();
      break;

    default:
      promiseOANDA = getspotGBP();
  }
  return promiseOANDA;
}

export function getFxSpotRates(ccy) {
  return fetch(
    'https://cors-escape.herokuapp.com/https://www.oanda.com/rates/api/v2/rates/spot.json?base=' +
      ccy,
    {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer cLkHNNttx11axRSYW1KYJc05',
      }),
    }
  )
    .then(response => Promise.all([response, response.json()]))
    .then(([response, json]) => {
      console.log('raw_data_fx_spot, response', json, response);
      if (!response.ok) {
        console.log('throwing error');
        throw new Error(json.message);
      }
      return json;
    })
    .then(data => data.candles.map(d => parseFxData(d, parseFxDate)))
    .catch(exception => {
      console.error(
        'Error:getFxCandles',
        new Map([
          [TypeError, 'There was a problem fetching the response.'],
          [SyntaxError, 'There was a problem parsing the response.'],
          [Error, exception.message],
        ]).get(exception.constructor)
      );
      return reject(exception);
    });
}
