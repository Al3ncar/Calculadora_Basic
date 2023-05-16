// import React from 'react'

// export default class Calc extends React.Component{

//   state = {
//     n1:null, n2:null,
//     result: "Resultado não definido"
//   }
//   add = () => {
//     this.setState ({
//       result: Number(this.state.n1) + Number(this.state.n2)
//     })}
//   remov = () => {
//     this.setState ({
//       result: this.state.n1 - this.state.n2
//     })}
//   div = () => {
//     this.setState ({
//       result: this.state.n1 / this.state.n2
//     })}
//   mult = () => {
//     this.setState ({
//       result: this.state.n1 * this.state.n2
//     })}
//   handleChangeN1 = (e) =>{
//     this.setState({
//       n1: e.target.value
//     })}
//   handleChangeN2 = (e) =>{
//     this.setState({
//       n2: e.target.value
//     })}
  
//   render() {
//     let {result} = this.state
//     return(
//       <main>
//         <h1>Calculadora</h1>
//         <section>
//           <div>
//           <h2>{result}</h2>
//             <input onChange={this.handleChangeN1} type="number" name="valor 1"/>
//             <input onChange={this.handleChangeN2} type="number" name="valor 2"/>
//           </div>
//           <div>
//             <button onClick={this.add}>+</button>
//             <button onClick={this.remov}>-</button>
//             <button onClick={this.div}>÷</button>
//             <button onClick={this.mult}>*</button>
//             <button onClick={this.clear}>Clear</button>
//           </div>
//         </section>
//       </main>
//     )
//   }
// }

import React from "react"

export default class App extends React.Component{
  state={  val1:null, val2:null, result:"", symbol:""};

  handleChangeVal1 = (e) => this.setState({ val1: e.target.value });
  handleChangeVal2 = (e) => this.setState({ val2: e.target.value });

  add = () => this.setState({result: Number(this.state.val1) + Number(this.state.val2), symbol:"+"})
  decrease = () => this.setState({result: this.state.val1 - this.state.val2, symbol:"-"})
  multiply = () => this.setState({result: this.state.val1 * this.state.val2, symbol:"x"})
  division = () => this.setState({result: Number(this.state.val1) / Number(this.state.val2), symbol:"÷"})
  clear = () => this.setState({ result: "", symbol: ""})
  inp = () => {
    if(this.state.val1 === 0) return this.state.result = "Cralho"
    if(this.state.val2 === "") return this.state.result = "Cralh2"
    if(this.state.result !== 0) return this.state.result
  }
  render(){
    return(
      <>
        <input type="number" onChange={this.handleChangeVal1} value={this.state.val1} placeholder="Coloca o valor aqui..."/>
        <p>{this.state.symbol}</p>
        <input type="number" onChange={this.handleChangeVal2} value={this.state.val2} placeholder="Coloca o valor aqui..."/>
        <p>{this.inp()}</p> 
        <button onClick={this.clear}>Zerar</button> 

        <button onClick={this.decrease}>-</button>
        <button onClick={this.multiply}>x</button>
        <button onClick={this.division}>÷</button>
      </> 
    )
  };
}