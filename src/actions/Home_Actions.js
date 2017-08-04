import { BUTTON_IN_HOME_CLICKED } from './types';

// writing general syntax with passing a parameter.. for the below case nothing is passed as parameter
export const buttonInHomeClicked = text => {
  return {
    type: BUTTON_IN_HOME_CLICKED,
    payload: text
  };
};
