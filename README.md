![This is an image](./images/mix_logo.jpg)

# About Project

It's a React project for `exchange currency rates` and other info and to get some `cool photos with ready src link` for your website as well, project is for HYF to graduate from React module

# Try demo

gonna put a link here when deploy it on netlify

# Install and use locally

1- clone it on your PC (e.g. Desktop) and open your cli in that location and execute this code

```
git clone https://github.com/ObadaElSharbatly/Mix.git
```

```
cd "Mix/mix-app"
```

```
npm i
```

then in the root project folder `Mix` you have to create `.env` file and put your own api key from this [exchange money website](https://www.exchangerate-api.com/)
and use this variable name `exchange_rate_APIKEY={put your api key after the equal sign without quotes }` :sweat_smile:

> _Note: you have to make your own account if you don't have ((( **it's free** )))._

then it's ready to use
simply go to you cli I in the root folder of project `mix-app` and execute

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

For exchange currencies I used [ExchangeRate-api website](https://www.exchangerate-api.com/)].

For Photo gallery I used [PlaceIMG website](http://placeimg.com/)].

# Project folder structure

```
|_ images (images for readme file only)
|_ README.md
|_ mix-app
    |  .gitignore
    |  package-lock.json
    |  package.json
    |
    |_____public
    |
    |_____src
          | setupTests.js
          | index.js
          | App.js
          |
          |_____components
          |     | com1
          |     | com1
          |     | com1
          |     | com1
          |
          |_____context
          |     | context
          |     | context
          |     | context
          |
          |_____hooks
          |     | hook
          |     | hook
          |     | hook
          |
          |_____style
          |     | css file
          |     | css file
          |     | css file
          |
          |_______tests__
          |     | test com
          |     | test com
          |     | test com
          |     | test com
          |     | test com
```

# Project features plan

## Must have features

1. App should have a list of the available currencies.
2. User should be able to choose the currency to compare exchange rates with all currencies.
3. User should be able to compare between specific two currencies.
4. User should be able to go to home screen from every page e.g. by clicking the logo.
5. user has a photo gallery section.
6. User can set the width and height to generate random photo.
7. User can also choose category.
8. User can get the ready link to use in his img src and see a a photo also on the screen.

## nice to have

1. User can switch the pair of currencies to see the opposite rate of the same pair of currencies.
2. User can see history of his exchange rate requests and delete it.
3. User can download the photo.
4. When use click to generate the photo pop up
