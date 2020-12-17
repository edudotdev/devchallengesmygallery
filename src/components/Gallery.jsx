import React from 'react'
import styled from 'styled-components'
import Img from './Img'
import img1 from '../img/photo1.png'
import img2 from '../img/photo2.png'
import img3 from '../img/photo3.png'
import img4 from '../img/photo4.png'
import img5 from '../img/photo5.png'
import img6 from '../img/photo6.png'


const Container = styled.div`
  max-width: 960px;
  width: 90%;
  margin: 60px auto;
  display: grid;
  gap: 32px; 
  grid-template-areas: "img1 img2 img2"
                       "img3 img3 img4"
                       "img5 img6 img4";

  div:nth-child(1) {
    grid-area: img1;
  }
  div:nth-child(2) {
    grid-area: img2;
  }
  div:nth-child(3) {
    grid-area: img3;
  }
  div:nth-child(4) {
    grid-area: img4;
  }
  div:nth-child(5) {
    grid-area: img5;
  }
  div:nth-child(6) {
    grid-area: img6;
  }

  @media screen and (max-width: 1100px) {
    margin: 39px 5%;
  }

  @media screen and (max-width: 768px) {
    gap: 11.7px;
  }

`

const Gallery = () => {

  const imgs = [
    {id: 1, img: `${img1}`},
    {id: 2, img: `${img2}`},
    {id: 3, img: `${img3}`},
    {id: 4, img: `${img4}`},
    {id: 5, img: `${img5}`},
    {id: 6, img: `${img6}`},
  ]

  return ( 
    <Container>
      {imgs.map((img) => (
        <Img 
          key={img.id}
          img={img}
        />
      ))}
    </Container>
   );
}
 
export default Gallery;