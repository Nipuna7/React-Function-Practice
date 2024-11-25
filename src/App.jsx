import { useState } from 'react'
import './App.css'

function App() {
  //normal funtion
 function Hello1(){
  console.log("Hello React");
 }

 //arrow funtion
 const Hello2=()=>{
  console.log("React world");
 }

 //parametarize funtion
 function Hello3(name){
  console.log("i am "+name);
 }

 //Anonymous funtion
 function Hello4(age){
  console.log("My age is "+age);
 }

 //event object
 function Hello5(e){
  console.log("this is events objects ",e);
 }
 function Hello6(e){
  console.log("this is events objects  ",e.target);
 }
 function Hello7(age,e){
  console.log("My age is "+age,e);
 }


  return (
    <>
    <div id='wrapper'>

       {/* normal funtion call */}
       <button onClick={Hello1}>Click me1</button>

       {/* arrow funtion call */}
       <button onClick={Hello2}>Click me2</button>

       {/* parameterize funtion call */}
       <button onClick={Hello3("Nipuna")}>Click me3</button>

       {/* Anonymous function call */}
       <button onClick={()=>{Hello4(25)}}>Click me4</button>

       {/*event object */}
       <button onClick={Hello5}>Click me5</button>
       <button onClick={Hello6}>Click me6</button>
       {/*anonymous event object */}
       <button onClick={(e)=>{Hello7(25,e.target)}}>Click me7</button>

    </div>  
    </>
  )
}

export default App
