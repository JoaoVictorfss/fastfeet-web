import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  label {
    cursor: pointer;
    transition: opacity 0.4s;

    &:hover {
      opacity: 0.5;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px dashed #ddd;
      margin-bottom: 20px;

      strong {
        color: #ccc;
      }
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      object-fit: cover;
    }

    input {
      display: none;
    }
  }
`;
