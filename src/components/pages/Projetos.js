import CarouselSingle from "../Home/CarouselSingle";

import { useEffect, useState, useRef } from "react"

import Box from "../layout/Box";

import { DiJavascript, DiReact, DiHtml5, DiCss3, DiBootstrap, DiGit, DiWordpress, DiPhp, DiFirebase } from "react-icons/di";
import {SiTypescript, SiStyledcomponents, SiFirebase, SiTailwindcss} from 'react-icons/si'
import {TbBrandFirebase, TbBrandNextjs, TbBrandTypescript} from 'react-icons/tb'
import styles from "./Projetos.css"


import financasFoto from '../../images/App de despesasa.png'
import GeradordeideiasFoto from '../../images/Gerador de ideias.png'
import paintFoto from '../../images/Paint.png'
import PokedexFoto from '../../images/Pokedex.png'

import Tetris from '../../images/Tetris.png'
import BlockFriends from '../../images/Block Friends.png'

import PedrasVenato from '../../images/Pedras-Venato.png'
import EnjoySpa from '../../images/Enjoy-Spa.png'
import AtacadistaMoveis from '../../images/Atacadista-moveis.png'
import PersonalTechCar from '../../images/Personal-tech-car.png'
import CloneBlaze from '../../images/CloneBlaze.png'
import ChatOnlineImage from '../../images/ChatOnlineImage.png'
import tarefasOnlineImage from '../../images/TarefasImage.png'
import scrapBookOnlineImage from '../../images/ScrapBookOnline.png'

import ToDoListImage from '../../images/To-do-list.png'

import relogioImage from '../../images/FotoRelogio.png'
import quizImage from '../../images/FotoQuiz.png'

import { motion } from 'framer-motion'



export default function Projetos(){
    const [projetos, setProjetos] = useState([])
    const [width, setWidth] = useState(0)
    const [width2, setWidth2] = useState(0)
    const carousel = useRef();
    const carousel2 = useRef();

    

    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        setWidth2(carousel2.current?.scrollWidth - carousel2.current?.offsetWidth)
    },[projetos])
    return(
        <Box customClass="project-page">
            <div className="project-text">
                <h1>Minha Jornada</h1>
                <p>Até o momento, desenvolvi uma ampla variedade de projetos, tanto pessoais quanto empresariais, abrangendo diversas áreas e setores empresariais distintos. A seguir, apresentarei alguns dos projetos nos quais já estive envolvido.</p>
            </div>

            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}> 
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
                            foto={Tetris}
                            Titulo="Tetris" 
                            descricao="Jogo clássico de tetris. (EM DESENVOLVIMENTO)"
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiReact/>]}
                            linkRepo="https://github.com/lucasmuri777/tetris-react"
                            linkDominio="https://lucasmuri777.github.io/tetris-react/"
                        />

                        <CarouselSingle 
                            foto={ToDoListImage}
                            Titulo="To Do List" 
                            descricao="To Do List usando reducers do React.js e tailwind."
                            tecnologias={[<TbBrandTypescript/>, <TbBrandNextjs/>, <SiTailwindcss/>, <DiReact/>]}
                            linkRepo="https://github.com/lucasmuri777/To-do-List-Reducers"
                            linkDominio="https://to-do-list-reducers.vercel.app"
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
                            foto={relogioImage}
                            Titulo="Relógio" 
                            descricao="Relógio automático com variações de texto."
                            tecnologias={[<TbBrandTypescript/>, <TbBrandNextjs/>, <SiTailwindcss/>, <DiReact/>]}
                            linkRepo="https://github.com/lucasmuri777/Relogio-Nextjs"
                            linkDominio="https://relogio-nextjs.vercel.app"
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
                        <CarouselSingle 
                            foto={BlockFriends}
                            Titulo="Block Friends" 
                            descricao="Crie seu personagem unico e jogue diversos minigames. (EM DESENVOLVIMENTO)"
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiReact/>]}
                            linkAlert='EM DESENVOLVIMENTO'
                        />
                      
                    </motion.div>   
                </motion.div>
                <motion.div ref={carousel2} className="carousel" whileTap={{cursor: "grabbing"}}> 
                    <motion.div 
                        className="inner"
                        drag="x"
                        dragConstraints={{
                            right: 0,
                            left: -width2
                        }}
                        
                    >
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
                            foto={PersonalTechCar}
                            Titulo="Personal Tech Car" 
                            descricao="Empresa de Estética automotiva, blindagens e entre outros."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiWordpress/>, <DiPhp/>]}
                            linkDominio="https://personaltechcar.com.br"
                        />
                        <CarouselSingle 
                            foto={AtacadistaMoveis}
                            Titulo="Atacadista Móveis" 
                            descricao="Empresa de móveis planejados."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiWordpress/>, <DiPhp/>]}
                            linkDominio="https://cliqsite.com.br/atacadistamoveis/"
                        />
                        <CarouselSingle 
                            foto={PedrasVenato}
                            Titulo="Pedras Venato" 
                            descricao="Empresa de mármore."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiWordpress/>, <DiPhp/>]}
                            linkDominio="https://pedrasvenato.com.br"
                        />
                        <CarouselSingle 
                            foto={EnjoySpa}
                            Titulo="Enjoy Spa" 
                            descricao="Empresa de massagens relaxantes."
                            tecnologias={[<DiHtml5/>, <DiCss3/>, <DiJavascript/>, <DiWordpress/>, <DiPhp/>]}
                            linkDominio="https://enjoyspa.com.br"
                        />
                    </motion.div>   
                </motion.div>
            
        </Box>
    )
}