import { Sequelize } from "sequelize";
import env from "../config/environment";

const sequalize = new Sequelize(env.postgres_conn);

const testConnection = async (sequalize) => {
  try {
    await sequalize.authenticate();
    console.log("connection postgres connected");
  } catch (error) {
    console.log("connection postgres error", error);
  }
};
testConnection(sequalize);

export default sequalize;
