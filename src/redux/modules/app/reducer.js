import { APP_TITLE, MOBILE_MENU_STATUS } from './actions';

const actionHandlers = {
  [APP_TITLE]: (state, payload) => ({ ...state, title: payload }),
  [MOBILE_MENU_STATUS]: (state, payload) => ({ ...state, showMobileMenu: payload }),
};

export const getInitialState = () => ({
  title: 'Dashboard',
  showMobileMenu: false,
});

const appReducer = (state = getInitialState(), { type, payload }) => {
  const hasAction = Object.prototype.hasOwnProperty.call(actionHandlers, type);

  return hasAction ? actionHandlers[type](state, payload) : state;
};

export default appReducer;
