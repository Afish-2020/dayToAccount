import styled from "styled-components"
import React from 'react'
import { useTags } from "Hooks/useTags"
import { createId } from "lib/createId"

const Wrapper = styled.section`
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
    &.selected{
      background: #01C2C7;      
    }
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

type Props={
  value:number[],
  onChange:(selected:number[])=>void
}

const TagsSection: React.FC<Props> = (props) => {
  const {tags,setTags,addTag} = useTags()
  const selectedTagIds = props.value
  const onTaggleTag = (tagId:number) =>{
    const index = selectedTagIds.indexOf(tagId)
    if(index>=0){
      props.onChange(selectedTagIds.filter(t=>t!==tagId))
    }else {
      props.onChange([...selectedTagIds,tagId])
    }
  }
  const getClass = (tagId:number) =>{return selectedTagIds.indexOf(tagId)>=0? 'selected':''}
  return (<Wrapper>
    <ol>
      {tags.map(tag=><li key={tag.id} onClick={()=>{onTaggleTag(tag.id)}} className={ getClass(tag.id)}>{tag.name}</li>)}
    </ol>
    <button onClick={addTag}>新增标签</button>
  </Wrapper>)
}

export {TagsSection}