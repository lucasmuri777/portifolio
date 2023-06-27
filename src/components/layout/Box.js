import styles from './Box.css'

export default function Box(props){
    return(
       <div className={`box ${props.customClass}`}>
        {props.children}
       </div>
    )
}