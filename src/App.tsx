
import Portfolio from './component/portfolio';
import Skills from './component/skills';
import Projects from './component/projects';
import About from './component/about';
import Contact from './component/contact';
import NavBar from './component/navbar';
import FloatingBar from './component/floatingbar';
import Footer from './component/footer';


const Home: React.FC = () => {

  return (
    <div className={`min-h-screen ${'bg-gray-900 text-white'}`}>
      <NavBar />
      <FloatingBar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        <Portfolio />

        <Skills />

        <Projects />

        <About />

        <Contact />
      </main >
      <Footer />
    </div >
  )
}


export default Home;