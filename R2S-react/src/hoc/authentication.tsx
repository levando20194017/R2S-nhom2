// import { ConnectedRouterRedirectConfig } from "redux-auth-wrapper/history4/redirect";
// import locationHelperBuilder, { LocationHelper } from "redux-auth-wrapper/history4/locationHelper";

// import { connectedRouterRedirect, InjectedAuthRouterProps } from 'redux-auth-wrapper/history4/redirect';
// import { AuthWrapperDecorator } from 'redux-auth-wrapper/authWrapper';
// type MyComponentProps = {
//     id: number;
//     fullName: string;
//     email: string;
//     phoneNumber: string;
//     address: string,
//     gender: boolean;
//     // ...
// };
// const locationHelper: LocationHelper<any> = locationHelperBuilder({});

// const userIsAuthenticated: AuthWrapperDecorator<InjectedAuthRouterProps<{}, {}>> = connectedRouterRedirect({
//     authenticatedSelector: (state: { user: { isLoggedIn: boolean } }) => state.user.isLoggedIn,
//     wrapperDisplayName: 'UserIsAuthenticated',
//     redirectPath: '/login'
//   });

// const userIsNotAuthenticated: ConnectedRouterRedirectConfig<{}, {}> = connectedRouterRedirect({
//     authenticatedSelector: (state: { user: { isLoggedIn: boolean } }) => !state.user.isLoggedIn,
//     wrapperDisplayName: 'UserIsNotAuthenticated',
//     redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
//     allowRedirectBack: false
// });

// export { userIsAuthenticated, userIsNotAuthenticated };
export { }