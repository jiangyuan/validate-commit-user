#!/usr/bin/env node

const config = require(`${process.cwd()}/package.json`).config;
const vConfig = config && config['validate-commit-user'];

if (vConfig) {
  require('../dist')(vConfig);
}

