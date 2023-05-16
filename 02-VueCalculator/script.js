import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение

createApp({
    data() {
      return {
        firstNum: 0,
        secondNum: 0,
        act: ""
      }
    },

    computed:{
        result(){
            if(this.act === "sum"){
                return this.firstNum + this.secondNum;
            }
            if(this.act === "subtract"){
                return this.firstNum - this.secondNum;
            }
            if(this.act === "multiply"){
                return this.firstNum * this.secondNum;
            }
            if(this.act === "divide"){
                return this.firstNum / this.secondNum;
            }   
        }
    }
  }).mount('#app')