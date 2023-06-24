import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import Head from "next/head";
export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <Head>
          <title>E-STORE ADMIN</title>
        </Head>
        <main className="bg-primary flex h-screen w-screen flex-col items-center justify-between p-24">
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
        <title>E-STORE ADMIN</title>
      </Head>
      <main className="bg-primary flex min-h-screen justify-between">
        <Nav />
        <section className="bg-white flex-grow mt-2 mr-2 mb-0 p-4 rounded-lg">
          {children}
          {/* <section className="flex">
            

            <div>
              <button
                className="bg-primary text-white px-4 py-2 mx-2 rounded-lg font-semibold font-sans"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          </section> */}
        </section>
      </main>
    </>
  );
}
