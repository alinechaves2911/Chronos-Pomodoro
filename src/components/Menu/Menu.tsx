import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon  } from 'lucide-react'
import styles from './Menu.module.css'
import { useState, useEffect } from 'react'
type  AvailableThemes = 'dark' | 'light';
export function Menu(){
 const [theme, setTheme] = useState<AvailableThemes>(() =>{
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return  storageTheme
 })
function handleThemeToggle(event: React.MouseEvent<HTMLAnchorElement>){
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
}
const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
}

useEffect(() =>{
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}, [theme])

    return(
       <nav className={styles.menu}>
        
            <a  className={styles.menuLink} href="#" aria-label='ir para a Home' title='Ir para a Home'>
                <HouseIcon />
            </a>

            <a  className={styles.menuLink} href="#" aria-label='Ver Historico' title='Ver Historico'>
                <HistoryIcon />
            </a>
            <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
                <SettingsIcon />
            </a>
            <a className={styles.menuLink} href="#" aria-label='Mudar o Tema' title='Mudar o Tema' onClick={handleThemeToggle}>
                {nextThemeIcon[theme]}
            </a>
       </nav>
    )
}