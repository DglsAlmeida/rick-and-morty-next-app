import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.9;
  border-radius: 10px;
  padding: 1rem;
  width: 80%;
  color: #666360;
  display: flex;
  align-items: center;

  svg + input {
    margin-left: 0.75rem;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1.2rem;
    outline: none;

    &::placeholder {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    padding: 0.8rem;
  }
`
