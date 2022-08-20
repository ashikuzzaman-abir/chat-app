const { initializeApp } = require("firebase/app") ;

const {getFirestore} = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API,
	authDomain: "chat-app-anonymous.firebaseapp.com",
	projectId: "chat-app-anonymous",
	storageBucket: "chat-app-anonymous.appspot.com",
	messagingSenderId: process.env.FIREBASE_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: "G-3PL2CW0JFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


exports.app = app;
exports.db = getFirestore(app);
