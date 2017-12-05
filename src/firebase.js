import Firebase from 'firebase'
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDRFr6gKXtR3iaKd2WAz_f7KhmaRorFdTM',
  authDomain: 'vue-counter.firebaseapp.com',
  databaseURL: 'https://vue-counter.firebaseio.com',
  projectId: 'vue-counter',
  storageBucket: 'vue-counter.appspot.com',
  messagingSenderId: '901063017053'
}
const app = Firebase.initializeApp(config)

export { app }
