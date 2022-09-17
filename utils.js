const htmlEscape = (html) => {
  return html.replace(/<|>|"|&/g, (match) => {
    console.log(match);
    switch(match) {
      case "<":
        return '&lt;';
      case ">":
        return '&gt;';
      case "\"":
        return '&quot;';
      case "&":
        return '&amp;';
      default:
        break;
    }
  })
}

htmlEscape('<h1>"你好"</h1>')

