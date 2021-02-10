import firebase from 'firebase/app';
import 'firebase/auth';   
import 'firebase/database' ;    // for authentication

console.log('process.env',process.env);

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "goalcoach-ef72e.firebaseapp.com",
  databaseURL:"https://goalcoach-ef72e-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "goalcoach-ef72e",
  storageBucket: "goalcoach-ef72e.appspot.com",
  messagingSenderId: "375149489181",
  appId: "1:375149489181:web:1a1713e54dc64fb7312af4",
  measurementId: "G-6WCWWBVNTP"
};

 export const firebaseApp = firebase.initializeApp(config);
 export const goalRef = firebase.database().ref('goals');
 export const completeGoalRef = firebase.database().ref('completeGoals');
 