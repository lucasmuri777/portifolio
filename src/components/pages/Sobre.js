import Box from "../layout/Box";

import styles from './Sobre.css'
import fotoPrt from "../../images/Progframation.png" 

export default function Sobre(){
    return(
       <Box>
            <div className="Sobre-container">
                <div className="Sobre-mim">
                    <div className="text-container">
                        <h1>Programador <span className="gradient-font">Front-End</span></h1>
                        <p>
                            E aí! Sou um programador front-end especializado em criar experiências web incríveis e responsivas. 
                            Minhas habilidades abrangem uma variedade de tecnologias, como <strong>HTML5, CSS3, Bootstrap, JavaScript, React.js, Adobe Photoshop e WordPress.</strong>
                        </p>
                        <p>
                            Com foco no desenvolvimento front-end, eu adoro transformar designs em código funcional e com um visual super legal. Sou ninja em HTML5 e CSS3, 
                            o que me permite criar layouts flexíveis e adaptáveis, garantindo que tudo fique bonito em diferentes dispositivos e navegadores.
                        </p>
                        <p>
                            Tenho um ótimo domínio do JavaScript e React.js, sou capaz de adicionar uma pitada de interatividade e funcionalidades dinâmicas a qualquer projeto em que eu esteja envolvido.
                            <br></br>
                            Ah, e não posso esquecer de mencionar minha experiência de 2 anos na empresa Cliqa! Por lá, tive a oportunidade de trabalhar em vários sites 
                            incríveis. Participei de projetos desafiadores, desde a concepção do design até a entrega final. Trabalhando em equipe com pessoas super talentosas, 
                            aprendi a lidar com prazos apertados e a solucionar problemas complexos, sempre garantindo que o resultado fosse de alta qualidade e deixasse os clientes satisfeitos.
                        </p>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={fotoPrt} alt="Programador Front-End"/>
                </div>
            </div>
       </Box>
    )
}