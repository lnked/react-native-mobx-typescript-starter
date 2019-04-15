module.exports = {
  "linters": {
    "**/*.{ts,tsx,js,jsx}": ["yarn lint", "git add"],
    "**/*.{json,md,yaml,yml}": ["git add"],
  },
  "ignore": ["**/dist/*.*"],
};
