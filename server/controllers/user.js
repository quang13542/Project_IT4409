const catchAsyncError = require("../middlewares/catchAsyncErrors");
const { connection } = require("../db/database");
const User = require("../models/user");
// const authMethod = require("..middlewares/token");

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
        error: "Email không tồn tại"
      });
      return;
    }
    const findUser = await query(findUserEmailPassword, [email, password]);
    // if (findUser.length == 1){
    //   // const accessTokenLife = process.env.ACCESS_TOKEN_LIFE || "Access_Token_Secret_#$%_ExpressJS_Authentication";
    //   // const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "10m";

    //   const dataForAccessToken = {
    //     email: email,
    //   };

    //   // const accessToken = await authMethod.generateToken(
    //   //   dataForAccessToken,
    //   //   accessTokenSecret,
    //   //   accessTokenLife,
    //   // );
    //   if (!accessToken) {
    //     return res
    //       .status(401)
    //       .send('Đăng nhập không thành công, vui lòng thử lại.');
    //   }
    
    //   let refreshToken = randToken.generate(jwtVariable.refreshTokenSize);

    //   res.status(200).json({
    //     msg: "Success",
    //     user_id: findUser[0]['id']
    //   });
    // } 
    if (findUser.length == 1) res.status(200).json({
      msg: "Success",
      user: result[0]
    });
    else res.status(400).json({msg: "Mật khẩu không chính xác"});

  } catch (error) {
    next(error);
  }
});

exports.deleteUser = catchAsyncError(async (req, res, next) => {

	const { user_id } = req.body;
  
    const sql = "update user set email = 'deleted_user' where id = ?";

    try {
        await connection.query(sql, [user_id]);

        console.log("User deleted!");
        res.status(200).json({detail: "User deleted!"});

    } catch (error) {
        next(error);
    }
});

exports.updateUser = catchAsyncError(async (req, res, next) => {

	const { user_id, username, password, role} = req.body;
  
    const sql = "update user set username=?, password=?, role=? where id = ?";

    try {
        await connection.query(sql, [username, password, role, user_id]);

        console.log("USer updated!");
        res.status(200).json({detail: "User updated!"});

    } catch (error) {
        next(error);
    }
});

exports.getAllUser = catchAsyncError(async (req, res, next) => {

  const page = req.query.page || 1;
  const limit = req.query.limit || 4;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const sql = `
        select * from user;
  `;
  connection.query(sql, [], function(err, result) {
    if (err) throw err;
    // To do: if success, redirect to the list of hotel url
    user = []
    result.forEach((row) => {
      user.push({
        user_id: row.id,
        username: row.username,
        email: row.email,
        role: row.role
      });
    });
    const resultUser = user.slice(startIndex, endIndex);
    res.status(200).json(resultUser);
  });
});
