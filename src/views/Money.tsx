import Layout from "components/Layout";
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

function Money() {
  const [selected,setSelected] = useState({
    tagIds : [] as number[],
    note : '',
    catagory : '-' as '-' | '+',
    amount : 0
  });
  const onChange = (obj:Partial<typeof selected>) =>{
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      {selected.note}
      <TagsSection value={selected.tagIds}
                   onChange = {tagIds=>onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange = {note=>onChange({note})}
      />
      <CategorySection value={selected.catagory}
                     onChange = {catagory=>onChange({catagory})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={amount=>onChange({amount})}/>
    </MyLayout>
  )
}

export default Money