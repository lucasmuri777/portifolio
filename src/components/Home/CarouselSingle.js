import { motion } from 'framer-motion'

import styles from './CarouselSingle.css'


import { DiChrome, DiGit } from "react-icons/di";

import { RiAlertFill } from "react-icons/ri";

export default function CarouselSingle({foto,Titulo, descricao ,tecnologias, linkRepo, linkDominio, linkAlert}){


   
    return(
        <>
       <motion.div className="projeto-single">
                            
                            <div className='project-foto'>
                                <img src={foto} alt={Titulo}/>
                                <div className='links-foto'>
                                    {linkRepo &&(
                                        <a href={linkRepo} target='_blank'>
                                            <DiGit/>   
                                        </a>
                                    )}
                                    {linkDominio &&(
                                        <a href={linkDominio} target='_blank'>
                                             
                                            <DiChrome/>
                                        </a>
                                    )}
                                    {linkAlert &&(
                                        <a onClick={()=>{alert(linkAlert)}} target='_blank'>
                                             
                                            <RiAlertFill/>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className='projeto-desc'>
                                <h3>{Titulo}</h3>
                                <p>{descricao}</p>
                            </div>
                            <div className='projeto-tecnologies'>
                                <p><strong>Tecnologias:</strong></p>
                                <ul>
                                    {tecnologias.map((e, index)=>(
                                        <li key={index}>
                                            {e}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
        </>
    )
}


/*<motion.div className="projeto-single">
                            
                            <div className='projeto-desc'>
                                <h3>Costs</h3>
                                <p>Gerenciamento de serviços.</p>
                            </div>
                            <div className='projeto-tecnologies'>
                                <p><strong>Tecnologias:</strong></p>
                                <ul>
                                    <li>
                                        {<DiReact/>}
                                    </li>
                                    <li>
                                        {<DiHtml5/>}
                                    </li>
                                    <li>
                                        {<DiCss3/>}
                                    </li>
                                    <li>
                                        {<DiJavascript/>}
                                    </li>
                                </ul>
                            </div>
                        </motion.div> */