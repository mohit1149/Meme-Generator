// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Roboto';
`
export const Form = styled.form`
  padding-left: 50px;
  padding-top: 50px;
`
export const Label = styled.label`
  color: #7e858e;
  font-family: 'Roboto';
`
export const Input = styled.input`
  color: #7e858e;
  margin-bottom: 10px;
  padding: 10px;
  width: 25vw;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 15px;
  border-width: 0px;
  border-radius: 4px;
`
export const MainContainer = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Container = styled.div`
  margin-left: 20vw;
  background-image: url('${props => props.currentImage}');
  background-size: cover;
  padding: 20px;
  height: 60vh;
  width: 40vw;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-weight: 500;
  font-size: ${props => props.numbers}px;
  margin-top: ${props => (props.marginUpper ? '36vh' : '0px')};
`
export const Select = styled.select`
  color: #7e858e;
  margin-bottom: 10px;
  padding: 10px;
  width: 25vw;
`
