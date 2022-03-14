import directive from 'nuxt-speedkit/plugins/vFont/directive';
import mixin from 'nuxt-speedkit/plugins/vFont/mixin';
import head from 'nuxt-speedkit/plugins/vFont/head';

let _installed = false;

export default {
  install (Vue, options) {
    if (_installed) { return; }
    _installed = true;

    directive.install(Vue, 'font');
    mixin.install(Vue);
    head.install(Vue);
  }
};
