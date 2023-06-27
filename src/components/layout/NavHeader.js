import {BsFillHouseFill, BsFillPersonFill, BsChatRightTextFill, BsCpuFill} from 'react-icons/bs'
import Foto from './Foto'

import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function NavHeader({phone, estilo, mobile}){
    

    function navMenu(){

        const links = document.querySelectorAll('.sidebar .nav li a')
        links.forEach((b)=>{
            b.classList.remove('active')
        })
        this.classList.add('active')
    }
    
    useEffect(()=>{
        
        const links = document.querySelectorAll('.sidebar .nav li a')
        links.forEach((e)=>
        {
            e.addEventListener('click', navMenu)
        })
        
    },[])

    return(
        <>
        
            <div className={`${mobile === true ? 'wrapper-mobile' : ''}`}>
                <Foto phone={estilo}/>
                <ul className='nav'>
                <li>
                    <Link to='/portifolio/' className='active'>
                        <BsFillHouseFill/> {phone === false && mobile === false && <>Home</>}
                    </Link>
                </li>
                <li>
                    <Link to='/portifolio/sobre'>
                        <BsFillPersonFill/> {phone === false && mobile === false && <>Sobre</>}
                    </Link>
                </li>
                <li>
                    <Link to='/portifolio/projetos'>
                        <BsCpuFill/> {phone === false && mobile === false && <>Projetos</>}
                    </Link>
                </li>
                <li>
                    <Link to='/portifolio/contato'>
                        <BsChatRightTextFill/>  {phone === false && mobile === false && <>Contato</>}
                    </Link>
                </li>
            </ul>
        </div> 
        
        
    </>
            
    )
}