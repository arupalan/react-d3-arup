// facking the API calls

function randomDelayPromise(data) {
  const delay = Math.floor(Math.random() * 900) + 900;
  return new Promise(resolve => setTimeout(() => resolve(data), delay));
}

export function getspotGBP() {
  return randomDelayPromise(require('./cache/spotGBP.json'));
}

export function getspotEUR() {
  return randomDelayPromise(require('./cache/spotEUR.json'));
}

export function getspotUSD() {
  return randomDelayPromise(require('./cache/spotUSD.json'));
}

export function getspotCHF() {
  return randomDelayPromise(require('./cache/spotCHF.json'));
}
