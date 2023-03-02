import { useState, useEffect } from "react";

const useLogin = (url, username, passwd) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false)

    function login() {
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              { 
                username : username,
                passwd : passwd 
              }
            ),
          }).then(res => {
            if(!res.ok) {
              throw Error("Can not fetch data from the server")
            }
            return res.text()
          }).then((data) => {
            setData(data)
          })
          .catch((error) => {
            setError(error)
          }) 
     }

     return [data, error, login]
}

export default useLogin;

