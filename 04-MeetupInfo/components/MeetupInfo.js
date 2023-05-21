import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      default: '',
      required: true,
    },

    place: {
      type: String,
      default: '',
      required: true,
    },

    date: {
      type: Number,
      required: true,
    }
  },

  methods: {
    formatAsLocalDate(date) {
      return new Date(date).toLocaleString(navigator.language, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },

    formatAsIsoDate(date) {
      return new Date(date).toISOString().split('T')[0];
    },
  },
  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatAsIsoDate(date)">{{formatAsLocalDate(date)}}</time>
      </li>
    </ul>`,
});
