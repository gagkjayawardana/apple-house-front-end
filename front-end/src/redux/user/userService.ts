import axios from 'axios';

import { LoginUsertype, RegisterUserType } from './userTypes';

export const registerUserService = async (user: RegisterUserType) => {
  try {
    const userData = {
      userName: user.userName,
      email: user.email,
      password: user.password,
    };
    const response = await axios.post(
      'http://localhost:8080/user/register',
      userData,
      { withCredentials: true },
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const loginUserService = async (user: LoginUsertype) => {
  try {
    const userData = {
      email: user.email,
      password: user.password,
    };
    const response = await axios.post(
      'http://localhost:8080/user/login',
      userData,
      { withCredentials: true },
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getLogedUserService = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user/getUser', {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const logoutUserService = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user/logout', {
      withCredentials: true,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
