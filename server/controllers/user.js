const catchAsyncError = require("../middlewares/catchAsyncErrors");
const { connection } = require("../db/database");

exports.register = catchAsyncError(async (req, res, next) => {
  const { username, email, password1 } = req.body;
  
  const sql = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
  connection.query(sql, [username, email, password1], function(err, result) {
    if (err) throw err;
    console.log("User registered!");
    res.send("User registered!");
  });
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const sql = "SELECT COUNT(*), id FROM user WHERE email = ? AND password = ? group by id";
  connection.query(sql, [email, password], function(err, result) {
    if (err) throw err;
    const num = result[0]['COUNT(*)'];
    if (num == 1) res.status(200).json({
      user_id: result[0]['id']
    });
    else res.status(400).send("Không tồn tại tài khoản");
  });
});
