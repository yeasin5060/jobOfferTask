import React, { useState } from 'react'

const Product = () => {
    const [productInput, setProductInput] = useState({
    title: "",
    skq: "",
    category: "",
    price: "",
    stockQuantity : "",
    description  : "",
    gallery: "",
  });


  //   handle product input fields
  const handleProductInput = (e) => {
    let productInputInfo = { ...productInput };
    productInputInfo[e.target.name] = e.target.value;
    setProductInput(productInputInfo);
  };

  const handleCreateProduct = (e) => {
    e.preventDefault()
    console.log(productInput);
    setProductInput({
      title: "",
      skq: "",
      category: "",
      price: "",
      description : ""
    });
  };

  return (
    <div className="py-10 px-6">
      <div>
        <h2>Create Product</h2>
      </div>
      <div className="bg-white mt-6 p-5 rounded">
        <form action="">
          <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-1">
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter capitalize"
              >
                product name
              </label>
              <input
                type="text"
                placeholder="Enter Product Name"
                name="title"
                value={productInput.title}
                onChange={handleProductInput}
                className="w-full outline-none border border-[#e5e7eb] p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter uppercase"
              >
                skq
              </label>
              <input
                type="text"
                placeholder="Enter SKQ"
                name="skq"
                value={productInput.skq}
                onChange={handleProductInput}
                className="w-full outline-none border border-[#e5e7eb] p-3 rounded-lg uppercase"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Select Category
              </label>
              <select
                id=""
                className="w-full outline-none border border-[#e5e7eb] p-3 rounded-lg"
                name="category"
                value={productInput.category}
                onChange={handleProductInput}
              >
                <option value="">Select Category</option>
                <option value="Category-1">Category-1</option>
                <option value="Category-2">Category-2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter capitalize"
              >
                price
              </label>
              <input
                type="number"
                placeholder="Enter Price"
                name="price"
                value={productInput.price}
                onChange={handleProductInput}
                className="w-full outline-none border border-[#e5e7eb] p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter capitalize"
              >
                Stock Quantity 
              </label>
              <input
                type="number"
                placeholder="Enter Quantity"
                name="stockQuantity "
                value={productInput.stockQuantity}
                onChange={handleProductInput}
                className="w-full outline-none border border-[#e5e7eb] p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter capitalize"
              >
                Description 
              </label>
              <input
                type="textarea"
                placeholder="Enter Description "
                name="description  "
                value={productInput.description }
                onChange={handleProductInput}
                className="w-full outline-none border border-[#e5e7eb] p-3 rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-3 w-[45%]">
              <label
                htmlFor=""
                className="text-primary text-base font-medium font-inter"
              >
                Gallery
              </label>
              <input
                type="file"
                multiple
                placeholder="Enter gallery images"
                name="gallery"
                value={productInput.gallery}
                onChange={handleProductInput}
                className="w-full outline-none border border-[#e5e7eb] p-3 rounded-lg"
              />
            </div>
            <div className="bg-black px-3 py-2 text-white rounded-lg">
              <button onClick={handleCreateProduct}>Create Product</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product