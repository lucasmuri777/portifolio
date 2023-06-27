import { useState } from 'react'
import foto from '../../images/FotoEu.jpeg'
import styles from './Foto.css'

import curriculo from '../../Documents/Curriculo-Lucas-Muriano.pdf'

import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiReact } from "react-icons/di";
import { SiCss3, SiTreehouse } from "react-icons/si";

export default function Foto({phone}){

    const [vizibility, setVizibility] = useState(false)
    function mostrar(e){
        let className = e.target
        if(className.classList.contains('active')){
            setVizibility(true)
        }  
    }
    function tirar(e){
            setVizibility(false)
        }


    return(
        <div className={`container-img ${phone}`} onMouseEnter={mostrar} onMouseLeave={tirar}>
            
                    <div className='box-talents'>
                        <h3>Desenvolvedor Front-End</h3>    
                        <ul>
                            <li><AiFillGithub/></li> 
                            <li><AiFillHtml5/></li> 
                            <li><DiJavascript1/></li> 
                            <li><DiReact/></li> 
                            <li><SiCss3/></li> 
                        </ul> 
                        <a href={curriculo} target='_blank' className='btn'>Baixar meu curriculo</a>
                    </div>
                
            
            
                
                
            
        </div>
    )
}

/*<div className='box-img'>
                    <img src={foto} alt="Foto de Lucas Muriano"/>
                </div>*/