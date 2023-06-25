import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Layout>
        <div className="flex justify-between items-center">
          <div className="text-primary">
            Welcome {session?.user?.name} To Your Admin Dashboard
          </div>
          <div className="relative">
            <div className="flex items-center">
              <div>
                <Image
                  src={session?.user?.image}
                  width={40}
                  height={40}
                  alt="profile"
                  onClick={handleClick}
                  className="border rounded-full cursor-pointer"
                />
              </div>
              {showModal && (
                <div className="absolute text-primary rounded-lg mt-[100px] mr-[35px] right-0 transform translate-x-1/2">
                  <button
                    onClick={() => signOut()}
                    className="px-2 bg-secondary hover:bg-primary hover:text-white border rounded-lg"
                  >
                    Log Out
                  </button>
                  <button onClick={handleCloseModal} className="ml-6 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
