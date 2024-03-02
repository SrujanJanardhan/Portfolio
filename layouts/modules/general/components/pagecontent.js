import home from '../../home/components/home.js';
import moduleView from '../components/moduleView.js';

Vue.component('module-view',moduleView)

const pageContent = {
    data(){
      return{
        moduleName :''
      }
    },
    template: `
      <div>
        <module-view :moduleName="moduleName"></module-view>
      </div>
    `,
    created() {
     this.$root.$on('module-selected',this.moduleChange);
    },
    methods :{
      moduleChange(moduleName){
        this.moduleName = moduleName;
      }
    }
  };
  
  export default pageContent;