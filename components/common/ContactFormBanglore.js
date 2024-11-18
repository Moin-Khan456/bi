import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// List of country codes
const countryCodes = [
  { code: '+1', name: 'United States/Canada' },
  { code: '+7', name: 'Russia/Kazakhstan' },
  { code: '+20', name: 'Egypt' },
  { code: '+27', name: 'South Africa' },
  { code: '+30', name: 'Greece' },
  { code: '+31', name: 'Netherlands' },
  { code: '+32', name: 'Belgium' },
  { code: '+33', name: 'France' },
  { code: '+34', name: 'Spain' },
  { code: '+36', name: 'Hungary' },
  { code: '+39', name: 'Italy' },
  { code: '+40', name: 'Romania' },
  { code: '+44', name: 'United Kingdom' },
  { code: '+45', name: 'Denmark' },
  { code: '+46', name: 'Sweden' },
  { code: '+47', name: 'Norway' },
  { code: '+48', name: 'Poland' },
  { code: '+49', name: 'Germany' },
  { code: '+52', name: 'Mexico' },
  { code: '+55', name: 'Brazil' },
  { code: '+56', name: 'Chile' },
  { code: '+57', name: 'Colombia' },
  { code: '+58', name: 'Venezuela' },
  { code: '+60', name: 'Malaysia' },
  { code: '+61', name: 'Australia' },
  { code: '+62', name: 'Indonesia' },
  { code: '+63', name: 'Philippines' },
  { code: '+64', name: 'New Zealand' },
  { code: '+65', name: 'Singapore' },
  { code: '+66', name: 'Thailand' },
  { code: '+81', name: 'Japan' },
  { code: '+82', name: 'South Korea' },
  { code: '+86', name: 'China' },
  { code: '+91', name: 'India' },
  { code: '+92', name: 'Pakistan' },
  { code: '+93', name: 'Afghanistan' },
  { code: '+94', name: 'Sri Lanka' },
  { code: '+95', name: 'Myanmar' },
  { code: '+98', name: 'Iran' },
  { code: '+212', name: 'Morocco' },
  { code: '+213', name: 'Algeria' },
  { code: '+216', name: 'Tunisia' },
  { code: '+218', name: 'Libya' },
  { code: '+220', name: 'Gambia' },
  { code: '+221', name: 'Senegal' },
  { code: '+222', name: 'Mauritania' },
  { code: '+223', name: 'Mali' },
  { code: '+224', name: 'Guinea' },
  { code: '+225', name: 'Ivory Coast' },
  { code: '+226', name: 'Burkina Faso' },
  { code: '+227', name: 'Niger' },
  { code: '+228', name: 'Togo' },
  { code: '+229', name: 'Benin' },
  { code: '+230', name: 'Mauritius' },
  { code: '+231', name: 'Liberia' },
  { code: '+232', name: 'Sierra Leone' },
  { code: '+233', name: 'Ghana' },
  { code: '+234', name: 'Nigeria' },
  { code: '+235', name: 'Chad' },
  { code: '+236', name: 'Central African Republic' },
  { code: '+237', name: 'Cameroon' },
  { code: '+238', name: 'Cape Verde' },
  { code: '+239', name: 'Sao Tome and Principe' },
  { code: '+240', name: 'Equatorial Guinea' },
  { code: '+241', name: 'Gabon' },
  { code: '+242', name: 'Congo' },
  { code: '+243', name: 'DR Congo' },
  { code: '+244', name: 'Angola' },
  { code: '+245', name: 'Guinea-Bissau' },
  { code: '+246', name: 'Diego Garcia' },
  { code: '+247', name: 'Ascension' },
  { code: '+248', name: 'Seychelles' },
  { code: '+249', name: 'Sudan' },
  { code: '+250', name: 'Rwanda' },
  { code: '+251', name: 'Ethiopia' },
  { code: '+252', name: 'Somalia' },
  { code: '+253', name: 'Djibouti' },
  { code: '+254', name: 'Kenya' },
  { code: '+255', name: 'Tanzania' },
  { code: '+256', name: 'Uganda' },
  { code: '+257', name: 'Burundi' },
  { code: '+258', name: 'Mozambique' },
  { code: '+260', name: 'Zambia' },
  { code: '+261', name: 'Madagascar' },
  { code: '+262', name: 'Reunion/Mayotte' },
  { code: '+263', name: 'Zimbabwe' },
  { code: '+264', name: 'Namibia' },
  { code: '+265', name: 'Malawi' },
  { code: '+266', name: 'Lesotho' },
  { code: '+267', name: 'Botswana' },
  { code: '+268', name: 'Eswatini' },
  { code: '+269', name: 'Comoros' },
  { code: '+290', name: 'Saint Helena' },
  { code: '+291', name: 'Eritrea' },
  { code: '+297', name: 'Aruba' },
  { code: '+298', name: 'Faroe Islands' },
  { code: '+299', name: 'Greenland' },
  // Add more as needed
];


const ContactFormBanglore = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'Name must be at least 3 characters'),
    contact: Yup.string()
      .required('Contact number is required')
      .matches(/^\d+$/, 'Contact must be a number'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    countryCode: '+91', // Default country code
    contact: '',
    email: '',
  };

  // Form submission handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const finalValues = {
      name: values.name,
      contact: `${values.countryCode} ${values.contact}`, // Full contact number
      email: values.email,
    };

    try {
      const response = await axios.post(
        'https://contact-2-xzk8.onrender.com/api/v1/user/contact',
        finalValues,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('API Response:', response.data);
      alert('Thank You, Submit SuccessFully.')
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contact-form">
            <div className='mt-20444'>
              <Field type="text" id="name" placeholder="Name" name="name" />
              <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            </div>

<div className='mt-20444'>
            <div className='' style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Country Code Dropdown */}
              <Field as="select" name="countryCode" id="countryCode">
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    ({country.code})
                  </option>
                ))}
              </Field>
              {/* Contact Input */}
              <Field
                type="text"
                id="contact"
                placeholder="Contact Number"
                name="contact"
              />
            </div>
            <ErrorMessage name="contact" component="div" style={{ color: 'red' }} />
</div>

            <div className='mt-20444'>
              <Field type="email" id="email" placeholder="Email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>

            <button className="btn-light" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ContactFormBanglore;
