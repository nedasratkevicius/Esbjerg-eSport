<template>
 <v-app id="app">
   <v-flex xs12>
 <v-toolbar id="navi" flat app style="background-color: #131723">
   
       <v-toolbar-items  class="hidden-sm-and-down">
       <router-link id="home" class="white--text text-uppercase" to="/home">Home</router-link>
      <router-link id="events" class="white--text text-uppercase" to="/events">Events</router-link>
      <router-link id="calendar" class="white--text text-uppercase" to="/calendar">Calendar</router-link>
 </v-toolbar-items>
   <v-flex class="mt-5" xs12> <router-link to="/"> <v-img id="logo"  :src="require('../assets/logoesport.png')" /></router-link>  </v-flex>
 <v-toolbar-items  class="hidden-sm-and-down">
       <router-link id="register" class="white--text text-uppercase" to="/register">Register</router-link>
        <router-link id="aboutus" class="white--text text-uppercase" to="/aboutus">About</router-link>
        <router-link id="contact" class="white--text text-uppercase" to="/contact">Contact</router-link>
   </v-toolbar-items>

    <v-menu class="hidden-md-and-up" id="drop">
        <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
       <v-card >
       <v-card-text>
                <router-link id="home-dd" class="text-uppercase" to="/home">Home</router-link> 
                </v-card-text>
                  <v-card-text>
            <router-link id="events-dd" class="text-uppercase" to="/events">Events</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="calendar-dd" class="text-uppercase" to="/calendar">Calendar</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="register-dd" class="text-uppercase" to="/register">Register</router-link> 
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
   


   <some> </some>
    <learn> </learn>
    <last> </last>
<disc> </disc>
    <!--footer-->
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
import some from '../components/some.vue'
import learn from '../components/learn.vue'
import last from '../components/last.vue'
import disc from '../components/disc.vue'

  export default {
    components: {
      'some':some,
      'learn':learn,
      'last':last,
      'disc':disc
    
    
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
#navi {
  position: absolute;
  top: 4%;
}
#app {
    font-family: 'Merel Bold', Arial, sans-serif;
}
#home {
  text-decoration: none;
  font-size: 2.5vh;
         position: absolute;
  top: 50%;
  left: 5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#home:hover {
 filter: blur(0.3vh);
}
#events {
  text-decoration: none;
   font-size: 2.5vh;
       position: absolute;
  top: 50%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#events:hover {
 filter: blur(0.3vh);
}
#calendar {
   text-decoration: none;
   font-size: 2.5vh;
       position: absolute;
  top: 50%;
  left: 35%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#calendar:hover {
 filter: blur(0.3vh);
}
#logo {
  height: 35vh;
  width: 25vh;
    position: absolute;
  top: 75%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#logo:hover {
  filter: blur(0.3vh);
}
#register {
text-decoration: none;
   font-size: 2.5vh;
  position: absolute;
  top: 50%;
  left: 65%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#register:hover {
 filter: blur(0.3vh);
}
#aboutus {
text-decoration: none;
   font-size: 2.5vh;
  position: absolute;
  top: 50%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#aboutus:hover {
 filter: blur(0.3vh);
}
#contact {
   text-decoration: none;
   font-size: 2.5vh;
     position: absolute;
  top: 50%;
  left: 95%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#contact:hover {
 filter: blur(0.3vh);
}
#dropdown {
  display: none;
}
#home-dd {
  color: #131723;
  text-decoration: none;
}
#register-dd {
  color: #131723;
   text-decoration: none;
}
#calendar-dd {
  color: #131723;
   text-decoration: none;
}
#events-dd {
  color: #131723;
   text-decoration: none;
}
#aboutus-dd {
   color: #131723;
   text-decoration: none;
}
#contact-dd {
  color: #131723;
   text-decoration: none;
}

#btn {
    border: #fff solid 0.2vh;
    color: #fff;
    left: 35%
}
#admin {
    font-size: 3vh;
}

#navf {
  text-align: center;
}
#all {
    text-decoration: none;
    color:rgba(255, 255, 255, 0.589);
}
#all:hover {
    color:#fff;
}
#fb {
    width: 5.3vh;
    left: 45%;
    opacity: 0.5;
}
#ig {
    width: 5vh;
      left: 40%;
      opacity: 0.5;
}
#mail {
    width: 5.5vh;
      left: 30%;
      opacity: 0.5;
}
#drop {
  z-index: 99;
}

</style>

