import directive from '#booster/plugins/vFont/directive';
import mixin from '#booster/plugins/vFont/mixin';
import head from '#booster/plugins/vFont/head';

let _installed = false;

export default {
  install(Vue, options) {
    if (_installed) {
      return;
    }
    _installed = true;

    directive.install(Vue, 'font');
    mixin.install(Vue);
    head.install(Vue);
  }
};
