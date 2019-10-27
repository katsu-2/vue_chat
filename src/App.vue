<template>
  <div id="app">
    <Home v-if="!isLogin" />
    <Chat v-if="isLogin" :user="userData" />
  </div>
</template>

<script>
import firebase from 'firebase'
import Home from './components/Home'
import Chat from './components/Chat'

export default {
  name: 'App',
  components: {
    Chat,
    Home
  },
  data () {
    return {
      isLogin: false,
      userData: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  }
}
</script>

<style>
</style>
