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
  BuiltInProviderType,
} from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import { ReactElement } from "react";

export default function MobileTabs(): ReactElement {
  const { data: session } = useSession();

  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 rounded-t-2xl h-16 bg-white dark:bg-black border-t border-gray-700 flex md:hidden justify-around items-center shadow-lg">
      <Link
        href="/"
        className="flex flex-col items-center justify-center text-black dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </Link>

      {session?.user ? (
        <button
          type="button"
          className="flex flex-col items-center justify-center text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />{" "}
          </svg>
        </button>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider: ClientSafeProvider) => (
              <button
                key={provider.id}
                onClick={() => signIn(provider.id)}
                className="text-white cursor-pointer dark:text-black dark:bg-white bg-black rounded-xl px-3 py-1"
              >
                Sign in
              </button>
            ))}
        </>
      )}

      {session?.user ? (
        <div>
          <Image
            src={session.user.image || "/default-profile.png"}
            alt="user"
            className="rounded-full cursor-pointer"
            width={32}
            height={32}
            onClick={() => setToggleDropDown((prev) => !prev)}
          />
          {toggleDropDown && (
            <div className="absolute bottom-16 right-3 z-10 w-36 mb-2 bg-white border-gray-700 dark:bg-black border rounded-lg shadow-lg">
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
      ) : (
        <button
          type="button"
          className="flex flex-col items-center justify-center text-black dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
