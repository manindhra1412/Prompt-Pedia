"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import '@styles/globals.css';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  const { data: session } = useSession();
  const signout = () => {
  }
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, [])
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href='/' className="flex flex-center gap-2">
        <Image src="/assets/images/logo.svg" alt="logo" width={30} height={30} className="object-contain" />
        <p className="logo_text">Prompt-Pedia</p>
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {
          session?.user ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">Create Post</Link>
              <button type="button" onClick={signout()} className="outline_btn">Sign Out</button>
              <Link href="/profile">
                <Image src={session?.user.image} alt="profile" className="rounded-full" width={37} height={37} />
              </Link>
            </div>
          ) : (
            <>
              {
                providers && Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    className="black_btn"
                    onClick={() => signIn(provider.id)}
                  >Sign in</button>
                )
                )
              }
            </>
          )
        }
      </div>

      {/* Mobile nav */}
      <div className="sm:hidden flex relative">
        {
          session?.user ? (
            <div className="flex">

              <Image
                src={session?.user.image}
                alt="profile"
                className="rounded-full"
                width={37} height={37}
                onClick={() => { setToggleDropdown((prev) => !prev) }} />
              {/* Dropdown */}

              {
                toggleDropdown && (
                  <div className="dropdown">
                    <Link href="/profile"
                      className="dropdown_link"
                      onClick={() => { setToggleDropdown(false) }} >
                      My Profile
                    </Link>

                    <Link href="/create-prompt"
                      className="dropdown_link"
                      onClick={() => { setToggleDropdown(false) }} >
                      Create Prompt
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}
                      className="mt-5 w-full black_btn"
                    >
                      Sign Out
                    </button>
                  </div>
                )
              }

            </div>
          ) : (
            <>
              {
                providers && Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    className="black_btn"
                    onClick={() => signIn(provider.id)}
                  >Sign in</button>
                )
                )
              }
            </>
          )
        }
      </div>

    </nav>
  )
}

export default Nav;