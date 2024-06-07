// app/page.tsx
import MapComponent from '../components/MapComponent';
import { Shop } from '../type/shop';

const fetchShops = async (): Promise<Shop[]> => {
  // Fetch your shop data here. For demonstration, we use static data.
  return [
    {
      id: 1,
      latitude: 11.5756726,
      longitude: 104.9021685,
      name: 'Coffee​ 612',
      googleMapsUrl: 'https://www.google.com/maps/@11.5756726,104.9021685,21z'
    },
    {
      id: 2,
      latitude: 11.574863,
      longitude: 104.8988427,
      name: "D'August Coffee & Wine",
      googleMapsUrl: 'https://www.google.com/maps/@11.574863,104.8988427,21z'
    },
    {
      id: 3,
      latitude: 11.5781415,
      longitude: 104.9009531,
      name: 'CHASHINE',
      googleMapsUrl: 'https://www.google.com/maps/@11.5781415,104.9009531,21z'
    },
    {
      id: 4,
      latitude: 11.5784219,
      longitude: 104.9008311,
      name: 'Donner Kebab Stand',
      googleMapsUrl: 'https://www.google.com/maps/@11.5784219,104.9008311,21z'
    },
    {
      id: 5,
      latitude: 11.5784466,
      longitude: 104.9006376,
      name: 'ម្លិះកាហ្វេ Mliss Café',
      googleMapsUrl: 'https://www.google.com/maps/@11.5784466,104.9006376,21z'
    },
    {
      id: 6,
      latitude: 11.5789174,
      longitude: 104.9008881,
      name: 'Star Anise Coffee & Eatery',
      googleMapsUrl: 'https://www.google.com/maps/@11.5789174,104.9008881,21z'
    },
    {
      id: 7,
      latitude: 11.5791265,
      longitude: 104.9007215,
      name: '30Cups Coffee Cambodai',
      googleMapsUrl: 'https://www.google.com/maps/@11.5791265,104.9007215,21z'
    },
    {
      id: 8,
      latitude: 11.5775635,
      longitude: 104.9005556,
      name: 'សំរិទ្ធ កាហ្វេ',
      googleMapsUrl: 'https://www.google.com/maps/@11.5775635,104.9005556,21z'
    },
    {
      id: 9,
      latitude: 11.5772443,
      longitude: 104.9006816,
      name: 'Plovlom_coffee TK',
      googleMapsUrl: 'https://www.google.com/maps/@11.5772443,104.9006816,21z'
    },
    {
      id: 10,
      latitude: 11.5780986,
      longitude: 104.8999994,
      name: 'Coffee Hub (Toul Kork)',
      googleMapsUrl: 'https://www.google.com/maps/@11.5780986,104.8999994,21z'
    },
    {
      id: 11,
      latitude: 11.5789312,
      longitude: 104.9001309,
      name: 'Smell Café & Food',
      googleMapsUrl: 'https://www.google.com/maps/@11.5789312,104.9001309,21z'
    },
    {
      id: 12,
      latitude: 11.578267,
      longitude: 104.899921,
      name: 'MuCha & Happy Tea (TK)',
      googleMapsUrl: 'https://www.google.com/maps/@11.578267,104.899921,21z'
    },
    {
      id: 13,
      latitude: 11.5775998,
      longitude: 104.9000587,
      name: 'Alfa77',
      googleMapsUrl: 'https://www.google.com/maps/@11.5775998,104.9000587,21z'
    },
    {
      id: 14,
      latitude: 11.5797824,
      longitude: 104.9009545,
      name: 'Coffee Mr.LIN',
      googleMapsUrl: 'https://www.google.com/maps/@11.5797824,104.9009545,21z'
    },
    {
      id: 15,
      latitude: 11.5768904,
      longitude: 104.9004328,
      name: 'Luxuries Cafe TK Branch',
      googleMapsUrl: 'https://www.google.com/maps/@11.5768904,104.9004328,21z'
    },
    {
      id: 16,
      latitude: 11.5798445,
      longitude: 104.9007386,
      name: 'LE Grand CAFE',
      googleMapsUrl: 'https://www.google.com/maps/@11.5798445,104.9007386,21z'
    },
    {
      id: 17,
      latitude: 11.5767089,
      longitude: 104.9006442,
      name: 'Black King Cafe I',
      googleMapsUrl: 'https://www.google.com/maps/@11.5767089,104.9006442,21z'
    },
    {
      id: 18,
      latitude: 11.5802245,
      longitude: 104.9011962,
      name: 'Vatey Coffee',
      googleMapsUrl: 'https://www.google.com/maps/@11.5802245,104.9011962,21z'
    },
    {
      id: 19,
      latitude: 11.5773119,
      longitude: 104.9031781,
      name: 'Captain Eric Café and Bakery',
      googleMapsUrl: 'https://www.google.com/maps/@11.5773119,104.9031781,21z'
    },
    {
      id: 20,
      latitude: 11.5802281,
      longitude: 104.9023027,
      name: 'DRAW Coffee',
      googleMapsUrl: 'https://www.google.com/maps/@11.5802281,104.9023027,21z'
    }
  ]

};

const HomePage = async () => {
  const shops = await fetchShops();

  return (
    <div>
      <h1>Shop Locations</h1>
      <MapComponent shops={shops} />
    </div>
  );
};

export default HomePage;
