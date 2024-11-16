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

  return <form className="form-inline" onSubmit={onSubmit} data-testid="search-form">
    <label className='pe-2' htmlFor="searchKey">Search by name:</label>
    <div className='input-group input-group-append align-items-center'>
    <input type="text" name="query" id="searchKey" data-testid="search-query" className="form-control" value={name} onChange={onChange}/>
    <button type="submit" className="btn-primary btn" data-testid="submit-query">Search</button>
    </div>
  </form>
}
