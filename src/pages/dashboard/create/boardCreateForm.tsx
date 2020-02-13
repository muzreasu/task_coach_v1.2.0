import { Field, Form, FormikProps, withFormik } from "formik";
import * as React from "react";
import { addToLocalStorageArray } from "src/utils";

interface FormValues {
  name: string;
}

interface MyFormProps {
  initialName?: string;
}

export const InnerForm = (props: FormikProps<FormValues>) => {
  const { isSubmitting } = props;
  return (
    <Form>
      <Field type="text" name="name" />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export const BoardCreateForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => {
    return {
      name: props.initialName || '',
    };
  },

  handleSubmit: values => {
    addToLocalStorageArray('boards', values.name);
  },
})(InnerForm);

export default BoardCreateForm;
