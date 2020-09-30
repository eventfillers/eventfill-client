import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validate = values => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Please give us a name to promote you.';
	}
	if (!values.location) {
		errors.location = 'Where are you located?';
	}
	if (!values.genre) {
		errors.genre = 'Please give us a genre to promote your talent.';
	}
	if (!values.image_url) {
		errors.image_url = 'Pick a photo to represent your talent profile!';
	}
	if (!values.description) {
		errors.description = 'Description for your talent is required.';
	}
	return errors;
};

const TalentForm = props => {
	return (
    <Formik
      initialValues={{
        name: '',
        location: '',
        category: '',
        image_url: '',
        personal_link: '',
        description: '',
        open_for_booking: false,
        open_for_commission: false,
      }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log('test');
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Your Name</label>
          <Field name="name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="name">Location</label>
          <Field name="location" as="select">
            <option value="" disabled selected>
              Select a city
            </option>
            {props.locations
              ? props.locations.map(location => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))
              : null}
          </Field>
          <ErrorMessage name="location" component="div" />

          <label htmlFor="category">Category</label>
          <Field name="category" as="select">
            <option value="" disabled selected>
              Select a genre
            </option>
            {props.categories
              ? props.categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              : null}
          </Field>
          <ErrorMessage name="category" component="div" />

          <label htmlFor="image_url">Cover Image URL</label>
          <Field name="image_url" />
          <ErrorMessage name="image_url" component="div" />

          <label htmlFor="personal_link">Portfolio Link URL</label>
          <Field name="personal_link" />
          <ErrorMessage name="personal_link" component="div" />

          <label htmlFor="description">Description</label>
          <Field name="description" as="textarea" />
          <ErrorMessage name="description" component="div" />

          <label htmlFor="open_for_booking">Accepting Invitation?</label>
          <Field name="open_for_booking" type="checkbox" />

          <label htmlFor="open_for_commission">Accepting Commissions?</label>
          <Field name="open_for_commission" type="checkbox" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
	);
};

export default TalentForm;
