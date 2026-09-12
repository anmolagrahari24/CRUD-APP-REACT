import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-purple-700 text-white flex justify-between items-center p-5'>
      
      <Link to={"/"} className='font-extrabold text-2xl'>CRUD-APP</Link>

      <nav className='flex gap-5 font-semibold'>
        <Link to={"/create"}>Create User</Link>
        <Link to={"/all"}>All Users</Link>
      </nav>
    </header>
  )
}

export default Navbar