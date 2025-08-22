const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value;
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert'
  ); //Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value'); // Outras Moedas

  const dolarDay = 5.47;
  const euroDay = 6.35;
  const libraDay = 7.33;
  const bitcoinDay = 614312.44;

  if (currencySelect.value == 'dolar') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarDay);
  }

  if (currencySelect.value == 'libra') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    }).format(inputCurrencyValue / libraDay);
  }

  if (currencySelect.value == 'bitcoin') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BTC',
    }).format(inputCurrencyValue / bitcoinDay);
  }

  if (currencySelect.value == 'euro') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroDay);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name');
  const currencyImage = document.querySelector('.currency-img');

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar';
    currencyImage.src = './assets/Dolar.png';
  }

  if (currencySelect.value == 'euro') {
    currencyName.innerHTML = 'Euro';
    currencyImage.src = './assets/Euro.png';
  }

  if (currencySelect.value == 'libra') {
    currencyName.innerHTML = 'Libra';
    currencyImage.src = './assets/Libra.png';
  }
  if (currencySelect.value == 'bitcoin') {
    currencyName.innerHTML = 'Bitcoin';
    currencyImage.src = './assets/bitcoin.png';
  }

  convertValues();
}

currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);
