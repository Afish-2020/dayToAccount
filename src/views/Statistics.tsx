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
const Item = styled.div`
display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
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
      {records.map(r=>{
        return <Item>
          {r.tagIds.map(tagId=><span>{getName(tagId)}</span>)}
          {r.note && <div className='note'>
            {r.note}
          </div>}
          {r.amount}
          {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
        </Item>
      })}
    </Layout>
  )
}

export default Statistics