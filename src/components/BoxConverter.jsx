import React from 'react';

import { Formik, Field, Form } from "formik";

const API_URL = "https://api.exchangeratesapi.io";

export default function BoxConverter({ onSetHistory }) {
  const [actualRate, setActualRate] = React.useState("0");
  const [resultRate, setResultRate] = React.useState("0");

  const [currencyFrom, setcurrencyFrom] = React.useState("USD");
  const [currencyTo, setcurrencyTo] = React.useState("EUR");

  return (
    <div className="box converterBox">
      <span>
        {actualRate} {currencyFrom} equals
      </span>

      <span className="converterResult">
        {resultRate} {currencyTo}
      </span>

      <Formik
        initialValues={{
          value: 0,
          from: currencyFrom,
          to: currencyTo,
        }}
        onSubmit={async ({ value, from, to }) => {
          if (from !== to && parseInt(value) > 0) {
            fetch(`${API_URL}/latest?symbols=${to}&base=${from}`)
              .then((response) => response.json())
              .then((data) => {
                setActualRate(value);
                setResultRate(value * data.rates[to]);
                setcurrencyFrom(from);
                setcurrencyTo(to);

                onSetHistory((prevState) => {
                    console.log({ prevState });
                  return [
                    ...prevState,
                    {
                      from,
                      to,
                      value,
                      result: value * data.rates[to],
                    },
                  ];
                });
              });
          }
        }}
      >
        <Form>
          <Field id="value" name="value" placeholder="Value..." />

          <Field name="from" as="select">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </Field>

          <Field name="to" as="select">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </Field>

          <button type="submit">Convert</button>
        </Form>
      </Formik>
    </div>
  );
}

