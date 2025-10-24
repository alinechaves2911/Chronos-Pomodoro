import styles from './InputDefault.module.css'
type InputDefaultProps = {
    id: string
    type: string | number
 
    labelText?: string
} & React.ComponentProps<'input'>
export function InputDefault({ id, type,labelText, ...props}: InputDefaultProps) {

    return(
        <>
        
        {labelText && <label htmlFor={id}>{labelText}</label>}
            
            <input  className={styles.input} id={id} type={type}  {...props} />
        </>
    )
}