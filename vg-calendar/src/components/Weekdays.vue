<template>
  <div id="week_day_container">
    <div id="dayContainer" v-for="day in weekdays" :key="day" >
      {{subStr(day)}}
    </div>
  </div>
</template>
<script>
export default{
    name: "Weekdays",
    data(){
      return{
         weekdays:["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"],
         weekdays_preview:[]
      }
    },
    methods:{
      init:function(){
        this.weekdays_preview = [];
        this.weekdays.forEach(function(day){
          console.log(day);
         // this.weekdays_preview.push(subStr(day));
        })
      },
      subStr:function(day){
        return day.substring(0,3);
      }
    },
    mounted(){
      this.init();
    }
}
</script>
<style scoped>
   #week_day_container{
      height: 20px;
      width:100%;
   }

   #dayContainer{
     float:left;
     width:14%;
     height:100%;
     font-size:10px;
   }
</style>

