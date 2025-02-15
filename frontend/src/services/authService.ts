const BASE_URL = 'http://127.0.0.1:8000';

export const authService = {
  async login(username: string, password: string) {
    try {
      // Build URL with query parameters
      const url = new URL(`${BASE_URL}/login`);
      url.searchParams.append('username', username);
      url.searchParams.append('password', password);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isGuest');
  },

  isAuthenticated() {
    return localStorage.getItem('accessToken') !== null || 
           localStorage.getItem('isGuest') === 'true';
  },

  setGuestMode() {
    localStorage.setItem('isGuest', 'true');
  }
};