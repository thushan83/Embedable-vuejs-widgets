
<template>
   <div  >
      <component :is="currentComponent"></component>      
   </div>
</template>

<script>
import axios from 'axios';
import ServiceList from './Services/ServiceList.vue';
import Calendar from './Calendar/Calendar.vue';

export default {
    name:"EntryComponent",
    props:["themeId"],
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
        },
        getStyles : function(){            
            axios.get("http://demo8114933.mockable.io/customer/"+this.themeId+"/styles")
            .then(function (response){
                let bodyStyles = document.body.style;                
                console.log(response)
                bodyStyles.setProperty('--service-title-color', response.data.branding.colors.serviceTitleColor);
                bodyStyles.setProperty('--service-item-caption-color', response.data.branding.colors.serviceItemCaptionColor);
                bodyStyles.setProperty('--service-item-bg-color', response.data.branding.colors.serviceItemBgColor);
                bodyStyles.setProperty('--service-item-hover-color', response.data.branding.colors.serviceItemHoverColor);
                bodyStyles.setProperty('--calendar-header-bg-color', response.data.branding.colors.calendarHeaderBgColor);
                bodyStyles.setProperty('--calendar-footer-bg-color', response.data.branding.colors.calendarFooterBgColor);
                bodyStyles.setProperty('--calendar-body-bg-color', response.data.branding.colors.calendarBodyBgColor);
                bodyStyles.setProperty('--calendar-month-text-color', response.data.branding.colors.calendarMonthTextColor);
                bodyStyles.setProperty('--calendar-header-arrow-color', response.data.branding.colors.calendarHeaderArrowColor);
                bodyStyles.setProperty('--calendar-day-text-color', response.data.branding.colors.calendarDayTextColor);
                bodyStyles.setProperty('--calendar-date-text-color', response.data.branding.colors.calendarDateTextColor);
                
            }).catch(e => {
               console.log(e)
            });
        }
    },
    created(){
        this.getStyles();
    }
}
</script>
<style scoped>
:root{
    --service-title-color:  #c12121; 
    --service-item-caption-color: #ffffff;
    --service-item-bg-color:rgb(206, 68, 68);
    --service-item-hover-color:#c121216c;
    --calendar-header-bg-color:#c12121;
    --calendar-footer-bg-color:#c12121;
    --calendar-body-bg-color:#f1f0f0;
    --calendar-month-text-color:#ffffff;
    --calendar-header-arrow-color:#ffffff;
    --calendar-day-text-color:#ffffff;
    --calendar-date-text-color:#ffffff;
    
}



@media only screen and (max-width: 400px) {
  #root{
    width: 100%;
  }
}

</style>
