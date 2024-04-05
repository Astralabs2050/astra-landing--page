import LandingPage from "./components/landingPage/LandingPage";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        {" "}
        <meta charSet="utf-8" />
        <title>Astra: Bring your fashion ideas to life.</title>
        <meta
          name="description"
          content="With Astra, you can generate fashion ideas using AI and find makers nearby to bring it to life"
        />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
