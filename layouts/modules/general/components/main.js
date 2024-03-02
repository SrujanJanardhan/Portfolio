import pageHeader from '../components/pageheader.js';
import pageContent from '../components/pagecontent.js';

Vue.component('page-header', pageHeader);
Vue.component('page-content', pageContent);

new Vue({
  el: '#app',
  template: `
    <div>
      <page-header></page-header>
      <page-content></page-content>
    </div>
  `
});