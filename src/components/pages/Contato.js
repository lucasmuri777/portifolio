import Box from "../layout/Box";

import styles from "./Contato.css"

import { BsFillTelephoneFill, BsEnvelopeFill, BsLinkedin, BsGithub } from "react-icons/bs";


export default function Contato(){
    return(
        <Box customClass="contact-page">
            <div className="center-contato">
                <h1>Estou ansioso para fazer parte da sua equipe!</h1>

                <ul>
                    <li>
                        <a href="https://web.whatsapp.com/send?phone=5511971870680&text=Olá, Tudo bem? Vi seu portifólio e fiquei curisoso a respeito de você! Podemos conversar?" target="_blank">
                            <div className="icon">
                                <BsFillTelephoneFill/>
                            </div>
                            <div className="info-contact">
                                (11) 97187-0680      
                            </div>              
                            </a>
                    </li>
                    <li>
                        <a href="mailto:lucasmuri777@gmail.com" target="_blank">
                            <div className="icon">
                                <BsEnvelopeFill/>
                            </div>
                            <div className="info-contact">
                                lucasmuri777@gmail.com       
                            </div>            
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/lucas-muriano-293854262/" target="_blank">
                            <div className="icon">
                                <BsLinkedin/>
                            </div>
                            <div className="info-contact">
                                Lucas Muriano Resende         
                            </div>         
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/lucasmuri777" target="_blank">
                            <div className="icon">
                                <BsGithub/>
                            </div>
                            <div className="info-contact">
                                lucasmuri777      
                            </div>              
                        </a>
                    </li>
                </ul>
            </div>
        </Box>
    )
}