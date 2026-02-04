export const isTokenExpired = () => {
  const token = localStorage.getItem("token");
  if (!token) return true;

  try {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64.replace(/-/g, "+").replace(/_/g, "/"));
    const payload = JSON.parse(payloadJson);
    if (!payload.exp) return true;

    const now = Math.floor(Date.now() / 1000);
    return payload.exp <= now;
  } catch (error) {
    console.error(error)
    return true;
  }
};
