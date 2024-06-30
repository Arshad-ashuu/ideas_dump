"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  signIn,
  signOut,
  getProviders,
  useSession,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "./Toggle";

interface SessionData {
  user?: {
    image: string | null;
  };
}

type Providers = Record<LiteralUnion<string>, ClientSafeProvider> | null;

export default function Navbar() {
  const { data: session } = useSession() as { data: SessionData | null };

  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [providers, setProviders] = useState<Providers>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, [session]);

  return (
    <div className="flex justify-center w-full p-4">
      <nav className="dark:bg-black bg-white mt-2 rounded-full border-b shadow-lg lg:w-1/2 w-full border-gray-200 dark:border-gray-600 dark:border-t">
        <div className="max-w-7xl mx-auto md:px-6">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                href="/"
                className="flex items-center cursor-pointer ml-4 md:ml-0"
              >
                <Image
                  src="/ideas-dump.png"
                  alt="Logo"
                  width={42}
                  height={42}
                  className="rounded-full"
                />
                <span className="bg-gradient-to-r from-blue-600 via-green-400 to-pink-400 inline-block text-transparent bg-clip-text text-xl font-semibold ml-2">
                  Ideas dump
                </span>
              </Link>
            </div>
            <div className="lg:hidden flex items-center">
              <div className="md:flex space-x-4 px-3">
                <ModeToggle />
              </div>
            </div>
            <div className="md:flex lg:flex items-center hidden">
              <div className="md:flex space-x-4 px-3">
                {session?.user ? (
                  <>
                    <Link
                      href="/create-post"
                      className="text-white hover:animate-pulse bg-black cursor-pointer font-semibold dark:bg-white dark:text-black rounded-xl px-3 py-1.5"
                    >
                      Create Post
                    </Link>
                    <button
                      type="button"
                      onClick={() => signOut()}
                      className="text-black bg-transparent hover:transform cursor-pointer font-semibold dark:text-white border border-gray-600 shadow-sm shadow-pink-400 rounded-xl px-3 py-1"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    {providers &&
                      Object.values(providers).map(
                        (provider: ClientSafeProvider) => (
                          <button
                            key={provider.id}
                            onClick={() => signIn(provider.id)}
                            className="text-white cursor-pointer dark:text-black dark:bg-white bg-black rounded-xl px-3 py-1"
                          >
                            Sign in
                          </button>
                        )
                      )}
                  </>
                )}
              </div>
              <ModeToggle />

              {session?.user ? (
                <div className="ml-4 relative">
                  <Image
                    src={session?.user.image || "/default-profile.png"}
                    alt="Profile"
                    width={38}
                    height={38}
                    className="rounded-full cursor-pointer"
                    onClick={() => setToggleDropDown((prev) => !prev)}
                  />
                  {toggleDropDown && (
                    <div className="absolute top-12 right-0 z-10 w-48 mt-2 origin-top-right bg-white border-gray-700 dark:bg-black border rounded-lg shadow-lg">
                      <div className="py-1">
                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                          onClick={() => setToggleDropDown(false)}
                        >
                          My Profile
                        </Link>
                        <button
                          type="button"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                          onClick={() => {
                            setToggleDropDown(false);
                            signOut();
                          }}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
