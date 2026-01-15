export const isTokenExpired = () => {
  const token = localStorage.getItem("token");
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const now = Date.now() / 1000;

    return payload.exp < now;
  } catch (error) {
    console.error(error)
    return true;
  }
};
