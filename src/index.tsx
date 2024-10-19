import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import P1 from './pages/P1';
import P2 from './pages/P2';
import P3 from './pages/P3';
import P4 from "./pages/P4";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const stu1 = {id: 1, name: '风清扬', sex: '男', age: 99, photo: '/image/1.png'};
const stu2 = {id: 2, name: '玮哥', sex: '男', age: 20, photo: '/image/2.png'};
const stu3 = {id: 3, name: '长宏', sex: '男', age: 30, photo: '/image/3.png'};

// root.render(
// 	<React.StrictMode>
// 		{/* <App /> */}
// 		{/* <P1 student={stu1}></P1>
// 		<P1 student={stu2}></P1>
// 		<P1 student={stu3}></P1> */}
// 		{/*<P2 students={[stu1, stu2, stu3]} hideAge={false}></P2>*/}
//
// 		<P3></P3>
// 	</React.StrictMode>
// );

root.render(
    <P4></P4>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
