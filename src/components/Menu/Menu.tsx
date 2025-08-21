import { TimerIcon } from 'lucide-react'
import styles from './Menu.module.css'


export function Menu(){
    return(
        <h1 className={styles.menu}>
            <a href="#" className={styles.menuLink}>
                <TimerIcon />
                <span>Chronos</span>
            </a>
        </h1>
    )
}