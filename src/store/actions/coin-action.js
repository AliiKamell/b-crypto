import axios from "axios"

export const GET_COINS = "GET_COINS"


export const getCoins = (coin) => {
    return {
        type: GET_COINS,
        payload: coin
    }
}


export const fetchCoin = () => {
    return async (dispatch) => {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
        const coins = res.data.map(coin => ({
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            id: coin.id,
            price: coin.current_price,
            market_cap: coin.market_cap,
        }))
        dispatch(getCoins(coins))
    }
}