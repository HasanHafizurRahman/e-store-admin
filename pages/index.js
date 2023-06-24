import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Layout>
        <div>
          <div className="flex justify-between">
            <div className="text-primary">
              Welcome {session?.user?.name} To Your Admin Dashboard
            </div>
            <div className="flex items-center bg-secondary hover:bg-primary text-primary hover:text-white gap-1 rounded-lg overflow-hidden">
              <Image
                src={session?.user?.image}
                width={30}
                height={25}
                alt="profile"
              />
              <button onClick={() => signOut()} className="px-2">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
