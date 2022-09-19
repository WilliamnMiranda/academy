import styled from 'styled-components'

export const Status = styled.td`

`
export const Actions = styled.div`
    width: 100px;
    height: 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3em;
    svg {
        cursor: pointer;
    }
    @media(max-width : 800px){
        justify-content: flex-start;
        gap:5px;
    }
`