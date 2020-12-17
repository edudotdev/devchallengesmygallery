import React from 'react'
import styled from 'styled-components'

const ContainerImg = styled.div`

  img {
    width:  100%;
    border-radius: 12px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  }
`

const Img = ({img}) => {
  return ( 
    <ContainerImg>
        <img src={img.img} alt=""/>
    </ContainerImg>
   );
}
 
export default Img;