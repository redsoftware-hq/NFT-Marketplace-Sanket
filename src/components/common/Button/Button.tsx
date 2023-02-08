import {  MouseEventHandler } from 'react'
import './Button.scss'


interface Button {
    btnName: string,
    btnType: 'secondary-filled' | 'secondary-outlined',
    icon?:  any,
    handleClick?: MouseEventHandler,
}
function Button({btnName,btnType,handleClick,icon}:Button) {
  return (
    <button  className={btnType} onClick={handleClick}> 
    <img src={icon}/>
    {btnName}
    </button>
  )
}

export default Button