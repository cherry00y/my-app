'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import axiosInstance from '../axiosInstance';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import Image from 'next/image';


const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'), { ssr: false });


const CreateInfor = () => {
  

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [picture, setFile] = useState<File | null>(null);
  const [type, setType] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFile(file); // Set the file correctly
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('detail', detail);

    if (picture) {
        formData.append('picture', picture);
    } else {
        console.log("Please upload your picture");
        return; // ป้องกันการส่งข้อมูลถ้าภาพไม่ถูกอัพโหลด
    }

    formData.append('type', type);

    try {
        const response = await axiosInstance.post('/information', formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            }
        });

        alert('Information added successfully');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding information');
    }
};

  return (
    <div className="hero bg-base-100 min-h-screen min-w-px">
      <div className="hero-content w-full flex-col lg:flex-row-reverse">
        <div className="card w-full max-w-lg lg:max-w-2xl shrink-0 shadow-2xl bg-amber-100">
          <div className="mx-4 lg:mx-8 my-8 justify-center border border-black rounded-lg p-4">
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block mb-2 text-m font-medium text-gray-900 dark:text-white">Title</label>
                <input
                  type="text"
                  id="title-information"
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-50 focus:border-gray-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your title."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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
                  model={detail}
                  onModelChange={(newModel: string) => setDetail(newModel)}
                />
              </div>

              <div>
                <label className="block mb-2 mt-2 text-m font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="picture"
                  type="file"
                  name='picture'
                  onChange={handleFileChange}
                />
              </div>

              <div className='type-box'>
                <p className="block mb-2 text-m font-medium mt-4 text-gray-900 dark:text-white">Type</p>
                <div className="flex items-center mb-4 mt-4">
                  <input
                    type="radio"
                    id="promotion"
                    name="type"
                    value="promotion and information"
                    checked={type === 'promotion and information'}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label htmlFor="promotion" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">promotion and information</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="knowledge"
                    name="type"
                    value="knowledge"
                    checked={type === 'knowledge'}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label htmlFor="knowledge" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">knowledge</label>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <button type="submit" className="px-10 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
              </div>
            </form>
          </div>
        </div>
        <div className="text-center lg:text-left lg:flex-1">
          <h1 className="text-3xl font-bold text-center">Create Information and Promotion</h1>
          <Image src="/information.jpg" alt="" width={900} height={600} className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CreateInfor;
