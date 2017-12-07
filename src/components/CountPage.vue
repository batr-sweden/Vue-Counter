<template>
  <div style="background-color: #fff;">
    <h2>Visits so far</h2>
    <div class="display_visits visit_flex">
      <div class="button day">
        <animate-number
          class="display_today_num count"
          from="1"
          v-bind:to="today"
          duration="2500"
          easing="easeOutQuad"
        ></animate-number>
          <span>Your Visits</span>
      </div>
      <div class="button day">
        <animate-number
          class="display_today_num count"
          from="1"
          v-bind:to="count"
          duration="3500"
          easing="easeOutQuad"
        ></animate-number>
        <span>All Visits</span>
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
        <p>
          {{sam.name}}</br> {{sam.major}}</br> {{sam.school}}</br> {{sam.url}}</br>
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
        <p>
          {{jamiu.name}}</br> {{jamiu.major}}</br> {{jamiu.school}}</br> {{jamiu.url}}</br>
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
      height: 100px; background-color: rgba(000,000,000,0.7); position: fixed;left:0;bottom:0; margin-top: 20px">
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
import VueLocalStorage from 'vue-localstorage';
import VueAnimateNumber from 'vue-animate-number';
import Vue from 'vue'
import { countRef } from '../firebase'
import { Profile } from '../info/profile';

Vue.use(VueLocalStorage);
Vue.use(VueAnimateNumber);

export default {
  name: 'CountPage',
  data () {
    return {
      jamiu: Profile.jamiu,
      sam: Profile.samuel,
      urlJamiu: Profile.jamiu.url,
      urlSam: Profile.samuel.url,
      url2: "https://github.com",
      today: localStorage.visitCounter,
      count: localStorage.fireCount,
    }
  }, //end data
  beforeCreate () {
    //Start storing local visit
    if (localStorage.visitCounter) {
      //Local storage exist, get value and add one
      localStorage.visitCounter = Number(localStorage.visitCounter) + 1;
    } else {
      // create and set 1
      localStorage.visitCounter = 1
    }

    //Get amount of users who has been on site and add this visit.
    countRef.once("value", snapshot => {
      //Get how many people who have been on site from
      //firebase and update firebase info
        let dbCount = snapshot.val().count;
        countRef.set({ count: dbCount+1 });
      //Set Current count to localstorage for display
        localStorage.fireCount = snapshot.val().count + 1;
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
  } //End beforeCreate
}
</script>

  <style lang="sass" scoped>
  @import '../styles/count.sass'
</style>
