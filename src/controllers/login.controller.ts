import { userModel } from "../models/user";

const loginController = async (req: any, res: any) => {
  const { email, password } = await req.body;

  try {
    const findUser = await userModel.findOne({
      email: email,
    });

    if (findUser === null)
      return res
        .status(400)
        .json({ message: "invalid email" });

    if (findUser.password === password)
      return res.status(200).json({
        message: `welcome back ${findUser.fullname}`,
      });

    return res
      .status(400)
      .json({ message: "invalid password" });
  } catch (error) {
    console.log(error);
  }

  res.json({ message: "login route" });
};

export { loginController };
