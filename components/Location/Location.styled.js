import styled from 'styled-components';

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .location {
    &__fulltime {
      input {
        margin-right: 8px;
        &[type='checkbox'] {
          transform: scale(1.4);
        }
      }
      label {
        font-size: 14px;
      }
    }
  }
`;
