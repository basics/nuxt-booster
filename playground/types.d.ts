import type { NuxtLinkProps } from '#app/components';
import type { DefineComponent } from 'vue';

declare module '*.svg?component' {
  const component: DefineComponent;
  export default component;
}

export interface LinkProps extends NuxtLinkProps {
  title: string;
}
