import { crossorigin as validatorCrossorigin } from '../../utils/validators';
import Source from '#booster/components/BoosterImage/classes/Source';

export default {
  source: {
    type: [Source, Object],
    default: null
  },

  title: {
    type: String,
    required: true
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
  }
};
