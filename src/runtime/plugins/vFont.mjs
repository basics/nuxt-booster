import directive from '#speedkit/plugins/vFont/directive';
import mixin from '#speedkit/plugins/vFont/mixin';
import head from '#speedkit/plugins/vFont/head';

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
