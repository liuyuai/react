import React from "react";
import ReactDOM from "react-dom";

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

//留一道题  一会我希望选中之后 提交弹出 汉字
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value:'count'
//     };
//     this.handleSubmit =this.handleSubmit.bind(this);
//     this.handleChange =this.handleChange.bind(this);
//   }
//   handleSubmit(event){
{/*    alert('你喜欢的风味是: ' + this.state.value);*/}
//     event.preventDefault();
//   }
//   handleChange(event){
//     this.setState({
//       value:event.target.value
//     })
//   }
//   render() {
//     const arr = [
{/*      {value:'grapefruit',name:'葡萄柚'},*/}
{/*      {value:'lime',name:'柠檬'},*/}
{/*      {value:'coconut',name:'椰子'},*/}
{/*      {value:'mango',name:'芒果'}*/}
{/*    ];*/}
{/*    return (*/}
{/*        <div id='super'>*/}
{/*          <form onSubmit={this.handleSubmit}>*/}
{/*            <label>*/}
//               选择你喜欢的风味
//               <select value={this.state.value} onChange={this.handleChange}>
//                 {arr.map(item =>{
//                   return (
//                       <option key={item.value} value={item.value}>{item.name}</option>
//                   )
//                 })}
//               </select>
//             </label>
//             <input type="submit" value="提交"/>
//           </form>
//         </div>
//     )
//   }
// }


class Input extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.props.onChange(e.target.value);
  }
  render() {
    const name = this.props.name;
    return (
      <div>
        <input value={name} onChange={this.handleChange}/>
      </div>
    )
  }
}

class Calculator  extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      name:""
    };
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput1.bind(this);
  }
  handleInput1(value){
    console.log(value);
    this.setState({
      name:value
    })
  }
  handleInput2(value){
    this.setState({
      name:value
    })
  }
  render() {
    return (
      <div>
        <Input name={this.state.name} onChange={this.handleInput1}></Input>
        <Input name={this.state.name} onChange={this.handleInput2}></Input>
      </div>
    )
  }
}





function App() {
  return (
      <div>
        <Calculator></Calculator>
      </div>
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


