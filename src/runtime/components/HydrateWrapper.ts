import type { RendererElement, RendererNode, VNode } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HydrationWrapper',

  setup(props, { slots }) {
    const test = slots.default ? slots.default() : [];
    return () => normalizeSlot(test);
  }
});

const normalizeSlot = (
  slotContent: VNode<
    RendererNode,
    RendererElement,
    {
      [key: string]: unknown;
    }
  >[]
) => (slotContent.length === 1 ? slotContent[0] : slotContent);
