import React from "react";

function Home(props){
  console.log("props",props.data.cardItems);
  return (<div>
 
    <div className="item">
    <img  width ="100px" height="80px"src="https://st1.bgr.in/wp-content/uploads/2020/01/Samsung-Galaxy-S20-Plus.jpg" alt="This is picture"/>

    <span> Samsung </span>

    <span> Price: $1000.00 </span>

    <button onClick={()=>{
      props.addToCartHandler({price:1000,
      name:"samsung"})
    }}> Add to Cart</button><br></br>
    
    <button onClick={()=>{
      props.removeFromCartHandler({price:1000,
      name:"samsung"})
    }}> Remove From Cart </button>
    </div>
   
    </div>)
  
}
export default Home;