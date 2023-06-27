import IconsPerfil from './IconsPerfil'
import styles from './Perfil.css'
import { useEffect, useState } from "react"


export default function Perfil(){
    const [urlFoto, setUrlFoto] = useState('')
    const [link, setLink] = useState('')
    const [repos, setRepos] = useState('')
    const [bio, setBio] = useState('')

    useEffect(()=>{
        fetch('https://api.github.com/users/lucasmuri777', {
            method: "GET",
            header:{
                'Content-Type': 'application/json'
            }
        })
        .then((data)=>data.json())
        .then((resp)=>{
            setUrlFoto(resp.avatar_url)
            setLink(resp.html_url)
            setRepos(resp.public_repos)
            setBio(resp.bio)
        })
    },[])
    return(
        <div className='Perfil-session'>
        <div className="Perfil-container">
                <div className="foto-container">
                    <div className="back-color">
                        <img src={urlFoto} alt="Lucas Muriano"/>
                    </div>
                </div>
                <div className="Nome"><h2>Lucas Muriano Resende</h2>
                <p><strong>Bio: </strong>{bio}</p>
                    <p><strong>Repositórios: </strong>{repos}</p>
                </div>
                <div className="btn-container"><a className="btn" href={link} target="_blank">Ver GitHub</a></div>
        </div>
            <IconsPerfil/>
        </div>
    )
}