import {LOADING_START, LOADING_STOP} from '../../actions/types';

const initialState = {
  loading: false,
};

const loader = (state = initialState, action: any) => {
  const {type, paload} = action;

  switch (type) {
    case LOADING_START:
      return {
        loading: true,
      };
    case LOADING_STOP:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default loader;
