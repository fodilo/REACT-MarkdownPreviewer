/*Display */
  class Display extends React.Component {

    constructor(props){
      super(props);
      this.state={disp:"gg"};
      this.convertHtml=this.convertHtml.bind(this);
      this.updateDisp=this.updateDisp.bind(this);

    }
    /* return html object from compiler*/
    convertHtml(v){

      let a= marked(v);
      let b={__html:a};
      console.log(b);

          return b;
    }
    updateDisp( value){
      this.setState({disp:value});
    }

    render(){
      const obj2 = (<div className={this.props.className} dangerouslySetInnerHTML={this.convertHtml(this.state.disp)}></div>);
      return (obj2);

    }
  }

/*Text area*/
  class TextEntery extends React.Component {
    constructor(props){
      super(props);
      this.state={value: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"};
      this.handleKeyDown = this.handleKeyDown.bind(this);

    }
    handleKeyDown(event) {
this.setState({value:event.target.value});

    }
    render(){

      const obj=(<div className="row"><textarea rows="22" className="col-xs-6"  onChange={this.handleKeyDown} value={this.state.value} />

        <Display className="col-xs-6" disp={this.state.value}/>
      </div>);
      return (obj);
    }

  }



/*Rendering*/

  ReactDOM.render(
  (
    <TextEntery />
)
  ,
  document.getElementById('wrapper'));
