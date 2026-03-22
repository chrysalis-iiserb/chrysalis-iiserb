import Link from 'next/link';
import React from 'react'
const Navbar = () => {
  return (
    <div className='h-[6vh] w-full border flex justify-between items-center gap-4 p-12'>
        <div>
            <h1>Chrysalis</h1>
        </div>
        <div>
            <ul className='flex gap-12'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/blogs'}>Blogs</Link></li>
                <li>Magazines</li>
                <li>About</li>
                <li>Contact</li>
                <li><a href='https://chrysalis-iiserb.github.io/chrysalis-iiserb/public/wiki_racing.html' target='_blank'>WikiRace</a></li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar;
