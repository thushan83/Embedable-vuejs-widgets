<template>
  <div id="calendar-root">
    <div id="calendar-header">
      <div id="month-prev-cont">
        <svg @click="prevMonth()" height="20px" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><line style="fill:none;stroke:#2F3435;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="87.5" x2="40.5" y1="111" y2="64"/><line style="fill:none;stroke:#2F3435;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="40.5" x2="87.5" y1="64" y2="17"/></g></svg>
      </div>
      <div id="month-text-cont">{{current_month}}</div>
      <div id="month-next-cont">
        <svg @click="nextMonth()" height="20px" id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><line style="fill:none;stroke:#2F3435;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="40.5" x2="87.5" y1="17" y2="64"/><line style="fill:none;stroke:#2F3435;stroke-width:12;stroke-linecap:square;stroke-miterlimit:10;" x1="87.5" x2="40.5" y1="64" y2="111"/></g></svg>
      </div>
      </div>
    <div id="calendar-body">
      <Weekdays></Weekdays>
    </div>
    <div id="calendar-footer"></div>

  </div>
</template>

<script>
import Weekdays from '../components/Weekdays.vue';

export default {
  name: 'Calendar',
  components:{Weekdays},
  data () {
    return {
      months:["January", "February","March","April", "May", "June", "July", "Auguest","September", "Octomber","November", "December"],
      current_month: "",
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
     init:function(){
        this.current_month = this.months[(new Date()).getMonth()];
     },
     nextMonth:function(){
        let cur_month_index = this.getIndexOfMonth(this.current_month);
        let nextIndex = cur_month_index+1;
        if(this.months.length > nextIndex  || this.months.length-1 == nextIndex){
          this.current_month = this.months[cur_month_index+1];
        }
     },
     prevMonth:function(){
        let cur_month_index = this.getIndexOfMonth(this.current_month);
        let nextIndex = cur_month_index-1;
        if(0 < nextIndex || 0 == nextIndex){
          this.current_month = this.months[cur_month_index-1];
        }
     },
     getIndexOfMonth: function(month){
       return this.months.indexOf(month);
     }
  },
  mounted(){
    this.init();
  }
}
</script>

<style scoped>
#calendar-header{
    background-color: #cccccc;
    height: 25px;
    width: 300px;
    padding: 10px;
}

#calendar-header div{
   float:left;
}

#prev{
  float:left;
}

#next{
    float: right;
}

#month-prev-cont{
  width:15%;
}

#month-next-cont{
  width:15%;
}

#month-text-cont{
  margin: 0 auto;
  width:70%;
}

#calendar-body{
   width: 300px;
   padding: 10px;
   background-color: #f1f0f0;
   height: 200px;
}

#calendar-footer{
   width: 310px;
   background-color: #cccccc;
   height: 25px;
   padding:5px;
}

@media only screen and (max-width: 400px) {
  #calendar-header{
    width: 100%;
  }
}
</style>
