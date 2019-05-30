<template>
  <v-app>
   <v-flex id="end" xs12> 
       <hr id="line1">
     <hr id="line2">
   </v-flex>
    <v-layout row>
      <v-flex xs4 order-md2 order-xs2>
         <div >
         <p id="playersssa" class="text-uppercase">Players</p>
         
            <div id="text1" >
              eSport Esbjerg is a public education association whose purpose is to create gathering place for everyone who has an interest in gaming.<br> This creates an opportunity to game, surrounded by like-minded people.</div>
          </div>
           <v-img id="points"  :src="require('../assets/design/points.svg')" />
           <hr id="line3">
      </v-flex>

      <v-flex xs4 order-md3 order-xs3>
       <v-img  id="photo3"  :src="require('../assets/design/photo2.png')" />
         <v-img  id="photo4"  :src="require('../assets/design/photo1.png')" />
      </v-flex>
         <v-flex xs4 order-md1 order-xs1>
           <v-img  id="photo2"  :src="require('../assets/design/photo2.png')" />
         <v-img  id="photo1"  :src="require('../assets/design/photo1.png')" />
      </v-flex>
       </v-layout>
 </v-app>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#photo1 {
 width: 60vh;
  top: 0%;
  left: 60%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#photo2 {
  width: 60vh;
  top: 60%;
  left: 40%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#playersssa {
background-color: #131723;
  color: #fff;
  font-size: 4vh;
  position: absolute;
  padding-right: 30vh;
  padding-left: 30vh;
   top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#photo3 {
width: 60vh;
  top: 60%;
  left: 90%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#photo4 {
  width: 60vh;
  top: 0%;
  left: 40%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#text1 {
  height: 20vh;
  width: 60vh;
  text-align: center;
  font-size: 3vh;
 position: absolute;
 top: 80%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#line1 {
 background: linear-gradient(to right, rgba(17,83,124, 0.70) 0%,rgba(255,255,255,0) 100%); ;
 width: 10vh;
 height: 5vh;
 border: none;
 position: absolute;
  top: 10%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);



}
#line2 {
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(17, 83, 124, 0.70) 100%);
 width: 15vh;
 height: 3vh;
 border: none;
  position: absolute;
  top: -20%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
 }
#points {
  width: 15vh;
  top: 90%;
  left: 120%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#line3 {
background: linear-gradient(to right, rgba(17,83,124, 0.70) 0%,rgba(255,255,255,0) 100%); ;
 width: 10vh;
 height: 3vh;
 border: none;
 position: absolute;
 top: 100%;
  left: 30%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 1100px) {
  #photo1 {
    display: none;
  }
    #photo2 {
    display: none;
  }
    #photo3 {
    display: none;
  }
    #photo4 {
    display: none;
  }
}
 
</style>
