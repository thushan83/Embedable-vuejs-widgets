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
    -webkit-box-shadow: 1px 1px 2px 1px;
    box-shadow: 1px 1px 6px 1px;
    margin-bottom: 12px;
    margin-left: 10%;
    margin-right: 10%;
    cursor: pointer;
}

#service-container:hover{
    background-color: #c1212133;
}
</style>
