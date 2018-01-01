 // input area
class InputArea extends React.Component {
  constructor(props) {
    super(props);
this.state={value:'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'}  ;
this.handleChange=this.handleChange.bind(this);
}
  handleChange(event){
    this.setState({value:event.target.value});
    this.props.update(event.target.value);
  }

  render(){
return (<textarea rows="59" cols="40"  onChange={this.handleChange} value={this.state.value} />);
  }
  }



  // display
  class Display extends React.Component {
    constructor(props) {
      super(props);
      this.state={disp:"Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"};
      this.updateDisp=this.updateDisp.bind(this);
    }
    convertHtml(v){

      let a= marked(v);
      let b={__html:a};
      console.log(b);

        return b;
    }
    updateDisp(val){
      this.setState({disp:val});

    }

    render(){
      return (<div className="row test">
        <div className="col-xs-6">
          <InputArea  update={this.updateDisp}/>
        </div>
        <div className="col-xs-6" dangerouslySetInnerHTML={this.convertHtml(this.state.disp)}>

        </div>
      </div>);

  }
}






/*show the display*/
ReactDOM.render(
(
  <Display />
)
,
document.getElementById('wrapper'));
