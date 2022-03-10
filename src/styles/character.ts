import styled from 'styled-components'

export const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;

  a {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 1;
    background: transparent;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #d1d1d1;
      border-radius: 5px;
    }
  }
`
export const CharacterImgBackground = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);

  &::after {
    content: '';
    background: url(/img/rick-and-morty-background.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`

export const CharacterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  z-index: 1;

  img {
    height: 250px;
    width: 250px;
    border-radius: 50%;
  }
`

export const Name = styled.h2`
  color: #fff;
  margin: 1rem 0;
`

export const CharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75rem;

  span {
    background: rgba(255, 255, 255, 0.15);
    padding: 0.313rem 0.938rem;
    border-radius: 50px;
    opacity: 0.8;
  }
`

export const DetailsItem = styled.span`
  color: #fff;
  font-size: 1.125rem;

  & + & {
    margin-top: 0.5rem;
  }
`
