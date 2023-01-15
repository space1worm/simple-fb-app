import Head from 'next/head'
import { Session } from 'next-auth';
import { getSession, GetSessionParams } from 'next-auth/react'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function Home({ session }: { session: Session }) {
  if (!session) return <Login />

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
};

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}