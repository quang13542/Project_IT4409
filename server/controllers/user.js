const catchAsyncError = require("../middlewares/catchAsyncErrors");
const { connection } = require("../db/database");
const User = require("../models/user");

const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;
const salt = bcrypt.genSaltSync(SALT_ROUNDS);

function query(sql, params) {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, function(err, result) {
      if (err) reject(err);
      else resolve(result);
    });
  });
}


exports.register = catchAsyncError(async (req, res, next) => {
  const { username, email, password1 } = req.body;

  // const hashPassword = bcrypt.hashSync(password1, salt);
  
  const insertUserSql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
  const findUserSql = "SELECT * FROM user WHERE email = ?";
  const params = [email];

  try {
    const result = await query(findUserSql, params);

    if(result.length > 0){
      res.status(409).json({
        error: "Email already exists"
      });
      return;
    }
    
    await query(insertUserSql, [username, email, password1]);

    console.log("User registered!");
    res.send("User registered!");

  } catch (error) {
    next(error);
  }
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // const hashPassword = bcrypt.hashSync(password, salt);
  
  const findUserEmailPassword = "SELECT * FROM user WHERE email = ? AND password = ?";
  const findUserEmailSql = "SELECT * FROM user WHERE email = ?";
  const params = [email];

  try {
    const result = await query(findUserEmailSql, params);

    if(result.length == 0){
      res.status(401).json({
        error: "email does not exist"
      });
      return;
    }
    const findUser = await query(findUserEmailPassword, [email, password]);
    if (findUser.length == 1) res.status(200).json({
      msg: "Success",
      user_id: findUser[0]['id']
    });
    else res.status(400).json({msg: "Password is not correct"});

  } catch (error) {
    next(error);
  }
});
