# Soapie - Browser extension to increase page accessibility

Soapie is an open-source browser extension (support Mozilla Firefox and Google Chrome) to make the internet more accessible for people who are sight impaired. We aim to use the cutting edge AI technology to fill in the blanks of a webpage (e.g. missing alt tag) or remove blocks to improve browsing experience for people in need. When installed and switched on, Soapie will automatically change the html of the webpage so it can be easily accessible for other assisting tools.

Details can be found on [this page](https://github.com/soapie-tool/project-introduction).

## Installation

Install built application at (TBC)

## Developer setup

Pprerequisite:

- node and npm (https://www.npmjs.com/get-npm)

In this repository
```
npm install
```

Build
```
npx webpack
```

Unpacked Soapie will be compiled into `dist`. Use `npx webpack` to recompile after editing

Test the extension by installing the `dist/manifest.json` to your browser (Chrome or Firefox)

> Testing in Firefox: Can use [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) (Optional)

## Contributing

(TBC)

## What's next
1. Setup hot reload for development environment
2. Setup build scripts
3. pre-commit hooks
