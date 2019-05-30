<template>
 <v-app id="app">
   <v-flex xs12>
             <div
      id="scrolling-techniques"
      class="scroll-y"
      style="max-height: 400px;"
    >
      <v-container style="height: 400px;"></v-container>
    </div>
        <hr id="sm-linija">
           <hr id="line1a">
     <hr id="line2a">
                <hr id="line3a">
     <hr id="line4a">
 <v-toolbar id="navizas" flat app style="background-color: #131723">
   
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

    <v-menu class="hidden-md-and-up">
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
      <v-flex id="end" xs12> 
  
       <v-layout row>
      <v-flex xs4 order-md2 order-xs2>
       
          <p id="wi0" class="text-uppercase text-md-center">events</p>
      
      </v-flex>
      
      <v-flex xs4 order-md1 order-xs1>
           <v-img id="photo2a"  :src="require('../assets/design/photo2.png')" />
         <v-img id="photo1a"  :src="require('../assets/design/photo1.png')" />
     

          
      </v-flex>
    </v-layout>

  </v-flex>
  <template > 
  <div
    id="e3"
    style="max-width: 700px;"
    class="grey lighten-3"
  >
   
        <v-layout id="eventss" row wrap>
    <v-flex xs12>
            <v-card flat class="white--text">
              <v-layout>
                <v-flex xs12>
                  <v-img  :src="require('../assets/design/first.png')" contain />
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <div class="black--text"><font size="4">eSport Esbjerg holds another lan! 
                                                        After a successful and cozy lan, we have chosen to make a Lan party more!
                                                        It will take place on September 15-17. 
                                                        We open up to 120 seats, with the possibility of expanding to 240 seats.
                                                        Early bird tickets 
                                                        members: DKK 150, not members: DKK 200. </font></div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
             
            </v-card>
          </v-flex>
        </v-layout>
    
   
  </div>
  </template>
<template > 
  <div
    id="e3"
    style="max-width: 700px;"
    class="grey lighten-3"
  >
   
        <v-layout id="eventsss" row wrap>
    <v-flex xs12>
            <v-card flat class="white--text">
              <v-layout>
                <v-flex xs12>
                  <v-img :src="require('../assets/design/second.png')" contain />
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <div id="aws" class="black--text"><font size="4">Byali leaves Virtus.pro team
                                                        the polish player signed on Monday a termination agreement, ending a long
                                                        association with Virtus.pro that stretched back to January 2014. 
                                                        After leaving the team in the aftermath of the Faceit Major, player Byali returned
                                                        in December for a second spell.</font>
                                                         </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
             
            </v-card>
          </v-flex>
        </v-layout>
    
   
  </div>
  </template>
<template > 
  <div
    id="e3"
    style="max-width: 700px;"
    class="grey lighten-3"
  >
   
        <v-layout id="eventssss" row wrap>
    <v-flex xs12>
            <v-card flat class="white--text">
              <v-layout>
                <v-flex xs12>
                  <v-img :src="require('../assets/design/third.png')" contain />
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <div class="black--text"><font size="4">Dreamhack - Since 2016 until now, DreamHack has run and developed the DreamHack Masters concept, bringing 16 of the best teams in the game Counter-Strike: Global Offensive together for a large-scale arena tournament, with a $250,000 prize pool
                      DreamHack Masters is a premier. </font></div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
             
            </v-card>
          </v-flex>
        </v-layout>
    
   
  </div>
  </template>
   <template > 
  <div
    id="e3"
    style="max-width: 700px;"
    class="grey lighten-3"
  >
   
        <v-layout id="eventsssss" row wrap>
    <v-flex xs12>
            <v-card flat class="white--text">
              <v-layout>
                <v-flex xs12>
                  <v-img :src="require('../assets/design/fourth.png')" contain />
                </v-flex>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <div class="black--text"><font size="4">It's time to ditch Skype and TeamSpeak.
All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.
 Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
 eSports Esbjerg got new server for players and parents. Join! </font></div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
             
            </v-card>
          </v-flex>
        </v-layout>
    
   
  </div>
  </template>
  
 </v-app>

 
</template>

<style>
#eventss
{
  height: 110vh;
  width: 110vh;
    position: absolute;
    top: 110%;
    left: 48%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
#eventsss
{
  height: 110vh;
  width: 110vh;
    position: absolute;
    top: 130%;
    left: 48%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

}
#eventssss
{
  height: 110vh;
  width: 110vh;
    position: absolute;
    top: 150%;
    left: 48%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
#eventsssss
{
   height: 110vh;
  width: 110vh;
    position: absolute;
    top: 170%;
    left: 48%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
}
.cards
{
   position: absolute;
  top: 50%;
  left: 65%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#photo1a {
 top: -100%;
 left: 20%;
}
#photo2a {
  top: -40%;
}
#wi0 {
  background-color: #131723;
  color: #fff;
  z-index: 99;
  font-size: 4vh;
  position: relative;
  top: -40%;
  
}
#end {
position: relative;
  top: 35%;
}
p
{
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  top: 75%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#navizas {
  position: absolute;
  top: 12.5%;
  z-index: 100;
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
#wi0
{
  display: none;
}

}
</style>

<script>

 export default {

    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
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