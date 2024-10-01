import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const Login = () => {
    return (
        <div className="container w-3/4 m-auto my-4">
            <Link to='/data-table'>
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-2.5 py-1.5 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Back to Data Table
                </button>
            </Link>
            <Link to='/'>
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-2.5 py-1.5 mb-4 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Back to home
                </button>
            </Link>

            <div className="contact-form">
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={Yup.object().shape({
                        // email: Yup.string()
                        //     .required("Email is required")
                        //     .email("Enter a valid email"),
                        password: Yup.string()
                            .min(5, "Password must be at least  characters")
                            .max(10, "Password can not be larger than 10 characters")
                            .required("Password is required"),
                    })}
                    onSubmit={(fields, { resetForm }) => {
                        console.log('first', fields)
                        alert(`Form submmited successfully: ${fields.email} ${fields.password}`);
                        resetForm()
                    }}
                >
                    {({
                        handleSubmit,
                        touched,
                        errors,
                        isSubmitting,
                        dirty,
                        values,
                        setValues,
                    }) => (
                        <Form onSubmit={handleSubmit} disabled={isSubmitting || !dirty}>
                            <div className="row">
                                <div className="col-12 col-md-6 mb-4">
                                    <div className="input-colm">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email
                                        </label>
                                        <Field
                                            validate={validateEmail}
                                            name="email"
                                            type="email"
                                            className={
                                                "block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
                                                (errors.email && touched.email ? " is-invalid" : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mb-4">
                                    <div className="input-colm">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <Field
                                            name="password"
                                            type="text"
                                            className={
                                                "block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" +
                                                (errors.password && touched.password
                                                    ? " is-invalid"
                                                    : "")
                                            }
                                        />
                                        <ErrorMessage
                                            name="password"
                                            component="div"
                                            className="invalid-feedback"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="book-btn">
                                <button type="submit" className="rounded-md bg-indigo-600 px-2.5 py-1.5 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                > Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    )
}

export default Login;