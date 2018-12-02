import { makeActionCreator } from '@helpers/redux';

export const APP_LOADING = '@@app/APP_LOADING';
export const updateAppLoading = makeActionCreator(APP_LOADING);

export const APP_TITLE = '@@app/APP_TITLE';
export const updateAppTitle = makeActionCreator(APP_TITLE);

export const MOBILE_MENU_STATUS = '@@app/MOBILE_MENU_STATUS';
export const updateMobileMenuStatus = makeActionCreator(MOBILE_MENU_STATUS);
