import React from 'react'
import Button from './components/Button'
import UserCard from './components/UserCard'
import "./index.css"
import Header from './components/Header'
import Footer from './components/Footer'
const App = (props) => {
  console.log(props)
  return (
    <div>
      {/* <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <p>{props.city}</p> */}
      <Header/>
      <Button btnText ="Submit"/>
      <Button btnText ="Buy"/>
      <Button btnText ="Like"/>
      <Button btnText ="Add"/>
      <Button btnText ="Login"/>
      <Button btnText ="Sign up"/>
      <div className='cards'>
      <UserCard userData = {{name:"ali" , city:"Gilgit" , imageUrl :"https://img.freepik.com/free-photo/portrait-masculinity-portrait-handsome-young-bearded-man-while-standing-against-grey-wall_231208-7770.jpg?t=st=1725462946~exp=1725466546~hmac=b8bfc3e1555f233c35e5f8ccbdb619ad4d38595b979b4a1500bee6126ac9b706&w=360" }}/>
      <UserCard userData = {{name:"salman" , city:"Karachi" ,   imageUrl:'https://img.freepik.com/free-photo/portrait-handsome-young-man_158595-262.jpg?t=st=1725462991~exp=1725466591~hmac=02c9aa7d5484fa0d29679712923887fd122078ec0d38dd4b10012e977f1a5638&w=740'}}/>
      <UserCard userData = {{name:"asad" , city:"Kpk" , imageUrl:"https://img.freepik.com/free-photo/studio-portrait-smart-male-eyeglasses-dressed-brown-jacket_613910-552.jpg?t=st=1725463037~exp=1725466637~hmac=3f1ad1a283bb5c26edf60c0eed8e078e9c49c33418df7aea1b243033620002da&w=740" }}/>
      <UserCard userData = {{name:"hamza" , city:"Islamabad" , imageUrl:'https://img.freepik.com/free-photo/fashion-portrait-young-caucasian-man-handsome-model-casual-clothes-posing-studio-attractive-male_158538-13690.jpg?t=st=1725463065~exp=1725466665~hmac=516f53f03dbc008836c50f9ebc8971800694d0d3b8f92e068fa08e63e88d375f&w=360' }}/>
      </div>
      <Footer/>
      </div>

  )
}


export default App