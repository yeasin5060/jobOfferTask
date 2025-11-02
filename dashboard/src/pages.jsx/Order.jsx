import React, { useState } from 'react'
import { dummyOrders } from '../assets/assers';

const Order = ({ orders = [], onView = () => {}, onUpdateStatus = () => {} }) => {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState({ key: "date", dir: "desc" });
  const [order, setOrder] = useState(dummyOrders);


  const statuses = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];


  function compare(a, b) {
    const k = sortBy.key;
    let va = a[k];
    let vb = b[k];
    if (k === "date") {
    va = new Date(va);
    vb = new Date(vb);
  }
  if (va < vb) return sortBy.dir === "asc" ? -1 : 1;
  if (va > vb) return sortBy.dir === "asc" ? 1 : -1;
    return 0;
  }


  const filtered = order
  .filter(o => {
    if (statusFilter !== "All" && o.status !== statusFilter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
      o.id.toLowerCase().includes(q) ||
      o.customer.toLowerCase().includes(q) ||
      String(o.total).toLowerCase().includes(q)
    );
  })
  .sort(compare);


  function toggleSort(key) {
  setSortBy(s => {
    if (s.key === key) return { key, dir: s.dir === "asc" ? "desc" : "asc" };
      return { key, dir: "asc" };
    });
  }


  function smallStatusBadge(status) {
    const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    const map = {
      Pending: "bg-yellow-100 text-yellow-800",
      Processing: "bg-blue-100 text-blue-800",
      Shipped: "bg-indigo-100 text-indigo-800",
      Delivered: "bg-green-100 text-green-800",
      Cancelled: "bg-red-100 text-red-800",
    };
    return <span className={`${base} ${map[status] || "bg-gray-100 text-gray-800"}`}>{status}</span>;
  }
  return (
    <div>
      <div className="p-4 bg-white rounded-2xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-sm text-gray-500">Recent order activity and details</p>
          </div>


          <div className="flex gap-2 items-center">
            <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by order id, customer or total"
            className="px-3 py-2 border rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />


            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none"
              >
              {statuses.map(s => (
              <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => toggleSort('date')}>
                  Date {sortBy.key === 'date' ? (sortBy.dir === 'asc' ? '↑' : '↓') : ''}
                  </th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => toggleSort('items')}>Items</th>
                  <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer" onClick={() => toggleSort('total')}>Total</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  {  
                  filtered.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{order.customer}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{new Date(order.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-sm text-right text-gray-700">{order.items}</td>
                  <td className="px-4 py-3 text-sm text-right font-semibold">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-3 text-sm">{smallStatusBadge(order.status)}</td>
                  <td className="px-4 py-3 text-center">
                  <div className="inline-flex gap-2">
                    <button
                    onClick={() => onView(order)}
                    className="px-3 py-1 rounded-lg border text-sm font-medium hover:bg-gray-100"
                    >
                    View
                    </button>
                    <div className="relative inline-block">
                      <select
                      value={order.status}
                      onChange={e => onUpdateStatus(order.id, e.target.value)}
                      className="px-2 py-1 border rounded-lg text-sm"
                      >
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                        <option>Cancelled</option>
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
              ))
              }
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-end text-sm text-gray-500">
          Showing <span className="font-medium text-gray-700 mx-1">{filtered.length}</span> orders
        </div>
      </div>
    </div>
  )
}

export default Order
