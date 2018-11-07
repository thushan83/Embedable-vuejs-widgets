<template>
    <div v-on:click="selectService()"  id="service-container">
       <span>{{this.caption}}</span>       
    </div>  
</template>
<script>
import { EntryComponent } from '../EntryComponent.vue';

export default {
    name:"Service",
    props:["caption", "srviceId", "selected"],
    methods:{
        selectService:function(){ 
            this.$parent.$parent.setActiveComponent("calendar");
        }
    }
}
</script>
<style scoped>
#service-container{
    padding: 10px;
    background-color: var(--service-item-bg-color);
    border-radius: 6px;
    color: var(--service-item-caption-color);
    margin-bottom: 12px;
    margin-left: 10%;
    margin-right: 10%;
    cursor: pointer;
    text-align: center;
}

#service-container:hover{
    background-color: var(--service-item-hover-color);
}
</style>
