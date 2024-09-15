import { ClockHeading } from './Component/ClockHeading';
import { ClockSlogan } from './Component/ClockSlogan';
import { CurrentTime } from './Component/CurrentTime';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="parent">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </div>
  );
}

export default App
