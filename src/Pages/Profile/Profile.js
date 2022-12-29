import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div
        className="h-48 relative"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/D5616AQGhs2qJNPzX1w/profile-displaybackgroundimage-shrink_350_1400/0/1670441906212?e=1677715200&v=beta&t=5mX4kZBsUvxhstQRmt-cyUtrDD66xAh5DPv9D8IC1wo')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="bg-white border rounded-sm p-5">
        <div className="w-full flex items-center gap-x-3">
          <img className="w-28 h-28 rounded-full" src={user?.photoURL} alt="" />
          <div>
            <h2 className="font-semibold">{user?.displayName}</h2>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>

        <div>
          <div>
            <h2>National University</h2>
            <p>January 2022 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
