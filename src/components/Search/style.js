import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding:0px 40px;
`
export const ButtonAdd = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    background-color:rgb(103,127,254);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

export const Icon = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    span{
        font-size: 1.3em;
        position: relative;
        top:3%;
    }
    input{
        background-color: transparent;
        width: 100%;
        height: 50%;
        margin-left: 10px;

        ::placeholder{
            font-weight: bold;
            color: rgb(147,155,172);
        }
    }
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    padding: 0px 20px;
    box-shadow: 0 1px 0 rgba(0,0,0,0.12);
    height: 100px;
    position: absolute;
`
export const Tittle= styled.h1`
    font-size: 1.5em;
`
export const Navigation = styled.nav``
export const List= styled.ul`
    display: flex;
    gap:20px;
`
export const Item= styled.li`
    color: rgb(159,159,159);
    font-size: 1.6em;
    cursor: pointer;
    & .MuiAvatar-root{
        height: 30px;
        width: 30px;
    }
`

export const ContainerSearch = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    margin-top: 100px;
`