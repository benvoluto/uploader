import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import styled from 'styled-components';

import './App.css';

type Inputs = {
  snowflake_user: string,
  csv_file: string,
  file_type: string,
  snowflake_schema: string,
  snowflake_table: string,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
`;

const Auth = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(watch("snowflake_user"));
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <fieldset className="kh-fieldset">
    <div className="kh-legend">
        <h1 className="kh-page-title">Snowflake Destination</h1>
        <div className="kh-helper kh-helper-form-error">
            <span className="kh-helper-text">
              {errors.snowflake_user && <span>This field is required</span>}
              {errors.snowflake_schema && <span>This field is required</span>}
              {errors.snowflake_table && <span>This field is required</span>}
            </span>
        </div>
    </div>
    <div className="kh-field">
        <label className="kh-field-label" htmlFor="snowflake_user">User</label>
        <input className="kh-field-input" type="text" id="snowflake_user" defaultValue="AAPI_USER" {...register("snowflake_user", { required: true })} placeholder="Default: AAPI_USER" />
    </div>
    <div className="kh-field">
        <label className="kh-field-label" htmlFor="snowflake_schema">Schema</label>
        <input className="kh-field-input" type="text" id="snowflake_schema" {...register("snowflake_schema", { required: true })} placeholder="e.g. CSV_TEST_TABLE" />
    </div>
    <div className="kh-field">
        <label className="kh-field-label" htmlFor="snowflake_table">Table</label>
        <input className="kh-field-input" type="text" id="snowflake_table" {...register("snowflake_table", { required: true })} placeholder="e.g. CSV_UPLOADS" />
    </div>
    <div className="kh-fieldset-action">
        <input className="kh-button" type="submit" name="login" value="Submit" />
    </div>
    </fieldset>
  </form>
  );
};

const FILETYPES = [{label: 'CSV', type: 'csv'}, {label: 'JSON', type: 'jsonp'}, {label: 'XML', type: 'xml'}];
const Selector = () => {
  const { register } = useForm<Inputs>();
  return (
    <div className="kh-field-inline">
      <label className="kh-field-label" htmlFor="snowflake_user">Select file type</label>
      <select  {...register("file_type")}>
        {FILETYPES.map(({ label, type }) => (
          <option key={type} value={type}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

const Upload = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(watch("csv_file"));
  return (
  <form onSubmit={handleSubmit(onSubmit)}>
  <fieldset className="kh-fieldset">
    <div className="kh-helper kh-helper-form-error">
      <span className="kh-helper-text">
        {errors.csv_file}
      </span>
    </div>
    <div className="kh-legend">
        <h1 className="kh-page-title">Upload</h1>
    </div>
    <div className="kh-field-inline">
        <input className="kh-field-input" type="file" id="snowflake_user" {...register("csv_file")} />
    </div>
    <div className="kh-fieldset-action">
        <input className="kh-button" type="submit" name="login" value="Upload" />
    </div>
    </fieldset>
  </form>
  );
};

function App() {
 
  return (
    <Wrapper>
      <Auth />
      <Upload />
    </Wrapper>
  );
}



export default App;
