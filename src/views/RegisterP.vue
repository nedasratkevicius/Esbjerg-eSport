<template>
 <v-app id="app">
   <v-flex class="aij" xs12>
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
            <router-link id="contact-dd" class="text-uppercase" to="/contact">Contact</router-link> 
                  </v-card-text>
            </v-card>
      </v-menu>
    </v-toolbar>
    
     
    </v-flex>
      <v-flex id="end" xs12> 
  
       <v-layout row>
      <v-flex xs4 order-md2 order-xs2>
       
          <p id="wi2" class="text-uppercase text-md-center">register</p>
      
      </v-flex>
      <v-flex xs4 order-md1 order-xs1>
           <v-img id="photo2a"  :src="require('../assets/design/photo2.png')" />
         <v-img id="photo1a"  :src="require('../assets/design/photo1.png')" />
     
          
      </v-flex>
    </v-layout>
     
     
  </v-flex>
    <div class="pis"><font class="upp" size="6.5">Become part of something bigger
</font><br>
      <br>
      <font size="4">
Membership within eSport Esbjerg ensures that eSports development in the Esbjerg area does not stop. <br>
Help make a difference and grow your  interests with others. <br></font>

  <br>
  <br>
  <br>
  <font class="upp" size="6.5"> Membership benefits for basic membership
</font><br>
  <br>
<font size="4">Get access and discounts at club events <br>
Access to both Discord and Teamspeak server <br>
Benefits of eSport Esbjerg's game server<br>
Member offers from sponsors</font>

  <br>
  <br>
<font class="upp" size="6.5">Fee</font><br>
  <font size="4"><br>
Basic membership: DKK 100 for one year <a href ="https://drive.google.com/file/d/17zYErFdd4IpkMR1qqxpJ6mEmRFuC2NzA/view?usp=sharing" style="text-decoration:none; color: #2C93C6;" id="cv" target="_blank">{link}
  </a> <br> 
Train yourself: DDK 300 for half a year <a href ="https://drive.google.com/file/d/1EMv4J0h6TdDBSHIJGPZvq6egoDWOPxuY/view?usp=sharing" style="text-decoration:none; color: #2C93C6;" id="cv" target="_blank">{link}
</a>
<br>
<br>
<a class="upp" >With a trainer</a><br>
Bakkeskolen Cosmos <a href ="https://drive.google.com/file/d/13StB5t4mgbD1L_XEUV76cs2Nh1xcIxyK/view?usp=sharing" style="text-decoration:none; color: #2C93C6;" id="cv" target="_blank">{link}
  </a> <br>
I Kvaglund Hallen <a href ="https://drive.google.com/file/d/13xsIJAgP-847EtC3zIQrUvdgY116p_cU/view?usp=sharing" style="text-decoration:none; color: #2C93C6;" id="cv" target="_blank">{link}
  </a>
</font>

</div>

 </v-app>
</template>

<style>
.upp
{
  text-transform: uppercase;
}
#boxas
{
  position: absolute;
  top: 75%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#wi2 {
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

.pis
{
  color: #131723;
  text-align: center;
  position: absolute;
  top: 95%;
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
#wi2
{
  display: none;
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