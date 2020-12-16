import axios from "axios";
import React, { useReducer } from "react";
import DataAction from './DataAction';

const apikey = "MySecretkey";
const host_url = "https://localhost:44355/";
const InitalState = {
  data:[]
}


const [state , dispatch] = useReducer(DataAction,InitalState);

const fetchData = (ApiMethod) => {
  axios
    .get(host_url + ApiMethod, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        ApiKey: ` ${apikey}`,
      },
    })
    .then((res) => {
        dispatch({
               type: "FETCH_DATA",
               payload:res.data
        })
    })
    .catch((err) => {
      console.log("API Error");
    });

  // return axios.get(host_url + ApiMethod,{headers:{
  //         'Access-Control-Allow-Origin' : '*',
  //         "ApiKey": ` ${apikey}`
  // }});
};
const fetchDataById = (ApiMethod, Id) => {
  return axios.get(host_url + ApiMethod, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      ApiKey: ` ${apikey}`,
    },
  });
};
const AddData = (ApiMethod, data) => {
  return axios.post(host_url + ApiMethod, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ApiKey: ` ${apikey}`,
    },
  });
};

const DeleteData = (ApiMethod) => {
  return axios.delete(host_url + ApiMethod, {
    headers: {
      ApiKey: ` ${apikey}`,
    },
  });
};

const UpdateData = (ApiMethod, data) => {
  return axios.put(host_url + ApiMethod, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ApiKey: ` ${apikey}`,
    },
  });
};

// export default {
//   fetchData,
//   AddData,
//   fetchDataById,
//   DeleteData,
//   UpdateData,
// };
