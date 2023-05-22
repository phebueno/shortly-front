import { styled } from "styled-components";

export default function SignUpPage() {
  return (
    <Form action="" method="post">
      <input type="text" name="" id="" placeholder="Nome"/>
      <input type="text" name="" id="" placeholder="E-mail"/>
      <input type="text" name="" id="" placeholder="Senha"/>
      <input type="text" name="" id="" placeholder="Confirmar senha"/>

      <button>Criar conta</button>
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-bottom: 40px;
  button{
    margin-top:41px;
  }
`;
