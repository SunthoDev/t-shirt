import React from 'react';
import "./Main.css"
import { useLoaderData } from 'react-router-dom';

const Main = () => {

    let shart=useLoaderData()
    console.log(shart)

    return (
        <div>
            

            <h2>Hellow I am Main LayOut : {shart.length}</h2>



        </div>
    );
};

export default Main;