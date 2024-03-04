#!/bin/sh

npm install --legacy-peer-deps
npm run build weather-components-ui
cd dist/weather-components-ui
npm link --legacy-peer-deps
cd ../../projects/my-weather-app
npm link weather-components-ui --legacy-peer-deps
cd ../weather-components-ui
ng build --watch &
sleep 8
cd ../my-weather-app
ng serve
