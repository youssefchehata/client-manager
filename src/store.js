import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// import rootReducer from './reducers';
import notifyReducer from './reducers/notifyReducer'
const firebaseConfig = {
    apiKey: "AIzaSyD3yiDVxf4U5GWgdzqRYR6QMdqXOxEmqM8",
    authDomain: "clientmanager-4f9b3.firebaseapp.com",
    databaseURL: "https://clientmanager-4f9b3.firebaseio.com",
    projectId: "clientmanager-4f9b3",
    storageBucket: "clientmanager-4f9b3.appspot.com",
    messagingSenderId: "959577099270",
    appId: "1:959577099270:web:da6aa270c0ee5b02"
  };
  // react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
  // Initialize firebase instance
firebase.initializeApp(firebaseConfig)
// Initialize firestore instance
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) 
  )(createStore)
// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
     firestore: firestoreReducer ,
     notify:notifyReducer
  })
// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState,compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
))
export default store;


// import { createStore, combineReducers, compose } from 'redux';
// import firebase from 'firebase';
// import 'firebase/firestore';
// import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
// import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// // Reducers
// // import notifyReducer from './reducers/notifyReducer';
// // import settingsReducer from './reducers/settingsReducer';

// const firebaseConfig = {
//     apiKey: "AIzaSyD3yiDVxf4U5GWgdzqRYR6QMdqXOxEmqM8",
//     authDomain: "clientmanager-4f9b3.firebaseapp.com",
//     databaseURL: "https://clientmanager-4f9b3.firebaseio.com",
//     projectId: "clientmanager-4f9b3",
//     storageBucket: "clientmanager-4f9b3.appspot.com",
//     messagingSenderId: "959577099270",
//     appId: "1:959577099270:web:da6aa270c0ee5b02"
//   };

// // react-redux-firebase config
// const rrfConfig = {
//   userProfile: 'users',
//   useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
// };

// // Init firebase instance
// firebase.initializeApp(firebaseConfig);
// // Init firestore
// const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

// // Add reactReduxFirebase enhancer when making store creator
// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
//   reduxFirestore(firebase)
// )(createStore);

// const rootReducer = combineReducers({
//   firebase: firebaseReducer,
//   firestore: firestoreReducer,
//   // notify: notifyReducer,
//   // settings: settingsReducer
// });

// // Check for settings in localStorage
// if (localStorage.getItem('settings') == null) {
//   // Default settings
//   const defaultSettings = {
//     disableBalanceOnAdd: true,
//     disableBalanceOnEdit: false,
//     allowRegistration: false
//   };

//   // Set to localStorage
//   localStorage.setItem('settings', JSON.stringify(defaultSettings));
// }

// // Create initial state
// const initialState = { settings: JSON.parse(localStorage.getItem('settings')) };

// // Create store
// const store = createStoreWithFirebase(
//   rootReducer,
//   initialState,
//   compose(
//     reactReduxFirebase(firebase),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;

