import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-neutral-800 flex justify-between px-10 py-4'>
            <Link to="/" className='text-white text-bold'>
                <h1>Weekly Missions</h1>
            </Link>

            <ul className='flex gap-x-1'>
                <li>
                    <Link to="/" className='bg-slate-800 text-white px-2 py-1'>HOME</Link>
                </li>
                <li>
                    <Link to="/new" className='bg-teal-600 text-white px-2 py-1'>CREATE TASK</Link>
                </li>
            </ul>
        </div>
    ) 
}

export default Navbar