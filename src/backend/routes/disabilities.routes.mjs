import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { pool } from "../config/db.config.mjs";
import { validateRegister } from "../middleware/users.mjs";
import dotenv from "dotenv";

dotenv.config();

const getDefaultHome =
  ("/",
  (req, res) => {
    res
      .status(200)
      .send(
        `This is publicly available content on the main page. Please login to see your dashboard.`
      );
  });

const getDisabilities =
  ("/disabilities",
  (request, response) => {
    pool.query("SELECT * FROM disabilities", (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({
        status: "success",
        requestTime: request.requestTime,
        data: results.rows,
      });
    });
  });

const postDisabilities =
  ("/postdisabilities",
  (request, response) => {
    pool.query(
      `INSERT INTO disabilities (disability_name, last_update) VALUES ('test endpoint', now())`,
      (err, result) => {
        if (err) {
          return response.status(400).send({
            msg: err,
          });
        }
        return response.status(201).send({
          msg: "Disability added!",
        });
      }
    );
  });

const postLogin =
  ("/login",
  (req, res, next) => {
    pool.query(
      `SELECT * FROM users WHERE username = '${req.body.username}';`,
      (err, result) => {
        // user does not exist
        if (err) {
          return res.status(400).send({
            msg: err,
          });
        }
        if (!result.rowCount > 0) {
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });
        }

        // check password
        bcrypt.compare(
          req.body.password,
          result.rows[0].password,
          (bErr, bResult) => {
            // wrong password
            if (bErr) {
              return res.status(401).send({
                msg: "Username or password is incorrect!",
              });
            }

            if (bResult) {
              pool.query(
                `UPDATE users SET last_login = now() WHERE userid = '${result.rows[0].userid}'`
              );
              return res.status(200).send({
                msg: "Logged in!",
                user: result.rows[0],
              });
            }
            return res.status(401).send({
              msg: "Username or password is incorrect!",
            });
          }
        );
      }
    );
  });

const postRegistration =
  ("/register",
  validateRegister,
  (req, res, next) => {
    pool.query(
      `SELECT * FROM users WHERE LOWER(username) = LOWER('${req.body.username}');`,
      (err, result) => {
        if (result.rowCount > 0) {
          return res.status(409).send({
            msg: "This username is already in use!",
          });
        } else {
          // username is available
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
              return res.status(500).send({
                msg: err,
              });
            } else {
              pool.query(
                `INSERT INTO users (userid, username, password, admin, registered, last_login) VALUES ('${uuidv4()}', '${
                  req.body.username
                }', '${hash}',${req.body.admin},now(), now())`,
                (err, result) => {
                  if (err) {
                    return res.status(400).send({
                      msg: err,
                    });
                  }

                  return res.status(201).send({
                    msg: "Registered!",
                  });
                }
              );
            }
          });
        }
      }
    );
  });

export { getDisabilities,postDisabilities, getDefaultHome, postRegistration, postLogin};
