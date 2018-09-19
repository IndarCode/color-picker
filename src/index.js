import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

function rgbToHex(r, g, b) {
      var rgb = b | (g << 8) | (r << 16);
      return (0x1000000 | rgb).toString(16).substring(1);
  }


function shadeColor1(color, percent) {  // deprecated. See below.
      var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
      return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

function Boxes(props){
  return(
    <ul>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 1)}}></div><span className="hex-code">{shadeColor1(props.color, 0)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.9)}}></div><span className="hex-code">{shadeColor1(props.color, 10)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.8)}}></div><span className="hex-code">{shadeColor1(props.color, 20)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.7)}}></div><span className="hex-code">{shadeColor1(props.color, 30)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.6)}}></div><span className="hex-code">{shadeColor1(props.color, 40)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.5)}}></div><span className="hex-code">{shadeColor1(props.color, 50)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.4)}}></div><span className="hex-code">{shadeColor1(props.color, 60)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.3)}}></div><span className="hex-code">{shadeColor1(props.color, 70)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.2)}}></div><span className="hex-code">{shadeColor1(props.color, 80)}</span></li>
      <li><div style={{'backgroundColor': hexToRgb(props.color, 0.1)}}></div><span className="hex-code">{shadeColor1(props.color, 90)}</span></li>
    </ul>
  )
}


class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      red: 146,
      green :29,
      blue:68,
      color:rgbToHex(this.red,this.green,this.blue)
    }
    this.colorChange = this.colorChange.bind(this);
    this.redRangeChange = this.redRangeChange.bind(this);
    this.greenRangeChange = this.greenRangeChange.bind(this);
    this.blueRangeChange = this.blueRangeChange.bind(this);
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

  colorChange(e){

  }

render(){
  return(
    <React.Fragment>
    <App red={this.state.red} green={this.state.green} blue={this.state.blue} text="HEX code and RGB value of color" />
    <div className="controler-holder">

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
    <input type="text" onChange={this.colorChange} value={'#' + rgbToHex(this.state.red, this.state.green, this.state.blue)} style={{ 'backgroundColor': hexToRgb(rgbToHex(this.state.red, this.state.green, this.state.blue), 0.1), 'color': "#" + rgbToHex(this.state.red, this.state.green , this.state.blue)   }} />
    </div>
    <Boxes color={rgbToHex(this.state.red, this.state.green, this.state.blue)} />
    </React.Fragment>


  );
}
}

ReactDOM.render(<Input />, document.getElementById('root'));
registerServiceWorker();
