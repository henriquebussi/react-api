import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import "./fetch.css";

function Fetch(){
    const [fato, setFato] = useState('');
    const [showParagraph, setShowParagraph] = useState(false);
    const fetchFact = () => {
    fetch("https://catfact.ninja/fact")
     .then((response) => response.json())
     .then((data) => setFato(data.fact))
     setShowParagraph(!showParagraph);
    }   
    
    return(
        <div className='botao-geral'>
            <div className="botao">
                <Button className="botaouni" onClick={fetchFact} variant="outline-primary">Ver fato</Button>{' '}
                {showParagraph && <p>{fato}</p>}
                {showParagraph && <img src="./img/aq.gif" alt="gato" width={400}/>}
            </div>
        </div>
    )
}

export default Fetch;