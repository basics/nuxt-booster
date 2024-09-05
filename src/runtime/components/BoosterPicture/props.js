import { crossorigin as validatorCrossorigin } from '../../utils/validators';
import SourceList from '#booster/components/BoosterPicture/classes/SourceList';

export default {
  sources: {
    type: [Array, SourceList],
    required: true
  },

  formats: {
    type: Array,
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
