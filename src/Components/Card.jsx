import { CardTop, CardLeft, CardRight, DivContainer, Text01, Text02, Text03, Text04 } from '../Styles/Card.js'

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
    </CardLeft>
    <CardRight></CardRight>
   </DivContainer>
  </main>
 )
}
export default Card
