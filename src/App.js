import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='w-1/2 m-auto flex flex-col justify-center items-center'>
      <div className=' p-4'>
        <Link to='/data-table'>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go to Data Table
          </button>
        </Link>
        <Link to='/login'>
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 mb-4 ml-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go to Login
          </button>
        </Link>


      </div>

      <ul className='list-disc	'>
        <li>Used React Router for navigation</li>
        <li>Used Tailwind CSS for designing</li>
        <li>Used formik for form validation</li>
      </ul>
    </div>
  );
}

export default App;
