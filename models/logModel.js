import { DataTypes } from "sequelize";
import sequalize from "../connection/postgresconn";

export const LogAgenda = sequalize.define(
  "LogAgenda",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    who: {
      type: DataTypes.STRING,
    },
    when: {
      type: DataTypes.STRING,
    },
    log: {
      type: DataTypes.TEXT,
    },
  },
  {
    //freezeTableName: true
    tableName: "agendapp_logs",
  }
);
