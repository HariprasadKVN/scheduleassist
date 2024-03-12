import { Field, Formik } from "formik";

const Schedule: React.FC = () => {
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ name: '', reason: '', date: new Date() }}
                validate={values => {
                    let errors: { name: string } | undefined = { name: '' }
                    // const errors: {
                    //     name: string, reason: string, date: Date
                    // } = { name: '', reason: '', date: new Date() };
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    else {
                        errors = undefined;
                    }
                    // }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    alert("clicked");
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control"
                            placeholder="Enter your Name"
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <input
                            className="form-control"
                            placeholder="Enter your Reason"
                            type="text"
                            name="reason"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.reason}
                        />
                        {errors.reason && touched.reason && errors.reason}
                        <input
                            className="form-control"
                            placeholder="When you would like to meet the Doctor"
                            type="datetime-local"
                            name="date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.date?.toString()}
                        />
                        <select
                            className="form-control"
                            name="date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.date?.toString()}
                        >
                            <option>Select a Doctor</option>
                            <option>Dr No</option>
                            <option>Dr Yes</option>
                        </select>
                        <div id="checkbox-group">Checked</div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                <Field type="checkbox" name="checked" value="One" />
                                One
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="Two" />
                                Two
                            </label>
                            <label>
                                <Field type="checkbox" name="checked" value="Three" />
                                Three
                            </label>
                        </div>
                        <div id="checkbox-group">Option</div>
                        <div role="group" aria-labelledby="checkbox-group">
                            <label>
                                <Field type="radio" name="option" value="One" />
                                Yes
                            </label>
                            <label>
                                <Field type="radio" name="option" value="Two" />
                                No
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Schedule;