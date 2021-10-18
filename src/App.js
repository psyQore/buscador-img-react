import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./header.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log(photos);
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID _FYW5gs2njCfUtuItIqKgI-lgPZ6XspaZU7_gD8bkuw",
                },
              }
            );
            const data = await response.json();
            // Llamar a la api de unsplash
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default App;
