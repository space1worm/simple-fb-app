import { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/header/Header.component";
import Sidebar from "../components/sidebar/Sidebar.component";
import Feed from "../components/feed/Feed.component";
import Contacts from "../components/contacts/Contacts.component";
import PostModal from "../components/feed/PostModal.component";

import { useAuth } from "../hooks/auth.context.hooks";
import { useEffect } from "react";

export default function Home() {
  const { userAuth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!userAuth) router.push("login");
  }, [userAuth, router]);

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />

      <main className="flex">
        <PostModal />
        <Sidebar />
        <Feed />
        <Contacts />
      </main>
    </div>
  );
}
