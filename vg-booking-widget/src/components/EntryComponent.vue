<template>
   <div >
      <component :is="currentComponent"></component>      
   </div>
</template>

<script>
import ServiceList from './Services/ServiceList.vue';
import Calendar from './Calendar/Calendar.vue';
import Vue from 'vue';

export default {
    name:"EntryComponent",
    components:{
        "services":ServiceList ,
        "calendar": Calendar
        },
    data(){
        return{
            currentComponent:"services"
        }
    },
    methods:{
        setActiveComponent:function(component){
           this.currentComponent = component;
        }
    }
}
</script>
