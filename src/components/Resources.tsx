export default function Resources() {
  const resources = [
    {
      category: "Books",
      items: [
        { title: "The Sealed Nectar (Ar-Raheeq Al-Makhtum)", author: "Safi-ur-Rahman al-Mubarakpuri", type: "book" },
        { title: "Muhammad: His Life Based on the Earliest Sources", author: "Martin Lings", type: "book" },
        { title: "In the Footsteps of the Prophet", author: "Tariq Ramadan", type: "book" }
      ]
    },
    {
      category: "For Children",
      items: [
        { title: "My First Book About the Prophet Muhammad", author: "Sara Khan", type: "children" },
        { title: "365 Days with the Prophet Muhammad", author: "Nurdan Damla", type: "children" },
        { title: "The Prophet's Pond - Seerah Stories", author: "Learning Roots", type: "children" }
      ]
    },
    {
      category: "Video Series",
      items: [
        { title: "Seerah of Prophet Muhammad", author: "Yasir Qadhi", type: "video" },
        { title: "The Life of the Prophet", author: "Hamza Yusuf", type: "video" },
        { title: "Stories of the Prophets", author: "Mufti Menk", type: "video" }
      ]
    }
  ];

  const quickFacts = [
    { label: "Birth Year", value: "570 CE (Year of the Elephant)" },
    { label: "Birthplace", value: "Mecca, Arabia" },
    { label: "Father", value: "Abdullah ibn Abdul-Muttalib" },
    { label: "Mother", value: "Aminah bint Wahb" },
    { label: "First Revelation", value: "610 CE (Age 40)" },
    { label: "Migration to Medina", value: "622 CE" },
    { label: "Passed Away", value: "632 CE (Age 63)" },
    { label: "Burial Place", value: "Medina, Saudi Arabia" }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learning Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore authentic sources to deepen your knowledge of the Seerah
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.author}</p>
                    <span className={`inline-block mt-2 text-xs px-2 py-1 rounded ${
                      item.type === 'book' ? 'bg-blue-100 text-blue-600' :
                      item.type === 'children' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {item.type === 'children' ? '👶 For Kids' : item.type === 'video' ? '🎥 Video' : '📚 Book'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Quick Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-emerald-100 text-sm mb-1">{fact.label}</p>
                <p className="text-white font-semibold">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Download Study Materials
          </h3>
          <p className="text-gray-600 mb-6">
            Get free PDF guides and worksheets for personal or classroom use
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              📥 Timeline PDF
            </button>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              📝 Study Guide
            </button>
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
              🎨 Kids Activities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}