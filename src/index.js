import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
var Shape = require('./shape.js');
class Circle extends Shape{
    constructor(color){
        super();
    }
    calculateArea(){

    }
}
module.exports = Circle;
class Shape{
    constructor(){
        this.color = "green";
    }
    drawShape(){

    }
    calculateArea(){

    }
    
}
module.exports = Shape;
