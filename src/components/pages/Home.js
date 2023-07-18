import { useEffect, useState, useRef } from "react"
import Box from "../layout/Box"

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';



import styles from './Home.css'
import Perfil from "../Home/Perfil"
import Carousel from "../Home/Carousel"

export default function Home(){
    


    return(
        <Box>
            <Perfil/>
            <div className="resumo-container">
                <div className="text-container">
                    <div className="description">
                        <h3>Um pouco sobre mim</h3>
                        <p>Sou um programador front-end com dois anos de experiência, especializado no desenvolvimento de sites. 
                            Tenho habilidades em HTML, CSS, JavaScript, Typescript, React, Next.js, Firebase, Node.js Também tenho 
                            experiência em trabalhar com Wordpress. Sempre atualizado com as últimas tendências, busco oportunidades 
                            para contribuir com projetos inovadores.
                        </p>
                        <h3>Redes Sociais</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/lucasmuri777" target="_blank"><AiFillGithub/></a>
                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/lucas-muriano-293854262/" target="_blank"><AiFillLinkedin/></a>
                            </li>
                        </ul>
                    </div>
                    
                </div>

                <Carousel/>
                
            </div>
            
            
        </Box>
        
    )
}