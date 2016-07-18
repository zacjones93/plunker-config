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

  

  handleClickHtml(showH, showJ){
    showH = !showH;
    this.state.ShowHTML =!this.state.ShowHTML 
    // checks if other tags are there, if not, adds '?show=index.html'
    if (showH  && showJ == false){
      this.setState((state) => ({
         url: state.url.concat("?show=index.html"),
        }))
    } else if(showH == true && showJ == true){
        this.setState((state) => ({ url: state.url.concat(",index.html") }))
    }else if (!showH) {
      this.setState({
        url: this.state.baseUrl 
    })
    }
  }

  handleClickJS(showJ){
    showJ = !showJ;
    this.state.ShowJS = !this.state.ShowJS;
  }

  reset(){
    this.setState((state) => ({ url: state.baseUrl }))
  }
  
  render(){
    var showH = this.state.ShowHTML;
    var showJ = this.state.ShowJS;
    return (
      <div>
        <div>
          <span>Current URL: </span>
          {this.state.url}<br/>
          <span>Plunker URL:</span><br/>
          <input type="text" onChange={this.handleChange.bind(this)}/>
        </div>
        <div>
        
          <span>What tabs will be shown? (Defualts to index.html and preview)</span>
          <button onClick={this.handleClickHtml.bind(this, showH, showJ)}>Show html</button>
          <button onClick={this.handleClickJS.bind(this,showJ)}>Show JavaScript</button>
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