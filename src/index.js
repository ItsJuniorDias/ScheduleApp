import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css"

class App extends Component {
	state = {};
	render() {
	return (
		<React.Fragment>
		<MDBContainer>
		<MDBRow>
      <MDBCol md="9">
			<Event title="Call with Ana" time="10:00"/>
      </MDBCol>
      <MDBCol md="3" />
     </MDBRow>
		</MDBContainer>
		</React.Fragment>
	);
	}
}
class Event extends Component {
	state = {
		time: "09:00",
		title: "My State",
	};
	constructor() {
		super();
		this.vatTime = "12:00";
		this.varTitle = "My variable Title"
	} 

	render() {
		return (
			<React.Fragment>
        {/* This is genarated from state */}
        <h3>
          State:
          {this.state.time} - {this.state.title}
          <button
            onClick={() => {
              this.setState({ title: "My NEW State title"});
              console.log(this.state.title);
            }}
          >
            Change state title
          </button>
        </h3>
      </React.Fragment>
		);
	}
}


ReactDOM.render(<App/>, document.getElementById("root"));

