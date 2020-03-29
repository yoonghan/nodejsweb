import * as React from "react";
import Head from 'next/head';
import HeaderOne from "../../components/HeaderOne";
import Footer from "../../components/Footer";
import { Formik } from 'formik';
import { withRouter } from 'next/router'

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: () => Promise<P>
}

const FormFill: StatelessPage<any> = (props: any) => {

  const onSubmit = (name:string, mobileno:string, been:string, lucky:string) => {
    const data = JSON.stringify({
      name: name,
      mobileno: mobileno,
      question1: been,
      question2: lucky
    });
    fetch("/api/database", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data: data})
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });
  }

  const {name, mobileno} = props.router.query;

  const _drawData = () => {
    return (<Formik
          initialValues={{ been: '', lucky: '', name: name, mobileno: mobileno }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={values => {
            const errors = {};
            if (values.been === '') {
              errors["been"] = 'Required';
            }
            if (values.lucky === '') {
              errors["lucky"] = 'Required';
            }
            if (values.name === '') {
              errors["name"] = 'Required';
            }
            if (values.mobileno === '') {
              errors["mobileno"] = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values.name, values.mobileno, values.been, values.lucky);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            // touched,
            handleChange,
            // handleBlur,
            handleSubmit,
            // isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="w3-padding w3-card-4">
              <div>
              {
                errors.name && <p className="w3-text-red">Do not leave me empty</p>
              }
                <label>Name</label>
                <input className="w3-input" type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name} />
              </div>
              <hr/>
              <div>
              {
                errors.mobileno && <p className="w3-text-red">Do not leave me empty</p>
              }
                <label>Mobile Number</label>
                <input className="w3-input" type="text"
                  name="mobileno"
                  onChange={handleChange}
                  value={values.mobileno} />
              </div>
              <hr/>
              <div>Have you been overseas for this past 14 days:</div>
              {
                errors.been && <p className="w3-text-red">Do not leave me empty</p>
              }
              <div>
                <p>
                  <input className="w3-radio" type="radio" name="been" id="been_no" value="no"
                    onChange={handleChange}
                    checked={values.been === 'no'}
                  />
                  <label htmlFor="been_no">No</label>
                </p>
                <p>
                  <input className="w3-radio" type="radio" name="been" id="been_yes" value="yes"
                    onChange={handleChange}
                    checked={values.been === 'yes'}
                  />
                  <label htmlFor="been_yes">Yes</label>
                </p>
              </div>
              <hr/>
              <div>Do you feel lucky ?</div>
              {
                errors.lucky && <p className="w3-text-red">Do not leave me empty</p>
              }
              <div>
                <p>
                  <input className="w3-radio" type="radio" name="lucky" id="lucky_no" value="no"
                    onChange={handleChange}
                    checked={values.lucky === 'no'}
                   />
                  <label htmlFor="lucky_no">No</label>
                </p>
                <p>
                  <input className="w3-radio" type="radio" name="lucky" id="lucky_yes" value="yes"
                    onChange={handleChange}
                    checked={values.lucky === 'yes'}
                  />
                  <label htmlFor="lucky_yes">Yes</label>
                </p>
              </div>

              <hr/>
              <button type="submit">Submit</button>
            </form>
          )}
    </Formik>)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Form Fill</title>
        <link rel="stylesheet" href="/static/css/common.css"/>
        <link rel="stylesheet" href="/static/css/w3c.css"/>
        <style>{`
          html {
            font-size: 14pt;
          }
        `}</style>
      </Head>
      <HeaderOne title={"Project Doctor x"} isLined={true}/>
      {mobileno && _drawData()}
      <Footer/>
    </React.Fragment>
  );
}

export default withRouter(FormFill);
