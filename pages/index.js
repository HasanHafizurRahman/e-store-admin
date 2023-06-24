import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Layout>
        <div>
          <div className="flex justify-between">
            <div className="text-primary">
              {" "}
              Welcome {session?.user?.name} To Your Admin Dashboard
            </div>
            <div>
              <button
                className="bg-primary text-white px-4 py-2 mx-2 rounded-lg font-semibold font-sans"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
