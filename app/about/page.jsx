import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mb-10">
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg bg-white">
        <img
          src="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
          alt=""
          className="w-full"
        />
        <div className="p-6">
          <h5 className="text-xl font-bold mb-2">Manindhra Goud</h5>
          <p className="text-gray-700 mb-4">A Fullstack developer In building Scalable Web Applications.But More Inclined towards the Backend developement</p>
          <div>
            <p className="text-gray-500 mb-1"><strong>Email:</strong></p>
            <p className="text-blue-500">
              <a href="mailto:manindhra1412@gmail.com">{`manindhra1412@gmail.com`}</a>
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 mb-1"><strong>Technologies Used:</strong></p>
            <p className="text-gray-700">NextJS / ReactJS, TailwindCSS , MongoDB</p>
          </div>
          <div className="mt-6">
            <a href="https://www.linkedin.com/in/manindhragoud1412/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
              LinkedIn
            </a>
            <a href="https://github.com/manindhra1412" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </a>
          </div>
          <p className="text-gray-500 text-center mt-6">Feel free to reach out to me through the following links. And I welcome and encourage you to collaborate with me through <a href="https://github.com/manindhra1412/Prompt-Pedia"><strong className="underline">Git pull requests</strong></a></p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
