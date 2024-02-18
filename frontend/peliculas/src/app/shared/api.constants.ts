// TODO: this should be in an env variable

import { environment } from '../../environments/environment';

const API_BASE_URL = environment.API_BASE_URL;
const WEB_BASE_URL = environment.WEB_BASE_URL;

export const constants = {

	API_BASE_URL: API_BASE_URL,

	WEB_BASE_URL: WEB_BASE_URL,
	
	// Routes for table "item":
	API_SUGGESTION: API_BASE_URL + '/suggestion',

	// Route for auth --> Login
	API_LOGIN: API_BASE_URL + '/auth/login',

	API_ARCHIVOS_PROCESO: API_BASE_URL + '/archivos',

	// Route for auth --> Logout
	API_LOGOUT: API_BASE_URL + '/auth/logout',

	// Route for auth --> Refresh JWT
	API_REFRESH_JWT: API_BASE_URL + '/auth/refresh',

	// Route for users --> Users admin
	API_USER: API_BASE_URL + '/user',

	// Route for users --> Verify user email
	API_VERIFY_NEW_USER_EMAIL: API_BASE_URL + '/user' + '/verify-email',

	// Route for table "user" --> Update user status
	API_USER_STATUS_UPDATE: API_BASE_URL + '/user/update-status',

	// Route for table "auth" --> Verify token
	API_VERIFY_ACCESS_TOKEN: API_BASE_URL + '/auth/verify-token',

};
