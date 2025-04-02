import React from "react";

interface UserInfoCardProps {
  username: string;
  role: string;
  lastLogin: string;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ username, role, lastLogin }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">사용자 정보</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500">사용자명:</span>
          <span className="font-medium">{username}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">역할:</span>
          <span className="font-medium">{role}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">마지막 로그인:</span>
          <span className="font-medium">{lastLogin}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
