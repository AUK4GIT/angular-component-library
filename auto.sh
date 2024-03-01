#!/bin/sh

echo "************ npm install in progress"
NPM_TOKEN="$NPM_TOKEN" npm install --legacy-peer-deps
echo "************ performing build library 'npm run build'"
npm run build weather-components-ui
echo "************ 'dist/weather-components-ui'"
cd dist/weather-components-ui
echo "************ linking 'npm link --legacy-peer-deps'"
npm link --legacy-peer-deps
echo "************ cding 'cd ../../projects/my-weather-app'"
cd ../../projects/my-weather-app
echo "************ re linking 'npm link weather-components-ui --legacy-peer-deps'"
npm link weather-components-ui --legacy-peer-deps
echo "************ cding 'cd ../weather-components-ui'"
cd ../weather-components-ui
echo "************ building watching in background"
ng build --watch &
sleep 8
echo "************ cding '../my-weather-app'"
cd ../my-weather-app
echo "************ serving"
ng serve
