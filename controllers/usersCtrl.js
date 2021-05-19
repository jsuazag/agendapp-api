import usersService from "../services/usersServices";

const profile = async (req, res) => {
  const id = "60a46a7a6babb01bad969c41";
  res.send("profile");
};

const create = (req, res) => {
  res.send("create a user");
};

const getAll = async (req, res) => {
  try {
    const users = await usersService.getAll();
    res.json(users);
  } catch (error) {
    res.status(error.errorStatus).send(error.message);
  }
};

export default {
  profile,
  create,
  getAll,
};
