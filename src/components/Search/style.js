import styled from 'styled-components'

export const Container = styled.section`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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