# Progressive Web App starter [2021]
This repo is a simple starter for creating **Progressive Web Apps**. This repo has the most basic files required for browser to recognize this package is a **PWA**. This can be loaded into home screen app list for Iphones and Android Phones.
The difference between a normal website and a **Progressive Website** is the latter is installable.
```

Please fork the project to start a new project

```

## DEVELOPMENT
This project uses gulp to bundle and process the application and the final publish files will be in `publish` folder

usage:

1. develop with browser-sync, allows live preview and autoreload 
```
npm start
```

2. copy src files to publish for deployment
```
npm run build
```

use gulpfile.js to further add function for development

## starter files
use these files as starting point, each file is minimally set for PWA to function:

/manifest.json - controls PWA configuration for installations

/icons/* - contain icons for display in Home screens

/js/pwaScript.js - starting point of javascript for app, registers `service worker` to be used for PWA setup

/serviceWorker.js - allows for PWA to work "offline", this is required for android

/index.html - starting point of website

## DEPLOYMENT
1. SSL enabled web server to load the files from `publish`

---
## further reading: Documentations
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
- https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs

## how to install webapps in IPhone/Android/Windows and MacOS
https://mobilesyrup.com/2020/05/24/how-install-progressive-web-app-pwa-android-ios-pc-mac/

more in source.md