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
and use this variable name `exchange_rate_APIKEY`

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

# Styling

in this project I followed [xe website's](https://www.xe.com/) style, I tried to use same colors and buttons and every thing

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
