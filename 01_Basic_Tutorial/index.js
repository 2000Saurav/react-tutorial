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

// const parent = React.createElement("div", {id: "parent"},[ React.createElement("div", {id:"child1"},[
//     React.createElement("h1", {}, "This is h1 tag from child 1"),
//     React.createElement("h2", {}, "This is h2 tag from child 1")
// ]), React.createElement("div", {id:"child2"}, [
//     React.createElement("h1", {}, "This is h1 tag from child 2"),
//     React.createElement("h2", {}, "This is h2 tag from child 2")
// ])])


// now we use JSX to create the same react element

const JSXHeading = <h1 id="heading">This is my first heading</h1>
console.log(JSXHeading);


// JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within your JavaScript files, which is then transformed into React elements by a build tool like Babel.
// JSX is not a string, it is a React element. It is a syntactic sugar for React.createElement. When you write JSX, it gets compiled to React.createElement calls under the hood.
// JSX is more readable and easier to write than using React.createElement directly, especially for complex
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(JSXHeading);

const title = <h1 id="title">This is a title from JSX</h1>
console.log(title);
// const Title = ()=>{
//     return <h1 id="title">This is a title from a function</h1>
// }
const data = 10000;
const HeadingComponent = ()=>{
    
    return (
    <div className="container">
    {title}
    {data}
    <h2>This is a heading from a component</h2>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< HeadingComponent/>);