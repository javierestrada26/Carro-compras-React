import { Component } from "react";

const style = {
    logo:{
        fontWight:'700',
        fontSize: '2rem'
    }
}
class Logo extends Component{
    render(){
        return(
            <div style={style.logo}>
                Shop
            </div>
        )
    }
}
export default Logo