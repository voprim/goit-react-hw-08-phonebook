import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={css.nav_container}>
        <NavLink to="/" className={css.nav_link}>Home</NavLink>
        {isLoggedIn ? (
          <NavLink to="/contacts" className={css.nav_link}>Contacts</NavLink>
        ) : (
          <div>
            {!isLoggedIn && <NavLink to="/register" className={css.nav_link}>Register</NavLink>}
            {!isLoggedIn && <NavLink to="/login" className={css.nav_link}>Log In</NavLink>}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
};
