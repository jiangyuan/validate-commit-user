#!/usr/bin/env node

const config = require(`${process.cwd()}/package.json`).config;
const vConfig = config && config['validate-commit-user'];
const check = require('../dist');

if (vConfig) {
  check('../dist').default(vConfig);
}

