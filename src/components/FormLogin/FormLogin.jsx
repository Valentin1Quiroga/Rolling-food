import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormLogin.css";
import { SlLogin } from "react-icons/sl";
import GeneralModal from "../GeneralModal/GeneralModal";
import FormRegistro from "../FormRegistro/FormRegistro";
const FormLogin = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("hola");
  };

  return (
    <Form
      className="border border-2 form-login p-5 rounded-5 w-75"
      onSubmit={submitForm}
    >
      <Form.Group className="mt-4 mb-5" controlId="formBasicEmail">
      <Form.Label className="label-login text-muted">Usuario</Form.Label>
        <Form.Control
          type="email"
          className="bg-transparent text-center p-2"
          placeholder="USUARIO"
          required
          minLength={10}
          maxLength={40}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label className="label-login text-muted">Contraseña</Form.Label>
        <Form.Control
          type="password"
          className="bg-transparent text-center p-2"
          placeholder="CONTRASEÑA"
          required
          minLength={6}
          maxLength={20}
        />
        <Form.Text className="text-muted">Olvidaste tu contraseña?</Form.Text>
      </Form.Group>
      <div className="list-unstyled d-flex justify-content-sm-between justify-content-center flex-wrap">
        <div className="d-flex flex-column">
          <Form.Text className="text-muted d-flex justify-content-end pb-1  ">
            Aun no tienes cuenta?
          </Form.Text>
          <GeneralModal
            buttonText="Registrate"
            variant="transparent"
            modalTitle="Crea tu cuenta"
            modalBody={<FormRegistro />}
          />
        </div>
        <Button variant="success" type="submit">
          Iniciar sesion <SlLogin />
        </Button>
      </div>
      <div>
        <ul className="list-unstyled d-flex justify-content-center mt-5">
          <li>
            <a
              href="https://www.facebook.com/RollingCodeSchool"
              target="_blank"
              className="text-dark"
            >
              <i className="fa-brands fa-facebook me-2 fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rollingcodeschool/"
              target="_blank"
              className="text-dark"
            >
              <i className="fa-brands fa-instagram mx-2 fa-2x"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCqqU2Ztlv_QKGPXRW9LrR9w/featured"
              target="_blank"
              className="text-dark"
            >
              <i className="fa-brands fa-twitter mx-2 fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </Form>
  );
};

export default FormLogin;
