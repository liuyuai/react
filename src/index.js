import React from "react";
import ReactDOM from "react-dom";
// import {themes,ThemeContext} from "./theme";
// import ThemedButton from "./themed-button";
// import ThemeTogglerButton from "./theme-toggler-button";





// const element = (
//     <div></div>
// );


// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()}
//   }
//   componentDidMount() { //组件渲染到dom中后执行
//     this.timerID = setInterval(
//         ()=>this.tick(),
//         1000
//     )
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//   tick(){
//     // this.setState({
//     //   date:new Date()
//     // })
//     this.setState((state,props) =>{
//       return {
//         date:new Date()
//       }
//     })
//   }
//   render() {
//     return (
//         <div>
//           <h1>Hello,world</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//         </div>
//     )
//   }
// }
// const element = [1,2,3,4,5].map(number =>{
//   return <Clock key={number}/>
// })

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:''
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event){
//     this.setState({
//       name:event.target.value
//     });
//   }
//   handleSubmit(event){
//     alert('提交的名字是'+ this.state.name);
//     event.preventDefault();
//   }
//   render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             名字
//             <input type="text" value={this.state.name} onChange={this.handleChange}/>
//             {/*<input type="text" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>*/}
//           </label>
//           <input type="submit" value="提交"/>
//         </form>
//     )
//   }
// }

// class Input extends React.Component{
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e){
//     this.props.onChange(e.target.value);
//   }
//   render() {
//     const name = this.props.name;
//     return (
//       <div>
//         <input value={name} onChange={this.handleChange}/>
//       </div>
//     )
//   }
// }
//
// class Calculator  extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state={
//       name:""
//     };
//     this.handleInput1 = this.handleInput1.bind(this);
//     this.handleInput2 = this.handleInput1.bind(this);
//   }
//   handleInput1(value){
//     console.log(value);
//     this.setState({
//       name:value
//     })
//   }
//   handleInput2(value){
//     this.setState({
//       name:value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Input name={this.state.name} onChange={this.handleInput1}></Input>
//         <Input name={this.state.name} onChange={this.handleInput2}></Input>
//       </div>
//     )
//   }
// }

//这里面没有里理解 这个默认值的作用
// const ThemeContext = React.createContext('light');
// function Toolbar(){
//   return (
//       <div>
//         {/*<ThemeContext.Provider value="dark">*/}
//           <ThemedButton></ThemedButton>
//         {/*</ThemeContext.Provider>*/}
//       </div>
//   )
// }
//
// class ThemedButton extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//         <div>
//           {this.context}
//         </div>
//     )
//   }
// }
//
//
// function App(){
//   return (
//       <div>
//         <Toolbar></Toolbar>
//       </div>
//   )
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//             state.theme === themes.dark
//                 ? themes.light
//                 : themes.dark,
//       }));
//     };
//
//     // State 也包含了更新函数，因此它会被传递进 context provider。
//     this.state = {
//       theme: themes.light,
//       toggleTheme: this.toggleTheme,
//     };
//   }
//
//   render() {
//     // 整个 state 都被传递进 provider
//     return (
//         <ThemeContext.Provider value={this.state}>
//           <Content />
//         </ThemeContext.Provider>
//     );
//   }
// }
//
// function Content() {
//   return (
//       <div>
//         <ThemeTogglerButton />
//       </div>
//   );
// }


// const FancyButton = React.forwardRef((props,ref) =>{
//   console.log(ref);
//   return (
//       <button ref={ref} className="FancyButton">
//         {props.children}
//       </button>
//   )
// });
//
// const ref = React.createRef();

//React.Fragment  相当于 template 这么一个东西
function App() {
  return (
      <>
        <div>
          dsad
        </div>
        <div>
          <FancyButton ref={ref}>click me</FancyButton>
        </div>
      </>
      
  )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// setTimeout(function () {
//   ReactDOM.render(<div>dddd</div>,document.getElementById('super'))
// },5000);

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );


