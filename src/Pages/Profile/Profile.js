import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { HiAcademicCap } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PORT}/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserInfo(data);
      });
  }, [user?.email]);

  console.log(userInfo);

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
        <div className="flex justify-between items-start">
          <div className="w-full flex items-center gap-x-3">
            <img
              className="w-28 h-28 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <div>
              <h2 className="font-semibold text-xl">{userInfo?.userName}</h2>
              <p className="text-sm">{userInfo?.userEmail}</p>
            </div>
          </div>
          {/* <!-- Modal toggle --> */}
          <button
            data-modal-toggle="profile-update-modal"
            className="flex justify-center items-center gap-x-1 p-1 bg-gray-300 border rounded-md"
          >
            <BiPencil /> <span>Edit</span>
          </button>
        </div>

        <div className="flex gap-x-5 ml-16 my-2 items-center">
          <HiAcademicCap className="text-2xl" />
          <h2 className="text-xl font-semibold">{userInfo?.institute}</h2>
        </div>
        <div className="flex gap-x-5 ml-16 my-2 items-center">
          <MdLocationPin className="text-2xl" />
          <h2 className="text-xl font-semibold">{userInfo?.address}</h2>
        </div>
      </div>
      <ProfileModal></ProfileModal>
    </div>
  );
};

export default Profile;
