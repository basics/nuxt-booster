import fs from 'fs';
import yaml from 'js-yaml';

const svgoConfig = Object.assign(
  {},
  yaml.load(fs.readFileSync(process.cwd() + '/.svgorc.yml', 'utf8'))
);

module.exports = function () {
  this.extendBuild(config => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.test && rule.test.toString().includes('svg')) {
        const source = rule.test.source.replace(/svg\|?/, '');
        // eslint-disable-next-line security/detect-non-literal-regexp
        return { ...rule, test: new RegExp(source, rule.test.flags) };
      } else {
        return rule;
      }
    });

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /vue-template/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
            {
              loader: 'vue-svg-loader',
              options: { svgo: svgoConfig }
            }
          ]
        },
        {
          use: [
            {
              loader: 'url-loader',
              options: {}
            }
          ]
        }
      ]
    });
  });
};
