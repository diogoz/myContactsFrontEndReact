import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import { Form, ButtonContainer } from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name, phone, email, category,
    });
  }
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="instagram">instagram</option>
          <option value="discord">discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>

    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
