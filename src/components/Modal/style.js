import styled from 'styled-components'

export const ContainerModal = styled.div`
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const Modal = styled.div`
    width: 500px;
    height: auto;
    max-height: 100%;
    padding: 10px;
    background-color: white;
`
export const ButtonClose = styled.div`
    width: 100%;
    padding: 15px 0px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
`