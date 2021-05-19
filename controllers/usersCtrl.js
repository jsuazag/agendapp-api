const profile = (req, res) => {
  const id = "60a46a7a6babb01bad969c41";
  res.send("profile");
};

const create = (req, res) => {
  res.send("create a user");
};

const getAll = (req, res) => {
  res.send("all users");
};

export default {
    profile,
    create,
    getAll
}