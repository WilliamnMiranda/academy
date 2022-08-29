import styled,{keyframes} from 'styled-components'

const FadeInAnimation = keyframes`  
  0%{
    left: 200px
  }
  100%{
    left:0px;
  }
`;

const FadeOutAnimation = keyframes`  
  0%{
   left: 0px;
  }
  100%{
    left: 200px;
  }
`;
export const ContainerLogin = styled.section`
    display: flex;
    flex-direction: column;
    width: 400px;
    position: absolute;
    animation: ${({status})=> status === 'login' ? FadeInAnimation : FadeOutAnimation } .5s;
    animation-fill-mode: both;
    opacity: ${({status})=> status === 'login' ? 1 : 0};
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`
export const FormLogin = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 20px 20px 0px 20px;
    img {
        width: 150px;
        height: 150px;
    }
`

export const ContainerRegister = styled.div`
    background-color: #63b397;
    width: 50%;
    height: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
img{
    object-fit: cover;
    width: 200px;
    height: 200px;
}
`

export const Slogan = styled.div``
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    label{
        font-weight: 500;
        margin-bottom: 5px;
        color: black;
        font-size: 0.8em;
        margin-left: 5px;
        font-style: italic;
    }
    input{
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 10px;
        height: 30px;
        padding: 5px;
        background-color: #fafafa;
    }
`
export const ButtonLogin = styled.button`
    width: 100%;
    height: 50px;
    background-color: #4dbce9;
    border-radius: 15px;
`

export const CreateAccount = styled.p`
  cursor: pointer;
  width: 100%;
  text-align: start;
  margin-top: 15px;
  font-size: 0.9em;
  font-style: italic;
  padding: 20px;
  background-color: #fafafa;
  border-radius: 0px 0px 20px 20px;
  border-top: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  button{
    font-weight: bold;
    height: 30px;
    padding: 5px;
    border: 1px solid rgba(0,0,0,0.1);
    cursor: pointer;
  }
`