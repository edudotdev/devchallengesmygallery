import React from 'react'
import styled from 'styled-components'
import imgProfile from '../img/profilePhoto.png'

const Container = styled.div`
  text-align: center;
  margin: 0 auto;

  img {
    width:156px;
    border-radius: 16px;
    vertical-align: top;

    @media screen and (max-width: 500px) {
      width: 101.76px;
    }
  }
`
const Names = styled.div`
  margin: 16px 0;
  
  h2 {
    color: #4E5150;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 8px;

    @media screen and (max-width: 500px) {
      font-size:12px;
    }
  }

  span {
    font-weight: 600;
    color: #A9A9A9;
    font-size: 14px;

    @media screen and (max-width: 500px) {
      font-size:10px;
    }
  }
`

const Stats = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 348px;
  gap: 24px;

  div {
    width: 100px;
    background: #E5E5E5;
    border-radius: 12px;
    height: 67px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    span:nth-child(1) {
      font-weight: bold;
      color: #4E5150;
      font-size:18px;

      @media screen and (max-width: 500px) {
        font-size:12px;
      }
    }

    span:nth-child(2) { 
      font-weight: bold;
      font-size: 14px;
      color: #BDBDBD;

      @media screen and (max-width: 500px) {
        font-size:12px;
      }
    } 

    @media screen and (max-width: 500px) {
      width: 78px;
      height: 52px;
    }

  }

  @media screen and (max-width: 500px) {
    width: 258px;
    gap: 12px;
  }
`

const HeaderProfile = () => {
  return ( 
    <Container>
      <img src={imgProfile} alt=""/>
      <Names>
        <h2>Rodney Cotton</h2>
        <span>Helsinki, Finland</span>
      </Names>
      <Stats>
        <div><span>100</span> <span>Post</span></div>
        <div><span>2,242</span> <span>Follower</span></div>
        <div><span>1,432</span> <span>Following</span></div>
      </Stats>
    </Container>
   );
}
 
export default HeaderProfile;