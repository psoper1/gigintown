import { LOGIN_ENDPOINT, REFRESH_ENDPOINT, REGISTER_ENDPOINT } from './auth.constants';
import request from './api.request';

class AuthService {
  constructor() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  async login(email, password) {
    try {
      const response = await request({
        url: LOGIN_ENDPOINT,
        method: 'POST',
        data: {
          email,
          password,
        },
      });

      if (response.data.access) {
        // Login successful
        return this.setToken(response);
      }
    } catch (error) {
      // Handle login error
      console.error('Login error:', error);
      return error.response;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  async register({ firstName, lastName, email, password, accountType }) {
    try {
      const response = await request({
        url: REGISTER_ENDPOINT,
        method: 'POST',
        data: {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          account_type: accountType,
        },
      });

      if (response.status === 201) {
        // Registration successful
        return this.login(email, password); // Automatically log in the user after registration
      } else {
        // Handle registration failure
        console.error('Registration failed:', response);
        return response;
      }
    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error);
      return error.response;
    }
  }

  setToken(response) {
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }

  async refreshToken() {
    try {
      const user = JSON.parse(localStorage.getItem('user'));

      if (user.refresh) {
        const response = await request({
          url: REFRESH_ENDPOINT,
          method: 'POST',
          data: {
            refresh: user.refresh,
          },
        });

        return response.data;
      }
    } catch (error) {
      // Handle refresh token error
      console.error('Refresh token error:', error);
      return error.response;
    }
  }
}

export default new AuthService();