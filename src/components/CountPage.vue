<template>
  <div style="background-color: #fff; padding: 55px;">
      <div class="countBox">
        <div class="countBox" style="padding: 5px"><div class="countBox">
        </div>
        <div class="countBox" style="border-bottom: 3px solid black;">YOU BEEN HERE</div>
      </div>
      <div class="countBox" style="padding: 5px">
        <div class="countBox" style="border-bottom: 3px solid black;">VISITORS
        </div>
        <div class="countBox">
        </div>
      </div>
      </div>
    <div style="flex:1; display:flex;">
      <div class="countBox"style="padding:5px">
        <div class="countBox"></div>
        <div class="countBox" style="background-color:rgba(5, 149, 161, 0.5);align-items:center;">
          <p style="color:#fff;font-size: 23px; font-weight: 400">{{ today }} TIMES</p>
        </div>
      </div>
    <div class="countBox" style="padding:5px">
      <div class="countBox" style="background-color:rgba(5, 149, 161, 0.5);align-items:center;">
        <p style="color:#fff;font-size: 23px; font-weight: 400">{{ count }} TIMES</p>
      </div>
  <div class="countBox"></div>
  </div>
    </div>
    <div style="margin-top:20px;flex: 1; flex-direction: row; display: flex;">
      <div class="styleBox">
        <img class="profile" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"src="../assets/profilesam.jpg">
      </div>
      <div class="styleBox">
          <img class="profile" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"src="../assets/profilemar.jpg">
      </div>
    </div>
<div style="flex: 1; flex-direction: row; display: flex;">
  <div style="flex: 1; flex-direction: column; display: flex; justify-content: center;">
    <p>Samuel Rudholm</br>
    Blivande Applikation/Javascript-utvecklare</br>
    Göteborgs Stad • Jensen yrkeshögskola</br>
    Göteborg, Västra Götalands län, Sverige</br>
  </p>
    <div class="styleBox">
  <a v-bind:href="urlJamiu">
    <img style="width: auto; height: 42px;" src="../assets/linkedinlogo.png">
  </a>
  <a v-bind:href="urlJamiu">
    <img style="width: auto; height: 39px;" src="../assets/facebooklogo.png">
  </a>
    </div>
  </div>
<div style="flex: 1; flex-direction: column; display: flex; justify-content: center;">
  <p>Jamiu Makanjuola</br>
  Blivande Applikation/Javascript-utvecklare</br>
  Göteborgs Stad • Jensen yrkeshögskola</br>
  Göteborg, Västra Götalands län, Sverige</br>
</p>
<div class="styleBox">
<a v-bind:href="urlSam">
  <img style="width: auto; height: 42px;" src="../assets/linkedinlogo.png">
</a>
<a v-bind:href="urlJamiu">
  <img style="width: auto; height: 39px;" src="../assets/facebooklogo.png">
</a>
</div>
</div>
</div>
<div style="flex: 1; display: flex; align-items: center;padding:10px;justify-content: center; flex-direction: row; border: 1px solid black; width: 100%;
height: 100px; background-color: rgba(000,000,000,0.7); position: fixed;left:0;bottom:0;">
<div style="position: absolute; top: -60px;">
<a v-bind:href="url2">
<img style="width: auto; height: 100px;" src="../assets/githublogo.png">
</a>
</div>
<p style="color:white;">
•JavaScript •HTML5 •Node.js •React •React Native •NPM •CSS •JQuery •UX/UI Design •Photoshop •AngularJS •Illustrator •Firebase •Wordpress •Git
</p>
</div>
</div>
</template>

<script>
import VueLocalStorage from 'vue-localstorage'
import Vue from 'vue'
import {app} from '../firebase'

Vue.use(VueLocalStorage);
let count, latestCount;
let newcount = count+1;
export default {
  name: 'CountPage',
  data () {
    return {
      urlJamiu: "https://www.linkedin.com/in/samuel-rudholm-1a6480132/",
      urlSam: "https://www.linkedin.com/in/samuel-rudholm-1a6480132/",
      url2: "https://github.com",
      today: localStorage.visitCounter,
      count: Number(localStorage.fireCount) +1,
    }
  },
  created () {
    console.log('created!')
  },
  beforeCreate () {
    console.log('Component will mount'+ this.visitCounter)
      if (typeof(Storage) !== "undefined") {
          // Code for localStorage/sessionStorage.
          if (localStorage.visitCounter) {
            localStorage.visitCounter = Number(localStorage.visitCounter) + 1
          } else {
            localStorage.visitCounter = 1
          }
      } else {
        // Sorry! No Web Storage support..
        console.log('Sorry! No Web Storage support..')
      };
      app.database().ref('counter/total').once('value', snapshot => {
       console.log(snapshot.val())
       count = snapshot.val().count;
       app.database().ref('counter/total').set({
         count: count+1,
       }).then(
         app.database().ref('counter/total').once('value', snapshot => {
           localStorage.fireCount = snapshot.val().count
         })
       )
     },
     function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    })
    },
beforeDestroy () {
    console.log('‘Component has has been destroyed’')
  }
}

</script>

  <!--style lang="sass" scoped>
  @import 'styles/count.sass'
</style>-->
