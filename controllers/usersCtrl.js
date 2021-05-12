const profile = (req, res) => {
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