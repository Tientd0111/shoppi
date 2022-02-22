import React from "react";
import Banner from "../components/Banner";
import SectionPorfilion from "../components/SectionPorfilion";
import NewProduct from "../components/NewProduct";
import Trademark from "../components/Trademark";

class Home extends React.Component{
    render(){
        return(
            <>
                <Banner/>
                <SectionPorfilion/>
                <NewProduct/>
                <Trademark/>
            </>
        );
    }
}
export default Home;