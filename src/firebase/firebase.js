import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCIm68Hkm8duWMQM3srsw50ra4OAaMXWUE",
  authDomain: "newportfolio-3729a.firebaseapp.com",
  databaseURL: "https://newportfolio-3729a-default-rtdb.firebaseio.com",
  projectId: "newportfolio-3729a",
  storageBucket: "newportfolio-3729a.appspot.com",
  messagingSenderId: "730454277113",
  appId: "1:730454277113:web:ea21d75deb5026195f9b28",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
