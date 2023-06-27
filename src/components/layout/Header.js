import foto from '../../images/FotoEu.jpeg'

import {BsList} from 'react-icons/bs'

import styles from './Header.css'
import NavHeader from './NavHeader'
import { useEffect, useState } from 'react'

export default function Headers(){
    const [active, setActive] = useState(false)
    const [width, setWidth] = useState('active')
    const [mobile, setMobile] = useState(false)
    function handleSetMobile(){
        setActive(!active)
        if(width === 'closed'){
            setWidth('active')
            return false
        }
        setWidth('closed')
    }

    useEffect(()=>{

        if(window.innerWidth <= 1050){
            setMobile(true)
        }
    },[])
    
    return(
        <div className={`sidebar ${width}`} >
            <div className='Hambuguer-menu' onClick={handleSetMobile}>
                <BsList/>
            </div>
            
            <NavHeader phone={active} estilo={width} mobile={mobile}/>
        </div>
    )
}