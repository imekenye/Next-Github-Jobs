import styled from 'styled-components';

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .location {
    &__fulltime {
      margin-bottom: 32px;
    }
    &__search {
      position: relative;
      .globe {
        position: absolute;
        top: 45%;
        left: 5%;
      }
      label {
        font-size: 14px;
        color: #b9bdcf;
        text-transform: uppercase;
      }
      input {
        width: 100%;
        height: 48px;
        border: none;
        outline: none;
        border-radius: 4px;
        padding-left: 48px;
        margin-bottom: 25px;
        margin-top: 14px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
        &::placeholder {
          font-size: 12px;
          color: #b9bdcf;
        }
      }
    }
  }
`;
