const home = {
    data(){
      return{
        aboutActive :false,
        intro :"Hi,I'm Srujan,a Software developer based out of coorg",
        aboutMe:"Dedicated and results-driven professional with a Master's degree in Computer Applications and a background in software development. Currently employed as a Software Developer, I bring a solid foundation in computer science, coupled with hands-on experience",
      }
    },
    methods:{
      toggleActive(){
        this.aboutActive = !this.aboutActive;
      },
      redirectURLs(name){
        if(name=="instagram"){
          window.open("https://www.instagram.com/srujan_p.j/", "_blank");
        }
        if(name=="linkedIn"){
          window.open("https://www.linkedin.com/", "_blank");
        }
        if(name=="github"){
          window.open("https://github.com/SrujanJanardhan", "_blank");
        }

      }
    },

    template: `
      <div class="home">
        <div class="title">
          <div class="home-content">
            <div class="home-side-line"></div>
            <div class="pl-2 light-h-font" style="border-left:2px solid rgba(65, 105, 225, 0.8);">INTRO</div>
            <div class="home-desc mt-3 ls-1" >{{ intro }}</div>
            <div class="d-flex mt-4">
              <button class="btn-red-2" :class="{ 'fa-solid fa-arrow-right': !aboutActive, 'fa-solid fa-arrow-down': aboutActive }" @click="toggleActive"></button>
              <div class="ml-2 ls-0 font-weight-bold light-h-font" :class="{'bm-red':aboutActive}">ABOUT ME</div>
            </div>
            <div v-if="aboutActive" class="home-container-about ls-1 mt-2 p-4">{{ aboutMe}}</div>
            <div class="mt-5 light-h-font">Else where</div>
            <div class="home-contact-logos d-flex mt-2" style="opacity:0.8;">
                <button class="btn-red-2" @click="redirectURLs('instagram')"><i class="fa-brands fa-instagram"></i></button>
                <button class="btn-red-2" @click="redirectURLs('linkedIn')"><i class="fa-brands fa-linkedin-in"></i></button>
                <button class="btn-red-2" @click="redirectURLs('github')"><i class="fa-brands fa-github"></i></button>
            </div>
          </div>
        </div>
        <div class="bm-red-end fixed-bottom w-25"></div>
      </div>
    `
   
  };
  
  export default home;
