const contact = {
    data(){
      return{
        contact :[
          {
            phone:{
              label :"PHONE",
              data :"8971964325",
              logo :"fa-solid fa-phone",
            }
          },
          {
            email:{
              label:"EMAIL",
              data:"srujanjanardhan@gmail.com",
              logo:"fa-solid fa-envelope",
            }
          },
          {
            location:{
              label :"LOCATION",
              data:"Madiker,Coorg" ,
              logo:"fa-solid fa-location-dot"
            }
          }
        ],
      }
    },
    methods: {
      // Method to extract label from item
      itemLabel(item) {
        const key = Object.keys(item)[0];
        return item[key].label;
      },
      // Method to extract data from item
      itemData(item) {
        const key = Object.keys(item)[0];
        return item[key].data;
      },
      // Method to get icon class from item
      getIconClass(item) {
        const key = Object.keys(item)[0];
        return item[key].logo;
      }
    },
    template: `
      <div class="contact p-5 d-flex justify-content-center">
        <div class="contact-container p-2">
              <div class="contact-block d-flex justify-content-center flex-column p-4 align-items-center" style="gap: 1em;" v-for='item in contact'>
                <div class="contact-phone-circle" style="box-shadow: blue 0px 0px 12px;"><i :class="[getIconClass(item)]"></i></div>
                <div class ="light-h-font">{{ itemLabel(item) }}</div>
                <div>{{ itemData(item) }}</div>
              </div>
        </div>
      </div>
    `
   
  };
  
  export default contact;
