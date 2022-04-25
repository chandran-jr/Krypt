import {Navbar,Welcome,Transactions,Services,Footer} from './components';

const App = () => {

  return (
  <>
  <div className="h-[100vh]">
  <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
    </div>
    <Services/>
    <Transactions/>
    <Footer/>
  </div>
  </>
  )
}

export default App
