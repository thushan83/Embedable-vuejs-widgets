<template>
    <div>
        <div>
            <div id="title_container"><span id="title">{{title}}</span></div>
            <div>
                <service v-for="srv in services" :key="srv.id" v-bind:srviceId="srv.id" v-bind:caption="srv.caption"></service>
            </div>  
        </div>      
    </div> 
</template>
<script>
import Service from './Service.vue';

export default {
    name:"ServiceList",
    components:{Service},
    data(){
        return{
        services:[
            {"id":1,"caption":"service 1"},
            {"id":2,"caption":"service 2"},
            {"id":3,"caption":"service 3"},
            {"id":4,"caption":"service 4"},
            {"id":5,"caption":"service 5"},
            {"id":6,"caption":"service 6"},
            ],
        title:"Please select a service for booking"
        }
    }
}
</script>
<style scoped>
  #title{
     padding: 10px;
     color: #c12121;
     font-size: 22px;
  }

  #title_container{
      padding: 10px;
  }
</style>
