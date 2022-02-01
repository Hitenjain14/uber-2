import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAH7botB_A8x9r7khTB_T8ucigXKisuFZk',
  authDomain: 'uber-2-hj.firebaseapp.com',
  projectId: 'uber-2-hj',
  storageBucket: 'uber-2-hj.appspot.com',
  messagingSenderId: '686441500978',
  appId: '1:686441500978:web:73b41f54af26db9e92c72b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const auth = getAuth();

export { app, provider, auth };
