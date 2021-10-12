import styled from "styled-components"

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
>ol{
  margin: 0 -12px;
  >li{
    display: inline-block;
    background: #D9D9D9;
    font-size: 14px;
    padding: 3px 18px;
    margin: 8px 12px;
    border-radius:18px;
  }  
}
  >button{
    border: none;
    background: none;
    padding: 2px 4px;
    color: #666;
    border-bottom: 1px solid #333;
    margin-top: 8px;
  }
`

export {TagsSection}