import { useEffect, useState } from 'react'
import styles from './NightModel.css'
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

export default function NightModel(){
    const [night, setNight] = useState('White');

    function HandleModel(){
        if(night == 'Dark'){
            setNight('White')
            mudarTema(night)
        }
        else if(night == 'White'){
            setNight('Dark')
            mudarTema(night)
        }
    }

    function mudarTema(tema){
        if(tema === 'White'){
            document.body.style.setProperty('--fundo-site', 'rgb(245, 245, 245)');
            document.body.style.setProperty('--fundo-blocos', 'rgb(225, 225, 225)');
            document.body.style.setProperty('--text-color', 'rgb(35, 35, 35)');
            document.body.style.setProperty('--text-contrast', 'rgb(225, 225, 225)');
        }else if(tema === 'Dark'){
            document.body.style.setProperty('--fundo-site', 'rgb(15, 15, 15)');
            document.body.style.setProperty('--fundo-blocos', 'rgb(20, 20, 20)');
            document.body.style.setProperty('--text-color', 'rgb(120,120,120)');
            document.body.style.setProperty('--text-contrast', 'rgb(190, 190, 190)');
        }
    }

    return(
        <div className="botao" onClick={HandleModel}>
            <div className='back'>
                <div className={`bullet ${night}`}>
                    {night == 'Dark' &&(
                        <BsFillSunFill/>
                        )   
                    }{night == 'White' &&(
                        
                        <BsFillMoonFill/>
                    )
                    }
                </div>
            </div> 
        </div>
    )
}