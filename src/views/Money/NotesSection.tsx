import styled from "styled-components"

const NotesSection = styled.section`
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

export {NotesSection}