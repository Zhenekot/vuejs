import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupDescription',
  props:{
    description:{
      type: String,
      default: "Нет описания",
    },
  },
  template: `<p class="meetup-description" v-model:>{{description}}</p>`,
});
