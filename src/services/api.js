const API_ROOT = `http://localhost:5000/api/v1`;

const token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: token,
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers,
  }).then((res) => res.json());
};

const getCanvas = () => {
  return fetch(`${API_ROOT}/canvas/`, { headers: headers }).then((res) =>
    res.json()
  );
};

const postCanvas = (image) => {
  return fetch(`${API_ROOT}/canvas/`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      canvas: {
        canvas: image,
        user_id: localStorage.getItem("id"),
      },
    }),
  });
};

export default {
  auth: {
    login: login,
    getCurrentUser: getCurrentUser,
  },
  canvas: {
    getCanvas,
    postCanvas,
  },
};
