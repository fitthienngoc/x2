import React from "react";
// import "./App.css";




import DraggableElement from "../component/draggable-element";


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Draggable Element</h2>
        <div>
          Made by <a href="https://about.phamvanlam.com/">Lam Pham</a>. 
          {" "}Visit me at{" "}
          <a href="/">completejavascript.com</a>.
        </div>

        <DraggableElement
          title={`Click here to move`}
          width={`400`}
          height={`250`}
          top={`150`}
          left={`200`}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris,
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </DraggableElement>

        <DraggableElement
          title={`Click here to move`}
          width={`400`}
          height={`450`}
          top={`350`}
          left={`300`}
        >
          <h3>Slideshow</h3>
          
        </DraggableElement>

        <DraggableElement
          title={`Click here to move`}
          width={`400`}
          height={`400`}
          top={`150`}
          left={`800`}
        >
          <h3>Modal Image</h3>
          
        </DraggableElement>
      </div>
    );
  }
}