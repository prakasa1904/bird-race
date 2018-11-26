import { makeActionCreator } from '@helpers/redux';

export const MOBILE_MENU_STATUS = '@@app/MOBILE_MENU_STATUS';
export const updateMobileMenuStatus = makeActionCreator(MOBILE_MENU_STATUS);
