import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Seerah for Kids | Learn Prophet Muhammad\'s Story for Children',
  description: 'Interactive Seerah lessons for kids. Fun and engaging ways to teach children about Prophet Muhammad ﷺ with stories, activities, and age-appropriate content.',
  keywords: 'seerah for kids, prophet muhammad for children, islamic stories for kids, seerah lessons children, teach kids seerah, prophet stories kids',
  alternates: {
    canonical: 'https://easyseerah.com/seerah-for-kids',
  },
};

export default function SeerahForKids() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seerah for Kids: Teaching Children About Prophet Muhammad ﷺ
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Making Seerah Fun for Children</h2>
                <p className="text-gray-700 mb-4">
                  Learning about Prophet Muhammad ﷺ doesn't have to be boring for kids! The Seerah 
                  is full of amazing stories, adventures, and lessons that children can relate to. 
                  By presenting Seerah in an age-appropriate and engaging way, we can help our 
                  children develop a deep love for the Prophet ﷺ from an early age.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Age-Appropriate Seerah Topics</h2>
                
                <div className="bg-pink-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-3">Ages 3-6: Simple Stories</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>The Prophet as a shepherd boy</li>
                    <li>His kindness to animals</li>
                    <li>The Year of the Elephant</li>
                    <li>Baby Muhammad and Halima</li>
                    <li>The Prophet's smile and gentle nature</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-3">Ages 7-10: Adventure Stories</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>The cave of Hira and first revelation</li>
                    <li>The miraculous night journey (Isra and Mi'raj)</li>
                    <li>The Hijrah journey to Madinah</li>
                    <li>Building the first mosque</li>
                    <li>Stories of young Sahaba like Ali and Zaid</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-4">
                  <h3 className="text-xl font-semibold mb-3">Ages 11-14: Deeper Lessons</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>The Prophet's patience during hardships</li>
                    <li>Treaties and diplomacy</li>
                    <li>Leadership qualities</li>
                    <li>The conquest of Makkah and forgiveness</li>
                    <li>The farewell sermon's messages</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Fun Activities to Teach Seerah</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">🎨 Art & Crafts</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>Draw the Ka'bah and tell its story</li>
                      <li>Make a Hijrah journey map</li>
                      <li>Create a family tree of the Prophet</li>
                      <li>Design Islamic patterns while learning about Madinah</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">🎮 Games & Activities</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>Seerah timeline puzzle</li>
                      <li>Sahaba matching game</li>
                      <li>Prophet's names memorization</li>
                      <li>Seerah quiz competitions</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">📚 Story Time</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>Bedtime Seerah stories</li>
                      <li>Act out scenes from the Seerah</li>
                      <li>Create a Seerah storybook</li>
                      <li>Watch animated Seerah videos</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">📝 Learning Tools</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>Seerah coloring books</li>
                      <li>Flash cards with key events</li>
                      <li>Interactive digital apps</li>
                      <li>Seerah journals for older kids</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Character Building Through Seerah</h2>
                <p className="text-gray-700 mb-4">
                  The Seerah provides countless examples for building good character in children:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🤲</span>
                    <div>
                      <strong>Kindness:</strong> How the Prophet was gentle with children and never refused their requests
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🤝</span>
                    <div>
                      <strong>Honesty:</strong> Why he was called Al-Amin (the trustworthy) even before prophethood
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💪</span>
                    <div>
                      <strong>Patience:</strong> Stories of perseverance during difficult times in Makkah
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">❤️</span>
                    <div>
                      <strong>Mercy:</strong> His forgiveness of those who hurt him, including at Ta'if
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📚</span>
                    <div>
                      <strong>Love of Learning:</strong> The importance of seeking knowledge in Islam
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tips for Parents & Teachers</h2>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li><strong>Start Early:</strong> Introduce simple Seerah stories from age 3</li>
                  <li><strong>Be Consistent:</strong> Make Seerah a regular part of bedtime or family time</li>
                  <li><strong>Use Visuals:</strong> Pictures, videos, and props make stories memorable</li>
                  <li><strong>Connect to Daily Life:</strong> Show how the Prophet's teachings apply today</li>
                  <li><strong>Make it Interactive:</strong> Ask questions and let kids retell stories</li>
                  <li><strong>Celebrate Milestones:</strong> Reward completion of Seerah chapters or memorization</li>
                  <li><strong>Lead by Example:</strong> Show your own love for the Prophet ﷺ</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Popular Seerah Stories Kids Love</h2>
                <div className="grid gap-4">
                  <div className="border-l-4 border-pink-500 pl-4">
                    <h3 className="font-semibold">The Spider and the Cave</h3>
                    <p className="text-gray-600">How Allah protected the Prophet during Hijrah</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-semibold">The Crying Camel</h3>
                    <p className="text-gray-600">The Prophet's compassion for animals</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold">The Little Boy's Request</h3>
                    <p className="text-gray-600">How the Prophet never said no to children</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold">The Blessed Rain</h3>
                    <p className="text-gray-600">The miracle of rain after the Prophet's dua</p>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-8 mt-8">
                <h2 className="text-2xl font-semibold mb-4">Start Your Child's Seerah Journey</h2>
                <p className="text-gray-700 mb-4">
                  Give your children the gift of knowing and loving Prophet Muhammad ﷺ. Our 
                  kid-friendly Seerah program uses interactive stories, games, and activities 
                  to make learning fun and memorable for young Muslims.
                </p>
                <a href="/learn" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Explore Kids Seerah Program
                </a>
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}