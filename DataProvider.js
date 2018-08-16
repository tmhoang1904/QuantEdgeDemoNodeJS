var _ = require('lodash');

const COMPANIES = [
  { name: 'Quant Edge', code: 'QAE.VN' },
  { name: 'FPT Software', code: 'FPT.VN' },
  { name: 'NashTech', code: 'NAT.VN' },
  { name: 'Google', code: 'GOO.VN' },
  { name: 'Facebook', code: 'FAB.VN' },
  { name: 'Amazon', code: 'AMA.VN' },
  { name: 'Apple', code: 'APL.VN' },
  { name: 'Samsung', code: 'SAM.VN' },
  { name: 'Oppo', code: 'OPP.VN' }
];

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

function getRandomInteger(min, max) {
  return Math.round(getRandomArbitrary(min, max));
}

function getVolume() {
  return getRandomInteger(1000, 1000001);
}

function getCompany() {
  const index = getRandomInteger(0, COMPANIES.length - 1);
  return COMPANIES[index];
}

function getPrice() {
  return Math.round(Math.random() * 100 * 100) / 100;
}

module.exports.getInitData = function() {
  let n = 40 + Math.random() * 50;
  let data = [];
  for (let i = 0; i < n; i++) {
    const company = getCompany();
    const price = getPrice();
    const volume = getVolume();
    const value = Math.round(price * volume);
    const change = 0;
    const changePercent = 0;
    data.push({ id: i + 1, company, price, volume, value, change, changePercent });
  }

  data = _.sortBy(data, [
    item => {
      return item.value;
    }
  ]);

  return data;
};
