module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'npm run lint',
    'pre-push': 'npm run lint'
  }
}
