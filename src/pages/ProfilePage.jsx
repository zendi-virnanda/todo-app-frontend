import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();
  return (
    <>
      <div className="text-6xl font-bold text-slate-600">User Profile</div>
      <hr className="w-full h-1 my-4 bg-slate-400" />
      <div className="block p-10 bg-white border border-gray-200 rounded-lg shadow-xl shadowdark:border-gray-700">
        <h5 className="my-2 text-2xl font-bold tracking-tight">
          Name: {user.name}
        </h5>
        <p className="font-normal text-gray-700">Email: {user.email}</p>
        <p className="font-normal text-gray-700">
          Created At: {user.created_at}
        </p>
      </div>
    </>
  );
}
