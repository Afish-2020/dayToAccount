import {useRef, useState } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
>label{
  display: flex;
  font-size: 14px;
  padding: 0 16px;
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
    height: 72px;
  }
}
`

const NoteSection:React.FC = ()=>{
  const [note,setNote] = useState<string>('')
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur = ()=>{
    if(refInput.current!==null){
      setNote(refInput.current.value)
    }
  }
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder='在这里添加备注'
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}
        />
      </label>
    </Wrapper>
  )
}

export {NoteSection}