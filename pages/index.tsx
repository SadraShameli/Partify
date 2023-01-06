import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='prose dark:prose-invert max-w-none'>
        <main className='container'>
          <h1 >Welcome to Partify!</h1>
        </main>
        <Footer />
      </div>
    </>
  );
}
