import React, { useEffect, useState } from 'react'
import Styles from './login.scss'
import * as Icons from 'react-feather';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isUserExist } from '../../reducers/apiReducer';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../reducers/userReducer';
import { bindActionCreators } from 'redux';

const Login = (props) => {
  const [isUserExists, setIsUserExists] = useState(false);
  const [currentUserName, setCurrentUsername] = useState('')
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputU = document.getElementById('loginusername')
    const inputP = document.getElementById('loginpassword')

    // dispatch(fetchData('/api/userExists')); 
    const payload = {
      "username": inputU && inputU.value
    }
    // dispatch(isUserExist(payload));
    if (isUserExists === false) {
      props.isUserExist(payload).then(res => {
        console.log(res.result)
        const result = res.result
        if (result && result.isUser === true) {
          setCurrentUsername(inputU.value)
        } else {
          setCurrentUsername('')
        }
      }).catch(err => { console.log(err) });
    } else {
      const password = inputP && inputP.value

    }
    // console.log(inputV && inputV.value)
  }
  useEffect(() => {
    if (props.data.isUser == true) {
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
        <Form onSubmit={handleSubmit} className='loginContainer_email'>
          {isUserExists === false ?
            <input type={'text'} id='loginusername' placeholder='username' /> :
            <input type={'text'} id='loginpassword' placeholder='password' />

          }

          <button className='btn' type='submit'>
            <Icons.ArrowRight />

          </button>

        </Form>
        <p className='loginContainer_NoAccountMessage'>Don't have an account?
          <Link to={'/'} className='loginContainer_signUpButton'>
            Sign Up
          </Link>
        </p>
      </div>
    </div >
  )
}
const mapStateToProps = ({ apiReducer }) => ({
  data: apiReducer?.data
})

const mapDispatchToProps = dispatch => bindActionCreators({ isUserExist }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);
