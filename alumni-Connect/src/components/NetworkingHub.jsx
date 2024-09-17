// import React, { useState } from 'react';

// // Dummy data for alumni and groups (replace with API calls)
// const alumniData = [
//   { id: 1, name: 'Alice Johnson', profession: 'Software Engineer', location: 'New York', interests: ['Tech', 'AI'] },
//   { id: 2, name: 'Bob Smith', profession: 'Marketing Manager', location: 'San Francisco', interests: ['Marketing', 'Tech'] },
//   // Add more alumni data here
// ];

// const interestGroups = [
//   { id: 1, name: 'Tech Enthusiasts', category: 'Technology' },
//   { id: 2, name: 'Marketing Gurus', category: 'Marketing' },
//   // Add more groups here
// ];

// const NetworkingHub = () => {
//   const [search, setSearch] = useState('');
//   const [professionFilter, setProfessionFilter] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const [selectedGroup, setSelectedGroup] = useState(null);

//   // Filter alumni based on profession, location, and search term
//   const filteredAlumni = alumniData.filter((alumni) => {
//     return (
//       alumni.name.toLowerCase().includes(search.toLowerCase()) &&
//       (professionFilter === '' || alumni.profession === professionFilter) &&
//       (locationFilter === '' || alumni.location === locationFilter)
//     );
//   });

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Networking Hub</h1>

//       {/* Alumni Search Section */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Search Alumni</h2>
//         <div className="flex space-x-4 mb-4">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search by name"
//             className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
//           />
//           <select
//             value={professionFilter}
//             onChange={(e) => setProfessionFilter(e.target.value)}
//             className="py-2 px-4 rounded-lg border-2 border-gray-300"
//           >
//             <option value="">Filter by Profession</option>
//             <option value="Software Engineer">Software Engineer</option>
//             <option value="Marketing Manager">Marketing Manager</option>
//             {/* Add more profession filters */}
//           </select>
//           <select
//             value={locationFilter}
//             onChange={(e) => setLocationFilter(e.target.value)}
//             className="py-2 px-4 rounded-lg border-2 border-gray-300"
//           >
//             <option value="">Filter by Location</option>
//             <option value="New York">New York</option>
//             <option value="San Francisco">San Francisco</option>
//             {/* Add more location filters */}
//           </select>
//         </div>

//         {/* Alumni List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredAlumni.map((alumni) => (
//             <div key={alumni.id} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">{alumni.name}</h3>
//               <p className="text-gray-600 mb-2">{alumni.profession}</p>
//               <p className="text-gray-600 mb-2">{alumni.location}</p>
//               <p className="text-gray-600">
//                 Interests: {alumni.interests.join(', ')}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Interest Groups Section */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Interest Groups</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {interestGroups.map((group) => (
//             <div
//               key={group.id}
//               onClick={() => setSelectedGroup(group)}
//               className={`cursor-pointer bg-white p-6 rounded-lg shadow-md ${selectedGroup?.id === group.id ? 'border-blue-500 border-2' : ''}`}
//             >
//               <h3 className="text-xl font-bold mb-2">{group.name}</h3>
//               <p className="text-gray-600">{group.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Selected Group Chat (Dummy chat feature) */}
//       {selectedGroup && (
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Chat in {selectedGroup.name} Group</h3>
//           {/* Replace this with an actual chat component */}
//           <textarea
//             className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
//             placeholder="Start chatting..."
//             rows="4"
//           ></textarea>
//           <button className="mt-4 py-2 px-4 rounded-lg bg-blue-500 text-white font-bold">Send</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NetworkingHub;

// import React, { useState } from 'react';

// // Dummy data for alumni
// const alumniData = [
//   { id: 1, name: 'Alice Johnson', profession: 'Software Engineer', location: 'New York', interests: ['Tech', 'AI'] },
//   { id: 2, name: 'Bob Smith', profession: 'Marketing Manager', location: 'San Francisco', interests: ['Marketing', 'Tech'] },
//   // Add more alumni data here
// ];

// const NetworkingHub = () => {
//   const [search, setSearch] = useState('');
//   const [professionFilter, setProfessionFilter] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const [selectedAlumni, setSelectedAlumni] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState({}); // Stores messages for different alumni

//   // Filter alumni based on search, profession, and location filters
//   const filteredAlumni = alumniData.filter((alumni) => {
//     return (
//       alumni.name.toLowerCase().includes(search.toLowerCase()) &&
//       (professionFilter === '' || alumni.profession === professionFilter) &&
//       (locationFilter === '' || alumni.location === locationFilter)
//     );
//   });

//   // Handle sending a message
//   const handleSendMessage = () => {
//     if (selectedAlumni && message.trim()) {
//       // Store messages for each alumni in the state
//       setMessages((prevMessages) => ({
//         ...prevMessages,
//         [selectedAlumni.id]: [
//           ...(prevMessages[selectedAlumni.id] || []),
//           { sender: 'You', content: message },
//         ],
//       }));
//       setMessage(''); // Clear input field after sending
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Networking Hub</h1>

//       {/* Alumni Search Section */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Search Alumni</h2>
//         <div className="flex space-x-4 mb-4">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search by name"
//             className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
//           />
//           <select
//             value={professionFilter}
//             onChange={(e) => setProfessionFilter(e.target.value)}
//             className="py-2 px-4 rounded-lg border-2 border-gray-300"
//           >
//             <option value="">Filter by Profession</option>
//             <option value="Software Engineer">Software Engineer</option>
//             <option value="Marketing Manager">Marketing Manager</option>
//             {/* Add more professions */}
//           </select>
//           <select
//             value={locationFilter}
//             onChange={(e) => setLocationFilter(e.target.value)}
//             className="py-2 px-4 rounded-lg border-2 border-gray-300"
//           >
//             <option value="">Filter by Location</option>
//             <option value="New York">New York</option>
//             <option value="San Francisco">San Francisco</option>
//             {/* Add more locations */}
//           </select>
//         </div>

//         {/* Alumni List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredAlumni.map((alumni) => (
//             <div key={alumni.id} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold mb-2">{alumni.name}</h3>
//               <p className="text-gray-600 mb-2">{alumni.profession}</p>
//               <p className="text-gray-600 mb-2">{alumni.location}</p>
//               <p className="text-gray-600">
//                 Interests: {alumni.interests.join(', ')}
//               </p>
//               <button
//                 onClick={() => setSelectedAlumni(alumni)}
//                 className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
//               >
//                 Message
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Private Messaging Section */}
//       {selectedAlumni && (
//         <div className="bg-white p-6 rounded-lg shadow-md mt-8">
//           <h3 className="text-xl font-bold mb-4">Chat with {selectedAlumni.name}</h3>

//           {/* Display previous messages */}
//           <div className="mb-4">
//             {messages[selectedAlumni.id]?.map((msg, index) => (
//               <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : ''}`}>
//                 <p className="bg-gray-200 inline-block py-1 px-3 rounded-lg">{msg.content}</p>
//               </div>
//             ))}
//           </div>

//           {/* Message Input */}
//           <div className="flex">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type your message"
//               className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
//             />
//             <button
//               onClick={handleSendMessage}
//               className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NetworkingHub;



import React, { useState } from 'react';

// Dummy data for alumni and interest groups
const alumniData = [
  { id: 1, name: 'Alice Johnson', profession: 'Software Engineer', location: 'New York', interests: ['Tech', 'AI'] },
  { id: 2, name: 'Bob Smith', profession: 'Marketing Manager', location: 'San Francisco', interests: ['Marketing', 'Tech'] },
  // Add more alumni data here
];

const interestGroupsData = [
  { id: 1, name: 'Tech Enthusiasts', description: 'A group for technology lovers.' },
  { id: 2, name: 'Finance Gurus', description: 'Discuss the latest in the finance industry.' },
  { id: 3, name: 'Sports Lovers', description: 'For alumni who are passionate about sports.' },
  // Add more groups here
];

const NetworkingHub = () => {
  const [search, setSearch] = useState('');
  const [professionFilter, setProfessionFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState({});
  const [groups, setGroups] = useState(interestGroupsData);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groupMessage, setGroupMessage] = useState('');
  const [groupMessages, setGroupMessages] = useState({});

  // Filter alumni based on search, profession, and location filters
  const filteredAlumni = alumniData.filter((alumni) => {
    return (
      alumni.name.toLowerCase().includes(search.toLowerCase()) &&
      (professionFilter === '' || alumni.profession === professionFilter) &&
      (locationFilter === '' || alumni.location === locationFilter)
    );
  });

  // Handle sending a message
  const handleSendMessage = () => {
    if (selectedAlumni && message.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedAlumni.id]: [
          ...(prevMessages[selectedAlumni.id] || []),
          { sender: 'You', content: message },
        ],
      }));
      setMessage(''); // Clear input field after sending
    }
  };

  // Handle sending a group message
  const handleSendGroupMessage = () => {
    if (selectedGroup && groupMessage.trim()) {
      setGroupMessages((prevMessages) => ({
        ...prevMessages,
        [selectedGroup.id]: [
          ...(prevMessages[selectedGroup.id] || []),
          { sender: 'You', content: groupMessage },
        ],
      }));
      setGroupMessage(''); // Clear input field after sending
    }
  };

  // Handle creating a new interest group
  const handleCreateGroup = (groupName, groupDescription) => {
    const newGroup = {
      id: groups.length + 1,
      name: groupName,
      description: groupDescription,
    };
    setGroups([...groups, newGroup]);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Networking Hub</h1>

      {/* Alumni Search Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Search Alumni</h2>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name"
            className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
          />
          <select
            value={professionFilter}
            onChange={(e) => setProfessionFilter(e.target.value)}
            className="py-2 px-4 rounded-lg border-2 border-gray-300"
          >
            <option value="">Filter by Profession</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Marketing Manager">Marketing Manager</option>
          </select>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="py-2 px-4 rounded-lg border-2 border-gray-300"
          >
            <option value="">Filter by Location</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
          </select>
        </div>

        {/* Alumni List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{alumni.name}</h3>
              <p className="text-gray-600 mb-2">{alumni.profession}</p>
              <p className="text-gray-600 mb-2">{alumni.location}</p>
              <p className="text-gray-600">
                Interests: {alumni.interests.join(', ')}
              </p>
              <button
                onClick={() => setSelectedAlumni(alumni)}
                className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
              >
                Message
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interest Groups Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Interest Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((group) => (
            <div key={group.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-4">{group.description}</p>
              <button
                onClick={() => setSelectedGroup(group)}
                className="py-2 px-4 bg-green-500 text-white rounded-lg"
              >
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Private Messaging Section */}
      {selectedAlumni && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h3 className="text-xl font-bold mb-4">Chat with {selectedAlumni.name}</h3>
          <div className="mb-4">
            {messages[selectedAlumni.id]?.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : ''}`}>
                <p className="bg-gray-200 inline-block py-1 px-3 rounded-lg">{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message"
              className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
            />
            <button
              onClick={handleSendMessage}
              className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Group Messaging Section */}
      {selectedGroup && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h3 className="text-xl font-bold mb-4">Group: {selectedGroup.name}</h3>
          <div className="mb-4">
            {groupMessages[selectedGroup.id]?.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'You' ? 'text-right' : ''}`}>
                <p className="bg-gray-200 inline-block py-1 px-3 rounded-lg">{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={groupMessage}
              onChange={(e) => setGroupMessage(e.target.value)}
              placeholder="Type your group message"
              className="w-full py-2 px-4 rounded-lg border-2 border-gray-300"
            />
            <button
              onClick={handleSendGroupMessage}
              className="ml-4 py-2 px-4 bg-green-500 text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkingHub;
