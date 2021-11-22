![This is an image](./images/mix_logo.jpg)

# About Project

It's a React project for `exchange currencies` and use a currency to know all `exchange rate` for it against all available currencies, project is for HYF to graduate from React module

# Try demo

https://mix-converter.netlify.app/

# Install and use locally

1- clone it on your PC (e.g. Desktop) and open your cli in that location and execute this code

```
git clone https://github.com/ObadaElSharbatly/mix-app.git
```

```
cd mix-app
```

```
npm i
```

then in the root project folder `mix-app` you have to create `.env` file and put your own api key from this [exchange money API website](https://www.exchangerate-api.com/)
and use this variable name `REACT_APP_EXCHANGE_RATE_APIKEY={put your api key after the equal sign without quotes }` :sweat_smile:

> _Note: you have to make your own account if you don't have ((( **it's free** )))._

then it's ready to use
simply go to your CLI in the root folder of project `mix-app` and execute

```
npm start
```

to run tests execute this line in the same root path

```
npm run test
```

# Styling and used APIs

in this project I followed [xe website's](https://www.xe.com/) style, I tried to use same colors and buttons and every thing

---

For exchanging currencies I used [ExchangeRate-api website](https://www.exchangerate-api.com/).

For getting flags by currency I used [react-currency-flags npm](https://www.npmjs.com/package/react-currency-flags).

# Project folder structure

```
mix-app (root directory)
|   images (images for readme file only)
|   README.md
|   LICENSE
|   .gitignore
|   package-lock.json
|   package.json
|
|_____public
|     |index.html
|     |favicon.ico
|
|_____src
        | setupTests.js
        | index.js
        | App.jsx
        |
        |_____components
        |     |
        |     |_____Header
        |     |     |Header.jsx
        |     |     |Nav.jsx
        |     |
        |     |_____inputs
        |     |     |CurrencyList.jsx
        |     |     |Input.jsx
        |     |     |SubmitButton.jsx
        |     |
        |     |_____converter
        |     |     |Converter.jsx
        |     |     |ConverterForm.jsx
        |     |     |ConverterHistory.jsx
        |     |     |HistoryLine.jsx
        |     |
        |     |_____rates
        |     |     |Rates.jsx
        |     |     |RatesForm.jsx
        |     |
        |     |_____footer
        |     |     |Footer.jsx
        |
        |_____context
        |     | ConverterContext.js
        |
        |_____hooks
        |     | useFetchCurrencyData.js
        |
        |_____ style
        |     | App.css
        |     | header.css
        |     | converter.css
        |     | rates.css
        |     | footer.css
        |
        |_____ __tests__
        |     | test com
        |     | test com
        |     | test com
        |     | test com
        |     | test com
        |
        |_____img
        |     | logo.png
```

# Project features plan

## Must have features

-   [x] App should have a list of the available currencies.
-   [x] User should be able to choose the currency to compare exchange rates with all currencies.
-   [x] User should be able to compare between specific two currencies.
-   [x] User should be able to go to home screen from every page e.g. by clicking the logo.

## nice to have

-   [x] User can switch the pair of currencies to see the opposite rate of the same pair of currencies.
-   [x] User can see history of his exchange rate requests and delete it.
