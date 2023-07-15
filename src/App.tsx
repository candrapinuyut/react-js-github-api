import { Github } from "./presentation/UI/page/Github";

function App() {
  return (
    <div className="App"> 
      <div className="navbar bg-blue-600 text-neutral-content">
        <div className="navbar-start"></div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">Github APi</a>
          </div>
          <div className="navbar-end"></div>
      </div>
      <div className="container mx-auto h-screen">
          <Github />
      </div>
     </div>  
  );
}

export default App;
