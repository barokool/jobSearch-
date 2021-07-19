import React from 'react'

const NavBar = () => {
    return (
        <nav className="flex flex-col my-20  items-center">
            <h1 className="text-center text-4xl font-bold">Search job</h1>
            <form className="">
                <input type="text" placeholder="search" />
                <input type="submit" value="Search" />
            </form>
        </nav>
    )
}
export default NavBar
