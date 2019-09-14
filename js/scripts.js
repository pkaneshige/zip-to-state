const zipForm = document.querySelector('#zipToState');
const zipField = document.querySelector('#zip');
const result = document.querySelector('#result');
const copyBtn = document.querySelector('#copyBtn');

// ZIP Code to State
const getState = (zipcode) => {
  // Ensure param is a string to prevent unpredictable parsing
  if (typeof zipcode !== 'string') {
    console.log('Please enter your ZIP code as a string.');
    return;
  }
  // Don't parse codes that start with 0 as octal values
  const zip = parseInt(zipcode, 10);
  // Code blocks alphabetized by state
  if (zip >= 35000 && zip <= 36999) {
    abbr = 'AL';
    fullName = 'Alabama';
    }
  else if (zip >= 99500 && zip <= 99999) {
      abbr = 'AK';
      fullName = 'Alaska';
      }
  else if (zip >= 85000 && zip <= 86999) {
      abbr = 'AZ';
      fullName = 'Arizona';
      }
  else if (zip >= 71600 && zip <= 72999) {
      abbr = 'AR';
      fullName = 'Arkansas';
      }
  else if (zip >= 90000 && zip <= 96699) {
      abbr = 'CA';
      fullName = 'California';
      }
  else if (zip >= 80000 && zip <= 81999) {
      abbr = 'CO';
      fullName = 'Colorado';
      }
  else if (zip >= 6000 && zip <= 6999) {
      abbr = 'CT';
      fullName = 'Connecticut';
      }
  else if (zip >= 19700 && zip <= 19999) {
      abbr = 'DE';
      fullName = 'Delaware';
      }
  else if (zip >= 32000 && zip <= 34999) {
      abbr = 'FL';
      fullName = 'Florida';
      }
  else if (zip >= 30000 && zip <= 31999) {
      abbr = 'GA';
      fullName = 'Georgia';
      }
  else if (zip >= 96700 && zip <= 96999) {
      abbr = 'HI';
      fullName = 'Hawaii';
      }
  else if (zip >= 83200 && zip <= 83999) {
      abbr = 'ID';
      fullName = 'Idaho';
      }
  else if (zip >= 60000 && zip <= 62999) {
      abbr = 'IL';
      fullName = 'Illinois';
      }
  else if (zip >= 46000 && zip <= 47999) {
      abbr = 'IN';
      fullName = 'Indiana';
      }
  else if (zip >= 50000 && zip <= 52999) {
      abbr = 'IA';
      fullName = 'Iowa';
      }
  else if (zip >= 66000 && zip <= 67999) {
      abbr = 'KS';
      fullName = 'Kansas';
      }
  else if (zip >= 40000 && zip <= 42999) {
      abbr = 'KY';
      fullName = 'Kentucky';
      }
  else if (zip >= 70000 && zip <= 71599) {
      abbr = 'LA';
      fullName = 'Louisiana';
      }
  else if (zip >= 3900 && zip <= 4999) {
      abbr = 'ME';
      fullName = 'Maine';
      }
  else if (zip >= 20600 && zip <= 21999) {
      abbr = 'MD';
      fullName = 'Maryland';
      }
  else if (zip >= 1000 && zip <= 2799) {
      abbr = 'MA';
      fullName = 'Massachusetts';
      }
  else if (zip >= 48000 && zip <= 49999) {
      abbr = 'MI';
      fullName = 'Michigan';
      }
  else if (zip >= 55000 && zip <= 56999) {
      abbr = 'MN';
      fullName = 'Minnesota';
      }
  else if (zip >= 38600 && zip <= 39999) {
      abbr = 'MS';
      fullName = 'Mississippi';
      }
  else if (zip >= 63000 && zip <= 65999) {
      abbr = 'MO';
      fullName = 'Missouri';
      }
  else if (zip >= 59000 && zip <= 59999) {
      abbr = 'MT';
      fullName = 'Montana';
      }
  else if (zip >= 27000 && zip <= 28999) {
      abbr = 'NC';
      fullName = 'North Carolina';
      }
  else if (zip >= 58000 && zip <= 58999) {
      abbr = 'ND';
      fullName = 'North Dakota';
      }
  else if (zip >= 68000 && zip <= 69999) {
      abbr = 'NE';
      fullName = 'Nebraska';
      }
  else if (zip >= 88900 && zip <= 89999) {
      abbr = 'NV';
      fullName = 'Nevada';
      }
  else if (zip >= 3000 && zip <= 3899) {
      abbr = 'NH';
      fullName = 'New Hampshire';
      }
  else if (zip >= 7000 && zip <= 8999) {
      abbr = 'NJ';
      fullName = 'New Jersey';
      }
  else if (zip >= 87000 && zip <= 88499) {
      abbr = 'NM';
      fullName = 'New Mexico';
      }
  else if (zip >= 10000 && zip <= 14999) {
      abbr = 'NY';
      fullName = 'New York';
      }
  else if (zip >= 43000 && zip <= 45999) {
      abbr = 'OH';
      fullName = 'Ohio';
      }
  else if (zip >= 73000 && zip <= 74999) {
      abbr = 'OK';
      fullName = 'Oklahoma';
      }
  else if (zip >= 97000 && zip <= 97999) {
      abbr = 'OR';
      fullName = 'Oregon';
      }
  else if (zip >= 15000 && zip <= 19699) {
      abbr = 'PA';
      fullName = 'Pennsylvania';
      }
  else if (zip >= 300 && zip <= 999) {
      abbr = 'PR';
      fullName = 'Puerto Rico';
      }
  else if (zip >= 2800 && zip <= 2999) {
      abbr = 'RI';
      fullName = 'Rhode Island';
      }
  else if (zip >= 29000 && zip <= 29999) {
      abbr = 'SC';
      fullName = 'South Carolina';
      }
  else if (zip >= 57000 && zip <= 57999) {
      abbr = 'SD';
      fullName = 'South Dakota';
      }
  else if (zip >= 37000 && zip <= 38599) {
      abbr = 'TN';
      fullName = 'Tennessee';
      }
  else if ( (zip >= 75000 && zip <= 79999) || (zip >= 88500 && zip <= 88599) ) {
      abbr = 'TX';
      fullName = 'Texas';
      }
  else if (zip >= 84000 && zip <= 84999) {
      abbr = 'UT';
      fullName = 'Utah';
      }
  else if (zip >= 5000 && zip <= 5999) {
      abbr = 'VT';
      fullName = 'Vermont';
      }
  else if (zip >= 22000 && zip <= 24699) {
      abbr = 'VA';
      fullName = 'Virgina';
      }
  else if (zip >= 20000 && zip <= 20599) {
      abbr = 'DC';
      fullName = 'Washington DC';
      }
  else if (zip >= 98000 && zip <= 99499) {
      abbr = 'WA';
      fullName = 'Washington';
      }
  else if (zip >= 24700 && zip <= 26999) {
      abbr = 'WV';
      fullName = 'West Virginia';
      }
  else if (zip >= 53000 && zip <= 54999) {
      abbr = 'WI';
      fullName = 'Wisconsin';
      }
  else if (zip >= 82000 && zip <= 83199) {
      abbr = 'WY';
      fullName = 'Wyoming';
      }
  else {
      abbr = 'none';
      fullName = 'none';
  }

  return abbr;
}

// Form event listener
zipForm.onsubmit = (e) => {
  e.preventDefault();
  const zipcodes = zipField.value.split(',');
  const states = zipcodes.map(zipcode => getState(zipcode))
  result.innerHTML = states;
}

// Copy result to clipboard
copyBtn.onclick = (e) => {
  result.select();
  result.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert('Copied to clipboard');
}
