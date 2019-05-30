<template>
    <v-app style="background: #fff">
        <v-flex xs6 order-lg2>
        
         <p data-aos="fade-in" data-aos-duration="2000" id="discord" class="text-uppercase">Discord</p>
          
      </v-flex>

  <v-flex xs10 offset-xs class="ml-5" >
            <v-card flat tile>
              <v-layout>
                <v-flex xs6>
                 <a  href="https://discordapp.com/" target="_blank"><v-img id="dis"
                data-aos="fade-in" data-aos-duration="1000"    src="https://discordapp.com/assets/ba74954dde74ff40a32ff58069e78c36.png"
                   
                   
                  ></v-img></a> 
                </v-flex>
                <v-flex xs6>
                  <v-card-title>
                    <div >
                      <div id="text1" class="text-uppercase">Connect with us on discord</div>
                      <div id="text2">If you don't have it already, make a Discord account</div>
                      <div id="text3">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype.
                        <br>
                        Simplify your life.
                      </div>
                     
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
             
            </v-card>
             <v-img id="points"  :src="require('../assets/design/points.svg')" />
                 <hr id="sm-line2">
                    <hr id="line1">
          </v-flex>
          
    </v-app>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#discord {
  background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(249,249,250,0) 1%,rgba(19,23,35,1) 40%);
  color: #fff;
  font-size: 4vh;
  padding-left: 10vh;
  padding-right: 10vh;
position: absolute;
 top: -10%;
  left: 15%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#card {

  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#dis:hover {
    filter: blur(0.3vh);
}
#text1 {
    font-size: 3vh;
    text-align: center;
    margin-left: 12vh;
}
#text2 {
    font-size: 2.3vh;
    text-align: center;
    margin-left: 12vh;
}
#text3 {
    font-size: 2.3vh;
    text-align: center;
    margin-left: 12vh;
}
#points {
    width: 15vh;
  top: 30%;
  left: 40%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#sm-line2 {
  background: #2C93C6;
  width: 10vh;
  height: 1vh;
  border: none;
  position: absolute;
 top: -20%;
  left: 10%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  }
  #line1 {
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(17, 83, 124, 0.70) 100%);
 width: 15vh;
 height: 3vh;
 border: none;
  position: absolute;
  top: -25%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
 }

@media only screen and (max-width: 1200px) {
    #discord {
        display: none;
    }
    #sm-line {
        display: none;
    }
    #line1 {
        display: none;
    }
    #text1{
      display: none;
    }
     #text2{
      display: none;
    }
     #text3{
      display: none;
    }
    #dis
    {
        top: 70%;
  left: 100%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
    }
    #sm-line1 {
      display: none;
    }
    @media only screen and (max-width: 2000px) {
  
       #text2{
      display: none;
    }
    #text3 {
      display: none;
    }
    }
}
</style>

