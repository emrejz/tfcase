export const getUsers = async () => {
  const data = await fetch("http://localhost:3003/users");
  return await data.json();
};

export const getGoals = async () => {
  const data = await fetch("http://localhost:3003/goals");
  return await data.json();
};

export const getGoal = async (id) => {
  const data = await fetch("http://localhost:3003/goals/" + id);
  return await data.json();
};

export const postGoal = async (data) => {
  const rawResponse = await fetch("http://localhost:3003/goals", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await rawResponse.json();
};

export const editGoal = async (id, data) => {
  const rawResponse = await fetch("http://localhost:3003/goals/" + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await rawResponse.json();
};
