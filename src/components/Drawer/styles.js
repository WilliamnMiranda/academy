import styled from 'styled-components'

export const ContainerDrawer = styled.aside`
    width: 250px;
    background-color: rgb(243,244,255);
    padding: 20px 0px;
`
export const DrawerComponent = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const ListItems = styled.ul`
    width: 100%;
`
export const Item = styled.li`
    padding:12px;
    width: 100%;
    border-color: rgb(46,54,63);
    font-size: 0.9em;
    color: rgb(150,160,176);
`