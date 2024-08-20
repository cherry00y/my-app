'use client';
import React from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import Image from "next/image"

const CreateKnowledge = () => {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-lg lg:max-w-2xl shrink-0 shadow-2xl bg-amber-100">
          <div className="mx-4 lg:mx-8 my-8 justify-center border border-black rounded-lg p-4">
            <form className="max-w-2xl mx-auto">
              <div className="mb-5">
                <label className="block mb-2 text-m font-medium text-gray-900 dark:text-white">Title</label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-50 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your title."
                  required
                />
              </div>
              <label className="block mb-2 text-m font-medium text-gray-900 dark:text-white">Detail</label>
              <div>
                <FroalaEditor
                  config={{
                    placeholderText: "Start writing your information"
                  }}
                  tag='textarea'
                />
              </div>

              <p className="block mb-2 text-m font-medium mt-4 text-gray-900 dark:text-white">Type</p>
              <div className="flex items-center mb-4 mt-4">
                <input
                  type="radio"
                  id="default-radio-1"
                  name="radio-1"
                  className="radio"
                  defaultChecked
                />
                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="default-radio-2"
                  name="radio-1"
                  className="radio"
                />
                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
              </div>
              <div className="flex justify-center mt-4">
                <button type="button" className="px-10 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center lg:text-left lg:flex-1">
        <h1 className="text-3xl font-bold text-center">Create Knowlage</h1>
        <Image src="/information.jpg" alt="" width={900} height={600} className="w-full h-auto rounded-lg" />
      </div>
      </div>
    </div>
  );
};

export default CreateKnowledge;
