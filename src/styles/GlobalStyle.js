import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    font-family: 'Lexend Deca', sans-serif !important;
 }
 input{
   width:inherit;
   height: 60px;
   border: 1px solid rgba(120, 177, 89, 0.25);
   box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
   border-radius: 12px;
   font-weight: 400;
   font-size: 14px;
   padding:0 20px;
   &::placeholder{
      color:#9C9C9C;
}
   &:focus{
      border-color:green;
      outline:green;
      background-color: #f9f9f9;
   };
 }
 button{
   width: 182px;
   height: 60px;
   background: #5D9040;
   border-radius: 12px;
   border:none;
   
   font-weight: 700;
   font-size: 14px;
   line-height: 18px;
   color: #FFFFFF;
 }
`;

export default GlobalStyle;
