// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api:{
    key: '?api_key=41eb6ec4e5ab5837703866a4ca5cca45',
    baseUrl:'https://api.themoviedb.org/3/search/movie?api_key=41eb6ec4e5ab5837703866a4ca5cca45&query=',
    baseUrlID:'https://api.themoviedb.org/3/movie/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
