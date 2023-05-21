import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
      default: null,
    }
  },


  computed: {
    showImg() {
      const imgWay = this.agendaItem.type;
      return (`/assets/icons/icon-${agendaItemIcons[imgWay]}.svg`);
    },
  },
  showTitle() {
    const titleWay = this.agendaItem.type;
    if (this.agendaItem.title !== null) {
      return titleWay;
    }
    return agendaItemDefaultTitles[titleWay];
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="showImg" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{showTitle}}</h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p>{{agendaItem.description}}</p>
      </div>
    </div>`,

});

