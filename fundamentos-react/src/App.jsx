import './App.css'
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/repeticão'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from'./components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/mega'

const App = () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#11 - Gerador da mega" color="#a2c4c9">
                <Mega qtdeNumero={6}></Mega>
            </Card>

            <Card titulo="#10 - Contador" color="#293E6A">
                <Contador></Contador>
            </Card>

            <Card titulo="#09 - Input" color="#9C0F5F">
                <Input ></Input>
            </Card>

            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>

            <Card titulo="#07 - Comunicação Direta" color="#4298B5">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card titulo="#06 - Condicional V2" color="#FA6900">
                <CondicionalComIf numero={10} />
            </Card>

            <Card titulo="#05 - Condicional V1" color="#E94C6F">
                <Condicional numero={10} />
            </Card>

            <Card titulo="#04 - Repetição" color="#008BBA">
                <Repeticao />
            </Card>

            <Card titulo="#03 - Componente com Filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>José</li>
                        <li>Eduardo</li>
                        <li>Cury</li>
                        <li>Faria</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="#02 - Componente com parâmetro" color="#FF85CB">
                <ComParametro titulo="Esse é o título" subtitulo="esse é o subtítulo" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro />
            </Card>
        </div>
    </div>
)

export default App;