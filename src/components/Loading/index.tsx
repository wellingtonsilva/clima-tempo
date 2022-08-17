import * as C from './style';
import icon from '../../assets/icons/icon-loading.svg'
type LoadingProps = {
  children?: React.ReactNode;
}

export const Loading = ({children}:LoadingProps):JSX.Element => {
  return(
    <C.Loading>
      <img src={icon} alt='Loaoding' />
    </C.Loading>
  )
  
}