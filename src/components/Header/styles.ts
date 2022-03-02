import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 21.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 425px) {
    height: 15rem;
  }
`

export const InputWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgHeader = styled.div`
  display: flex;
  height: 40rem;
  width: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);

  &::after {
    content: '';
    background: url(/img/rick-morty-header.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 22%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`
