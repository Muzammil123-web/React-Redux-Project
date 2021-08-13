import React from "react";
import Home from "../components/Home";
import {connect} from "react-redux";
import addToCart, {RemoveFromCart} from "../services/Actions/Actions.js";

const mapStateToProps = state=>({
  data:state
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(RemoveFromCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home);