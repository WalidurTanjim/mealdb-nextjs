"use client";

import { useSession } from "next-auth/react";

const UserInfo = () => {
    const session = useSession();

    return (
        <div className="user_info">
            <div className="container mx-auto w-full px-6 lg:px-8 py-8">
                <h1 className="text-center text-2xl text-slate-700 font-medium">User Info</h1>

                <div className="mt-8">
                    {JSON.stringify(session)}
                </div>
            </div>
        </div>
    );
};

export default UserInfo;