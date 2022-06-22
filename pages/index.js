import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import MobileCall from '../components/MobileCall'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weva Textile</title>
      </Head>
      <div>
        {/* Navbar top, responsive mobile-menu, logo, search, etc */}
        <Navbar />
        <MobileCall />
        <div>
          <h1 className='text-6xl font-bold text-center'>Test</h1>
        </div>
        {/* Footer, detail website  */}
        <footer> 
        </footer>
        <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
      </div>
    </>
    
  )
}
