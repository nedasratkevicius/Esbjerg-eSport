<template>
    <v-app>
      <v-layout row>
  <v-flex xs6 order-lg2>
        <hr id="sm-line1">
    
         <p data-aos="fade-in" data-aos-duration="2000" id="learn-more" class="text-uppercase">Learn more about us</p>
          
      </v-flex>
      <v-flex xs6 >
          <div id="about">Our main aim is to contribute the positive development of young people's hobbies, as well as put Esbjerg on the map for this relatively new form of sport, which has now been recognized by both DGI and the Olympic Games as a real sport at competition level. 

              <br>
              <br>
            Our organization wants to coordinate and help all eSports activities in Southwest, whether it be small LAN parties, major tournaments, fixed training, etc.
          </div>
          <v-img id="points"  :src="require('../assets/design/points.svg')" />
      </v-flex>
      </v-layout>
      <div>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template  v-slot:activator="{ on }">
        <v-btn data-aos="fade-in" data-aos-duration="4000" flat tile
          id="btn-video"
          v-on="on"
        >
          Watch video
        </v-btn>
      </template>

      <v-card>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/usNPYkJbZqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
           id="btn-back"
            flat
            @click="dialog = false"
          >
           Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <v-flex xs6>
       <v-img  data-aos="fade-in" data-aos-duration="4000" id="photo5"  :src="require('../assets/design/photo5.png')" />
 <hr id="line3">  
  </v-flex>
  
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            dialog: false
        }
    }
}
</script>
<style scoped>
#learn-more {
  background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(249,249,250,0) 1%,rgba(19,23,35,1) 40%);
  color: #fff;
  font-size: 4vh;
  padding-left: 10vh;
  padding-right: 10vh;
position: absolute;
 top: 20%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#sm-line1 {
  background: #2C93C6;
  width: 10vh;
  height: 1vh;
  border: none;
  position: absolute;
 top: 13%;
  left: 10%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#btn-video {
  font-size: 3vh;
  height: 8vh;
  width: 25vh;
    color: #131723;
    border: solid 0.2vh #131723;
    position: absolute;
 top: 75%;
  left: 30%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#btn-back {
    color: #131723;
}
#photo5 {
    width: 80vh;
 top: 0%;
  left: 155%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#about {
    height: 60vh;
  width: 60vh;
  font-size: 2.5vh;
 position: absolute;
 top: 60%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#points {
  width: 15vh;
  top: 100%;
  left: 100%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#line3 {
background: linear-gradient(to right, rgba(17,83,124, 0.70) 0%,rgba(255,255,255,0) 100%); ;
 width: 10vh;
 height: 3vh;
 border: none;
 position: absolute;
 top: 95%;
  left: 15%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 1100px) {
  #photo5 {
    display: none;
  }
  #about {
    height: 60vh;
  width: 60vh;
  font-size: 2.8vh;
 position: absolute;
 top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#learn-more {
  background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(249,249,250,0) 1%,rgba(19,23,35,1) 40%);
  color: #fff;
  font-size: 4vh;
  padding-left: 10vh;
  padding-right: 10vh;
position: absolute;
 top: 10%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
 }
</style>

