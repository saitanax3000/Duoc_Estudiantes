// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_KEY: '6b2493ac87f078a73e69876d034ee4c9',
  API_URL:'https://api.openweathermap.org/data/2.5/',
  firebase: {
    projectId: 'ionic1-81ddb',
    appId: '1:752175073540:web:37acd665b66f3fd6aa2851',
    storageBucket: 'ionic1-81ddb.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAk-SSjUpgE8h8520KOKV02m9yxIya1Cco',
    authDomain: 'ionic1-81ddb.firebaseapp.com',
    messagingSenderId: '752175073540',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
