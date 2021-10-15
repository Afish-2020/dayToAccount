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
    tags : [] as string[],
    note : '',
    catagory : '-' as '-' | '+',
    amount : 0
  })
  return (
    <MyLayout>
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange = {(tags)=>setSelected({...selected,tags:tags})}/>
      <NoteSection value={selected.note}
                   onChange = {(note)=>setSelected({...selected,note:note})}
      />
      <CategorySection value={selected.catagory}
                     onChange = {(catagory)=>setSelected({...selected,catagory:catagory})}
      />
      <NumberPadSection value={selected.amount}
                        onChange={(amount)=>setSelected({...selected,amount:amount})} onOk={()=>{}}/>
    </MyLayout>
  )
}

export default Money