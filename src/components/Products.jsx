import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import "./styles.css"
import dodo_image from "./images/dodo_image.jpeg"
import jollof_rice_image from "./images/jollof_rice_image.jpeg"

class Card extends React.Component {

    state = {
        source : this.props.source,
        image_desc : this.props.image_desc,
        decription : this.props.description,
        price : this.props.price
    }
    render(){
        return (
            <section style={{padding : '2.5vw'}} className = "productCard">
        <div style={{padding : '0.5vw'}}>
            <img  src= {this.state.source} alt={this.state.image_desc}/>
            <p  style={{textAlign: 'center'}}>{this.state.decription}</p>
            <p  style={{textAlign: 'center'}}>{this.state.price}</p>
        </div>
        </section>
        
        );
    }
}

const Products = () => {
    return ( 
        <div style={{display : 'flex' , flexWrap: 'wrap' ,justifyContent: 'space-evenly'}}>
       <Card source = {dodo_image} image_desc = "dodo" description= "a lovely crisp friend plantain" price="$7000"/>
       <Card source = {jollof_rice_image} image_desc = "jollof rice" description = "tasty" price ="$5.50"/>
       <Card source = {dodo_image} image_desc = "dodo" description= "a lovely crisp friend plantain" price="$7000"/>
       <Card source = {jollof_rice_image} image_desc = "jollof rice" description = "tasty" price ="$5.50"/>
       <Card source = {dodo_image} image_desc = "dodo" description= "a lovely crisp friend plantain" price="$7000"/>
       <Card source = {jollof_rice_image} image_desc = "jollof rice" description = "tasty" price ="$5.50"/>
       <Card source = {dodo_image} image_desc = "dodo" description= "a lovely crisp friend plantain" price="$7000"/>
       <Card source = {jollof_rice_image} image_desc = "jollof rice" description = "tasty" price ="$5.50"/>
       </div>
     );
}
 
export default Products;