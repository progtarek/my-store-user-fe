import styled from 'styled-components';

export const LocaleSettingsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LanguageSwitcherContainer = styled.div`
  cursor: pointer;
  font-size: 13px;
  font-weight: bold;
  padding: ${(props) =>
    props.language === 'en' ? '0 15px 0 0' : '0 0 0 15px'};
  border-style: solid;
  border-color: rgba(64, 69, 83, 0.2);
  border-width: ${(props) =>
    props.language === 'en' ? '0 1px 0 0' : '0 0 0 1px'}; ;
`;
