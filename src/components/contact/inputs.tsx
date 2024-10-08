import { ChangeEvent, CSSProperties, FC } from "react"

interface InputProps {
    type: string, 
    placeholder: string, 
    name: string,
    className: string, 
    value: string | number, 
    onChange: (e: ChangeEvent<HTMLInputElement>) => void, 
    style: CSSProperties
}

export const Input: FC <InputProps> = ({type, placeholder, name, className, value, onChange, style}) => {
    return (
        <input name={name} placeholder={placeholder} className={className} value={value} onChange={onChange} style={style}/>
    )
}