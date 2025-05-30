export default await (async () =>
	(await import("firebase/app")).initializeApp({
		apiKey: "AIzaSyAAuyzQiEtKCFQb_r0lZqNr2u1NT-fhBig",
		appId: "1:1060352414161:web:3eb6468e03a8d05933d0f0",
		authDomain: "secret-signup.firebaseapp.com",
		databaseURL: "", // TODO Replace with your database URL
		measurementId: "G-W3JVP5HEXN",
		messagingSenderId: "1060352414161",
		projectId: "secret-signup",
		storageBucket: "secret-signup.appspot.com",
	}))();
