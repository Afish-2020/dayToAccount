import { Input } from "components/Input"
import React, {ChangeEventHandler} from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  background: #f5f5f5;
  font-size: 14px;
  padding: 14px 16px;
`

type Props = {
  value:string;
  onChange:(value:string)=>void
}
const NoteSection:React.FC<Props> = (props)=>{
  const note = props.value
  const onChange:ChangeEventHandler<HTMLInputElement> = (e)=>{
      props.onChange(e.target.value)
  }
  return(
    <Wrapper>
      <Input label='备注' type="text" placeholder='在这里添加备注'
             value={note}
             onChange={onChange}>
      </Input>
    </Wrapper>
  )
}

export {NoteSection}