import styled from 'styled-components';

export const Card = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #ced4da;
    transform: translateY(-3px);
  }
`;

export const Nome = styled.h2`
  font-size: 16px;
  color: #212529;
  font-weight: 500;
`;

export const Preco = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #495057;
`;

interface BotaoProps {
  $adicionado: boolean;
}

export const Botao = styled.button<BotaoProps>`
  margin-top: auto;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  background-color: ${({ $adicionado }) => $adicionado ? '#198754' : '#6c757d'};
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.97);
  }
`;