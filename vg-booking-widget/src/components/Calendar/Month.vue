<template>
    <div>

    </div>  
</template>

<script>
import moment from "moment"

export default {
    name:"Month",
    props:["year","month"],
    data(){
        return{
            
        }
    },
    methods:{
        getMonthDates: function(){
              let days = new Date(this.year, this.month, 0).getDate();
               console.log(days+"---");
              let week = [0,0,0,0,0,0,0];
              for(let i=1; i < days;i++){
                  week[1] = 1;
                  console.log("---");
              }
        }
    },
  watch: {
    year: function () {
        this.getMonthDates();
    },
    month: function () {
        this.getMonthDates();
    }
  },
    mounted: function(){
        
    }    
}
</script>

<style scoped>

</style>

