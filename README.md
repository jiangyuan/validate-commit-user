# validate-commit-user

Verify the name and email submission information at the time of Git commit to comply with company or team specifications.
Can be used with `husky`.


验证 Git 提交时的 name 和 email 信息，使其遵从公司或团队规范。
可以搭配 `husky` 使用。

## install
`
npm i validate-comment-user -D
`

## config
In package.json:

```json
{
  "scripts": {},
  ...
  "config": {
    "validate-commit-user": {
      "email": "^[a-z]+@gmail\\.com$",
      "name": "^[a-z]+$",
      "errMsg": "check your commit name and email"
    }
  },
}
```
