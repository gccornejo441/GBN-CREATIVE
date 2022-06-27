import '../src/css/globals.css';
import type {AppProps} from 'next/app';
import {wrapper} from "../src/javascript/store";
import {appWithTranslation} from "next-i18next";
import React, {PropsWithChildren, useEffect} from "react";
import {SessionProvider, useSession} from "next-auth/react";
import {Session} from "next-auth";
import {useRouter} from "next/router";
import Navbar from "../src/javascript/components/common/Navbar";

interface AuthProps  extends  PropsWithChildren<any>{
  role: string; // should be replaced with an enum of roles
}

function Auth({ children, role }: AuthProps) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const hasUser = !!session?.user;
  const router = useRouter();

  // simple access role checking function
  function hasAccess(session: Session | null, role: string) {
    return session?.role === role;
  }

  useEffect(() => {
    // After next-auth finishes loading
    if (!loading) {
      // Check if the user is logged in, or if he has the required role
      if (!hasUser) {
        router.push("/login");
      } else if (!hasAccess(session, role)) {
        alert('Permission denied');
      }
    }
  }, [hasUser, loading, status]);

  // return custom loading component
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return children;
}

function MyApp({Component, pageProps: {session, ...pageProps}}: AppProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const {WrappedComponent} = Component;
  const {role} = WrappedComponent?.auth || '';
  return (
    <SessionProvider session={session}>
      <Navbar />
      <div className='h-18.4'/>
      {/* If the next.js page has a role defined, wrap it with a auth protection*/}
      {role ? (
        <Auth role={role}>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>);
}

export default appWithTranslation(wrapper.withRedux(MyApp));
