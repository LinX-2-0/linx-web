import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import styles from './login.scss'
import { saveUser } from '../../reducers/apiReducer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SignUp = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: ''
        // Add more form inputs as needed
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("value changed for:", name, "---", value)
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        props.saveUser(formData).then(()=>{
            window.alert("User registration successful!")
        }).catch(err=>{
            window.alert("User registration failure!")
        })
    }
    return (
        <div className="loginContainer">
            <div className='loginContainer_Box'>
                <h1 className='loginContainer_Logo'>LinX
                    <span className='loginContainer_Dia'>Get your job done!</span>
                </h1>
                <Form onSubmit={data=> handleSubmit(data)} className='loginContainer_email d-flex flex-column'>
                    <input type='text' placeholder='name' name="name" value={formData.name} onChange={handleChange}>
                    </input>
                    <input type='text' placeholder='email' name="email" value={formData.email} onChange={handleChange}>
                    </input>
                    <input type='text' placeholder='phone' name="phone" value={formData.phone} onChange={handleChange}>
                    </input>
                    <input type='date' placeholder='dob' name="dob" value={formData.dob} onChange={handleChange}>
                    </input>
                    <Button type='submit' >Submit</Button>
                </Form>
                <p className='loginContainer_NoAccountMessage'>Already have an account?
                    <Link to={'/login'} className='loginContainer_signUpButton'>
                        Login
                    </Link>
                </p>
            </div>
        </div >
    )
}

const mapStateToProps=({apiReducer})=>({
    userRes: apiReducer?.registration
})
const mapDispatchToProps=(dispatch)=>bindActionCreators({
    saveUser
},dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (SignUp);