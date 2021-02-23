import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var array=['lilesss','parvej','sawon','sujon','bokkor','kiddus'];

 const product=[
      {name:'PhotoShop',Price:'$60.99'},
      {name:'Illustatar',Price:'$40.99'},
      {name:'adobe Reader',Price:'$6.99'},
      {name:'premier',Price:'$245'}
  ]

  const arrayName=array.map(sujon=>sujon)
  console.log(arrayName);

  const productName=product.map(sujon1=>sujon1.name)
  console.log(productName);

 var person={
   name:'Md Sujon',
  job:'Engineers'
  }
  var person2={
    name:'Robin',
   job:'Engineers'
   }
  var style={
    color:'white',
  backgroundColor:'blue',
  padding:'20px',
  border:'10px solid red',
  borderRadius:'20px'
}
return (
    <div className="App">
      
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Counter></Counter>
        <User></User>

        <h2 style={style}>Name:{person.name+" "+person.job}</h2>

        <h3 className="" style={style}>Mam:{person2.name+" "+person2.job}</h3>

        <h2 style={style}>Hello world</h2>
       <ul>
       {
           array.map(array=><li>{array}</li>)
         }
       </ul>

       <ul>
         {
           product.map(product=><li>{product.name}</li>)
         }
       </ul>

       <ul>
         {
           product.map(product=><li>{product.Price}</li>)
         }
       </ul>
         {
                    array.map(pd=><product products={pd}>

                    </product>)
        }
            <PersonA products={product[0]}></PersonA>
            <PersonA products={product[1]}></PersonA>
            <PersonA products={product[2]}></PersonA>
            <PersonA products={product[3]}></PersonA>
             <PersonS name={array[0]} profession='student' ></PersonS>
           <PersonS name={array[1]} profession='kamal'></PersonS>

            
               

      </header>
     
    </div>
  );
}

function User(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>setUsers(data))
  } ,[])
  return(
    <div>
      <h1>Dynamic Data:{users.length}</h1>
      <ul>
        {
         users.map(user=><li>{user.name}</li>)
        }
      </ul>
      {
        console.log(users)
      }
    </div>
  )
}

function Counter(){
  const [count,setCount] = useState(10);
  const handleIncrease=()=>setCount(count+1);
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

function PersonA(props){
var stylePersonA={
     backgroundColor:'blue',
     
     width:'300px',
     height:'200px',
     borderRadius:'10px',
     margin:'10px'
    
}
const {name,Price}=props.products
return (
<div style={stylePersonA}>
    <h2>{name}</h2>
    <h3>Price:{Price}
      </h3>
    <button>
        Buy Now
      </button>
  </div>

)
}


function PersonS(porepas){
var stylePerson={
  color:'red',
  border:'10px solid yellow',
  margin:'10px'
}

  return <div style={stylePerson}>
     <h1 >Name:{porepas.name}</h1>
  <h3 >Profession:{porepas.profession}</h3>
  </div>
  
}


export default App;
