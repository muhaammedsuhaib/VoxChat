import React, { useState } from 'react';

const Calls = () => {
  const initialData = [
    { name: 'Anas',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'ravi',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'haro',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'anub',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'karthu',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'moosa',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'abdu',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'chndrika',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'kanishka',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'rsulu',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'bibi mwone',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'sanessh',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: ' krishnan',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'sulaiman',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'kimichii',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'janu',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'kabeer',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'abas',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'vinod',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'mani kndan',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'kobalan',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
    { name: 'pp sashi',chat:['hy','heloo','how are you' , 'fine ' ,'what about you', 'iam good' , 'thanks for asking' ,'didi you dring tea' , 'yes of coursw'] },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering data based on search term
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full h-full"><br /><br /><br />
    <h1>Iam calls</h1>
      <div className="w-full text-center p-3">
        <input
          type="text"
          id="last_name"
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
        <div className="w-full h-[75vh] mt-2 p-3  overflow-auto">
          {filteredData.map((item, index) => (
            <div  key={index}
            className="w-full p-2 flex items-center justify-between hover:bg-gray-200 rounded-lg">
              <div className="flex items-center">
                <img
                  src="https://i.ytimg.com/vi/ATElufr0OiE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJuaATtZxg3dXNAyUiTBM-dVbiOA"
                  alt="profile Image"
                  className="rounded-full h-12 w-12"
                />
                <p className="ml-3 font-bold">{item.name}</p>
              </div>
              <div className="flex items-center">
                <p>03-03-2024</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calls;
