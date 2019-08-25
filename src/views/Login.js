import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { loginSchema } from '../utils/form-models';
import { handleGetCountries, handleLoader } from '../actions/index';
import show from '../assets/img/view.svg';
import hide from '../assets/img/hide.svg';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changePassword: false,
      form: { email: '', password: '' }
    };

    this.changePasswordView = this.changePasswordView.bind(this);
  }

  onSubmit(val) {
    // val.preventDefault();
    console.info(val, 'deu certo')
  };

  changePasswordView(e) {
    this.setState({
      changePassword: !this.state.changePassword
    })
  }

  render() {
    return(
      <div className='page--login'>
        <Formik initialValues={ this.state.form }
                onSubmit={ (values) => this.onSubmit({ ...values }) }
                validationSchema={ loginSchema }>
          { (props, values) => (
            <form autoComplete='off' className='loginBox' noValidate onSubmit={ props.handleSubmit }>
              <div className='formBox'>
                <label className='label' htmlFor='email'>Usuário</label>
                <Field onChange={ props.handleChange }
                       className={ 'formInput' + (props.errors.email ? ' formInput--error' : '') }
                       id='email'
                       name='email'
                       placeholder='email@email.com.br'
                       type='email'
                       value={ props.values.email } />
                <span>{ props.errors.email }</span>
              </div>

              <div className='formBox--password'>
                <label className='label' htmlFor='password'>Senha</label>
                <Field onChange={ props.handleChange }
                       className={ 'formInput' + (props.errors.password ? ' formInput--error' : '') }
                       id='password'
                       name='password'
                       placeholder='******'
                       type={ this.state.changePassword ? 'text' : 'password' }
                       value={ props.values.password } />
                <span>{ props.errors.password }</span>
                <button className='boxChangePassword'
                        onClick={ () => this.changePasswordView() }
                        type='button'
                        title={ this.state.changePassword ? 'Exibindo senha' : 'Password' }>
                  <img alt={ this.state.changePassword ? 'Ícone de exibição de senha' : 'Ícone para ocultação de senha' }
                       className='boxChangePassword_img'
                       src={ this.state.changePassword ? show : hide } />
                </button>
              </div>

              <div className='formBox'>
                <button className='btn btn--login'
                        disabled={ !props.isValid }
                        type='submit'>Entrar</button>
              </div>
            </form>
          ) }
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  countries: store.countries.countries,
  categories: store.countries.categories,
  defaultTheme: store.themes.defaultTheme,
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(handleGetCountries()),
  openLoader: (obj) => dispatch(handleLoader(obj))
});

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export default LoginPage;
