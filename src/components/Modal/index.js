import Button from '../Button';
import { Container, Overlay, Footer } from './styles';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo do modal</h1>
        <p>
          Corpo do modal
        </p>

        <Footer>
          <button type="button" className="cancel-button">
            cancelar
          </button>

          <Button type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  );
}
