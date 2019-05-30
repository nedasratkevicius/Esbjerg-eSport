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
            <router-link id="contact-dd" class="text-uppercase" to="/contactp">Contact</router-link> 
                  </v-card-text>
            </v-card>
      </v-menu>
    </v-toolbar>
     
    </v-flex>
      <v-flex id="end" xs12> 
  
       <v-layout row>
      <v-flex xs4 order-md2 order-xs2>
       
          <p id="wi" class="text-uppercase text-md-center">calendar</p>
      
      </v-flex>
      
      <v-flex xs4 order-md1 order-xs1>
           <v-img id="photo2a"  :src="require('../assets/design/photo2.png')" />
         <v-img id="photo1a"  :src="require('../assets/design/photo1.png')" />
     
          
      </v-flex>
    </v-layout>
     
     
  </v-flex>
    <p><font size="6">Check schedule before comming! </font><br></p>
  <v-layout class="aik">
     <div class="symbols"></div>
    <v-flex>
      
      <v-sheet height="500">
        <v-calendar
          :now="today"
          :value="today"
          color="primary"
        >
          <template v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu
                :key="event.title"
                v-model="event.open"
                full-width
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="my-event"
                    v-on="on"
                    v-html="event.title"
                  ></div>
                </template>
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar
                    color="primary"
                    dark
                  >
                    <v-btn icon>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="event.title"></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-title primary-title>
                    <span v-html="event.details"></span>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn
                      flat
                      color="secondary"
                    >
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
  </v-layout>
 </v-app>
</template>

<style scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>
<style>
#line1a {
 background: linear-gradient(to right, rgba(17,83,124, 0.70) 0%,rgba(255,255,255,0) 100%); ;
 width: 10vh;
 height: 5vh;
 border: none;
 position: absolute;
  top: 30%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);



}
#line2a {
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(17, 83, 124, 0.70) 100%);
 width: 15vh;
 height: 3vh;
 border: none;
  position: absolute;
  top: 70%;
  left: 75%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
 }
 #line3a {
 background: linear-gradient(to right, rgba(17,83,124, 0.70) 0%,rgba(255,255,255,0) 100%); ;
 width: 10vh;
 height: 5vh;
 border: none;
 position: absolute;
  top: 100%;
  left: 15%;
  margin-right: -50%;
  transform: translate(-50%, -50%);



}
#line4a {
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(17, 83, 124, 0.70) 100%);
 width: 15vh;
 height: 3vh;
 border: none;
  position: absolute;
  top: 130%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
 }
#pointsss
{
  width: 20vh;
  top: 100%;
  left: 75%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#sm-linija
{
    background: #2C93C6;
  width: 10vh;
  height: 1vh;
  border: none;
  position: absolute;
 top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
#photo1a {
 top: -100%;
 left: 20%;
}
#photo2a {
  top: -40%;
}
#wi {
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
  z-index: 100;
  color: #000000;
  text-transform: uppercase;
  text-align: center;
  position: absolute;
  top: 70%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#navizas {
  position: absolute;
  top: 12.5%;
  z-index: 100;
}
.aik
{
  border-width: 10px 10px;
  border-style: solid;
  border-color: #2C93C640;
  width: 60%;
  position: absolute;
  top: 100%;
  left: 50%;
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
#wi
{
  display: none;
}
p
{
   display: none;
}

}
</style>

<script>
  export default {
    data: () => ({
      today: '2019-01-08',
      events: [
        {
          title: 'Day off',
          details: 'Coach is sick',
          date: '2018-12-30',
          open: false
        },
        {
          title: 'I Kvaglund Hallen',
          details: '18:00-20:00',
          date: '2018-12-31',
          open: false
        },
        {
          title: 'Bakkeskolen Cosmos',
          details: '18:00-20:00',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'I Kvaglund Hallen',
          details: '18:00-20:00',
          date: '2019-01-07',
          open: false
        },
        {
          title: 'Bakkeskolen Cosmos',
          details: '18:00-20:00',
          date: '2019-01-03',
          open: false
        },
        {
          title: 'CS:GO session',
          details: 'CS:GO reaction test',
          date: '2019-01-01',
          open: false
        },
        {
          title: 'I Kvaglund Hallen',
          details: 'For Coaches only!',
          date: '2019-01-21',
          open: false
        },
        {
          title: 'Fortnite session',
          details: 'Bring your own equipment',
          date: '2019-02-01',
          open: false
        }
      ]
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    }
  }
</script>