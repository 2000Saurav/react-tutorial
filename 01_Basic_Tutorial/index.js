import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement( "h1", {id: "heading", xyz: "xyz"},  "Hello World from React"); 
// console.log(heading);
// first we create variable heading and then we use React.createElement to create a react element. react element method take three arguments
// 1. type of element we want to create, in this case it is h1  
// 2. properties or attribute we passed in the tag of the element, in this case it is id and xyz
// 3. children of the element, in this case it is "Hello World from React

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// we create a root using ReactDom.createRoot and pass the id of the element where we want to render our react element
// in this case it is "root"

// root.render(root)

// now we render the react element using root.render method and pass the react element we created earlier
// in this case it is heading


/* 
<div id="parent">
    <div id="child1">
        <h1>This is a h1 tag from child 1</h1>
        <h2>This is a h2 tag from child 1</h2>
    </div>
    <div id="child2">
        <h1>This is a h1 tag from child 2</h1>
        <h2>This is a h2 tag from child 2</h2>
    </div>
</div>

*/

const parent = React.createElement("div", {id: "parent"},[ React.createElement("div", {id:"child1"},[
    React.createElement("h1", {}, "This is h1 tag from child 1"),
    React.createElement("h2", {}, "This is h2 tag from child 1")
]), React.createElement("div", {id:"child2"}, [
    React.createElement("h1", {}, "This is h1 tag from child 2"),
    React.createElement("h2", {}, "This is h2 tag from child 2")
])])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);