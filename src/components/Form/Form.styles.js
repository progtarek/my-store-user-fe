import styled from 'styled-components';

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const Field = styled.input`
  overflow: visible;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &.invalid {
    border: 1px solid #dc3545;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;
