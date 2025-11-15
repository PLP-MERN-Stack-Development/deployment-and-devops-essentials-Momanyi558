const API_URL = import.meta.env.VITE_API_URL;

export const fetchBugs = async () => {
  const res = await fetch(`${API_URL}/api/bugs`);
  return res.json();
};

export const createBug = async (data) => {
  const res = await fetch(`${API_URL}/api/bugs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

