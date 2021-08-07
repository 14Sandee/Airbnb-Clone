import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-bold pb-5">Explore nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ id, img, location, distance }) => (
              <SmallCard 
                key={id}
                img={img} 
                location={location} 
                distance={distance} 
              />
            ))}
          </div>
          <section>
            <h2 className="text-4xl font-bold py-8">Live anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {cardsData?.map(({ id, img, title }) => (
                <MediumCard key={id} img={img} title={title}/>
              ))}
            </div>
            
          </section>
        </section>  
        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>  
      <Footer />
    
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch("https://14sandee.github.io/json/places.json").then((res) => res.json());

  const cardsData = await fetch("https://14sandee.github.io/json/card.json").then(res => res.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}