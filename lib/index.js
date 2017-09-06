module.exports = (string, regex, names) => {
  const matches = {};
  for(let i = 0; i < names.length; i++) {
    matches[names[i]] = [];
  }
  let match;
  while (match = regex.exec(string)) {
    for(let i = 1; i <= names.length; i++) {
      matches[names[i - 1]].push(match[i]);
    }
  }
  return matches;
}
