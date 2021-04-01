import { MongoSchema, MongoModel } from "@mayajs/mongo";

const schema = MongoSchema({
  name: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
  },

});

export default MongoModel("Users", schema);