import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { Container, Overlay, Footer } from './styles';

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do modal</h1>
        <p>
          Corpo do modal
        </p>

        <Footer>
          <button type="button" className="cancel-button">
            cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.defaultProps = {
  danger: false,
};

Modal.propTypes = {
  danger: PropTypes.bool,
};
