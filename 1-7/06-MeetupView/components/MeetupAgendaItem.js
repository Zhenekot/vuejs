import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../../05-MeetupAgenda/meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    }
  },

  agendaItemDefaultTitles,
  


  computed: {
    showImg() {
      const imgWay = this.agendaItem.type;
      return (`/assets/icons/icon-${agendaItemIcons[imgWay]}.svg`);
    },
  },
  // showTitle() {
  //   const titleWay = this.agendaItem.type;
  //   return agendaItemDefaultTitles[titleWay];
  // },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="showImg" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{agendaItem.startsAt}} - {{agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title" v-if="agendaItem.title">{{agendaItem.title}}</h3>
        <h3 class="agenda-item__title" v-else>{{$options.agendaItemDefaultTitles[agendaItem.type]}}</h3>
        <p v-if="agendaItem.type === 'talk'" class="agenda-item__talk">
          <span>{{agendaItem.speaker}}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{agendaItem.language}}</span>
        </p>
        <p v-if="agendaItem.description">{{agendaItem.description}}</p>
      </div>
    </div>`,

});

