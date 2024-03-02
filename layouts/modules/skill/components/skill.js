const home = {
    data(){
      return{
        skills :[
          {id:1,label:'Java Script',class:'fa-brands fa-js'},
          {id:2,label:'Html',class:'fa-brands fa-html5'},
          {id:3,label:'Css',class:'fa-brands fa-css3-alt'},  
          {id:4,label:'Vue Js',class:'fa-brands fa-vuejs'},  
          {id:5,label:'C++',class:'fa-solid fa-c'},  
          {id:6,label:'Java',class:'fa-brands fa-java'},
          {id:7,label:'PHP',class:'fa-brands fa-php'},
        ]
      }
    },
    methods:{
    },

    template: `
      <div class="skill p-5 d-flex" style="justify-content: center;">
        <div class="skill-container">
          <div class="d-flex" v-for="item in skills" :key="item.id">
            <div style="color:rgba(65, 105, 225, 0.8);opacity:0.8;">
              <i :class="['fa-3x',item.class]"></i>
            </div>
            <div class="sub-h-font mt-2"> {{item.label}} </div>
        </div>
      </div>
    `
   
  };
  
  export default home;
