import './App.css'
import React from "react";

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

export default props =>
    <div className="App">
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>José</li>
                    <li>Eduardo</li>
                    <li>Cury</li>
                    <li>Faria</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com parâmetro">
            <ComParametro titulo="Esse é o título" subtitulo="esse é o subtítulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

    </div>