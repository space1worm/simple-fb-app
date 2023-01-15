import Head from 'next/head'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Login from '../components/Login';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

import { useAuth } from '../context/authContext';

export default function Home() {
  const { userAuth } = useAuth();

  if (!userAuth) return <Login />

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