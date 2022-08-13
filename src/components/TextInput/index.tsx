import React, {ChangeEvent} from 'react'
import * as C from './styles';
type InputType = {
  type:string;
  placeholder?:string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({type, placeholder, onChange}:InputType): JSX.Element => {
  return(
    <C.TextInput type={type} placeholder={placeholder} onChange={onChange}  />
  )
}