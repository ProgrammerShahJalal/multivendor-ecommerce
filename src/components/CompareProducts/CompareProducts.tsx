import React from 'react';



const CompareProducts = () => {
  

    return (

  <div className='container mx-auto'>
           
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
                <td className='border p-5'>
                    <button type="button" className=""><svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg></button>
                    <h3 className="text-xl py-4">T-shirts</h3>
                     <img className="" src="https://i.ibb.co/YZ22rRz/s-l500.jpg" alt="logo"/>

                     {/* h-64 w-full */}
                </td>
                <td className='border p-5'>
                    <button type="button" className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg></button>
                    <h3 className="text-xl py-4">T-Shirts</h3>
                    <img className="  " src="https://i.ibb.co/YZ22rRz/s-l500.jpg" alt="logo"/>
                </td>
                <td className='border p-5'>
                <button type="button" className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24.105" height="24.732" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"></path></svg></button>
                <h3 className="text-xl py-4">Cotton Dress</h3>
                <img className=" " src="https://i.ibb.co/YZ22rRz/s-l500.jpg" alt="logo"/>
                </td>
              
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border">
              
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                $500.00
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
              $500.00
              </td>
              <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              $500.00
              </td>
            </tr>
            <tr className="bg-gray-100 border">
            <th className="text-xl py-3">Product Description</th>
            <th className="text-xl py-3">Product Description</th>
             <th className="text-xl py-3">Product Description</th>
                                         
             
            </tr>
            <tr className="bg-white border">
            <td className=" text-left border-r">
            <p className="p-3 ">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
            </td>
            <td className=" text-left border-r">
            <p className=" p-3 ">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
            </td>
            <td className=" text-left">
            <p className=" p-3 ">Lorem ipsum dolor sit, amet  elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
            </td>
              
            </tr>
            <tr className='bg-gray-100  border'>
            <th className="text-xl py-3">Availability</th>
            <th className="text-xl py-3 ">Availability</th>
            <th className="text-xl py-3">Availability</th>
            </tr>

            <tr className='bg-white border'>
            <td className=" text-lg border-r py-3"><p className="text-red-500">In stock</p></td>
            <td className="text-lg border-r py-3"><p className="text-red-500">In stock</p></td>
            <td className=" text-lg py-3"><p className="text-red-500">In stock</p></td>
            </tr>

            <tr className='bg-white border '>
            <td className="  border-r py-5"><a className="uppercase text-white text-lg bg-gradient-to-r from-purple-500  to-pink-500 p-3 rounded hover:bg-slate-500" href="cart.html">Add to Cart</a></td>
            <td className=" border-r py-5"><a className="bg-gradient-to-r from-purple-500 to-pink-500 uppercase p-3  hover:bg-blue-500" href="cart.html">Add to Cart</a></td>
            <td className=" py-5"><a className="bg-gradient-to-r from-purple-500 to-pink-500 uppercase p-3 text-white hover:bg-black" href="cart.html">Add to Cart</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
              

</div>
  
    );
};

export default CompareProducts;