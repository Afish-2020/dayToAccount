import Layout from "components/Layout";
import { useRecords } from "Hooks/useRecords";
import React, { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import { NoteSection } from "./Money/NoteSection";
import { NumberPadSection } from "./Money/NumberPadSection";
import { TagsSection } from "./Money/TagsSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`

const defaultFormData = {
  tagIds : [] as number[],
  note : '',
  catagory : '-' as '-' | '+',
  amount : 0
}

const WrapperCategory = styled.div`
  background: #c4c4c4;
`

function Money() {
  const [selected,setSelected] = useState(defaultFormData);
  const {addRecord}=useRecords()
  const onChange = (obj:Partial<typeof selected>) =>{
    setSelected({
      ...selected,
      ...obj
    })
  }

  const submit=()=>{
    if(addRecord(selected)){
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }

  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange = {tagIds=>onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange = {note=>onChange({note})}
      />
      <WrapperCategory>
      <CategorySection value={selected.catagory}
                     onChange = {catagory=>onChange({catagory})}
      />
      </WrapperCategory>
      <NumberPadSection value={selected.amount}
                        onChange={amount=>onChange({amount})}
      onOk={submit}
      />
    </MyLayout>
  )
}

export default Money