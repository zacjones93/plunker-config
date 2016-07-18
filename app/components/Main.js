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

  

  handleClickHtml(showH, showJ, showC, showP){
    // flipping the values from true to false or visa verca after button click
    showH = !showH;
    this.state.ShowHTML =!this.state.ShowHTML 

    // checks if other tags are there, if not, adds '?show=index.html'
    if ( showH  && !showJ && !showC && !showP ){
      this.setState((state) => ({
         url: state.url.concat(["?show=index.html"]),
        }))
    } else if( showH && (showJ || showC || showP) ){
        this.setState((state) => ({ url: state.url.concat([",index.html"]) }))
    }else if (!showH) {
      var index = this.state.url.indexOf("?show=index.html");
      if (index != -1){
        if(this.state.url.length === 2) {
          this.state.url.splice(index, 1);
          this.setState({
           url: this.state.url
          })
        } else if (this.state.url.length > 2) {
          this.state.url.splice(index, 1);
          this.state.url[index] = "?show=" + this.state.url[index].substr(1);
          this.setState({
            url: this.state.url
          })
        }
      }
      var index = this.state.url.indexOf(",index.html");
      if (index != -1){
        this.state.url.splice(index, 1);
        this.setState({
          url: this.state.url
        })
      }
    }
  }

  handleClickJS(showH, showJ, showC, showP){
    showJ = !showJ;
    this.state.ShowJS = !this.state.ShowJS;

    if ( showJ && !showH && !showC && !showP ){
      this.setState((state) => ({
        url: state.url.concat(["?show=js"]),
      }))
    } else if ( showJ && (showH || showC || showP) ) {
      this.setState((state) => ({
        url: state.url.concat([",js"]),
      }))
    }else if (!showJ) {
      var index = this.state.url.indexOf("?show=js");
      if (index != -1){
        if(this.state.url.length === 2) {
          this.state.url.splice(index, 1);
          this.setState({
           url: this.state.url
          })
        } else if (this.state.url.length > 2) {
          this.state.url.splice(index, 1);
          this.state.url[index] = "?show=" + this.state.url[index].substr(1);
          this.setState({
            url: this.state.url
          })
        }
      }
      var index = this.state.url.indexOf(",js");
      if (index != -1){
        this.state.url.splice(index, 1);
        this.setState({
          url: this.state.url
        })
      }
    }
  }

  handleClickCSS(showH, showJ, showC, showP){
    showC = !showC;
    this.state.ShowCSS = !this.state.ShowCSS;

    if (showC && !showH && !showJ && !showP){
      this.setState((state) => ({
        url: state.url.concat(["?show=css"]),
      }))
    } else if (showC && (showH || showJ || showP) ) {
      this.setState((state) => ({
        url: state.url.concat([",css"]),
      }))
    }else if (!showC) {
      var index = this.state.url.indexOf("?show=css");
      if (index != -1){
        if(this.state.url.length === 2) {
          this.state.url.splice(index, 1);
          this.setState({
           url: this.state.url
          })
        } else if (this.state.url.length > 2) {
          this.state.url.splice(index, 1);
          this.state.url[index] = "?show=" + this.state.url[index].substr(1);
          this.setState({
            url: this.state.url
          })
        }
      }
      var index = this.state.url.indexOf(",css");
      if (index != -1){
        this.state.url.splice(index, 1);
        this.setState({
          url: this.state.url
        })
      }
    }

  }

  handleClickPrev(showH, showJ, showC, showP){
    showP = !showP;
    this.state.ShowPrev = !this.state.ShowPrev

    if (showP && !showH && !showJ && !showC){
      this.setState((state) => ({
        url: state.url.concat(["?show=preview"]),
      }))
    } else if (showP && (showH || showJ || showC) ) {
      this.setState((state) => ({
        url: state.url.concat([",preview"]),
      }))
    } else if (!showP) {
      var index = this.state.url.indexOf("?show=preview");
      if (index != -1){
        if(this.state.url.length === 2) {
          this.state.url.splice(index, 1);
          this.setState({
           url: this.state.url
          })
        } else if (this.state.url.length > 2) {
          this.state.url.splice(index, 1);
          this.state.url[index] = "?show=" + this.state.url[index].substr(1);
          this.setState({
            url: this.state.url
          })
        }
      }
      var index = this.state.url.indexOf(",preview");
      if (index != -1){
        this.state.url.splice(index, 1);
        this.setState({
          url: this.state.url
        })
      }
    }
  }

  reset(){
    this.setState((state) => ({ 
      url: state.baseUrl,
      ShowHTML: false,
      ShowJS: false,
      ShowCSS: false,
      ShowPrev: false
    }))
  }
  
  render(){
    // these variables are created because working directly with stat created
    // issues due to its asyncronous nature
    var showH = this.state.ShowHTML;
    var showJ = this.state.ShowJS;
    var showC = this.state.ShowCSS;
    var showP = this.state.ShowPrev;
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
          <button ref="html" onClick={this.handleClickHtml.bind(this, showH, showJ, showC, showP)}>Show html</button>
          <button onClick={this.handleClickJS.bind(this, showH, showJ, showC, showP)}>Show JavaScript</button>
          <button onClick={this.handleClickCSS.bind(this, showH, showJ, showC, showP)}>Show CSS</button>
          <button onClick={this.handleClickPrev.bind(this, showH, showJ, showC, showP)}>Show Preview</button>
          
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