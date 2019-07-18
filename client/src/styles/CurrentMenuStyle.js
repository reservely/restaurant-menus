import styled from 'styled-components';

export const MenuSection = styled.div`
  padding-top: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid #d8d9db;
`;
export const MenuSectionHeader = styled.div`
  margin: 0;
  margin-bottom: 16px;
`;
export const MenuSectionTitle = styled.div`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;
// export const MenuSectionDescription = styled.div`
//   font-size: 14px;
//   line-height: 20px;
//   font-weight: 500;
//   margin-top: 16px;
//   margin-bottom: 0;
// `;
export const MenuItems = styled.div`
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -webkit-column-gap: 32px;
  -moz-column-gap: 32px;
  column-gap: 32px;
`;
export const MenuItem = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 16px;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  -moz-column-break-inside: avoid;
  break-inside: avoid;
`;
export const MenuPrice = styled.div`
  float: right;
`;
export const MenuDescription = styled.p`
  margin-top: 8px;
  margin-bottom: 0;
  font-weight: 400;
`;
// export const MenuVariation = styled.div`
//   margin: 0;
//   padding: 0;
// `;
