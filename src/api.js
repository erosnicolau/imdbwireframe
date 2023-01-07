const apiKey = '9935ad097e51c91b1304f36f02c76d66';
const baseUrl = 'https://api.themoviedb.org/3';

const handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  };

export const getMovies = async (page) => {
  const params = new URLSearchParams();
  params.append('api_key', apiKey);
  params.append('page', page);
  const response = await fetch(`${baseUrl}/movie/popular?${params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return handleResponse(response);
};

export const searchMovies = async (query, page) => {
  const params = new URLSearchParams();
  params.append('api_key', apiKey);
  params.append('page', page);
  params.append('query', query);
  const response = await fetch(`${baseUrl}/search/movie?${params}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });
  return handleResponse(response);
};

export const getMovieById = async (movieId) => {
  const response = await fetch(`${baseUrl}/movie/${movieId}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    params: {
      api_key: apiKey
    }
  });
  return handleResponse(response);
};