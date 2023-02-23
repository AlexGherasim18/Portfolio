import './App.css';
import NavBar from './components/navbar.component';
import HomePage from './components/home-page.components';
import WorkPage from './components/work-page.components';
import { useState } from 'react';
import SkillsPage from './components/skills-page.components';
import ContactPage from './components/contact-page.components';

function App() {
  const [page, setPage] = useState('')

  const handlePage = (newPage) => {
    setPage(newPage)
  }
  return (
    <div className="App">
      <NavBar onPageChange={handlePage}/>
      {(() => {
        switch (page) {
        case 'homePage':
          return <HomePage />
        case 'workPage':
          return <WorkPage />
        case 'skillsPage':
          return <SkillsPage />
        case 'contactPage':
          return <ContactPage />
        default:
          return <HomePage />
        }
      })()}
      
    </div>
  );
}

export default App;

