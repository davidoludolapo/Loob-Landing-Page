import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 10px;
    /* background: ${({primary})=> (primary ? '#4343db' : '#4343db' )}; */
    border: 1px solid #4343db;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '17px 35px')};
    color:  ${({dark}) => (dark ? '#4343db' : '#4343db')};
    font-size: ${({fontBig})=>(fontBig ? '20px' : '16px')};
    /* border: none; */
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transition: all 0.8s ease-in-out; */
 
    &:hover {
        transition: all 0.4s ease-in-out;
        background: ${({primary})=> (primary ? '#4343db' : '#4343db' )};
        color: #fff;
        
    }
`