import styled from 'styled-components';

export const Logo = styled.img` 
    display: block;
    height: auto;
    max-width: 20%;
    border: 3px solid #f19702;
    margin: 10px 0;
  
    @media (max-width: 800px) {
        display: none;
    }
`;
