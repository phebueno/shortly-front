import { styled } from "styled-components";

export default function SignInPage() {
  return (
      <Form action="" method="post">
        <input type="text" name="" id="" placeholder="E-mail"/>
        <input type="text" name="" id="" placeholder="Senha"/>

        <button>Entrar</button>
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
