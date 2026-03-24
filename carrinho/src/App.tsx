import { CardProduto } from './components/CardProduto/CardProduto';
import { Body, Main, Titulo, Grid } from './styles';

function App() {
  return (
    <Body>
      <Main>
        <Titulo>Produtos</Titulo>
        <Grid>
          <CardProduto nome="Notebook" preco={3500} />
          <CardProduto nome="Mouse Gamer" preco={150} />
        </Grid>

      </Main>
    </Body>
  );
}

export default App;