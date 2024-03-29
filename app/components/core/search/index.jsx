'use client';
import { useState } from 'react';

export default function Search (props) {

  const [name, setName] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if(props.onSubmit) {
      props.onSubmit(name);
    }
    setName('');
  }

  const onChange = (event) => {
    setName(event.target.value);
  }

  return <>
    <form className="form-inline" onSubmit={onSubmit} data-testid="search-form">
      <label className="my-1 mr-2" htmlFor="searchKey">Search by name:</label>
      <br />
      <input type="text" name="query" id="searchKey" data-testid="search-query" className="form-control mr-sm-2" value={name} onChange={onChange}/>
      <button type="submit" className="btn-primary btn hidden-xs hidden-sm" data-testid="submit-query">Search</button>
    </form>
    <style jsx>{
      `.form-control, .btn-primary {
        border-radius: 0;
      }`
    }
    </style>
  </>
}
