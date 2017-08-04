import { BUTTON_IN_ABOUT_CLICKED } from './types';

// writing general syntax with passing a parameter.. for the below case nothing is passed as parameter
export const buttonInAboutClicked = text => {
  return {
    type: BUTTON_IN_ABOUT_CLICKED,
    payload: text
  };
};
