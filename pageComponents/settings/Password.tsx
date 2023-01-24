import React, { FC } from "react";
import Button from "../../components/Buttons/Button";

const Password: FC = () => {
  return (
    <section className="mt-3">
      <h5 className="text-lg font-bold">Password</h5>
      <p>You can also update your password to a fresh one anytime you want!</p>
      <form action="">
        <div className="inline-flex flex-col">
          <input
            type="text"
            className="mt-3 mb-3 text-black bg-white rounded-xl p-2"
            placeholder="Current Password"
          />
          <input
            type="text"
            className="mt-3 mb-3 text-black bg-white rounded-xl p-2"
            placeholder="New Password"
          />
          <Button variant="outlined">Update Password</Button>
        </div>
      </form>
    </section>
  );
};

export default Password;