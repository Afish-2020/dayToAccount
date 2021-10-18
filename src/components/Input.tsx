import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: flex;
    align-items: center;
    >span{
      white-space: nowrap;
      margin-right: 16px;
    }
    >input{
      border: none;
      background: transparent;
      flex-gorw: 1;
      width: 100%;
      height: 44px;
    }
`

type Props={
  label:string,
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input:React.FC<Props> = (props)=>{
  const {label,children,...rest} = props
  return (
    <Label>
      <span>{label}</span>
      <input {...rest}/>
    </Label>
  )
}

export {Input}
