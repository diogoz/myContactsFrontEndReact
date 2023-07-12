import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Diogo Sousa</strong>
              <small>instagram</small>
            </div>
            <span>diogo@diogo.com</span>
            <span>(18)9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit contact" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete contact" />
            </button>
          </div>

        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Diogo Sousa</strong>
              <small>instagram</small>
            </div>
            <span>diogo@diogo.com</span>
            <span>(18)9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit contact" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete contact" />
            </button>
          </div>

        </Card>
      </ListContainer>
    </Container>
  );
}
