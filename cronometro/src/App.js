import React, { Component} from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai = () => {
    let state = this.state;
    if(this.timer !== null)
      {
        clearInterval(this.timer);
        this.timer = null;
        state.botao = 'VAI';
        this.setState(state);
      }else{
        this.timer = setInterval(() => {
          state.numero += 0.1;
          state.botao = 'PARA';
          this.setState(state);
        },100);
      }
  
  }

  limpar = () => {
    let state = this.state;
    clearInterval(this.timer);
    this.timer = null;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);
 
  }
    render() {
      return (
        <div className='container'>
         <img src={require('./assets/cronometro.png')} className='img' />
         <a className='timer'>{this.state.numero.toFixed(1)}</a>
         <div className='areaBtn'>
          <a className='botao' onClick={this.vai}>{this.state.botao}</a>
          <a className='botao' onClick={this.limpar}>LIMPAR</a>
         </div>
        </div>
      );
    }

}

export default App;