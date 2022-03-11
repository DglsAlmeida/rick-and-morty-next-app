import styled from 'styled-components'

export const CardWrapper = styled.a`
  display: flex;
  align-items: center;
  height: 12rem;
  width: 21.875rem;
  border-radius: 5px;
  overflow: hidden;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 0 20px 0 #fff;
  will-change: box-shadow, transform;
  transition: 0.2s all;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px 5px rgba(23, 23, 27, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 0.75rem;
    height: 8rem;
  }
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 0.75rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
  }

  @media (max-width: 7425px) {
    padding: 0.2rem 0 0.2rem 0.5rem;
  }
`

export const CharacterID = styled.span`
  font-weight: bold;
  font-size: 1.125rem;
`

export const CharacterName = styled.span`
  font-weight: bold;
  font-size: 1.125rem;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 425px) {
    margin-top: 0.3rem;
  }
`

export const CharacterDetails = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.563rem;

  span {
    background: rgba(255, 255, 255, 0.15);
    padding: 0.313rem 0.938rem;
    border-radius: 50px;
    opacity: 0.8;
  }

  span + span {
    margin-left: 0.313rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.8rem;
  }
`

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      margin-left: auto;

      width: 90px;
      height: 90px;
    }
  }
`
