import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 20px;
`

export const ContainerButtons = styled.div`
    display: flex;
    gap : 20px;
    height: 50px;
`

export const Button = styled.button`
    width: 50%;
    background-color:${({bg})=>bg};
    color: white;
`