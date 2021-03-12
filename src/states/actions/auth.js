import { API } from "../../config";

export const login = (user = {}) => ({
  type: "LOGIN",
  user,
});

export const startLogin = (userData = {}) => {
  return (dispatch) => {
    //later use axios library
    return fetch(`${API}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), //userDate={email:"user email",password:"user password"}
    })
      .then((response) => {
        /*sample response
            {
                "token": "token value",
                "user": {
                    "_id": "user id",
                    "email": "user email",
                    "name": "user name",
                    "role": user name as a number
                }
            }
        */
        return response.json();
      })
      .then((fetchedData) => dispatch(login(fetchedData)))
      .catch((err) => {
        console.log(err);
      });
  };
};
