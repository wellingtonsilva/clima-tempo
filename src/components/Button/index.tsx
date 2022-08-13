import React  from 'react'
import * as C from './styles'
type ButtonType = {
  onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;
  children:React.ReactNode;
}
export const Button = ({onClick, children}:ButtonType ): JSX.Element => {
  return(
    <C.Button onClick={onClick}>{children}</C.Button>
  )
}