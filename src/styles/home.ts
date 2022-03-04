import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 1.875rem;

  > div {
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.938rem;
    align-items: center;
  }
`

export const Title = styled.h2`
  font-size: 1.3rem;
`

export const Subtitle = styled.span`
  font-size: 1rem;
  padding-top: 0.2rem;
`
