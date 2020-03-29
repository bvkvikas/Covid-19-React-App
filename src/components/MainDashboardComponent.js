import React from "react";
import CountryListComponent from "./CountryListComponent";
import DataDisplayComponent from "./DataDisplayComponent";
import FeedComponent from "./FeedComponent";
import Navbar from "react-bootstrap/Navbar";
import LogoComponent from "./LogoComponent";

const MainDashboardComponent = () => {
    return <div className={"container-fluid"}>
        <br/>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <LogoComponent/> {'  '}
                COVID-19 Tracker
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
};
export default MainDashboardComponent;