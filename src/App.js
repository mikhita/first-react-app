
import './App.css';

function App() {
  return (
    <div className="container">
      <img className='qr-code' src={require('./images/image-qr-code.png')}  alt={("qr-code")} />
      <h1 className='h1qr'>Improve your front-end skills by building projects</h1>
      <p className='pqr'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}

export default App;
