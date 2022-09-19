import styled from 'styled-components'

export const ContainerDrawer = styled.aside`
    width: 250px;
    background-color: rgb(243,244,255);
    padding: 20px 0px;
    @media(max-width : 800px){
        width: 100%;
    }
`
export const DrawerComponent = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ListItems = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;
`
export const Item = styled.li`
    display: flex;
    align-items: center;
    padding:12px 20px;
    width: 100%;
    border-color: rgb(46,54,63);
    font-size: 0.9em;
    color: rgb(150,160,176);
    font-size: 0.9em;
    svg{
        margin-right: 5px;
        font-size: 1.3em;
    }
`

export const Messages = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0px 7px;
    height: 40px;
    width: 50%;
    font-size: 0.8em;
    font-weight: 500;
    color: white;
    background-color: rgb(103,127,254);
  }
`

export const Quantity = styled.li`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 20px;
   width: 20px;
   background-color: white;
   color: rgb(103,127,254);;
   font-weight: bold;
   border-radius: 2px;
`