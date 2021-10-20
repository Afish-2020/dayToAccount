import Layout from "components/Layout";
import { useRecords } from "Hooks/useRecords";
import { useTags } from "Hooks/useTags";
import React, { useState } from "react";
import styled from "styled-components";
import { CategorySection } from "./Money/CategorySection";
import day from 'dayjs'

const CategoryWrapper = styled.div`
background:white;
`

function Statistics() {
  const [catagory,setCatagory] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  return (
    <Layout>
      <CategoryWrapper>
      <CategorySection value={catagory}
      onChange = {value=>setCatagory(value)}
      />
      </CategoryWrapper>
      {JSON.stringify(records)}
      <hr />
      {records.map(r=>{
        return <div>
          {r.tagIds.map(tagId=><span>{getName(tagId)}</span>)}
          <hr/>
          {r.amount}
          <hr/>
          {day(r.createdAt).format('YYYY年MM月DD日')}
        </div>
      })}
    </Layout>
  )
}

export default Statistics