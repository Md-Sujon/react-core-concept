import logo from './logo.svg';
import './App.css';

function App() {

  var array=['lile','parvej','sawon','Rahat','hasan','bokkor','borkot'];

 const product=[
      {name:'PhotoShop',Price:'$60.99'},
      {name:'Illustatar',Price:'$40.99'},
      {name:'adobe Reader',Price:'$6.99'}
  ]

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
        

        <h2 style={style}>Name:{person.name+" "+person.job}</h2>

        <h3 className="" style={style}>Mam:{person2.name+" "+person2.job}</h3>

        <h2 style={style}>Hello world</h2>

            <PersonA products={product[0]}></PersonA>
            <PersonA products={product[1]}></PersonA>
            <PersonA products={product[2]}></PersonA>

            


           <PersonS name={array[0]} profession='student' ></PersonS>
           <PersonS name={array[1]} profession='kamal'></PersonS>

               

      </header>
     
    </div>
  );
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
