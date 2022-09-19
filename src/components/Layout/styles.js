import styled from 'styled-components'

export const ContainerLayout = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color:#FDFDFD;
    @media(max-width : 800px){
        flex-direction: column;
    }
`
export const Container= styled.section`
    width: 100%;
    position: relative;
`
export const Application = styled.section`
 width: 100%;
 padding: 0px 10px 20px 10px;
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: white;
    height: 85px;
    padding: 0px 20px;
    box-shadow: 0 1px 0 rgba(0,0,0,0.12)
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