<template>
    <v-app>
            <v-flex xs6 order-lg2>
    <hr id="sm-line1">
         <p data-aos="fade-in" data-aos-duration="4000"  id="art-title" class="text-uppercase">Gaming news</p>
           <v-img id="points"  :src="require('../assets/design/points.svg')" />
      </v-flex>
    <v-layout row wrap id="layout">
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
          <v-card data-aos="fade-in" data-aos-duration="500" class="ml-3" flat>
       <a href="http://www.espn.com/esports/story/_/id/26788508/fortnite-player-tfue-suing-faze-clan" target="_blank"> <v-img id="hv"
          class="white--text"
          height="200px"
          src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0520%2Fr545685_1296x729_16-9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span id="card-title" class="text-uppercase">Fortnite player Tfue suing FaZe Clan
</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img></a>
          
        <v-card-title>
          <div>
            <span>Recent controversy surrounding fortnite player Tfue and FaZe Clan took off</span><br>
          </div>
        </v-card-title>
      
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md3 order-sm1>
          <v-card data-aos="fade-in" data-aos-duration="1000" class="ml-3" flat>
      <a href="https://weplay.tv/news/tug-of-war-dire-list-of-participants-and-other-details-15024" target="_blank">  <v-img id="hv"
          class="white--text"
          height="200px"
          src="https://weplay-cdn.azureedge.net/weplay-public/2019-05-27/62c8fe62d4a75171a294692e30f6fae7_big_cover.jpeg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span id="card-title" class="text-uppercase">Tug of War: Dire list of participants and other details
</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img></a>
          
        <v-card-title>
          <div>
            <span>Second Dota2 Weplay announced. </span><br>
            <span>Check out the full details and explore even more.</span>
          </div>
        </v-card-title>
       
        </v-card> 
      </v-flex>
      <v-flex xs12 sm6 md3 order-md2 order-sm4>
         <v-card data-aos="fade-in" data-aos-duration="1500" class="ml-3" flat>
       <a href="https://www.esportstalk.com/blog/games-that-need-an-official-esports-league-22899/" target="_blank"> <v-img id="hv"
          class="white--text"
          height="200px"
          src="https://www.esportstalk.com/wp-content/uploads/2019/05/esports-league.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span id="card-title" class="text-uppercase">Top 10 Games That Need an Official Esports League
</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img></a>
          
        <v-card-title>
          <div>
            <span>There are some games that have to get to the competitive arena.</span><br>
            <span> Here are some of them.
</span>
          </div>
        </v-card-title>
  
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md1 order-sm3>
         <v-card data-aos="fade-in" data-aos-duration="2000" class="ml-3" flat>
       <a href="https://www.esportstalk.com/news/magic-online-update-free/" target="_blank"> <v-img
          class="white--text"
          height="200px"
          id="hv"
          src="https://www.esportstalk.com/wp-content/uploads/2019/05/Magic-Online.png"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="text-uppercase" id="card-title">Magic Online Gets Visual Update, Will Be Free Later This Year</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img></a>
          
        <v-card-title>
          <div>
            <span>The popular card gets gets a visual overhaul.</span><br>
            <span>Oh and it will become free soon. Are you excited yet?</span>
          </div>
        </v-card-title>
    
        </v-card>
       
      
   
      </v-flex>
    </v-layout>
    </v-app>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#layout {
  position: absolute;
  top:30%;
}
#art-title {
 background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(19,23,35,1) 57%);
  color: #fff;
  font-size: 4vh;
  padding-left: 10vh;
  padding-right: 10vh;
position: absolute;
 top: 0%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  }
  
#hv:hover {
  filter:blur(0.3vh);
}
a {
      text-decoration: none;
    color: #fff;
}
#card-title {
    font-size: 3vh;
    background: #131723;

}
#link {
     text-decoration: none;
}
#points {
  position: absolute;
  width: 20vh;
  top: 20%;
  left: 25%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#sm-line1 {
  background: #2C93C6;
  width: 10vh;
  height: 1vh;
  border: none;
  position: absolute;
 top: -15%;
  left: 85%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}




 
 @media only screen and (max-width: 1200px) {
   #line2 {
display:none;



}
#line1 {
  display:none;
 }

#art-title {
  display: none;
}
 }
</style>

