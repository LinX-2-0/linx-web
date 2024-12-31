import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Button } from 'react-bootstrap';

const AddOrUpdateEmployee = () => {
    const navigate = useNavigate();

    // Initial values
    const initialValues = {
        name: '',
        age: '',
        occupation: '',
        status: 'Active',
        email: '',
        phone: '',
        address: ''
    };

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .required('Please enter your name!'),
        age: Yup.number()
            .min(18, 'Must be at least 18 years old')
            .required('Please enter your age!'),
        occupation: Yup.string()
            .required('Please enter your occupation!'),
        status: Yup.string()
            .required('Please Select a status!'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Please enter your email address!'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Please enter your phone number!'),
        address: Yup.string()
            .min(5, 'Address must be at least 5 characters')
            .required('Please enter your address')
    });

    // Form submission
    const onSubmit = (values) => {
        console.log('Form values', values);
        // Submit the form data to the server
        // Navigate back or show a success message
        navigate(-1); // Navigates to the previous page
    };

    return (
        <div>
            <h3>{initialValues.id ? 'Update Employee' : 'Add Employee'}</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
                            />
                            {errors.name && touched.name ? (
                                <div className="invalid-feedback">{errors.name}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="age">Age</label>
                            <Field
                                type="number"
                                id="age"
                                name="age"
                                className={`form-control ${errors.age && touched.age ? 'is-invalid' : ''}`}
                            />
                            {errors.age && touched.age ? (
                                <div className="invalid-feedback">{errors.age}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="occupation">Occupation</label>
                            <Field
                                type="text"
                                id="occupation"
                                name="occupation"
                                className={`form-control ${errors.occupation && touched.occupation ? 'is-invalid' : ''}`}
                            />
                            {errors.occupation && touched.occupation ? (
                                <div className="invalid-feedback">{errors.occupation}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="status">Status</label>
                            <Field as="select" id="status" name="status" className="form-control">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </Field>
                            {errors.status ? (
                                <div className="invalid-feedback">{errors.status}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                            />
                            {errors.email && touched.email ? (
                                <div className="invalid-feedback">{errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="phone">Phone</label>
                            <Field
                                type="text"
                                id="phone"
                                name="phone"
                                className={`form-control ${errors.phone && touched.phone ? 'is-invalid' : ''}`}
                            />
                            {errors.phone && touched.phone ? (
                                <div className="invalid-feedback">{errors.phone}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="address">Address</label>
                            <Field
                                type="text"
                                id="address"
                                name="address"
                                className={`form-control ${errors.address && touched.address ? 'is-invalid' : ''}`}
                            />
                            {errors.address && touched.address ? (
                                <div className="invalid-feedback">{errors.address}</div>
                            ) : null}
                        </div>
                            <div className='d-flex justify-content-center align-items-center'>
                            <Button type="submit" variant="primary">
                            {initialValues.id ? 'Update' : 'Add'} Employee
                        </Button>
                            </div>
                        
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddOrUpdateEmployee;