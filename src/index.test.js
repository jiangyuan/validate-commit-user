/**
 * @author jero
 * @date 2016-09-07
 */

import { expect } from 'chai';
import check from './index';

describe('validate-commit-user', () => {
  afterEach(() => {
    delete process.env.GIT_AUTHOR_NAME;
    delete process.env.GIT_AUTHOR_EMAIL;
  });

  it('check right', () => {
    process.env.GIT_AUTHOR_NAME = 'jero';
    process.env.GIT_AUTHOR_EMAIL = 'jero@gmail.com';
    expect(check({
      name: 'jero',
      email: 'jero@gmail.com',
      errMsg: 'err',
      succMsg: 'succ'
    }, true)).to.eq(true);
  });

  it('check error', () => {
    process.env.GIT_AUTHOR_NAME = 'jero';
    process.env.GIT_AUTHOR_EMAIL = 'jer@gmail.com';
    expect(check({
      name: 'jero',
      email: 'jero@gmail.com',
      errMsg: 'err',
      succMsg: 'succ'
    }, true)).to.eq(false);
  });

  it('check unicode succ', () => {
    process.env.GIT_AUTHOR_NAME = 'jero(刘德华)';
    process.env.GIT_AUTHOR_EMAIL = 'jero@gmail.com';
    expect(check({
      name: '^[a-z]+\\([\u4e00-\u9fa5]+\\)$',
      email: 'jero@gmail.com',
      errMsg: 'err',
      succMsg: 'succ'
    }, true)).to.eq(true);
  });

  it('check unicode error', () => {
    process.env.GIT_AUTHOR_NAME = 'jero';
    process.env.GIT_AUTHOR_EMAIL = 'jero@gmail.com';
    expect(check({
      name: '^[a-z]+\\([\u4e00-\u9fa5]+\\)$',
      email: 'jero@gmail.com',
      errMsg: 'err',
      succMsg: 'succ'
    }, true)).to.eq(false);
  });
});
