import React, {
  useContext,
  useState,
  useEffect
} from 'react';
import PageTitle from '../components/common/PageTitle';
import Card from '../components/common/Card';
import GradientButton from '../components/common/GradientButton';
import { Formik, Form, Field } from 'formik';
import { FetchContext } from '../context/FetchContext';
import FormError from '../components/FormError';
import FormSuccess from '../components/FormSuccess';

const Issue = () => {
  const fetchContext = useContext(FetchContext);
  const [issue, setIssue] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const getIssue = async () => {
      try {
        const { data } = await fetchContext.authAxios.get(
          'issue'
        );
        setIssue(data.issue);
      } catch (err) {
        console.log(err);
      }
    };
    getIssue();
  }, [fetchContext]);

  const saveIssue = async issue => {
    try {
      const { data } = await fetchContext.authAxios.patch(
        'issue',
        issue
      );
      setErrorMessage(null);
      setSuccessMessage(data.message);
      setIssue('')
    } catch (err) {
      const { data } = err.response;
      setSuccessMessage(null);
      setErrorMessage(data.message);
    }
  };
  return (
    <>
      <PageTitle title="Issue" />
      <Card>
        <h2 className="font-bold mb-2">
          Report an Issue
        </h2>
        {successMessage && (
          <FormSuccess text={successMessage} />
        )}
        {errorMessage && <FormError text={errorMessage} />}
        <Formik
          initialValues={
            `Current Issue: ${issue}`
          }
          onSubmit={values => saveIssue(values)}
          enableReinitialize={true}
        >
          {() => (
            <Form>
              <Field
                className="border border-gray-300 rounded p-1 w-full h-56 mb-2"
                component="textarea"
                name="issue"
                placeholder= {`Current Issue:  ${issue}`}
              />
              <GradientButton text="Save" type="submit" />
            </Form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Issue;
