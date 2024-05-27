import { createSvgIcon } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createStore } from 'redux';
// import { Link } from 'react-router-dom';
// import { create } from 'zustand';

// const homeStore = create((set) => ({
//     coins: [],

//     fetchTrendingCoins: async () => {
//         try {
//             const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
//             const coins = res.data.map(coin => ({
//                 name: <Link className='coin-link'>{coin.name}</Link>,
//                 symbol: coin.symbol,
//                 image: <img src={coin.image} alt='coin-logo' className='coin-logo' />,
//                 id: coin.market_cap_rank,
//                 priceBTC: coin.current_price.toLocaleString(), //.toLocaleString() is to format the numbers with commas
//                 marketCap: coin.market_cap.toLocaleString()
//             }));
//             set({ coins });
//         } catch (error) {
//             console.error('Error fetching coins:', error);
//         }
//     }
// }));

// export default homeStore;


// const HomeStore = async () => {
//   const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
//   const coins = res.data.map(coin => ({
//     name: coin.name,
//     symbol: coin.symbol,
//     image: coin.image,
//     id: coin.id,
//     pice: coin.current_price,
//     market_cap: coin.market_cap,
//   }))

//   console.log(coins);

// }

// export default HomeStore
