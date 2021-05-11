import { useRef } from 'react';
import classes from './profile-form.module.css';

function ProfileForm({ onChangePassword }) {
  const oldPasswordInput = useRef();
  const newPasswordInput = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const oldPassword = oldPasswordInput.current.value;
    const newPassword = newPasswordInput.current.value;

    onChangePassword({ oldPassword, newPassword });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInput} />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordInput} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;