<template>
  <div class="chat">
    <header class="header">
      <p class="username">{{ user.displayName }}さん、こんにちは</p>
      <div class="logout" @click="logout">ログアウト</div>
    </header>
    <section class="main">
      <div class="talkroom">
        <div class="message" v-for="(message, index) in messages" :key="index">
          <div class="each-message">
            <span class="name">{{ message.username }}:</span>
            <span class="mes">
              {{ message.message }}
              <button @click="deleteMessage(index)">削除</button>
            </span>
          </div>
        </div>
        <form class="postmessage" @click.prevent="doSend">
          <input class="post-input" type="text" v-model="newMessage" />
          <input class="send-button" type="submit" placeholder="送信" @click="doSend" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      messages: [],
      newMessage: '',
      db: firebase.firestore()
    }
  },
  props: {
    user: Object
  },
  methods: {
    logout () {
      firebase.auth().signOut()
    },
    deleteMessage (id) {
      console.log('sss')
    },
    doSend () {
      const name = this.user.displayName
      if (this.newMessage.length) {
        this.db.collection('messages')
          .add({
            username: name,
            message: this.newMessage
          })
          .then(function (docRef) {
            console.log('Document written with ID: ', docRef.id)
          })
          .catch(function (error) {
            console.error('Error adding document: ', error)
          })
        this.newMessage = ''
      }
    }
  },
  async mounted () {
    await this.db.collection('messages')
      .onSnapshot(querySnapshot => {
        this.messages = []
        querySnapshot.forEach(doc => {
          this.messages.push(doc.data())
        })
      })
  }
}
</script>

<style>
.header {
  background: #00bcd4;
  display: flex;
  border-bottom: 1px solid #cfcfcf;
}

.username {
  color: white;
  margin-left: 20px;
}

.logout {
  height: 25px;
  margin-top: 13px;
  margin-left: 10px;
  cursor: pointer;
  background: white;
  border-radius: 20px;
  padding: 3px 10px;
  color: #00bcd4;
}

.talkroom {
  border: 1px solid #cfcfcf;
  width: 90%;
  height: 700px;
  margin: auto;
  margin-top: 20px;
  position: relative;
  padding: 20px;
}

.each-message {
  margin-top: 10px;
  border-bottom: 1px solid #cfcfcf;
}

.postmessage {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 100%;
  height: 50px;
}

.post-input {
  width: 70%;
  height: 100%;
  font-size: 20px;
}

.send-button {
  width: 20%;
  height: 100%;
}
</style>
