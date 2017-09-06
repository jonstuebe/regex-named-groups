# regex-named-groups

## Install
```sh
npm install @jonstuebe/regex-named-groups --save
```

## Usage

```javascript
const regexNamedGroups = require("@jonstuebe/regex-named-groups");

const regex = /^([A-Z_]*?):[\ ]*?([^\ ]*?)$/gm;
const text = `
NODE_ENV:         development
NODE_PATH:        .
DEBUG_MODE:       false
`;

const matches = regexNamedGroups(text, regex, ["key","value"]);
```
