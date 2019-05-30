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
    <v-flex xs6 >
     <div id="aaas"><br>
<br><br>
<font size="7">What is eSports?</font> <br> <br>
<font size="5">eSports encompass all forms of competitive gaming. As with any other professional sport, eSports <br>
players and teams compete in professional tournaments and leagues which are<br>
broadcast live, watched by millions of fans around the world and provide hefty prize pools for winners.<br><br></font>
<font size="7">What type of games are played?</font> <br>
<br>
<font size="5">eSports covers a variety of different video games. In fact any video game where you compete against<br>
another player is an esport. Popular types of games include:<br>
Multiplayer online battle arenas like League of Legends and Defense of the Ancients <br>
First person shooters like Counter-Strike: Global Offensive<br>
Fighting games like Street Fighter and Mortal Kombat<br>
Sports games like FIFA<br><br></font>

  </div>
  </v-flex>
      <v-flex id="end" xs12> 
  
       <v-layout row>
      <v-flex xs4 order-md2 order-xs2>
       
          <p id="wi3" class="text-uppercase text-md-center">about</p>
      
      </v-flex>
      <v-flex xs4 order-md1 order-xs1>
           <v-img id="photo2a"  :src="require('../assets/design/photo2.png')" />
         <v-img id="photo1a"  :src="require('../assets/design/photo1.png')" />
     
          
      </v-flex>
    </v-layout>
     
     
  </v-flex>

 <foot></foot>
 </v-app>
</template>

<style>
#aaas
{
  color: #131723;
  text-align: center;
  position: absolute;
  top: 85%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#wi3 {
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
#wi3
{
  display: none;
}
#aaa
{
    position: absolute;
  top: 110%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

}
</style>
<script>
  export default {
    data() {
     return {
     }
    },
  
  }
</script>