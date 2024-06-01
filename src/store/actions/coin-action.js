import axios from "axios"

export const GET_COINS = "GET_COINS"
export const GET_NEWS = "GET_NEWS"

const options = {
    method: 'GET',
    url: 'https://cryptonews16.p.rapidapi.com/news',
    headers: {
        'X-RapidAPI-Key': 'f6acc29954msh31e4a4477eace1bp1d3a32jsnbf5ceccc1bda',
        'X-RapidAPI-Host': 'cryptonews16.p.rapidapi.com'
    }
};

export const getCoins = (coin) => {
    return {
        type: GET_COINS,
        payload: coin
    }
}
export const getNews = (news) => {
    return {
        type: GET_NEWS,
        payload: news
    }
}


export const fetchCoin = () => {
    return async (dispatch) => {
        try {

            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
            const coins = res.data.map(coin => ({
                name: coin.name,
                symbol: coin.symbol,
                image: coin.image,
                id: coin.id,
                price: coin.current_price,
                market_cap: coin.market_cap,
                perc_24h: coin.price_change_percentage_24h,
                rank: coin.market_cap_rank
            }))
            dispatch(getCoins(coins))
        }
        catch (error) {
            console.error('Error fetch coins:', error)
        }
    }
}



export const fetchNews = () => {
    return async (dispatch) => {
        try {

            const res = await axios.request(options);
            const news = res.data.map(news => ({
                title: news.title,
                description: news.description,
                url: news.url,
                createdAt: news.createdAt,
                source: news.source,
                thumbnail: news.thumbnail
            }));
            dispatch(getNews(news))
            console.log(news);
        }
        catch (error) {
            console.error('Error fetch news: ', error)
        }
    }
}
