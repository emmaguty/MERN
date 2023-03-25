import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h1>Weekly Missions</h1>

            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/new">CREATE TASK</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar