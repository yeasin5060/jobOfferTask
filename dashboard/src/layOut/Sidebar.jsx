import React from "react";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineInventory2 } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import SideLink from "../component/SideLink";

const Sidebar = () => {
  return (
   <div className="h-[100vh] w-[200px]">
    <section className="py-6 space-y-6">
          <Link to="/">
            <h2 className="text-black font-black text-xl">E-com Application</h2>
          </Link>
        </section>
        <SideLink icon={IoHomeOutline} path="/" title="Home" />
        <SideLink icon={TbCategory2} path="/categories" title="Category" />
        <SideLink icon={CiShop} path="/dashboard/products/create" title="Products" />
    </div>
  );
};

export default Sidebar;
