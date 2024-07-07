const userModel = require("../../models/regularUser/regularUser");
const doctorModel = require("../../models/doctor/doctor");

const bcrypt = require("bcryptjs");

exports.updatePassword = async (req, res) => {
  try {
    const { id, role, password } = req.body;
    // console.log(req.body);

    const encryptedPwd = await bcrypt.hash(password, 10);

    if (role == "user") {
      await userModel.findByIdAndUpdate(id, { password: encryptedPwd });
    } else if (role == "doctor") {
      await doctorModel.findByIdAndUpdate(id, { password: encryptedPwd });
    }

    res.status(201).json({ message: "password update successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
