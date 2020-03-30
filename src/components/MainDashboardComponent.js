import React from "react";
import CountryListComponent from "./CountryListComponent";
import DataDisplayComponent from "./DataDisplayComponent";
import FeedComponent from "./FeedComponent";
import Navbar from "react-bootstrap/Navbar";
import LogoComponent from "./LogoComponent";
import * as constants from '../server/constants';
import * as api from '../../src/server/api';

class MainDashboardComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {data: {}};
  }

 async getData(options) {
    var data;
    await api.makeGetAPICall(options).then(response => { this.setState({data: response})});
    return data;
}
    componentDidMount(){
        var options = {
    url: constants.URL.ALL_COUNTRIES,
    requestType : constants.REQUEST_TYPE.GET
}
        this.getData(options);
    }
    render(){

    return <div className={"container-fluid"}>
        <br/>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <LogoComponent/> {'  '}
                COVID-19 
            </Navbar.Brand>
        </Navbar><br/>
        <div className="row">
            <div className={"col-sm-2"}>
                <CountryListComponent/>
            </div>
            <div className={"col-md-7"}>
                <DataDisplayComponent/>
            </div>
            <div className={"col-md-3"}>
                <FeedComponent/>
            </div>
        </div>
    </div>
    }
}

export default MainDashboardComponent;