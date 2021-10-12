import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
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
const CategorySection = styled.section`
  font-size: 24px;
>ul{
  display: flex;
  background: #c4c4c4;
  >li{
    width: 50%;
    text-align: center;
    padding: 16px 0;
    position: relative;
    &.selected::after{
      content:'';
      display: block;
      height: 3px;
      background: black;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
    }
  }
}
`
const NumberPadSection = styled.section`
>.output{
  background: white;
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding: 0 16px;
  box-shadow: inset 0 -5px 5px -5px rgb(0,0,0,0.25),
  inset 0 5px 5px -5px rgb(0,0,0,0.25);
}
  >.pad{
    >button{
      border: none;
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      &.OK{
        height: 128px;
        float: right;
      }
      &.Zero{
        width: 50%;
      }
      &:nth-child(1){
        background: #F2F2F2;
      }
      &:nth-child(2),
      &:nth-child(5){
        background: #E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #B8B8B8;
      }
      &:nth-child(12){
        background: #9A9A9A;
      }
      &:nth-child(14){
        background: #A9A9A9;
      }
    }    
  }
`

function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder='在这里添加备注' />
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className='output'>100</div>
        <div className='pad clearfix'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='OK'>ok</button>
          <button className='Zero'>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  )
}

export default Money