import styled from 'styled-components'

export const ContainerModal = styled.div`
    z-index: 100;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Modal = styled.div`
    width: 500px;
    height: 700px;
    padding: 10px;
    background-color: white;
`

export const ContainerFlex= styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap:5px;
`

export const Submit = styled.button`
    margin-top: 20px;
    font-weight: 500;
    background-color: rgba(103,127,254,0.8);
    width: 100%;
    height: 50px;
`