
import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import Calendar from './components/Calendar';
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'

const CustomElement = wrap(Vue, Calendar);

window.customElements.define('vg-calendar', CustomElement);
/*import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Calendar from './components/Calendar.vue';
import 'document-register-element/build/document-register-element';

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'vg-calendar'
];

// Enable the plugin
Vue.use(vueCustomElement);

// Register your component
Vue.customElement('vg-calendar', Calendar, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});

*/