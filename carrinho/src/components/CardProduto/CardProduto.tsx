import { useState } from 'react';
import { Card, Nome, Preco, Botao } from './styles';

interface CardProdutoProps {
  nome: string;
  preco: number;
}

export function CardProduto({ nome, preco }: CardProdutoProps) {
  const [adicionado, setAdicionado] = useState(false);

  function handleClick() {
    setAdicionado(!adicionado);
  }

  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>R$ {preco.toFixed(2)}</Preco>
      <Botao $adicionado={adicionado} onClick={handleClick}>{adicionado ? 'Adicionado' : 'Adicionar ao carrinho'}</Botao>
    </Card>
  );
}