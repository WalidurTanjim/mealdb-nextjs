"use server";

import dbConnect from "@/lib/dbConnect";


const signupUser = async(payload) => {
    try{
        // need to check is this user exist or not

        const result = (await dbConnect('test_user')).insertOne(payload);
        return result;  
    }catch(err){
        console.error(err);
        return null;
    }
};

export default signupUser;