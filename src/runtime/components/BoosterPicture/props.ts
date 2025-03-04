import type { ISource } from '../../../module';
import { crossorigin as validatorCrossorigin } from '../../utils/validators';

export default {
  sources: {
    type: Array<ISource>,
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
