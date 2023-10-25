import styled from "styled-components";

export const OptionContainer = styled.div`
display: flex;
justify-content: space-around;
gap: 24 px;
width: 68px;
margin: 0 auto;
`;

export const Button = styled.div`
cursor: pointer;
display: inline-block; 
margin: 0 10px 20px; 
padding: 10px 15px; 

font-size: 14px;
font-wight: 600;
text-transform: uppercase;
 
color: #5C2E4B; 
background: transparent;
user-select: none;
box-shadow: 1px 1px 3px 2px #4a1737;
transition: color 200ms, background 200ms;

&:hover {
  color: #fff;
  background: #5C2E4B;
}
`;

