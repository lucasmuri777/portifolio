import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from "react"

import { DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap, DiGit } from "react-icons/di";

import styles from './Carousel.css'
import CarouselSingle from './CarouselSingle';


import financasFoto from '../../images/App de despesasa.png'
import GeradordeideiasFoto from '../../images/Gerador de ideias.png'
import paintFoto from '../../images/Paint.png'
import PokedexFoto from '../../images/Pokedex.png'

export default function Carousel(){
    const [projetos, setProjetos] = useState([])
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    

    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[projetos])

   
    return(
        <>
        
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}> 
        <div className='title-projetos'><h3>Alguns Projetos</h3></div>
                    <motion.div 
                        className="inner"
                        drag="x"
                        dragConstraints={{
                            right: 0,
                            left: -width
                        }}
                        
                    >

                        <CarouselSingle 
                            foto={financasFoto}
                            Titulo="Finanças App" 
                            descricao="Página de cadastro e consulta de despesas."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiBootstrap/>]}
                            linkRepo="https://github.com/lucasmuri777/Financas-App"
                            linkDominio="https://lucasmuri777.github.io/Financas-App/"
                        />
                        <CarouselSingle 
                            foto={GeradordeideiasFoto}
                            Titulo="Gerador de ideias (GPT Ai)" 
                            descricao="Gerador de ideias de posts usando a API do ChatGPT."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiBootstrap/>]}
                            linkRepo="https://github.com/lucasmuri777/Gerador-de-ideias-javasript-puro"
                        />
                        <CarouselSingle 
                            foto={paintFoto}
                            Titulo="Paint" 
                            descricao="Página estilo Paint para você fazer suas artes online."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiBootstrap/>]}
                            linkRepo="https://github.com/lucasmuri777/App-Desenho"
                            linkDominio="https://lucasmuri777.github.io/App-Desenho/"
                        />
                        <CarouselSingle 
                            foto={PokedexFoto}
                            Titulo="Pokedex" 
                            descricao="Página de listagem de pokemons com requisições a API."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiBootstrap/>]}
                            linkRepo="https://github.com/lucasmuri777/pokemon"
                            linkDominio="https://lucasmuri777.github.io/pokemon/"
                        />
                    </motion.div>   
                </motion.div>
        </>
    )
}