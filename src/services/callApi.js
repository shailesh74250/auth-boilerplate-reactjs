import React from 'react';
import axios from 'axios';

const callApi = ({method, url, data, headers, contentType}) => {
  return (
    axios({
      method,
      url,
      contentType,
      data, 
      {headers}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  );
}

export default callApi;