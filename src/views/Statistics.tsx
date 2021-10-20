import Layout from "components/Layout";
import {RecordItem, useRecords } from "Hooks/useRecords";
import { useTags } from "Hooks/useTags";
import React, {ReactNode, useState } from "react";
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

const Header = styled.h3`
font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics() {
  const [catagory,setCatagory] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  const selectedRecords = records.filter(r=>r.catagory===catagory)
  const hash:{[k:string]:RecordItem[]} = {}
  selectedRecords.map(r=>{
    const key = day(r.createdAt).format('YYYY年MM月DD日')
    if(!(key in hash)){
      hash[key] = []
    }
    hash[key].push(r)
  })
  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0
    if(a[0]>b[0]) return -1
    if(a[0]<b[0]) return 1
    return 0
  })
  console.log(array);

  return (
    <Layout>
      <CategoryWrapper>
      <CategorySection value={catagory}
      onChange = {value=>setCatagory(value)}
      />
      </CategoryWrapper>
      {array.map(([date,records])=>{
         return <div>
          <Header>{date}</Header>
        <div>
          {records.map(r=>{
            return <Item>
              {r.tagIds.map(tagId=><span key={tagId}>{getName(tagId)}</span>)
                .reduce((result,span,index,array)=>result.concat(
                  index<array.length-1?[span,'，']:span),[] as ReactNode[])
              }
              {r.note && <div className='note'>
                {r.note}
              </div>}
              {r.amount}
            </Item>
          })}
        </div>
        </div>
      })
      }
    </Layout>
  )
}

export default Statistics