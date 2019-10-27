// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyBtq68wKfjIpeEPhr3aS328lUfzbMuL6Ic',
  authDomain: 'chat-app-d5cd2.firebaseapp.com',
  databaseURL: 'https://chat-app-d5cd2.firebaseio.com',
  projectId: 'chat-app-d5cd2',
  storageBucket: 'chat-app-d5cd2.appspot.com',
  messagingSenderId: '1034762248531',
  appId: '1:1034762248531:web:1375e9f3a384e48d2241a6'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
