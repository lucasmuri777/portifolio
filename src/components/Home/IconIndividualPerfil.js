import { useEffect } from "react";
import { DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap, DiGit } from "react-icons/di";

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
                        React.js é um framework de Javascript.
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
            </div>

        </>
    )
}