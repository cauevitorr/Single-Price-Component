import { Button01,Lista, Text08, DivText, CardTop, CardLeft, CardRight, DivContainer, Text01, Text02, Text03, Text04, Text05, Text06, Text07} from '../Styles/Card.js'

const Card = () => {
 return (
  <main>
   <CardTop>
    <Text01>Join ours community</Text01>
    <Text02>30-days, hassle-free money back guarantee</Text02>
    <Text03>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</Text03>
   </CardTop>
   <DivContainer>
    <CardLeft>
     <Text04>Monthly Subcription</Text04>
     <DivText>
      <Text05>$29</Text05>
      <Text06>per month</Text06>
     </DivText>
     <Text07>Full access for less than $1 a day</Text07>
     <Button01>Sign Up</Button01>
    </CardLeft>
    <CardRight>
     <Text08>Why Us</Text08>
     <Lista>
      <dd>Tuturials by industy expert</dd>
      <dd>Peer & expert code review</dd>
      <dd>Coding exercises</dd>
      <dd>Access to our GitHub repos</dd>
      <dd>Community forum</dd>
      <dd>Flashcards decks</dd>
      <dd>New videos every week</dd>
     </Lista>
    </CardRight>
   </DivContainer>
  </main>
 )
}
export default Card
