import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HydrationWrapper',

  setup(props, { slots }) {
    return () => normalizeSlot(slots.default());
  }
});

const normalizeSlot = slotContent =>
  slotContent.length === 1 ? slotContent[0] : slotContent;
