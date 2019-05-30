<template>
<v-app style="
    background: #131723;">
  <div class="pulse"></div>
  <div v-flex xs12 class="mb-2" id="logo2"></div>
  <div v-flex xs12 class="mb-2" id="logo3"></div>
    <div v-flex xs12 class="mb-2" id="logo4"></div>
      <div v-flex xs12 class="mb-2" id="logo5"></div>
      <router-link to="/home"><button id="playersborder"> players </button></router-link>
      <router-view></router-view>
  <router-link to="/homep"><button class="mb-2" id="playersborder2"> parents </button> </router-link>

  </v-app>
</template>

<script>


export default {
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
@font-face {
font-family: "Merel Bold";
src: url("../assets/fonts/MerelBold.otf");
src: 
url("../assets/fonts/MerelBold.otf") format("woff"),
url("../assets/fonts/MerelBold.otf") format("opentype"),
}
::-webkit-scrollbar { 
    display: none; 
}

@keyframes pulse {
  0% {
      opacity: 1;
       transform: translate(-50%, -50%);
  }
  80% {
      opacity: 1;
       transform: translate(-50%, -50%);
         height: 31vh;
  width: 31vh;
  }
  100% {
      opacity: 1;
       transform: translate(-50%, -50%);
         height: 32vh;
  width: 32vh;
  }
}


  .pulse
{
  height: 30vh;
  width: 30vh;
background-image: url(../assets/design/1.png);
background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 100;
    animation: pulse 4s ease 1s infinite;
}
  #logo2
{
  height: 53vh;
  width: 100vh;
background-image: url(../assets/design/2.png);
background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
  #logo3
{
  height: 6%;
  width: 9%;
background-image: url(../assets/design/333.svg);
  position: absolute;
  top: 67%;
  left: 36.5%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
  #logo4
{
  height: 6%;
  width: 9%;
background-image: url(../assets/design/333.svg);
  position: absolute;
  top: 71%;
  left: 65%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
  #logo5
{
  height: 6%;
  width: 9%;
background-image: url(../assets/design/333.svg);
  position: absolute;
  top: 30%;
  left: 67%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#playersborder {
  width: 40vh;
  height: 8vh;
  background-color: #ffffff;
  position: relative;
  margin: 0;
    position: absolute;
    top: 50%;
    left: 38%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-color: #2C93C6;
    text-transform: uppercase;
    text-align: center;
    font-family: "Merel Bold";
    font-size: 4.5vh;
    color: #131723;
    }
   #playersborder:hover { 
    width: 42.5vh;
  height: 8.5vh;
   background-color:#131723;
  color:#ffffff;
  filter: blur(0vh);
  
}
    #playersborder2 {
  width: 40vh;
  height: 8vh;
  background-color: #ffffff;
  position: relative;
  margin: 0;
    position: absolute;
    top: 50%;
    left: 62%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-style: solid ;
    border-color: #2C93C6;
    text-transform: uppercase;
    text-align: center;
    font-family: "Merel Bold";
    font-size: 4.5vh;
    color: #131723;;
    }
  #playersborder2:hover { 
    width: 42.5vh;
  height: 8.5vh;
   background-color:#131723;
  color:#ffffff;
  filter: blur(0vh);
}
</style>