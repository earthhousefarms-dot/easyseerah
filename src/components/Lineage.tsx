export default function Lineage() {
  const lineageData = [
    { name: "Prophet Muhammad ﷺ", level: 0, highlight: true },
    { name: "Abdullah", level: 1 },
    { name: "Abdul Muttalib (Shaybah)", level: 2 },
    { name: "Hashim (Amr)", level: 3 },
    { name: "Abd Manaf (Al-Mughirah)", level: 4 },
    { name: "Qusayy", level: 5 },
    { name: "Kilab", level: 6 },
    { name: "Murrah", level: 7 },
    { name: "Ka'b", level: 8 },
    { name: "Lu'ayy", level: 9 },
    { name: "Ghalib", level: 10 },
    { name: "Fihr (Quraysh)", level: 11, note: "Tribe named after him" },
    { name: "Malik", level: 12 },
    { name: "An-Nadr (Qays)", level: 13 },
    { name: "Kinanah", level: 14 },
    { name: "Khuzaymah", level: 15 },
    { name: "Mudrikah (Amr)", level: 16 },
    { name: "Ilyas", level: 17 },
    { name: "Mudar", level: 18 },
    { name: "Nizar", level: 19 },
    { name: "Ma'add", level: 20 },
    { name: "Adnan", level: 21, note: "Descendant of Prophet Ismail (AS)" }
  ];

  const mothersSide = [
    { name: "Aminah bint Wahb", relation: "Mother" },
    { name: "Wahb ibn Abd Manaf", relation: "Maternal Grandfather" },
    { name: "Barrah bint Abd al-Uzza", relation: "Maternal Grandmother" }
  ];

  const importantRelatives = [
    { name: "Hamza ibn Abdul-Muttalib", relation: "Uncle (Father's side)", role: "Lion of Allah, Martyr of Uhud" },
    { name: "Abbas ibn Abdul-Muttalib", relation: "Uncle (Father's side)", role: "Ancestor of Abbasid Caliphs" },
    { name: "Abu Talib", relation: "Uncle (Father's side)", role: "Guardian and Protector" },
    { name: "Abu Lahab", relation: "Uncle (Father's side)", role: "Enemy of Islam" },
    { name: "Ali ibn Abi Talib", relation: "Cousin & Son-in-law", role: "Fourth Caliph" },
    { name: "Ja'far ibn Abi Talib", relation: "Cousin", role: "Leader in Abyssinia" }
  ];

  return (
    <section id="lineage" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Noble Lineage of Prophet Muhammad ﷺ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tracing the blessed ancestry back to Prophet Ibrahim (AS)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Paternal Lineage to Adnan
              </h3>
              
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 to-orange-600"></div>
                
                {lineageData.map((ancestor, index) => (
                  <div key={index} className="relative flex items-center mb-4">
                    <div className={`w-4 h-4 rounded-full z-10 ${
                      ancestor.highlight 
                        ? "w-8 h-8 bg-gradient-to-br from-amber-600 to-orange-600 shadow-lg" 
                        : "bg-amber-500"
                    }`}></div>
                    <div className={`ml-6 ${ancestor.highlight ? "scale-110" : ""}`}>
                      <p className={`font-semibold ${
                        ancestor.highlight 
                          ? "text-2xl text-amber-700" 
                          : "text-gray-900"
                      }`}>
                        {ancestor.name}
                      </p>
                      {ancestor.note && (
                        <p className="text-sm text-gray-600 italic">{ancestor.note}</p>
                      )}
                    </div>
                    {index < lineageData.length - 1 && (
                      <div className="absolute left-8 top-4 h-8 w-0.5 bg-gradient-to-b from-amber-500 to-amber-400"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> The lineage from Adnan connects to Prophet Ismail (AS), 
                  son of Prophet Ibrahim (AS), though the exact names between them are disputed by historians.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Maternal Lineage
              </h3>
              <div className="space-y-3">
                {mothersSide.map((relative, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-pink-50 rounded-lg">
                    <span className="font-semibold text-gray-900">{relative.name}</span>
                    <span className="text-sm text-pink-600">{relative.relation}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Important Relatives
              </h3>
              <div className="space-y-3">
                {importantRelatives.map((relative, index) => (
                  <div key={index} className="p-3 bg-emerald-50 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-gray-900">{relative.name}</span>
                      <span className="text-xs text-emerald-600">{relative.relation}</span>
                    </div>
                    <p className="text-sm text-gray-600">{relative.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">
                Prophetic Connection
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">🔗</span>
                  <div>
                    <p className="font-semibold">To Prophet Ismail (AS)</p>
                    <p className="text-sm opacity-90">Through Adnan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl mr-3">🔗</span>
                  <div>
                    <p className="font-semibold">To Prophet Ibrahim (AS)</p>
                    <p className="text-sm opacity-90">Father of Prophets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Significance of the Lineage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👑</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Noble Ancestry</h4>
              <p className="text-sm text-gray-600">
                Descended from the most noble Arab tribe of Quraysh
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📜</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Prophetic Heritage</h4>
              <p className="text-sm text-gray-600">
                Direct descendant of Prophets Ibrahim and Ismail (AS)
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🕋</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Guardians of Kaaba</h4>
              <p className="text-sm text-gray-600">
                His ancestors were custodians of the Sacred House
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}