import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class UsersServices {
  @Models("users") model: any;
  constructor() {}

  // Create user
  async create(body: any) {
    try {
      const user = await this.model.create(body);
      return { status: "success", message: "Successfuly created user", data: [user] };
    } catch (error) {
      return { status: "error", message: error.toString(), data: [] };
    }
  }

  // Update user by id
  async update(id: string, body: any) {
    try {
      const user = await this.model.findByIdAndUpdate(id, body, { new: true });
      if (!user) {
        throw { errmsg: "User not found" };
      }
      return { status: "success", message: "Successfuly updated user", data: [user] };
    } catch (error) {
      return { status: "error", message: error.errmsg ? error.errmsg : error.toString(), data: [] };
    }
  }

  // Delete user by id
  async delete(id: string) {
    try {
      const user = await this.model.findByIdAndDelete(id);
      if (!user) {
        throw { errmsg: "User not found" };
      }
      return { status: "success", message: "Successfuly deleted user", data: [] };
    } catch (error) {
      return { status: "error", message: error.errmsg ? error.errmsg : error.toString(), data: [] };
    }
  }

  // Get user by id
  async getById(id: string) {
    try {
      const user = await this.model.findById(id);
      if (!user) {
        throw { errmsg: "User not found" };
      }
      return { status: "success", message: "Successfuly get user", data: [user] };
    } catch (error) {
      return { status: "error", message: error.errmsg ? error.errmsg : error.toString(), data: [] };
    }
  }

  // Get all users
  async getAll() {
    try {
      const user = await this.model.find();
      return { status: "success", message: "Successfuly get all users", data: user };
    } catch (error) {
      return { status: "error", message: error.toString(), data: [] };
    }
  }
}
