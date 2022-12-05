import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./components/Card";
import Avatar from "./components/Avatar";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const name = 23;

// // border-radius: 20px; -> borderRadius: '20px'

// const headingStyle = {
//     backgroundColor: "red",
//     padding: "20px",
//     border: "10px solid green",
// };

// const sayHi = true;
// let subHeading = "";

// if (sayHi) {
//     subHeading = "Hi";
// } else {
//     subHeading = "Bye";
// }

// const myVar = (
//     <div>
//         <h1 style={headingStyle} className="heading">
//             Hello I am in JSX calcuate {name}
//         </h1>
//         <p className="subheading">{sayHi ? "Hi" : "Bye"}</p>
//         <p className="subheading">{subHeading}</p>
//     </div>
// );

// root.render(myVar);

// function myClock() {
//   root.render (
//     <div>
//       <p style={{fontSize: '4rem'}}>{new Date().toLocaleTimeString()}</p>
//       <h2>This will not get re-rendered</h2>
//     </div>
//   );
//   setTimeout(myClock, 1000)
// }

// myClock();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

// function Welcome(props) {
    
//   return <h1>Hello, {props.name}</h1>;

// }

// const myName = "Anuj"

// const gridBox = {
// 	display: 'grid',
// 	gridTemplateColumns: 'repeat(3, 1fr)'
// }

// root.render(
//     <div style={gridBox}>
//         <Card name="Anuj" email="anuj@gmail.com" image="https://via.placeholder.com/200"/>
//         <Card name="Chandni" email="chandni@gmail.com" image="https://via.placeholder.com/200"/>
//         <Card name="Bhavisya" email="bhavisya@gmail.com" image="https://via.placeholder.com/200"/>
//         <Welcome name={myName}/>
// 		<Avatar name="Random" image="https://via.placeholder.com/100"/>
//     </div>
// );
