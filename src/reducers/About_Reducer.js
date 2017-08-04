import { BUTTON_IN_ABOUT_CLICKED } from '../actions/types';

// always heve a default state oresle reducers return undefined, which is a pain to decode
const INITIAL_STATE = {
  count: 0
};

// dont  mutate the state. create new state and return it.. rule of reducer
export default function About_Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BUTTON_IN_ABOUT_CLICKED:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

About_Reducer.reducer = 'About_Reducer';
