<template>
 <v-app id="app" style="background: #fff">
   <v-flex xs12>
 <v-toolbar id="navip" flat app style="background-color: #131723">
   
       <v-toolbar-items  class="hidden-sm-and-down">
       <router-link id="homep" class="white--text text-uppercase" to="/homep">Home</router-link>
      <router-link id="eventsp" class="white--text text-uppercase" to="/eventsp">Events</router-link>
      <router-link id="calendarp" class="white--text text-uppercase" to="/calendarp">Calendar</router-link>
 </v-toolbar-items>
   <v-flex class="mt-5" xs12> <router-link to="/"> <v-img id="logop"  :src="require('../assets/logoesport.png')" /></router-link> </v-flex>
 <v-toolbar-items  class="hidden-sm-and-down">
       <router-link id="registerp" class="white--text text-uppercase" to="/registerp">Register</router-link>
        <router-link id="aboutusp" class="white--text text-uppercase" to="/aboutusp">About</router-link>
        <router-link id="contactp" class="white--text text-uppercase" to="/contactp">Contact</router-link>
   </v-toolbar-items>

    <v-menu class="hidden-md-and-up" id="drop">
        <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
       <v-card>
       <v-card-text>
                <router-link id="home-ddp" class="text-uppercase" to="/homep">Home</router-link> 
                </v-card-text>
                  <v-card-text>
            <router-link id="events-ddp" class="text-uppercase" to="/eventsp">Events</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="calendar-ddp" class="text-uppercase" to="/calendarp">Calendar</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="register-ddp" class="text-uppercase" to="/registerp">Register</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="aboutus-dd" class="text-uppercase" to="/aboutus">About</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="contact-dd" class="text-uppercase" to="/contact">Contact</router-link> 
                  </v-card-text>
            </v-card>
      </v-menu>
    </v-toolbar>
   </v-flex>
   <somep> </somep>
   <learnp> </learnp>
   <qanda> </qanda>
<art> </art>


 <v-footer xs12 class="mt-5"> 
    <v-layout row style="background: #131723">
    
      <v-flex xs4 order-md1 order-xs1>
         
        <v-card dark tile flat color="#131723" class="pb-5">
          <v-card-text id="admin" class=" text-md-center text-xs-center text-uppercase">Admin</v-card-text>
           <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field class="mr-5 ml-5"
      v-model="name"
      label="Name"
      required
    ></v-text-field>

    <v-text-field class="mr-5 ml-5"
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
    ></v-text-field>


   
    <v-btn
    id="btn"
    color="#131723"
      :disabled="!valid"
      @click="validate"
    >
      Sign in
    </v-btn>

   

   
  </v-form>
        </v-card>
      </v-flex>
      <v-flex xs4 order-md2 order-xs2 column>
           <v-card dark tile flat color="#131723">
          <v-card-text id="admin" class=" text-md-center text-xs-center text-uppercase">Links</v-card-text>
           </v-card>
        <v-card dark tile flat color="#131723" id="navf">
           <v-card-text >
                <router-link id="all" class=" text-uppercase" to="/home">Home</router-link> 
                </v-card-text>
                  <v-card-text>
            <router-link id="all" class=" text-uppercase" to="/events">Events</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="all"  class=" text-uppercase" to="/calendar">Calendar</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="all" class=" text-uppercase" to="/register">Register</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="all" class=" text-uppercase" to="/aboutus">About</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="all" class=" text-uppercase" to="/contact">Contact</router-link> 
                  </v-card-text>
           
    
    
        </v-card>
      </v-flex>
      <v-flex xs4 order-md3 order-xs3 color="#131723">
       <v-card dark tile flat color="#131723" class="pb-5">
          <v-card-text id="admin" class=" text-md-center text-xs-center text-uppercase">Social media</v-card-text>
            <v-layout row class="mt-5">
      <v-flex xs4 order-md1 order-xs1>
       <a  href="https://www.facebook.com/eSportEsbjerg/" target="_blank">  <v-img id="fb" :src="require('../assets/design/facebook.svg')" /> </a>
      </v-flex>
      <v-flex xs4 order-md2 order-xs2>
       <a href="https://www.instagram.com/esport_esbjerg/" target="_blank"> <v-img id="ig" :src="require('../assets/design/instagram.svg')" /> </a>
      </v-flex>
      <v-flex xs4 order-md3 order-xs3>
       <a href="mailto:support@esport-esbjerg.com"> <v-img id="mail" :src="require('../assets/design/mail.svg')" /> </a>
      </v-flex>
    </v-layout>
            
        </v-card>
      
      </v-flex>
    
    </v-layout>

  </v-footer>


 </v-app>
   </template>
   <script>
   import somep from '../components/somep.vue'
   import learnp from '../components/learnp.vue'
   import qanda from '../components/qanda.vue'
   import art from '../components/art.vue'
   export default {
       components: {
           'somep':somep,
           'learnp':learnp,
           'qanda':qanda,
           'art':art
       },
        data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /.+@.+/.test(v) || 'Password must be valid'
      ],
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
   }
   }
   </script>
   <style lang="scss">
@font-face {
font-family: "Merel Bold";
src: url("../assets/fonts/MerelBold.otf");
src: 
url("../assets/fonts/MerelBold.otf") format("woff"),
url("../assets/fonts/MerelBold.otf") format("opentype"),
}
#navip {
  position: absolute;
  top: 4%;
}
#app {
    font-family: 'Merel Bold', Arial, sans-serif;
}
#homep {
  text-decoration: none;
  font-size: 2.5vh;
         position: absolute;
  top: 50%;
  left: 5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#homep:hover {
 filter: blur(0.3vh);
}
#eventsp {
  text-decoration: none;
   font-size: 2.5vh;
       position: absolute;
  top: 50%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#eventsp:hover {
 filter: blur(0.3vh);
}
#calendarp {
   text-decoration: none;
   font-size: 2.5vh;
       position: absolute;
  top: 50%;
  left: 35%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#calendarp:hover {
 filter: blur(0.3vh);
}
#logop {
  height: 35vh;
  width: 25vh;
    position: absolute;
  top: 75%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#logop:hover {
 filter: blur(0.3vh);
}
#registerp {
text-decoration: none;
   font-size: 2.5vh;
  position: absolute;
  top: 50%;
  left: 65%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#registerp:hover {
 filter: blur(0.3vh);
}
#aboutusp {
text-decoration: none;
   font-size: 2.5vh;
  position: absolute;
  top: 50%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#aboutusp:hover {
 filter: blur(0.3vh);
}
#contactp {
   text-decoration: none;
   font-size: 2.5vh;
     position: absolute;
  top: 50%;
  left: 95%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#contactp:hover {
 filter: blur(0.3vh);
}
#dropdown {
  display: none;
}
#home-ddp {
  color: #131723;
  text-decoration: none;
}
#register-ddp {
  color: #131723;
   text-decoration: none;
}
#calendar-ddp {
  color: #131723;
   text-decoration: none;
}
#events-ddp {
  color: #131723;
   text-decoration: none;
}
#aboutus-ddp {
   color: #131723;
   text-decoration: none;
}
#contact-ddp {
  color: #131723;
   text-decoration: none;
}
#drop {
  z-index: 99;
}

</style>
   