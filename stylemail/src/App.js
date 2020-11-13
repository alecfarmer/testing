//import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

firebase.initializeApp({
  apiKey: "AIzaSyAykJn3KwY8S00bEqHSOCIYUE0JRnD5kmc",
  authDomain: "fir-test-400dc.firebaseapp.com",
  databaseURL: "https://fir-test-400dc.firebaseio.com",
  projectId: "fir-test-400dc",
  storageBucket: "fir-test-400dc.appspot.com",
  messagingSenderId: "899641804209",
  appId: "1:899641804209:web:1ee4aaece932abc05fe990"
})

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Test login</h1>
        <SignOut />
      </header>

      <section>
        {user ? <Test/> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  }

  const signInWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(facebookProvider);
  }

  const signInWithTwitter = () => {
    const twitterProvider = new firebase.auth.TwitterAuthProvider();
    auth.signInWithPopup(twitterProvider);
  }

  const signInWithGithub = () => {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(githubProvider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <button className="sign-in" onClick={signInWithFacebook}>Sign in with Facebook</button>
      <button className="sign-in" onClick={signInWithTwitter}>Sign in with Twitter</button>
      <button className="sign-in" onClick={signInWithGithub}>Sign in with GitHub</button>
      <p>Please login.</p>
    </>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function Test() {
  return (
    <>
      <p>Congrats, you're in!</p>
    </>
  )
}

export default App;
