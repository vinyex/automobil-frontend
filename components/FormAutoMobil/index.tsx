'use client'

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react"

interface FormAutoMobil {
  isEdit?: boolean;
  id?: number;
  form?: {
    merk: string;
    type: string;
    stock: number;
    price: number;
    note: string;
  }
}

export default function FormAutoMobil(props: FormAutoMobil) {
  const [formData, setFormData] = useState({
    merk: '',
    type: '',
    stock: 0,
    price: 0,
    note: ''
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const url = props.isEdit && props.id ? `/api/product-update?id=${props.id}` : '/api/product';

    const response = await fetch(url, {
      method: props.isEdit ? 'PATCH' : 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // // Handle response if necessary
    const { success, message } = await response.json()
    if (success) {
      alert(message);
      window.location.href = '/';
    }
  }

  useEffect(() => {
    if (props.form && Object.keys(props.form).length > 0) {
      setFormData((val) => ({ ...val, ...props.form }));
    }
  }, [props.form])

  return (
    <form
      className="max-w-lg p-5 w-full"
      onSubmit={onSubmit}
    >
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="merk"
          id="merk"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.merk}
          onChange={e => setFormData((val) => ({ ...val, merk: e.target.value }))}
        />
        <label htmlFor="merk" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Merk</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="type"
          id="type"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.type}
          onChange={e => setFormData((val) => ({ ...val, type: e.target.value }))}
        />
        <label htmlFor="type" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="stock"
          id="stock"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
          required
          value={formData.stock}
          onChange={e => setFormData((val) => ({ ...val, stock: +e.target.value }))}
        />
        <label htmlFor="stock" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          name="price"
          id="price"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
          required
          value={formData.price}
          onChange={e => setFormData((val) => ({ ...val, price: +e.target.value }))}
        />
        <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <label htmlFor="note" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Note:</label>
        <textarea
          id="note"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your note here..."
          value={formData.note}
          onChange={e => setFormData((val) => ({ ...val, note: e.target.value }))}
        ></textarea>
      </div>
      <div className="flex gap-3">
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
        <Link href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go back</Link>
      </div>
    </form>
  );
}