<template>
    <v-app>
 <v-flex xs6 order-lg2>
    <hr id="sm-line1">
         <p data-aos="fade-in" data-aos-duration="4000"  id="qna-title" class="text-uppercase">Frequently asked questions</p>
           <v-img id="points"  :src="require('../assets/design/points.svg')" />
      </v-flex>

  <v-expansion-panel id="expand">
    <v-expansion-panel-content
 v-for="question in questions"
      :key="question.title"
    >
      <template v-slot:header>
        <div  style="color: #131723; font-size: 2.6vh;">
{{question.title}}
</div>
 
      </template>
      <v-card flat>
        <v-card-text style="color: #131723; font-size: 2.2vh; opacity: 0.9;"> {{question.answer}}</v-card-text>
      </v-card>
     
    </v-expansion-panel-content>
  </v-expansion-panel>
  <hr id="sm-line2">
   <hr id="line1">
    </v-app>
</template>
<script>
export default {
    data() {
      return { 
      questions: [
        {title: 'So what is eSports, anyway?', answer: 'eSports is the term used to cover all forms of competitive online gaming. Popular video games like League of Legends, Defense of the Ancients 2, Hearthstone and Starcraft 2 are all examples of eSports, and there are many more. An individual participating in online gaming is called a gamer. In online games, gamers from all around the world can play in teams. They also participate in tournaments watched by millions of spectators online and have million-dollar prizes.'},
        {title: 'Does the eSport have future?', answer: 'Definitely yes. eSports is growing every day, and more and more people see it‘s future perspective as a mainstream job. It is projected that in 2019, 1.57 billion of people will be aware about eSports worldwide. By 2020, 70 million people will watch a single eSports final, which is higher than the viewership for U.S. professional baseball, soccer, and hockey finals.'},
      {title: 'Why should I let my child join eSport Esbjerg?', answer: 'Because we have a community of gamers who share experiences and socialize, instead of being on his/her own in a dark room. And no, there aren’t playing on the computer all the time, because to perform well players have to be in a good physical shape, which we have activities for.'},
      {title: 'Will the eSports Esbjerg take care of my kid?', answer: 'During the gaming sessions there is always an adult supervision, either by a parent or by a coach.'},
      {title: 'What am I paying for? Will my kid just sit infront of computer?', answer: 'For the community and socialization. Your child will be surrounded by like-minded individuals, which will help the social aspect and bonding. eSport helps create a community where gamers can be social and share experiences within the computer world. And even find others who have the same interests as oneself. It also creates a common interest point for gamers who build on the same basic principles as football, handball, etc. And no, there are not sitting in front of the computer all the time. In order to be a high-level performer in every sport, there is a lot of training for both the computer and the body. The majority of professional eSport practitioners are in good shape because it strengthens their reactions and allows them to think clearly.'},
       {title: 'How often will he sit behind the computer and how often will they have those activities?', answer: 'The moving activities are coming along with rules (some examples): If kids swear, they make 5 pushups. If kids start goofing around or lose control, they have to fun down the hallway'},
     
     ]
      }
    }
}
</script>
<style scoped>
#qna-title {
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
  #sm-line1 {
  background: #2C93C6;
  width: 10vh;
  height: 1vh;
  border: none;
  position: absolute;
 top: -10%;
  left: 70%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  }
  #points {
  position: absolute;
  width: 20vh;
  top: 6%;
  left: 25%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#expand {
    position: absolute;
    top: 10%;
}
#sm-line2 {
  background: #2C93C6;
  width: 10vh;
  height: 1vh;
  border: none;
  position: absolute;
 top: 75%;
  left: 20%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
#line1 {
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(17, 83, 124, 0.70) 100%);
 width: 15vh;
 height: 3vh;
 border: none;
  position: absolute;
  top: 80%;
  left: 80%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
 }
@media only screen and (max-width: 1200px) {
  #qna-title {
    display: none;
  }
}

</style>


