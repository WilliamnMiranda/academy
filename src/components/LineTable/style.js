import styled from 'styled-components'

export const Line = styled.tr`
    height:60px;
    background-color: white;
    border-bottom: 1px solid rgb(246,246,246);
    td{
        padding: 0px 10px;
        color : rgb(125,134,161);
        font-weight: bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 1px;
    }
    a {
        color : rgb(125,134,161);
    }
    a:visited {
        color : rgb(125,134,161);
    }
`