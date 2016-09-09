/**
 * @author jero
 * @date 2016-09-07
 */

const log = require('debug')('validate-commit-user');
const chalk = require('chalk');

export default (vConfig, fromTest) => {
  if (!vConfig) {
    return true;
  }

  const ENV = process.env;
  const name = ENV.GIT_AUTHOR_NAME;
  const email = ENV.GIT_AUTHOR_EMAIL;
  const rName = vConfig.name && new RegExp(vConfig.name);
  const rEmail = vConfig.email && new RegExp(vConfig.email);
  const errMsg = vConfig.errMsg || 'commit name or email error';
  const succMsg = vConfig.succMsg || '';
  let ret = true;

  log(`check git user.name [${name}]`);

  if (!rName.test(name)) {
    ret = false;
    log(`check git user.name [${name}] ERROR`);
  } else {
    log(`check git user.name [${name}], pass`);
  }


  log(`check git user.email [${email}]`);

  if (!rEmail.test(email)) {
    ret = false;
    log(`check git user.name [${email}] ERROR`);
  } else {
    log(`check git user.email [${email}], pass`);
  }

  if (!ret) {
    console.log(chalk.red(errMsg));

    if (!fromTest) {
      process.exit(1);
    }
  } else if (succMsg) {
    console.log(chalk.green(succMsg));
  }

  return ret;
};

