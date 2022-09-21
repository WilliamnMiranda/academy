import styled from 'styled-components'

export const Status = styled.td`

`

export const Actions = styled.td`
    width: 100%;
    padding:5px;
    div{
        display: flex;
        gap:5px;
        span{
            cursor: pointer;
            font-size: 1.4em;
            color: rgb(99,112,150);
        }
    }
`