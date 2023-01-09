import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log('formRegister = ', form);

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          required
          placeholder="Anna Smith"
          minLength={3}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="my-mail@gmail.com"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={7}
          required
          placeholder="*******"
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};