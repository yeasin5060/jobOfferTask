import React from "react";
import { Link } from "react-router-dom";
import { TbCategory2 } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaJediOrder } from "react-icons/fa";
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
        <SideLink icon={FaJediOrder} path="/dashboard/products/order" title="Order" />
    </div>
  );
};

export default Sidebar;
