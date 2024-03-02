const pageHeader = {
  data(){
    return{
      selectedTab :"",
      hoveredTab:"",
      moduleName:"",
      navItems: [
        { id: 1, label: 'Home', value: 'home' },
        { id: 2, label: 'Skills', value: 'skills' },
        { id: 3, label: 'Contact', value: 'contact' },
      ]
    }
  },
  methods:{
    handleClick(moduleName){
      this.selectedTab = moduleName;
      this.moduleName=moduleName;
      this.$root.$emit('module-selected',this.moduleName);
    }
  },  
  template: `
      <div id="header">
        <div class="nav-bar">
          <div class="nav-side-box" @click="handleClick('home')">Sp</div>
          <div class="nav-items"  v-for="item in navItems" :class="selectedTab == item.value?'tab-active':''" :key="item.id" @click="handleClick(item.value)"">
            {{ item.label }}
          </div>
        </div>
      </div>
    `,
  };

  export default pageHeader;