import React, { Component } from "react";
class Project extends Component {
   constructor(props) {
     super(props);
     this.state = {
       selectValue: ""
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
 }
       handleDropdownChange(e) {this.setState({ selectValue: e.target.value });}
  render() {
    return (
    <div className="body">
      <div>
        <div>
           <h1 style={{color:'blue'}}>Available Modules</h1>
            <select style={{backgroundColor:'pink'}} id="dropdown" onChange={this.handleDropdownChange}>
            <option value=" "></option>
            <option value="JavaScript">JAVA SCRIPT</option>
            <option value="React">REACT</option>
            <option value="Html">HTML</option>
            <option value="CSS">CSS</option>
            </select>

          </div>
          <div style={{color:'blue'}}>Selected Module in The Project : {this.state.selectValue}</div>
          </div>
           </div>

    );
  }
}
export default Project;
