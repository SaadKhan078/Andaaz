/* ================================================================
   ANDAAZ — shipping-config.js
   ADMIN: Edit shipping rates below. Rates are in PKR.
   Add new cities as needed. 'default' applies to all other cities.
   ================================================================ */
'use strict';

const SHIPPING_CONFIG = {
  freeShippingAbove: 2000,   // Free delivery if order total >= this value

  rates: {
    'Karachi':       150,
    'Lahore':        200,
    'Islamabad':     200,
    'Rawalpindi':    200,
    'Faisalabad':    220,
    'Multan':        220,
    'Hyderabad':     180,
    'Sialkot':       220,
    'Gujranwala':    220,
    'Bahawalpur':    240,
    'Sargodha':      230,
    'Sukkur':        250,
    'Larkana':       260,
    'Peshawar':      250,
    'Quetta':        280,
    'Abbottabad':    260,
    'Mardan':        260,
    'Dera Ghazi Khan': 260,
    'Mirpur AJK':    270,
    'Muzaffarabad':  280,
    'Gilgit':        320,
    'Gwadar':        300,
    'default':       280,    // All other cities
  },

  estimatedDays: {
    'Karachi':    '1-2',
    'Lahore':     '2-3',
    'Islamabad':  '2-3',
    'Rawalpindi': '2-3',
    'default':    '3-5',
  }
};

function getShippingRate(city) {
  if (!city) return SHIPPING_CONFIG.rates['default'];
  const key = Object.keys(SHIPPING_CONFIG.rates).find(
    k => k.toLowerCase() === city.toLowerCase()
  );
  return key ? SHIPPING_CONFIG.rates[key] : SHIPPING_CONFIG.rates['default'];
}

function getDeliveryDays(city) {
  const key = Object.keys(SHIPPING_CONFIG.estimatedDays).find(
    k => k.toLowerCase() === city.toLowerCase()
  );
  return key ? SHIPPING_CONFIG.estimatedDays[key] : SHIPPING_CONFIG.estimatedDays['default'];
}

function isFreeShipping(subtotal) {
  return subtotal >= SHIPPING_CONFIG.freeShippingAbove;
}
