const { Router } = require("express");
const router = Router();
const { register, login, logout } = authController;

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);
