import React from 'react'

export default class Calc extends React.Component{

  state = {
    n1:null, n2:null,
    result: "Resultado não definido"
  }
  add = () => {
    this.setState ({
      result: Number(this.state.n1) + Number(this.state.n2)
    })}
  remov = () => {
    this.setState ({
      result: this.state.n1 - this.state.n2
    })}
  div = () => {
    this.setState ({
      result: this.state.n1 / this.state.n2
    })}
  mult = () => {
    this.setState ({
      result: this.state.n1 * this.state.n2
    })}
  handleChangeN1 = (e) =>{
    this.setState({
      n1: e.target.value
    })}
  handleChangeN2 = (e) =>{
    this.setState({
      n2: e.target.value
    })}
  
  render() {
    let {result} = this.state
    return(
      <main>
        <h1>Calculadora</h1>
        <section>
          <div>
          <h2>{result}</h2>
            <input onChange={this.handleChangeN1} type="number" name="valor 1"/>
            <input onChange={this.handleChangeN2} type="number" name="valor 2"/>
          </div>
          <div>
            <button onClick={this.add}>+</button>
            <button onClick={this.remov}>-</button>
            <button onClick={this.div}>÷</button>
            <button onClick={this.mult}>*</button>
            <button onClick={this.clear}>Clear</button>
          </div>
        </section>
      </main>
    )
  }
}