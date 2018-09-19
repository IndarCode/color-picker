import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function hexToRgb(hex, alpha) {
   hex   = hex.replace('#', '');
   var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
   var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
   var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
   if ( alpha ) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
   }
   else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
   }
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



function Boxes(props){
  return(
    <ul>
      <li style={{'backgroundColor': hexToRgb(props.color, 1)}}></li>
      <li style={{'backgroundColor': hexToRgb(props.color, 0.8)}}></li>
      <li style={{'backgroundColor': hexToRgb(props.color, 0.7)}}></li>
      <li style={{'backgroundColor': hexToRgb(props.color, 0.5)}}></li>
      <li style={{'backgroundColor': hexToRgb(props.color, 0.4)}}></li>
      <li style={{'backgroundColor': hexToRgb(props.color, 0.3)}}></li>
      <li style={{'backgroundColor': hexToRgb(props.color, 0.2)}}></li>
      <li style={{'backgroundColor': hexToRgb(props.color, 0.1)}}></li>
    </ul>
  )
}


class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color : '7e0cca',
      red: 0,
      green :0,
      blue: 0
    }
    this.colorChange = this.colorChange.bind(this);
    this.redRangeChange = this.redRangeChange.bind(this);
    this.greenRangeChange = this.greenRangeChange.bind(this);
    this.blueRangeChange = this.blueRangeChange.bind(this);
  }

  colorChange(e){
    var val = e.target.value;
    this.setState({
      color:val
    });
  }
redRangeChange(e) {
    var x = document.getElementById('red').value;
    this.setState({
      red: x
    })
  }
  greenRangeChange(e) {
    var x = document.getElementById('green').value;
    this.setState({
      green : x
    })
  }
  blueRangeChange(e) {
    var x = document.getElementById('blue').value;
    this.setState({
      blue : x
    })
  }


render(){
  return(
    <React.Fragment>
    <App color={this.state.color} red={this.state.red} green={this.state.green} blue={this.state.blue} />
    <input type="text" onChange={this.colorChange} value={this.state.color} />
    <div className="rgb-holder">
    <div className="block">
      <label for="red">Red</label>
      <input name="weight" type="range" min="0" max="255" step="5" id="red" onChange={this.redRangeChange} value={this.state.red} />
      <span>{this.state.red}</span>
    </div>
    <div className="block">
      <label for="green">Green</label>
      <input name="weight" type="range" min="0" max="255" step="5" id="green" onChange={this.greenRangeChange} value={this.state.green} />
      <span>{this.state.green}</span>
    </div>
    <div className="block">
      <label for="blue">Blue</label>
    <input name="weight" type="range" min="0" max="255" step="5" id="blue" onChange={this.blueRangeChange} value={this.state.blue} />
    <span>{this.state.blue}</span>
    </div>
    </div>
    <Boxes color={this.state.color} />
    </React.Fragment>


  );
}
}

ReactDOM.render(<Input />, document.getElementById('root'));
