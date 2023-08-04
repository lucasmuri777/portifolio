import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from "react"

import { DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap, DiGit } from "react-icons/di";
import {SiTypescript, SiStyledcomponents, SiFirebase, SiTailwindcss} from 'react-icons/si'
import {TbBrandFirebase, TbBrandNextjs, TbBrandTypescript} from 'react-icons/tb'
import styles from './Carousel.css'
import CarouselSingle from './CarouselSingle';


import financasFoto from '../../images/App de despesasa.png'
import GeradordeideiasFoto from '../../images/Gerador de ideias.png'
import paintFoto from '../../images/Paint.png'
import PokedexFoto from '../../images/Pokedex.png'
import CloneBlaze from '../../images/CloneBlaze.png'
import ChatOnlineImage from '../../images/ChatOnlineImage.png'
import tarefasOnlineImage from '../../images/TarefasImage.png'
import scrapBookOnlineImage from '../../images/ScrapBookOnline.png'
import relogioImage from '../../images/FotoRelogio.png'
import quizImage from '../../images/FotoQuiz.png'

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
                            foto={scrapBookOnlineImage}
                            Titulo="ScrapBook Online" 
                            descricao="Rede social de scrapbook... Crie seu scrapBook com seu amigo!"
                            tecnologias={[<TbBrandFirebase/>, <SiStyledcomponents/>, <TbBrandTypescript/>, <TbBrandNextjs/>]}
                            linkDominio="https://scrap-book.vercel.app"
                        />
                         <CarouselSingle 
                            foto={tarefasOnlineImage}
                            Titulo="Tarefas Onlines" 
                            descricao="Sistema de cadastro de tarefas online."
                            tecnologias={[<TbBrandFirebase/>, <SiStyledcomponents/>, <TbBrandTypescript/>, <TbBrandNextjs/>]}
                            linkRepo="https://github.com/lucasmuri777/Tarefas-NextJs"
                        />
                          <CarouselSingle 
                            foto={ChatOnlineImage}
                            Titulo="Chat Online" 
                            descricao="Chat online com login com google provider."
                            tecnologias={[<TbBrandFirebase/>, <SiStyledcomponents/>, <TbBrandTypescript/>, <TbBrandNextjs/>]}
                            linkRepo="https://github.com/lucasmuri777/ChatRealTime-NextJs"
                        />

                        <CarouselSingle 
                            foto={CloneBlaze}
                            Titulo="Clone da Blaze" 
                            descricao="Clone fictício de um site de apostas (Só para teste de minhas habilidades)"
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiReact/>]}
                            linkRepo="https://github.com/lucasmuri777/Blaze-clone-Mines"
                            linkDominio="https://lucasmuri777.github.io/Blaze-clone-Mines/"
                        />

                        <CarouselSingle 
                            foto={quizImage}
                            Titulo="Quiz de Programação" 
                            descricao="Quiz básico de programação."
                            tecnologias={[<TbBrandTypescript/>, <TbBrandNextjs/>, <SiTailwindcss/>, <DiReact/>]}
                            linkRepo="https://github.com/lucasmuri777/Quiz-Programacao"
                            linkDominio="https://quiz-programacao-mu.vercel.app"
                        />
                        
                        <CarouselSingle 
                            foto={relogioImage}
                            Titulo="Relógio" 
                            descricao="Relógio automático com variações de texto."
                            tecnologias={[<TbBrandTypescript/>, <TbBrandNextjs/>, <SiTailwindcss/>, <DiReact/>]}
                            linkRepo="https://github.com/lucasmuri777/Relogio-Nextjs"
                            linkDominio="https://relogio-nextjs.vercel.app"
                        />
                       

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
                        
                       
                    </motion.div>   
                </motion.div>
        </>
    )
}