![This is an image](./images/mix_logo.jpg)

# About Project

It's a React project for `exchange currencies` and use a currency to know all `exchange rates` for specific currency against all available currencies we have,

project is for HYF to graduate from React module

# Try demo

[Click here](https://mix-converter.netlify.app/) to try Demo. It's deployed on Netlify website

# Install and use locally

1- to clone it on your PC >> open your cli in (e.g. Desktop) path and execute this code

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
and use this variable name exactly `REACT_APP_EXCHANGE_RATE_APIKEY=_your API key>_`

Don't use any spaces never ever :sweat_smile:

> _Note: you have to make your own account if you don't have ((( [**it's free**](https://www.exchangerate-api.com/) )))._

Then it's ready to use.
Simply go to your CLI in the root folder of project `mix-app` and execute

```
npm start
```

It will open automatically the project on your browser on `http://localhost:3000/`

# Styling and used APIs

in this project I followed [xe website's](https://www.xe.com/) style, I tried to use same colors and buttons and every thing as possible and put my own touch :wink:

---

For exchanging currencies I used [ExchangeRate-api website](https://www.exchangerate-api.com/).

For getting flags by currency I used [react-currency-flags npm](https://www.npmjs.com/package/react-currency-flags).

> You can find more useful websites I used in the Footer

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
        |_____img
        |     | logo.png
        |     | header-img01.jpg
```

# Project features plan

## Must have features

-   [x] App should have a list of the available currencies.
-   [x] User should be able to choose the currency to compare exchange rates with all currencies.
-   [x] User should be able to compare between specific two currencies.
-   [x] User should be able to go to home screen from every page e.g. by clicking the logo.
-   [x] User should see if there is any error happened.
-   [x] User should see that it's loading while doing operation

## nice to have

-   [x] User can switch the pair of currencies to see the opposite rate of the same pair of currencies.
-   [x] User can see history of his exchange rate requests and delete it.
-   [x] put animation from different sections

## Issues

please feel free to use issues and we gonna answer as soon as possible

## MIT License

[MIT](https://github.com/ObadaElSharbatly/mix-app/blob/main/LICENSE)
