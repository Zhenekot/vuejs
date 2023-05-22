import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: { 
      type: Array,
      required: true,
    },
  },

  template: `
    <ul class="agenda">
      <li v-for="meetup in agenda" class="agenda__item" :key="meetup.id">
      <meetup-agenda-item :agendaItem = "meetup" />
      </li>
    </ul>`,
});
