import React from 'react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2';
import { Footer } from '../ui/Footer'
import { getToken } from '../../helpers/getToken'
import { startLogin } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import 'sweetalert2/dist/sweetalert2.min.css';

export const LoginScreen = ({ history }) => {

  const dispatch = useDispatch();

  const handleLogin = (token) => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch(startLogin(token));
    history.replace(lastPath);
  }

  const validate = values => {
    const regex = /^[^\W\d][A-Za-z0-9_\-.]+@([A-Za-z]+\.)+[A-Za-z]{2,4}/;
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 5) {
      errors.password = 'Must be at least 5 characters';
    }

    return errors;
  };

  const onSubmit = async (data) => {
    const token = await getToken(data);
    if (typeof token === 'object') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email address or password are incorrect'
      });
      formik.resetForm();
    } else {
      handleLogin(token);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validate,
    onSubmit
  });

  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="col-10 col-md-6 col-lg-4 d-flex flex-column mb-5">
        <h1 className="my-5 text-center">Login</h1>
        <div className="mb-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="input-group">
              <label
                htmlFor="email"
                className="input-group-text"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                placeholder="email@mail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                className="form-control"
                autoComplete="off"
                required
              />
            </div>
            {formik.errors.email ? <div className="text-danger mt-2 d-flex align-items-center">{formik.errors.email}</div> : null}
            <div className="input-group mt-3">
              <label
                htmlFor="password"
                className="input-group-text"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className="form-control"
                required
              />
            </div>
            {formik.errors.password ? <div className="text-danger mt-2 d-flex align-items-center">{formik.errors.password}</div> : null}
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary mt-3"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
