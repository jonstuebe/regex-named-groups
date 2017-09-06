const regexNamedGroups = require("../lib/index");

const regex = /^([A-Z_]*?):[\ ]*?([^\ ]*?)$/gm;
const text = `
NODE_ENV:         development
NODE_PATH:        .
DEBUG_MODE:       false
`;

const matches = regexNamedGroups(text, regex, ["key","value"]);

console.log(matches);
