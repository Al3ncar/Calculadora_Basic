/* import React from "react"

export default class App extends React.Component{
  state={  val1:null, val2:null, result:"", symbol:""};

  handleChangeVal1 = (e) => this.setState({ val1: e.target.value });
  handleChangeVal2 = (e) => this.setState({ val2: e.target.value });

  add = () => this.setState({result: Number(this.state.val1) + Number(this.state.val2), symbol:"+"})
  decrease = () => this.setState({result: this.state.val1 - this.state.val2, symbol:"-"})
  multiply = () => this.setState({result: this.state.val1 * this.state.val2, symbol:"x"})
  division = () => this.setState({result: Number(this.state.val1) / Number(this.state.val2), symbol:"÷"})
  clear = () => this.setState({ result: "", symbol: ""})

  render(){
    return(
      <>
        <div>
          <input type="number" onChange={this.handleChangeVal1} value={this.state.val1} placeholder="Coloca o valor aqui..."/>
          <p>{this.state.symbol}</p>
          <input type="number" onChange={this.handleChangeVal2} value={this.state.val2} placeholder="Coloca o valor aqui..."/>
        </div>
        <div>
          <p>{this.state.result}</p> 
        </div>
        <div>
          <button onClick={this.add}>+</button>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.multiply}>x</button>
          <button onClick={this.division}>÷</button>
        </div>
      </> 
    )
  };
} */


import React from "react"
import "./App.css"

export default class App extends React.Component{
  state = { inpu1:"", inpu2:"", result: null, simb:null}

  handleChangeInput1 = e => this.setState({ inpu1: e.target.value})
  handleChangeInput2 = e => this.setState({ inpu2: e.target.value})

  add = () => this.setState({result: Number(this.state.inpu1) + Number(this.state.inpu2)})
  descrease = () => this.setState({result: this.state.inpu1 - this.state.inpu2})
  multiply = () => this.setState({ result: this.state.inpu1 * this.state.inpu2})
  division = () => this.setState({ result: this.state.inpu1 / this.state.inpu2})

  render(){
    return(
      <section className="streat_container">
          <h1>{this.state.result}</h1>
          
          <div>
            <input type="number" name="" placeholder="Digite um numero..." onChange={this.handleChangeInput1} value={this.state.inpu1}/>
            <input type="number" name="" placeholder="Digite um numero..." onChange={this.handleChangeInput2} value={this.state.inpu2}/>
          </div>
          <div className="cars_cont">
            <div className="btn_cars">
                <span className="roof_car_add"></span>
                <span className="roof_car_desc"></span>
                <span className="roof_car_mult"></span>
                <span className="roof_car_div"></span>
              </div>
            <div className="btn_cars">
              <button className="btn_add" onClick={this.add}>SOMAR</button>
              <button className="btn_desc" onClick={this.descrease}>DIMINUIR</button>
              <button className="btn_mult" onClick={this.multiply}>MULTIPLICAR</button>
              <button className="btn_div" onClick={this.division}>DIVIDIR</button>
            </div>
          </div>
      </section>
    )
  } 
}