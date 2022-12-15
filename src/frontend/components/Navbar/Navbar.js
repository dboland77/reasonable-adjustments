import {React} from 'react'
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';
import { dblogout } from "../../services/auth.service";
import {getUserState} from "../../reducers/userSlice"
import styles from "./navbar.module.css"


export const Navbar = () => {

const currentUser=false
// console.log(useSelector(getUserState))

  const logOut = () => {
    dblogout();
  };

  return (
    <nav className={styles.navContainer}>
        <Link to={"/"} className={styles.navLink}>
          Reasonable Adjustments System
        </Link>
          <li className={styles.navItem}>
            <Link to={"/home"} className={styles.navLink}>
              Home
            </Link>
          </li>

          {currentUser && (
            <li className={styles.navItem}>
              <Link to={"/profile"} className={styles.navLink}>
                User
              </Link>
            </li>
          )}

        {currentUser ? ( 
          <>
            <li className={styles.navItem}>
              <Link to={"/profile"} className={styles.navLink}>
                {currentUser.username}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/logout" className={styles.navLink} onClick={logOut}>
                LogOut
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className={styles.navItem}>
              <Link to={"/login"} className={styles.navLink}>
                Login
              </Link>
            </li>

            <li className={styles.navItem}>
              <Link to={"/register"} className={styles.navLink}>
                Sign Up
              </Link>
            </li>
        </>
        )}
        </nav>
  )
}
