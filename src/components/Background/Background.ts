import styled from "styled-components";
import backgroundImage from "../../data/pic.jpg";

export const Background = styled.div`
 &::before {
   content: '';
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   background-image: url(${backgroundImage});
   background-size: cover;
   background-position: center;
   z-index: -1;
 }
`;
