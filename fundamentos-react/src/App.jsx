import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/repeticão'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default props =>
    <div className="App">
        <Card titulo="#06 - Condicional V2">
            <CondicionalComIf numero={10} />
        </Card>

        <Card titulo="#05 - Condicional V1">
            <Condicional numero={10} />
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>

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