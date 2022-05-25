import React, { useState } from "react";

const Search = (props) => {
  const [value, setValue] = useState("");
  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="input-group mb-3 mt-3">
      <div className="input-group-prepend">
        <span
          onClick={() => props.onSearch(value)}
          className="input-group-text"
          id="basic-addon1"
        >
          Search
        </span>
      </div>
      <input
        type="text"
        onChange={valueChangeHandler}
        className="form-control"
        placeholder="Firstname"
        aria-label="Firstname"
        aria-describedby="basic-addon1"
      ></input>
    </div>
  );
};

export default Search;
