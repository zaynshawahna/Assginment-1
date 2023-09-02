import logo from './logo.svg';
import './App.css';
// import Card from './componetnts/Card';
// import CardSlider from './componetnts/CardSlider';
// import MoveTitle from './componetnts/MoveTitle';
// import Nav from './componetnts/Nav';
// import New1 from './componetnts/New1';
// import New2 from './componetnts/New2';
// import New3 from './componetnts/New3';
import Header from './ract1/Header';
import Main from './ract1/Main';
import Button from './ract1/Button';
import coding from './cop/coding.gif'


function App() {

  return  <div >
 <Header id="s1" name="Gaza Sky Geeks " href="https://gazaskygeeks.com/" target="_blank"></Header>
 
 <Main title="Post Component" p="Design a Post component to display the main content of the webpage. This component should include the title of the post and body of the post. Position this component under the Page Header on the left-hand side.">
      
      </Main>
     
      <Main id="s3" title="Assgiment #1" p="Reusability: Ensure that the Page Header, Post, and Button components are designed to be reusable. They should be flexible and easily adaptable for various parts of the webpage.
  Component Structure: Organize your components in a modular way.">
        
        </Main>
        
<div className='Buttons'>
<Button type="button" id="button" ><a href='https://facebook.com'>facebook</a></Button>
<Button type="button" id="button" ><img style={{width:40,height:40}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyQaIUM0TJynv2Y03Y7dEEs_DUJ8RF3kpOGnvGa6mLpt80ltgYTRbSVNSQ77O6APS3UwT&s"/></Button>
<Button type="button" id="button" ><a href='https://facebook.com'>instgram</a></Button>
<Button type="button" id="button1" ><img style={{width:40,height:40, backgroundColor:'white'}} src={coding}/></Button>



  {/* <div>
  <Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
  </div>
  <div>
  <Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
  </div>
  <div>
  <Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
  </div>
  <div>
  <Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
<Button type="button" id="button" data="Go"></Button>
  </div>
  <div>
  <Button type="button" id="button" data="Go"></Button>

  </div> */}



</div>


        
<Main id="s3" title="Assgiment #1" p="Reusability: Ensure that the Page Header, Post, and Button components are designed to be reusable. They should be flexible and easily adaptable for various parts of the webpage.
  Component Structure: Organize your components in a modular way.">
        
        </Main>
            
      <Main id="s3" title="Assgiment #1" p="Reusability: Ensure that the Page Header, Post, and Button components are designed to be reusable. They should be flexible and easily adaptable for various parts of the webpage.
  Component Structure: Organize your components in a modular way.">
        
        </Main>
            
      <Main id="s3" title="Assgiment #1" p="Reusability: Ensure that the Page Header, Post, and Button components are designed to be reusable. They should be flexible and easily adaptable for various parts of the webpage.
  Component Structure: Organize your components in a modular way.">
        
        </Main>
        

   </div>;
}

export default App;
