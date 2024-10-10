import React from 'react';

const RecyclingLocationsPage = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-blue-200 min-h-screen w-screen p-8">
      <div className='w-full md:w-4/5 mx-auto'>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Recycling Resources in Montgomery County, Maryland
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LocationCard
            title="Shady Grove Transfer Station"
            address="16101 Frederick Rd, Derwood, MD 20855"
            hours="Mon-Sat: 7am-5pm, Sun: 9am-5pm"
            description="Primary drop-off site for unwanted items, recyclables, and yard waste. Also serves as a donation center for local nonprofits."
            icon="🏭"
          />
          <LocationCard
            title="Montgomery County Recycling Facility"
            address="16105 Frederick Road, Derwood, MD 20855"
            hours="Mon-Tue: 6am-3:30pm, Wed-Thu: 6am-2:30pm, Fri: 6am-12:30pm"
            description="Processes recyclables collected through the county's dual-stream recycling program."
            icon="♻️"
          />
          <LocationCard
            title="Montgomery County Resource Recovery Facility"
            address="21204 Martinsburg Road, Dickerson, MD 20842"
            hours="Contact for hours"
            description="Dedicated to waste-to-energy processes and offers educational tours about waste management practices."
            icon="🔋"
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-800 text-center my-8">
          Educational Opportunities
        </h2>

        <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Montgomery County Department of Environmental Protection (DEP)</h3>
          <p className="text-gray-700 mb-4">
            The DEP provides extensive resources on recycling practices and waste management strategies. They offer workshops and informational sessions on effective recycling participation.
          </p>
          <a href="https://www.montgomerycountymd.gov/dep/" className="text-blue-600 hover:underline">Visit DEP Website</a>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Events and Workshops</h3>
          <p className="text-gray-700 mb-4">
            Montgomery County hosts events focused on sustainability and recycling education throughout the year. These events include hands-on activities, expert presentations, and Q&A sessions.
          </p>
        </div>

      </div>
    </div>
  );
};

const LocationCard = ({ title, address, hours, description, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
      <span className="text-3xl mr-2">{icon}</span>
      {title}
    </h3>
    <p className="text-gray-600 mb-2"><strong>Address:</strong> {address}</p>
    <p className="text-gray-600 mb-2"><strong>Hours:</strong> {hours}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default RecyclingLocationsPage;
