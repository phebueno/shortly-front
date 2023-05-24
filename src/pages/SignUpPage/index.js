import { Form } from "./styled.js";
import useForm from "../../hooks/useForm.js";
import useKickIn from "../../hooks/useKickIn.js";
import { useSignUp } from "../../services/auth.js";

export default function SignUpPage() {
  const { form, handleForm } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const signUp = useSignUp();
  
  useKickIn();

  function submitForm(e) {
    e.preventDefault();
    if (form.confirmPassword !== form.password)
      return alert("As senhas diferem. Tente novamente.");
    signUp(form);
  }

  return (
    <Form onSubmit={submitForm}>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleForm}
        placeholder="Nome"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleForm}
        placeholder="E-mail"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleForm}
        placeholder="Senha"
      />
      <input
        type="password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleForm}
        placeholder="Confirmar senha"
      />

      <button>Criar conta</button>
    </Form>
  );
}
