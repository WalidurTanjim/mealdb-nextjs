import LoginButton from "@/components/LoginButton";
import UserInfo from "@/components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className='mealdb_nextjs'>
      <div className="container mx-auto w-full px-6 lg:px-8 py-8">
        <h1 className="text-center text-2xl text-slate-700 font-medium">MealDB NextJS</h1>

        <LoginButton />

        <UserInfo />

        <div className="mt-5">
          {JSON.stringify(session)}
        </div>
      </div>
    </div>
  );
}
