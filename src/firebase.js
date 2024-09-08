import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAlazs5p8UooFgw4EMuuqFCjyEfyfruErQ",
    authDomain: "resume-analyzer-f357f.firebaseapp.com",
    projectId: "resume-analyzer-f357f",
    storageBucket: "resume-analyzer-f357f.appspot.com",
    messagingSenderId: "177127162960",
    appId: "1:177127162960:web:b47e47f4def67865f1fd55",
    measurementId: "G-YJBDDPFS19"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
