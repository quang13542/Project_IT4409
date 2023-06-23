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
  
  const sql = "SELECT COUNT(*) FROM user WHERE email = ? AND password = ?";
  connection.query(sql, [email, password], function(err, result) {
    if (err) throw err;
    const num = result[0]['COUNT(*)'];
    if (num == 1) res.send("ACCEPT");
    else res.send("ERROR");
  });
});
