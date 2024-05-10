import axios from 'axios'
import { Link } from 'react-router-dom'
import { create } from 'zustand'


const homeStore = create((set) => ({
    coins: [],

    fetchCoins: async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')
        const coins = res.data.coins.map(coin => {
            return {
                name: <Link className='coin-link'>{coin.item.name}</Link>,
                symbol: coin.item.symbol,
                image: <img src={coin.item.small} alt='coin-logo' className='coin-logo'/>,
                id: coin.item.id,
                priceBTC: coin.item.data.price,
                marketCap: coin.item.data.market_cap
            }
        })

        set({ coins })

    }
}))

export default homeStore;