import styled from 'styled-components';

export const StatContainer = styled.div`
display: flex;
flex-direction: column;

gap: 10px;
margin:0;
padding: 20px 10px;
height: auto;


background: rgb(34,193,195);
background: linear-gradient(104deg, rgba(34,193,195,0.13497899159663862) 10%, rgba(255,222,150,0.1517857142857143) 96%);
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;


`;


export const StatTittle = styled.h2`
font-size: 32px;
font-wigth: 400;
text-align: center;
color:#721439;
margin-bottom: 10px;
margin-top: 0;
`;

export const Rating = styled.p`
font-size: 20px;
font-wigth: 300;
margin: 0;
`;

export const RatingMath = styled.p`
color: #721439;
font-size: 20px;
font-weight: 700;
margin: 0;
`
