import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component{
   constructor(props){
        super(props);
        this.state = {
          baseUrl: ['https://embed.plnkr.co/'],
          url: ['https://embed.plnkr.co/'],
          ShowHTML: false,
          ShowJS: false,
          ShowPrev: false,
          ShowCSS: false
        }
    }
  handleChange(e) {
    this.setState({
      url: e.target.value
    })
  }

  

  handleClickHtml(){
    var show = "?show=index.html"
    this.setState({ShowHTML: !this.state.ShowHTML});
    console.log("ShowHTML: ", this.state.url);
    // checks if other tags are there, if not, adds '?show=index.html'
    if (this.state.ShowHTML  && this.state.ShowJS == false){
      console.log("show: ", show);
      this.setState((state) => ({ url: state.url.concat("?show=index.html") }))
    } else if(this.state.ShowHTML == true && this.state.ShowJS == true){
        this.setState((state) => ({ url: state.url.concat(",index.html") }))
    }else if (!this.state.ShowHTML) {
      console.log("url: ",this.state.url);
      console.log("baseUrl: ", this.state.baseUrl);
      this.setState({
        url: this.state.baseUrl 
    })
    }
  }

  handleClickJS(){
    this.setState({ShowJS: !this.state.ShowJS});
    console.log("ShowHTML: ", this.state.ShowHTML);
    console.log("ShowJS: ", this.state.ShowJS);
  }

  reset(){
    this.setState((state) => ({ url: state.baseUrl }))
  }
  
  render(){
    return (
      <div>
        <div>
          <span>Current URL: </span>
          {this.state.url}<br/>
          <span>Plunker URL:</span><br/>
          <input type="text" onClick={this.handleChange.bind(this)}/>
        </div>
        <div>
        
          <span>What tabs will be shown? (Defualts to index.html and preview)</span>
          <button onClick={this.handleClickHtml.bind(this)}>Show html</button>
          <button onClick={this.handleClickJS.bind(this)}>Show JavaScript</button>
          <button onClick={this.reset.bind(this)}>reset</button>
        </div>
        <br/>
        <div>
        <span>Preview:</span>
          <iframe
            src={this.state.url}
            frameborder="0"
            width="100%"
            height="480px"
            ></iframe>
        </div>
      </div>

    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));