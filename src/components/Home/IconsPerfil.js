import { DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap, DiGit } from "react-icons/di";

import styles from './IconsPerfil.css'
import { useEffect, useState } from "react";
import IconIndividualPerfil from "./IconIndividualPerfil";

export default function IconsPerfil(){
    const [nenhum, setNenhum] = useState(true)
    const [desc, setDesc] = useState('')

    useEffect(()=>{
        const list = document.querySelectorAll('.icons-container-perfil ul li')
        list.forEach((e)=>{
            e.addEventListener('click', descClick)
        })
    },[nenhum])

    function descClick(){
        setDesc(this.classList[0])
        setNenhum(false)
    }
    function fechar(){
        setNenhum(true)
    }


    return(
        <>
             <div className="icons-container-perfil">
                    { nenhum === true &&(
                        <ul>
                            <li className='html'>
                                <DiHtml5/>
                            </li>
                            <li className='css'>
                                <DiCss3/>
                            </li>
                            <li className='js'>
                                <DiJavascript/>
                            </li>
                            <li className='bootstrap'>
                                <DiBootstrap/>
                            </li>
                            <li className='react'>
                                <DiReact/>
                            </li>
                            <li className='github'>
                                <DiGit/>
                            </li>
                        </ul>
                    )}
                    {
                        nenhum === false &&(
                            <IconIndividualPerfil close={fechar} tec={desc}/>
                        )
                    }

                </div>
        </> 
    )
}