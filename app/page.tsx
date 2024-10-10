"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-200 to-green-200 min-h-screen w-screen p-8">
      <div className='w-full md:w-4/5 mx-auto'>
      <header className="text-center items-center py-12 w-full">
        <Image
          src={"/images/moco-recycling.png"}
          alt={`logo`}
          width={200}
          height={200}
          className='mx-auto mb-8 rounded-lg'
        />
        <h1 className="text-4xl font-bold text-green-800 mb-4">Recycling in Montgomery County</h1>
        <p className="text-xl text-gray-700">Together, we can make a difference for our environment!</p>
      </header>

      <section className="bg-white rounded-lg p-6 shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Why Recycling Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700">Recycling plays a vital role in maintaining a clean and sustainable environment in Montgomery County. As our community grows, so does the need for effective waste management.</p>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Key Benefits:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Conserve Natural Resources</li>
                <li>Save Energy</li>
                <li>Reduce Greenhouse Gas Emissions</li>
                <li>Prevent Landfill Overflow</li>
              </ul>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/curbside-recycling-bins.jpg"
              alt="Recycling benefits"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg p-6 shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">What Can Be Recycled?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <p className="mb-4">Montgomery County provides curbside recycling services for a variety of materials. Here's a quick guide to what goes in your blue bins:</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Paper", items: ["Newspapers", "Magazines", "Office paper", "Junk mail", "Flattened cardboard"] },
                { title: "Plastic", items: ["Bottles", "Containers", "Tubs", "Lids (numbers 1-7)"] },
                { title: "Glass", items: ["Bottles (any color)", "Jars (any color)"] },
                { title: "Metal", items: ["Aluminum cans", "Tin/steel food containers", "Foil"] }
              ].map((category, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 mb-2">{category.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/recyclable-items.jpg"
              alt="Recyclable items"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-green-500 bg-opacity-75 text-white p-2 rounded-b-lg">
              <p className="text-sm font-semibold">Pro Tip: Rinse containers before recycling!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg p-6 shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Organizing Your Waste</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Separate Categories", content: "Set up bins for recyclables, compost, and trash.", icon: "🗑️" },
            { title: "Know What Not to Recycle", content: "Avoid contaminating recyclables with non-recyclable items.", icon: "❌" },
            { title: "Break Down and Clean", content: "Flatten cardboard and rinse containers before recycling.", icon: "🧼" },
          ].map((step, index) => (
            <div key={index} className="bg-yellow-50 p-4 rounded-lg flex items-start">
              <span className="text-4xl mr-4">{step.icon}</span>
              <div>
                <h3 className="font-semibold text-yellow-700 mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg p-6 shadow-md mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Special Disposal Guide</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="p-2 border">Item Type</th>
                <th className="p-2 border">Disposal Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Bulk items (furniture, mattresses)</td>
                <td className="p-2 border">Special pickup or drop-off arrangements</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-2 border">Hazardous materials (chemicals, paint)</td>
                <td className="p-2 border">Specific drop-off locations</td>
              </tr>
              <tr>
                <td className="p-2 border">Electronics</td>
                <td className="p-2 border">Electronics recycling centers</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-600">Visit Montgomery County's Recycling and Resource Management Division website for more details on special item disposal.</p>
      </section>

      <section className="text-center mb-12 bg-green-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Test Your Recycling Knowledge!</h2>
        <p className="mb-6 text-lg">Think you're a recycling expert? Put your skills to the test!</p>
        <Link href="/quiz" className="bg-white text-green-600 hover:bg-green-100 font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Take the Quiz
        </Link>
      </section>
      </div>
    </main>
  );
}