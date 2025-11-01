import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const Home = () => {
  return (
    <div className="p-6">
        <div>
            <p>Dashboard</p>
        </div>
        <div className="pt-7 flex items-center justify-center gap-5 flex-wrap">
            <div className="bg-slate-100 rounded p-6 w-[400px] h-[180px] space-y-5">
                <div className="flex items-center justify-between">
                    <h4>Total Users</h4>
                    <BsThreeDotsVertical />
                </div>
                <div className="flex items-center justify-between">
                    <div
                        className="flex items-center justify-center w-16 h-16 rounded-full radial-progress bg-slate-600 text-slate-200"
                    >
                    50
                    </div>
                    <div>50 Users</div>
                </div>
            </div>
            <div className="bg-slate-100 rounded p-6 w-[400px] h-[180px] space-y-5">
                <div className="flex items-center justify-between">
                <h4>Total Orders</h4>
                <BsThreeDotsVertical />
                </div>
                <div className="flex items-center justify-between">
                    <div
                        className="flex items-center justify-center w-16 h-16 rounded-full radial-progress bg-slate-600 text-slate-200"
                    >
                        50
                    </div>
                    <div>50 Orders</div>
                </div>
            </div>
            <div className="bg-slate-100 rounded p-6 w-[400px] h-[180px] space-y-5">
                <div className="flex items-center justify-between">
                <h4>Total Products</h4>
                <BsThreeDotsVertical />
                </div>
                <div className="flex items-center justify-between">
                <div
                    className="flex items-center justify-center w-16 h-16 rounded-full radial-progress bg-slate-600 text-slate-200"
                >
                    50
                </div>
                <div>50 Products</div>
                </div>
                </div>
                <div className="bg-slate-100 rounded p-6 w-[400px] h-[180px] space-y-5">
                    <div className="flex items-center justify-between">
                        <h4>Total Variations</h4>
                        <BsThreeDotsVertical />
                    </div>
                    <div className="flex items-center justify-between">
                        <div
                            className="flex items-center justify-center w-16 h-16 rounded-full radial-progress bg-slate-600 text-slate-200"
                        >
                            50
                        </div>
                        <div>50 Variations</div>
                    </div>
                </div>
                <div className="bg-slate-100 rounded p-6 w-[400px] h-[180px] space-y-5">
                    <div className="flex items-center justify-between">
                        <h4>Total Variations</h4>
                        <BsThreeDotsVertical />
                    </div>
                    <div className="flex items-center justify-between">
                        <div
                            className="flex items-center justify-center w-16 h-16 rounded-full radial-progress bg-slate-600 text-slate-200"
                        >
                            10%
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div>Selling: 50000</div>
                            <div>Revenue: 5000</div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-100 rounded p-6 w-[400px] h-[180px] space-y-5">
                    <div className="flex items-center justify-between">
                        <h4>Total Variations</h4>
                        <BsThreeDotsVertical />
                    </div>
                    <div className="flex items-center justify-between">
                        <div
                            className="flex items-center justify-center w-16 h-16 rounded-full radial-progress bg-slate-600 text-slate-200">
                            10%
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <div>Selling: 50000</div>
                            <div>Revenue: 5000</div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Home