import { AuthService } from "../services/auth.service.js"

export const AuthController = {
  register: async (req, res) => {
    const newUser = req.body;
    try {
      const user = await AuthService.register(newUser)
      res.status(200).send(user);
    } catch (error) {
      res.send(error);
    }
  },

  login: async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
      const user = await AuthService.login(username, password);
      if(user === -1) {
        res.status(401).json({
          message: "Wrong credential"
        })
        return;
      }

      if(user === -2) {
        res.status(401).json({
          message: "Wrong credential"
        })
        return;
      }

      res.status(200).send(user);
    } catch (error) {
      res.send(error)
    }
  }
}