import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setIsOpen, isOpen }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // profile dropdown
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const toogleDropdown = () => {
    setIsOpenProfile(!isOpenProfile);
  };

  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
});


useEffect(() => {
const root = window.document.documentElement;
if (theme === 'dark') {
root.classList.add('dark');
} else {
root.classList.remove('dark');
}
localStorage.setItem('theme', theme);
}, [theme]);


const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');


// Example avatar data - replace with your own source or props
const user = {
name: 'Yeasin Munshi',
avatarUrl: 'https://i.pravatar.cc/40?img=5',
status: 'Online',
};

  return (
    <nav className="py-4 flex justify-between border-b-2">
        {" "}
        {/* adding border on the nav bottom for more visual */}
        <div onClick={toggleSidebar}>
            <HiOutlineBars3CenterLeft className="w-[35px] h-[35px] text-primary cursor-pointer" />
        </div>
        {/* auto mid space using flex */}
        < div className="flex items-center bg-gray-100 rounded-lg px-2">
            <section className="flex items-center gap-x-7 px-2">
                <div className="flex items-center w-[300px] h-[52px]">
                    <input
                    type="text"
                    className="w-full outline-none px-2 bg-gray-100"
                    placeholder="Search.."
                    />
                    <IoSearchOutline className="w-[30px] h-[30px] cursor-pointer opacity-40" />
                </div>
                <div className="cursor-pointer">
                    <IoMdNotificationsOutline className="text-primary text-2xl" />
                </div>
            </section>
                {/* Right: Controls */}
            <div className="flex items-center gap-4 ml-5 mr-5">
             {/* Light/Dark Toggle */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        aria-pressed={theme === 'dark'}
                        title="Toggle light / dark"
                        className="relative inline-flex items-center h-8 w-14 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                        >
                        <span className={`absolute left-1 top-1 bottom-1 w-6 h-6 rounded-full bg-white shadow transform transition-transform ${theme === 'dark' ? 'translate-x-6' : ''}`} />
                        <span className="absolute left-0 top-0 bottom-0 right-0 rounded-full bg-gray-200 dark:bg-gray-700" />
                    </button>
                </div>
            </div>
            <section className="flex items-center gap-x-3">
                {/*  userProfile start */}
                <div className="flex items-center gap-3" onClick={toogleDropdown}>
                    <div>
                        <div className="relative">
                            <img
                            src={user.avatarUrl}
                            alt={`${user.name} avatar`}
                            className="h-10 w-10 rounded-full object-cover border border-gray-200 dark:border-gray-700"
                            />
                            <span
                            className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-900 ${user.status === 'Online' ? 'bg-green-400' : 'bg-gray-400'}`}
                            title={user.status}
                            />
                            </div>
                        </div>
                        <div className="relative inline-block">
                        <button className="font-medium text-base hover:text-gray-900">
                            John Doe
                        </button>{" "}
                        {/* the name will come from backend. test dummy. */}
                        {isOpenProfile && (
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                            <ul>
                                <li className="py-2 px-4 hover:bg-gray-100">
                                <Link to="/profile">see profile</Link>
                                </li>
                                <li className="py-2 px-4 hover:bg-gray-100">
                                <Link href="#">Logout</Link>
                                </li>
                            </ul>
                            </div>
                        )}
                        </div>
                    </div>
                </section>
            <div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 