import firebase from 'firebase';
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
	apiKey: "AIzaSyA-peMo2NRbb6YtRAl7F3s2YMlTVLTgFns",
	authDomain: "next-disney-3ad44.firebaseapp.com",
	projectId: "next-disney-3ad44",
	storageBucket: "next-disney-3ad44.appspot.com",
	messagingSenderId: "82814959220",
	appId: "1:82814959220:web:23a0b7b523253d0c88db21",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = app.firestore();

export {db};