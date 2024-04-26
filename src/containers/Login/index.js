import React, { useEffect, useState } from 'react'
import Styles from './login.scss'
import * as Icons from 'react-feather';
import { Form } from 'react-bootstrap';
import { Link, redirect, useNavigate} from 'react-router-dom';
import { isUserExist, fetchLoginAuthToken } from '../../reducers/apiReducer';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../reducers/userReducer';
import { bindActionCreators } from 'redux';

const Login = (props) => {
  const [isUserExists, setIsUserExists] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [currentUserName, setCurrentUsername] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputU = document.getElementById('loginusername')
    // dispatch(fetchData('/api/userExists')); 
    const payload = {
      "username": inputU && inputU.value
    }
    // dispatch(isUserExist(payload));
      props.isUserExist(payload).then(res => {
        console.log(res.result)
        const result = res.result
        if (result && result?.isUser === true) {
          setCurrentUsername(inputU.value)
          setShowPassword(true);
        } else {
          setCurrentUsername('')
          setShowPassword(false);

        }
      }).catch(err => { console.log(err) });
     
    }
    // console.log(inputV && inputV.value)
  
  const handlelogin = (e) => {
    e.preventDefault();
    const inputP = document.getElementById('loginpassword');
    const loginPayload={
      username: currentUserName,
      password: inputP && inputP.value
    }
    props.fetchLoginAuthToken(loginPayload).then(res => {
      console.log(res.result)
      const result = res.result;
      localStorage.setItem("userData",result);
    }).catch(err => { console.log(err) })
    .then(()=>{
      console.log("Redirecting to dashboard!")
      navigate({to:'/dashboard'});
    });

  }
  useEffect(() => {
    if (props?.data?.isUser === true) {
      setIsUserExists(true)
    }
  }, [])
  // console.log("data-",props.data);

  return (
    <div className="loginContainer">
      <div className='loginContainer_Box'>
        <h1 className='loginContainer_Logo'>LinX
          <span className='loginContainer_Dia'>Get your job done!</span>
        </h1>
        <Form onSubmit={!showPassword ? handleSubmit : handlelogin} className='loginContainer_email'>
          {!showPassword &&
            <input type={'text'} id='loginusername' placeholder='username' />
          }
          <br />
          {showPassword && (
            <div className='d-flex flex-column align-items-start justify-content-center'>
              <span style={{ color: 'green', marginBottom: '1em' }}>{props?.data?.isUser && props?.data?.message}</span>
              <input type="password" id="loginpassword" placeholder="Password" />
            </div>

          )}
          <br />

          <button className='btn' type='submit'>
            <Icons.ArrowRight />

          </button>


        </Form>
        <p className='loginContainer_NoAccountMessage'>Don't have an account?
          <Link to={'/signup'} className='loginContainer_signUpButton'>
            Sign Up
          </Link>
        </p>
      </div>
    </div >
  )
}
const mapStateToProps = ({ apiReducer }) => ({
  data: apiReducer?.data,
  loginData: apiReducer?.loginData
})

const mapDispatchToProps = dispatch => bindActionCreators({ isUserExist, fetchLoginAuthToken }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
