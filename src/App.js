import './App.css';
import {
  CustomersOne,
  CustomersTwo,
  Hero,
  Navbar,
  Testimonial,
} from './Components';
import { custOne, custTwo } from './Components/Testimonial/testimonialData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Testimonial {...custOne} />
      <CustomersOne />
      <Testimonial {...custTwo} />
      <CustomersTwo />
      <div
        style={{ height: '500px', width: '100%', backgroundColor: '#25201D' }}
      />
    </div>
  );
}

export default App;
