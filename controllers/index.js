const AppError = require("../utils/appError");
const conn = require("../services/db");
exports.getAllFighters = (req, res, next) => {
 conn.query("SELECT * FROM Fighters;", function (err, data, fields) {
   if(err) return next(new AppError(err))
   res.status(200).json({
     status: "success",
     data: data,
   });
 });
};
exports.getFightersByName = (req, res, next) => {
 conn.query(
   "SELECT * FROM Fighters WHERE Name LIKE CONCAT('%', ?, '%');",
   [req.query.name],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       data: data,
     });
  });
};
exports.getFightersByNickname = (req, res, next) => {

 conn.query(
   "SELECT * FROM Fighters WHERE Nickname LIKE CONCAT('%', ?, '%');",
   [req.query.nickname],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       data: data,
     });
  });
};
exports.getFightersByHeight = (req, res, next) => {

 conn.query(
   "SELECT * FROM Fighters WHERE Height = ?;",
   [req.query.height],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       data: data,
     });
  });
};
exports.getFightersByWeight = (req, res, next) => {

 conn.query(
   "SELECT * FROM Fighters WHERE Weight = ?;",
 	  [req.query.weight],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       data: data,
     });
  });
};
exports.getFightersByHeightRange = (req, res, next) => {

 conn.query(
   "SELECT * FROM Fighters WHERE Height BETWEEN ? AND ?;",
   [req.query.min, req.query.max],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       data: data,
     });
  });
};
exports.getFightersByWeightRange = (req, res, next) => {

 conn.query(
   "SELECT * FROM Fighters WHERE Weight BETWEEN ? AND ?;",
   [req.query.min, req.query.max],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       data: data,
     });
  });
};
exports.getFightersByCountry = (req, res, next) => {

 conn.query(
   "SELECT * FROM Fighters WHERE Country LIKE CONCAT('%', ?, '%');",
   [req.query.country],
   function (err, data, fields) {
     if (err) return next(new AppError(err, 500));
     res.status(200).json({
       status: "success",
       data: data,
     });
  });
};
