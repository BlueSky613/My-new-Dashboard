import React from "react";
import { useState, useEffect } from "react";
import Papa from "papaparse";

const MyCsvLoader = () => {
    const [ text, setText ] = useState();

    const load = function(){
        fetch( './tugo_data.csv' )
            .then( response => response.text() )
            .then( responseText => {
                setText( responseText );
            })
    };


    return (
        <div className="h-20 pt-8 mt-3 font-bold font-haken italic text-white" >
            <p className="mx-5 text-4xl">Scraping Page</p>
            <button onClick={ load }>load</button>
            <h2>text:</h2>
            <pre>{ text }</pre>
        </div>
    );



};

export default MyCsvLoader;