function handleClick(e, name, showHtml, showJs, showCss, showPreview) {
  let truthy = false;
  // sets truthy to refer to the button that was clicked
  truthy = getButtonClicked(e, name, showHtml, showJs, showCss, showPreview, truthy);
  // adding text when button is the only one clicked
  if (truthy && e.state.onlyTrue === 1){
    return [`?show=${name}`];
  } 
  // adding text when more than one button is clicked
  else if(truthy && e.state.onlyTrue > 1){
      return [`,${name}`];
    }  
  // removing text (button being 'unchecked')
  else if (!truthy) {
    var index = e.state.showFiles.indexOf(`?show=${name}`);
    console.log("index: ", index)
    console.log("in index: ", e.state.showFiles[index]);
    if (index != -1){
      if(e.state.onlyTrue === 0) {
        e.state.showFiles.pop(index, 1);
        return e.state.showFiles;
      } else if (e.state.onlyTrue > 0) {
        e.state.showFiles.splice(index, 1);
        return  e.state.showFiles[index] = ["?show=" + e.state.showFiles[index].substring(1)];
      }
    }
    index = e.state.showFiles.indexOf(`,${name}`);
    if (index != -1){
      e.state.showFiles.splice(index, 1);
      return e.state.showFiles;
    }
  }
};

function getButtonClicked(e, name, showHtml, showJs, showCss, showPreview, truthy) {
    // checks which checkbox was changed
  switch(name) {
    case "index.html": {
      truthy = showHtml;
      console.log("showHtml: ",showHtml);
      if (truthy)
        e.state.onlyTrue += 1;
      else
        e.state.onlyTrue -= 1;
      break;
      } 
    case "js":{
      truthy = showJs;
      if (truthy)
        e.state.onlyTrue += 1;
      else
        e.state.onlyTrue -= 1;
      break;
      } 
    case "css": {
      truthy = showCss;
      if (truthy)
        e.state.onlyTrue += 1;
      else
        e.state.onlyTrue -= 1;
      break;
      } 
    case "preview": {
      truthy = showPreview;
      if (truthy)
        e.state.onlyTrue += 1;
      else
        e.state.onlyTrue -= 1;
      break;
    }
  }
  console.log(truthy);
  return truthy;
}
  export { handleClick };