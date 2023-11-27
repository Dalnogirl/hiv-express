import { Router } from "express";
import * as UsersService from "./usersService";
import * as UsersDbLayer from "./usersDbLayer";
import * as UsersUtils from "./usersUtils";

export const usersRouter =  Router();

usersRouter.get("/", async (req, res) => {
  const users = await UsersService.getAllUsers({
    selectAllUsers: UsersDbLayer.selectAllUsers,
  });

  return res.json({ users });
});

usersRouter.get("/:id", async (req, res) => {
  const {id} = req.params;
  const user = await UsersService.getUserById(+id, {
    selectUserById: UsersDbLayer.selectUserById,
  });
  return res.json({ user });
});

usersRouter.post(
  "/",
  async (req,res) => {
    const { name, email, password } = req.body
    const message = await UsersService.createUser(
      {
        name,
        email,
        password,
      },
      {
        insertUser: UsersDbLayer.insertUser,
        hashPassword: UsersUtils.hashPassword,
        selectUserByEmail: UsersDbLayer.selectUserByEmail,
      },
    );

    return res.json({
      message,
    });
  },
);
