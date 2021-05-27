import dotenv from "dotenv";
dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

export default {
  secret: process.env.JWT_SECRET,
  mongo_conn: process.env.MONGO_CONN,
  postgres_conn: process.env.POSTGRES_CONN
};
