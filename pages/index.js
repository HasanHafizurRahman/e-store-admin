import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <Head>
          <title>E-commerce Admin</title>
        </Head>
        <main className="flex h-screen w-screen flex-col items-center justify-between p-24">
          <div className="text-center w-full">
            <button
              onClick={() => signIn("google")}
              className="bg-white p-2 px-4 rounded-lg font-semibold font-sans"
            >
              Login With Google
            </button>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>E-commerce Admin</title>
      </Head>
      <main className="flex h-screen w-screen flex-col items-center justify-between p-24">
        <div className="text-center w-full">
          <p className=""> Signed in as {session.user.email}</p> <br />
          <button
            className="bg-white mt-4 p-2 px-4 rounded-lg font-semibold font-sans"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </main>
    </>
  );
}
