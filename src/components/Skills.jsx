import React from 'react'

export default function Skills() {
  return (
    <div>
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <p className="text-gray-600 mb-8">Here are some technologies I'm familiar with:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 shadow rounded">HTML</div>
            <div className="bg-white p-4 shadow rounded">CSS</div>
            <div className="bg-white p-4 shadow rounded">JavaScript</div>
            <div className="bg-white p-4 shadow rounded">React</div>
            <div className="bg-white p-4 shadow rounded">Tailwind CSS</div>
            <div className="bg-white p-4 shadow rounded">Node.js</div>
            <div className="bg-white p-4 shadow rounded">Express</div>
            <div className="bg-white p-4 shadow rounded">MongoDB</div>
            </div>
        </div>
        </section>
    </div>
  )
}
