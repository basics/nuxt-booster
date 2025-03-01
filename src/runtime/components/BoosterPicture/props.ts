import { crossorigin as validatorCrossorigin } from '../../utils/validators';
import type Source from '../BoosterImage/classes/Source';

export default {
  sources: {
    type: Array<Source | object>,
    default() {
      return [];
    }
  },

  formats: {
    type: Array<string>,
    default() {
      return null;
    }
  },

  title: {
    type: String,
    default: null
  },

  alt: {
    type: String,
    default: null
  },

  crossorigin: {
    type: [Boolean, String],
    default() {
      return null;
    },
    validator: validatorCrossorigin
  },

  sortSources: {
    type: Boolean,
    default: true
  }
};
