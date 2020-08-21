import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "21/08/2020",
        horario: "19h"

    },

    casa: {
        nome: "Fluminense",

    },
    visitante: {
        nome: "Vasco",
    }
};


export default class App extends React.Component {
   
    render(){
            return <PlacarContainer {...dados} tempo={92}/>;
    }
}