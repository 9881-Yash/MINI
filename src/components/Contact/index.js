import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <section className="mb-4">
        <div className="text-centre" style={{ margin: '50px 0 50px 0' }}>
          <h2>Contact Us</h2>
          <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'} alt="line_star" />
        </div>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly.
          Our team will come back to you within a matter of hours to help you.
        </p>
        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row" style={{margin: "0 0 1% 0"}}>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      placeholder='Enter Name'
                      id="name"
                      {...register('name', { required: true })}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <span className="invalid-feedback">Name is required</span>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      placeholder='Enter Email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                      })}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && (
                      <span className="invalid-feedback">
                        {errors.email.type === 'required' && 'Email is required'}
                        {errors.email.type === 'pattern' && 'Entered email is in wrong format'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row" style={{margin: "0 0 1% 0"}}>
                <div className="col-md-12">
                  <div className="md-form">
                    <input
                      type="text"
                      placeholder='Subject'
                      id="subject"
                      {...register('subject', { required: true })}
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    />
                    {errors.subject && (
                      <span className="invalid-feedback">Subject is required</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="row" style={{margin: "0 0 1% 0"}}>
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      id="message"
                      placeholder='Your message'
                      {...register('message', { required: true })}
                      rows={2}
                      className={`form-control md-textarea ${
                        errors.message ? 'is-invalid' : ''
                      }`}
                    />
                    {errors.message && (
                      <span className="invalid-feedback">Message is required</span>
                    )}
                  </div>
                </div>
              </div>
              {/*Grid row*/}
              <div className="text-center text-md-left">
                <button className="btn btn-light" type="submit">
                  Send
                </button>
              </div>
            </form>
            <div className="status" />
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>Mumbai, Maharashtra</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x" />
                <p>+91 8830711743</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <p>info@gmail.com</p>
              </li>
            </ul>
          </div>
          {/*Grid column*/}
        </div>
      </section>
      {/*Section: Contact v.2*/}
    </div>
  );
};

export default ContactUs;
