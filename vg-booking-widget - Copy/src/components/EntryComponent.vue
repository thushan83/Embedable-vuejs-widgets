<template>
   <div >
      <component :is="currentComponent"></component>
   </div>
</template>

<script>
import ServiceList from './Services/ServiceList.vue';
import Calendar from './Calendar/Calendar.vue';
import Vue from 'vue';

export const EventBus = new Vue();

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
    created(){
        EventBus.$on("onData", (component) => {
            this.currentComponent = component;
        })
    }
}
</script>
