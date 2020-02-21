import React, { Component } from 'react'
import { Form, Button, FormControl } from 'react-bootstrap'
class ApiTester extends Component {
    constructor(props) {
        super(props)

        this.state = {
            serviceUrl: '',
            methodType: 'POST',
            requestJson: '',
            responseJson: '',
            serviceUrlError: '',
            requestJsonError: ''
        }
    }
    handleServiceUrlChange = (event) => {
        this.setState({
            serviceUrl: event.target.value
        })
    }
    handleRequestJsonChange = (event) => {
        this.setState({
            requestJson: event.target.value
        })
    }
    handleResponseJsonChange = (event) => {
        this.setState({
            responseJson: event.target.value
        })
    }
    handlMethoTypeChange = (event) => {
        this.setState({
            methodType: event.target.value
        })
    }
    validateForm = () => {
        let responseJson = ""
        let serviceUrlError = ""
        let requestJsonError = ""

        if (!this.state.serviceUrl.includes("http")) {
            serviceUrlError = "Please enter valid Service Url"
        }
        if (serviceUrlError) {
            this.setState({
                serviceUrlError
            })
            return false
        }
        if (this.state.requestJson.length == 0) {
            requestJsonError = "Please provide input JSON"
        }
        if (requestJsonError) {
            this.setState({
                requestJsonError
            })
            return false
        }
        return true
    }
    handleSubmit = (event) => {
        const isValid = this.validateForm()
        if (isValid) {
           //this.setState({ xvalue: json });
            //alert(`${this.state.serviceUrl} ${this.state.methodType} ${this.state.requestJson} ${this.state.responseJson} ${json}`)
        }
    }
    render() {
        return (
            <div className="container BgColorWhite">
                <h1>API Tester</h1>
                <form id="ApiTesterForm">
                    <div className="form-group">
                        <label htmlFor="txtServiceUrl">Serice Url: <span style={{ color: "red" }}>{this.state.serviceUrlError}</span></label>
                        <input type="text" className="form-control" id="txtServiceUrl" value={this.state.serviceUrl} onChange={this.handleServiceUrlChange} aria-describedby="serviceUrlHelp" placeholder="Service Url"></input>
                        <small id="serviceUrlHelp" className="form-text text-muted">Please enter the service Url</small>

                    </div>
                    <div className="form-group">
                        <label htmlFor="selectMethod">Select HTTP Method:</label>
                        <select className="form-control" id="selectMethod" value={this.state.methodType} onChange={this.handlMethoTypeChange} aria-describedby="httpMethodHelp">
                            <option value="POST">POST</option>
                            <option value="GET">GET</option>
                            <option value="PUT">PUT</option>
                        </select>
                        <small id="httpMethodHelp" className="form-text text-muted">Please select http method</small>

                    </div>
                    <div className="row">
                        <div className="col-lg-6 mb-6 grid-margin">
                            <div className="form-group shadow-textarea">
                                <label htmlFor="txtAreaJSONRequest">JSON Request: <span style={{ color: "red" }}>{this.state.requestJsonError}</span></label>
                                <textarea className="form-control z-depth-1" id="txtAreaJSONRequest" value={this.state.requestJson} onChange={this.handleRequestJsonChange} rows="12" placeholder="Paste JSON here"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-6 grid-margin">
                            <div className="form-group shadow-textarea">
                                <label htmlFor="txtAreaJtxtAreaJSONResponseSON">JSON Response:</label>
                                <textarea className="form-control z-depth-1" id="txtAreaJSONResponse" value={this.state.jsonResponse} onChange={this.handleResponseJsonChange} rows="12" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <Button variant="btn btn-primary" onClick={this.handleSubmit}>Submit</Button>
                    </div>
                </form>
            </div>
        )
    }
}
export default ApiTester;