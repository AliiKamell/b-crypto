import axios from 'axios';
import { Link } from 'react-router-dom';
import { create } from 'zustand';

const homeStore = create((set) => ({
    coins: [],

    fetchTrendingCoins: async () => {
        try {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
            const coins = res.data.map(coin => ({
                name: <Link className='coin-link'>{coin.name}</Link>,
                symbol: coin.symbol,
                image: <img src={coin.image} alt='coin-logo' className='coin-logo' />,
                id: coin.market_cap_rank,
                priceBTC: coin.current_price,
                marketCap: coin.market_cap
            }));
            set({ coins });
        } catch (error) {
            console.error('Error fetching coins:', error);
        }
    }
}));

export default homeStore;
