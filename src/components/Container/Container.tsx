import style from './Container.module.css'
type Container ={
    children: React.ReactNode
}
export function Container({children}: Container){
    return(
        <div className={style.container}>
        <div className={style.content}>
          {children}
        </div>
     </div>
    )
}