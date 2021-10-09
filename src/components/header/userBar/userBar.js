import React, { useCallback } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as LogOutBtnImg } from './logout.svg';
import { ReactComponent as UserIcon } from './users.svg';
import authSelector from '../../../redux/auth/auth-selectors';
import authOperations from '../../../redux/auth/auth-operations';

import styles from './userBar.module.css';

function UserBar() {
  const width = useWindowWidth();

  const userEmail = useSelector(authSelector.getUserEmail);

  const userAvatar = useSelector(authSelector.getUserAvatar);

  // ---- userName - переменная в которой хранится часть имейла до @ и используется как имя пользователя ---- //

  const userName = userEmail.split('@');

  // Переменные в которые записываем условия рендера //

  const nameCondition =
    width > 767 ? (
      <>
        <p className={styles.userName}>{userName[0]}</p>
        <div className={styles.vector} />
      </>
    ) : (
      ''
    );

  const classCondition =
    width > 767 ? `${styles.logOut}` : `${styles.logOutBtnSvg}`;

  const buttonCondition = width > 767 ? 'Выйти' : <LogOutBtnImg />;

  const dispatch = useDispatch();

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div className={styles.container}>
      {userAvatar ? (
        <img className={styles.userAvatar} src={userAvatar} alt="user avatar" />
      ) : (
        <UserIcon className={styles.defaultAvatar} />
      )}

      {nameCondition}
      <button type="button" className={classCondition} onClick={onLogout}>
        {buttonCondition}
      </button>
    </div>
  );
}

export default UserBar;
