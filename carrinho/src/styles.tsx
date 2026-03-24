import styled from 'styled-components';

export const Body = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background:linear-gradient(135deg, #4289da, #0c3f7a);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: 900px;
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #212529;
  font-weight: 650;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
`;