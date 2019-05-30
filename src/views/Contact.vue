<template>
 <v-app id="app">

  
 <v-toolbar id="navizas" flat app style="background-color: #131723">
   
       <v-toolbar-items  class="hidden-sm-and-down">
       <router-link id="home" class="white--text text-uppercase" to="/homep">Home</router-link>
      <router-link id="events" class="white--text text-uppercase" to="/eventsp">Events</router-link>
      <router-link id="calendar" class="white--text text-uppercase" to="/calendarp">Calendar</router-link>
 </v-toolbar-items>
   <v-flex class="mt-5" xs12> <router-link to="/"> <v-img id="logo"  :src="require('../assets/logoesport.png')" /></router-link>  </v-flex>
 <v-toolbar-items  class="hidden-sm-and-down">
       <router-link id="register" class="white--text text-uppercase" to="/registerp">Register</router-link>
        <router-link id="aboutus" class="white--text text-uppercase" to="/aboutusp">About</router-link>
        <router-link id="contact" class="white--text text-uppercase" to="/contactp">Contact</router-link>
   </v-toolbar-items>

    <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
       <v-card >
       <v-card-text>
                <router-link id="home-dd" class="text-uppercase" to="/homep">Home</router-link> 
                </v-card-text>
                  <v-card-text>
            <router-link id="events-dd" class="text-uppercase" to="/eventsp">Events</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="calendar-dd" class="text-uppercase" to="/calendarp">Calendar</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="register-dd" class="text-uppercase" to="/registerp">Register</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="aboutus-dd" class="text-uppercase" to="/aboutusp">About</router-link> 
                  </v-card-text>
                    <v-card-text>
            <router-link id="contact-dd" class="text-uppercase" to="/contact">Contact</router-link> 
                  </v-card-text>
            </v-card>
      </v-menu>
    </v-toolbar>
    
  

      <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card flat tile id="formf">
      <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
    class="ml-5 mr-5 text-uppercase"
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
    class="ml-5 mr-5 text-uppercase"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
     class="ml-5 mr-5 mt-5 text-uppercase"
      v-model="question"
      label="Question"
      required
    ></v-text-field>


    

    <v-btn flat
    class="mt-5 pt-2 pb-4 pl-5 pr-5"
      :disabled="!send"
     id="but"
      @click="send"
    >
      Contact us
    </v-btn>

  

  
  </v-form>

       
      </v-card>
    </v-flex>
  </v-layout>
        <v-flex xs12>
                 <hr id="sm-linijaa">
           <hr id="line1a">
     <v-img id="guy"  :src="require('../assets/design/guy.png')" />
   </v-flex>
<v-footer 

    height="auto">
    <v-flex xs12>
    <v-card 
      flat
      tile
      id="foot"
      class=" white--text text-xs-center"
    >
      <v-card-text>
        <v-layout row class="mt-5">
       <a  href="https://www.facebook.com/eSportEsbjerg/" target="_blank">  <v-img id="fb" class="mr-5" :src="require('../assets/design/facebook.svg')" /> </a>
     
      
       <a href="https://www.instagram.com/esport_esbjerg/" target="_blank"> <v-img id="ig" class="mr-5" :src="require('../assets/design/instagram.svg')" /> </a>
    
      
       <a href="mailto:support@esport-esbjerg.com"> <v-img id="mail" class="mr-5" :src="require('../assets/design/mail.svg')" /> </a>

       <v-card-text id="dis" class="white--text pt-0" style="font-size: 1.7vh;">
         Address 1 <br>
         Bakkeskolen Esbjerg <br>
         Skolebakken 166, 6705 Esbjerg
      </v-card-text> 
        <v-card-text id="dis" class="white--text pt-0" style="font-size: 1.7vh;">
         Address 2<br>
        Cosmos School - Spangsbjerg <br>
        Skrænten 120, 6700 Esbjerg
      </v-card-text> 

     <v-card-text class="white--text" style="font-size: 1.7vh;">
+45 27 15 37 74 </v-card-text>
        </v-layout>
      </v-card-text> 

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>eSport Esbjerg</strong>
      </v-card-text>
    </v-card>
    </v-flex>
</v-footer>

 </v-app>
</template>

<style>

#sm-linijaa
{
      background: #2C93C6;
  width: 10vh;
  height: 1vh;
  border: none;
  position: absolute;
 top: 49%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
#end {
position: relative;
  top: 35%;
}

#navizas {
  position: absolute;
  top: 12.5%;
  z-index: 100;
}
#but {
  font-size: 2vh;
  color: #fff;
   background: #2C93C6;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#formf {
  top: 120%;

}
#navizas {
  position: absolute;
  top: 12.5%;
  z-index: 100;
}

#foot {
   background-color: #131723;
}
#fb {
  width: 4vh;
}
#ig {
  width: 4vh;
}
#mail {
  width: 4vh;
}
#guy {
  height: 35vh;
  width: 25vh;
    position: absolute;
  top: 70%;
  left: 15%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 1100px) {
#photo2a
{
  display: none;
}
#photo1a
{
  display: none;
}
#photo2a
{
  display: none;
}
#photo1a
{
  display: none;
}
#sm-linija
{
  display: none;
}
#sm-line1a
{
  display: none;
}
#sm-line2a
{
  display: none;
}
#sm-line3a
{
  display: none;
}
#sm-line4a
{
  display: none;
}
#wi3
{
  display: none;
}
#dis {
  display: none;
}
}
@media only screen and (max-width: 600px) {
  #guy {
  top: 90%;
  }
}
</style>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
    
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
  question: '',
 
     
    }),

    methods: {
      send () {
        if (this.$refs.form.send()) {
          this.snackbar = true
        }
      },
    }
  }
</script>