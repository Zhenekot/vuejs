 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

createApp({
  data(){
    return {
      meetup: '',
      act: 0
    }
  },

  watch:{
    'act':{
      async handler(newValue){
        this.meetup =(await fetchMeetupById(newValue)).title;
      },
      
    }
  }
}).mount("#app")
// Требуется создать Vue приложение
