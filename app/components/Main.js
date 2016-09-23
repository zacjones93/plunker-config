import React from 'react';
import ReactDOM from 'react-dom';
import { handleClick } from './showFiles.js';

// Code goes here
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plunkerSlug: " ",
      showFiles: [],
      onlyTrue: 0,
      sidebar: " ",
      deferRun: " ",
      Url: `${this.props.Url}`,
      baseUrl: "https://embed.plnkr.co/"
    }
  }
  configureUrl(plunkSlug, show, side, defer) {
    const { plunkerSlug, showFiles, sidebar, deferRun, baseUrl } = this.state;
    let configuredUrl = `${baseUrl}${plunkSlug}${showFiles}${sidebar}${deferRun}`
    this.setState({Url: configuredUrl});
  };
  urlChange(event) {
    this.setState({Url: event.target.value})
  }; 

  slugChange(e) {
    const { showFiles, sidebar, deferRun } = this.state
    let temp = this.refs.slug.value;
    this.setState({
      plunkerSlug: this.refs.slug.value
    });
    this.configureUrl(temp, showFiles, sidebar, deferRun);
  };
  handleShowFile(e) {
    let name = e.target.name;
    let showHtml, showJs, showCss, showPreview;
    switch(name) {
      case "index.html":{
        showHtml = e.target.checked
        if (showHtml) {
          this.setState({
            showFiles: this.state.showFiles.concat(handleClick(this, name, showHtml, showJs, showCss, showPreview))
          });
        } else {
          this.setState({
            showFiles: handleClick(this, name, showHtml, showJs, showCss, showPreview)
          })
        }
        break;
      }
      case "js":{
        showJs = e.target.checked
        console.log("showJS click: ", showJs)
        if (showJs){
          this.setState({
            showFiles: this.state.showFiles.concat(handleClick(this, name, showHtml, showJs, showCss, showPreview))
          });
        } else {
          this.setState({
            showFiles: handleClick(this, name, showHtml, showJs, showCss, showPreview)
          })
        }
        break;
      }
      case "css":{
        showCss = e.target.checked
        if (showCss) {
          this.setState({
            showFiles: this.state.showFiles.concat(handleClick(this, name, showHtml, showJs, showCss, showPreview))
          });
        } else {
          this.setState({
            showFiles: handleClick(this, name, showHtml, showJs, showCss, showPreview)
          })
        }
        break;
      }
      case "preview":{
        showPreview = e.target.checked
        if (showPreview) {
          this.setState({
            showFiles: this.state.showFiles.concat(handleClick(this, name, showHtml, showJs, showCss, showPreview))
          });
        } else {
          this.setState({
            showFiles: handleClick(this, name, showHtml, showJs, showCss, showPreview)
          })
        }
        break;
      }
    }
  };
  render(){
    const { Url } = this.state;
    return (
      <div>
        <label>Current URL:</label><br />
        {Url} <br />
        <label>Update URL:</label><br />
        <textarea
          onChange={this.urlChange.bind(this)} value={Url}
        />
        <form>
            <label>Plunker id Slug:</label><br />
            <input
              type="text" ref="slug" />
            <button type="button" onClick={this.slugChange.bind(this)}>Enter</button>
        </form>

        <span>What tabs will be shown? (Defualts to index.html and preview)</span><br/>
          <span><b>html:</b></span>
          <input type="checkbox" name="index.html" onChange={this.handleShowFile.bind(this)}></input>
          <span><b>JavaScript:</b></span>
          <input type="checkbox" name="js" onChange={this.handleShowFile.bind(this)}></input>
          <span><b>CSS:</b></span>
          <input type="checkbox" name="css" onChange={this.handleShowFile.bind(this)}></input>
          <span><b>Preview:</b></span>
          <input type="checkbox" name="preview" onChange={this.handleShowFile.bind(this)}></input>
      </div>
    )
  }
}

ReactDOM.render(<Main Url={"https://embed.plnkr.co/"} />, document.getElementById('root'));