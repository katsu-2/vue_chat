<template>
  <div>
    <h1>ChatAppへようこそ</h1>
    <button @click="googleAuth">Googleでログイン</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    googleAuth () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>

<style>
</style>
