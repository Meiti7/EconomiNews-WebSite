import React from "react";
import AvatarImg from "../../../../public/icons/Avatar.svg";
import Link from "next/link";
import Image from "next/image";
function Profile() {
  return (
    <>
      <Link href="/profile">
        <div className="flex gap-1">
          <Image src={AvatarImg} height={24} width={24} alt="avatar"/>
          <p>User</p>
        </div>
      </Link>
    </>
  );
}

export default Profile;
