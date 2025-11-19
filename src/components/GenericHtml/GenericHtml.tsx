import styles from './GenericHtml.module.css'

type GenereciHtmlProps ={
 children: React.ReactNode
}
export function GenericHtml({children}: GenereciHtmlProps){
    return(
        <div className={styles.genericHtml}>{children}</div>

    )
}