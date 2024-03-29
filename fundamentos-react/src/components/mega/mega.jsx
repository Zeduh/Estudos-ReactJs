import React, { useState } from "react";

const Mega = (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0))

    function gerarNumeroNaoContido(Array){
        const max = 60
        const min = 1
        const novoNumero = parseInt(Math.random() * (max - min))
        return Array.includes(novoNumero)
            ? gerarNumeroNaoContido(Array) : novoNumero
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdeNumero)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumeroNaoContido(a)
                return [...a, novoNumero] 
            }, [])
            .sort((a, b) => a -b)
        setNumeros(novoArray)
    }

    return(
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    )
}

export default Mega;