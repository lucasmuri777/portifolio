import { useEffect } from "react";
import { DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap, DiGit } from "react-icons/di";
import {SiTypescript, SiStyledcomponents} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'

import styles from './IconIndividual.css'

export default function IconIndividualPerfil({close, tec}){

    

    return(
        <>
            <div className="tecicon">    
                <a onClick={close}>X</a> 
                {tec === 'html' && (
                    <p>
                        <DiHtml5/>
                        HTML nada mais é que o esqueleto do site.
                    </p>
                )}
                {tec === 'css' && (
                    <p>
                        <DiCss3/>
                        CSS nada mais é que o estilo do site.
                    </p>
                )}
                {tec === 'js' && (
                    <p>
                        <DiJavascript/>
                        JavaScript nada mais é que o cérebro do site.
                    </p>
                    )}
                {tec === 'react' && (
                    <p>
                        <DiReact/>
                        React.js é uma biblioteca de Javascript.
                    </p>
                    )}
                {tec === 'bootstrap' && (
                    <p>
                        <DiBootstrap/>
                        Bootstrap é uma biblioteca de CSS.
                    </p>
                    )}
                {tec === 'github' && (
                    <p>
                        <DiGit/>
                        Github é uma plataforma de hospedagem de código.
                    </p>
                    )}
                    {tec === 'next' && (
                    <p>
                        <TbBrandNextjs/>
                        É um Framework de JavaScript.
                    </p>
                    )}
                    {tec === 'styled-components' && (
                    <p>
                        <SiStyledcomponents/>
                        É uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. 
                    </p>
                    )}
                    {tec === 'typescript' && (
                    <p>
                        <SiTypescript/>
                        Linguagem de programação baseada em JavaScript adicionando Tipagens ao código.
                    </p>
                    )}
            </div>

        </>
    )
}