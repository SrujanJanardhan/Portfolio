import home from '../../home/components/home.js';
import skill from '../../skill/components/skill.js';
import contact  from '../../contact/components/contact.js';
Vue.component('home-view', home);
Vue.component('skill-view', skill);
Vue.component('contact-view',contact)


const moduleView = {
    created(){
      this.showModal('home')
    },
    props:{
        moduleName:{
            type:String,
            required : true
        }
    },
    watch:{
        moduleName:{
            handler(){
                this.showModal(this.moduleName);
            }
        }
    },
    methods:{
        showModal(moduleName){
            this.moduleName = moduleName;
        }
    },
    template: `
      <div class="module-view">
        <home-view v-if="moduleName === 'home'"></home-view>
        <skill-view v-if="moduleName === 'skills'"></skill-view>
        <contact-view v-if="moduleName === 'contact'"></contact-view>
      </div>
    `
  };
  
  export default moduleView