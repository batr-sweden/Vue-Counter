<template src="./CountPage.html"></template>

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
