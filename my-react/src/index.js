import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
      <div>
          <Button label="a" type="yy" disabled="disabled" />
          <Button label="xxx" type="main" size="ss" onClick={() => {console.log(111)}} />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
