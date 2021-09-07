export const state = {
    news: {},
}

export const loadData = async function() {
    const res = await fetch(`https://www.scorebat.com/video-api/v3/`);
    const data = await (await res).json();
    console.log(data);

    const dataNews = data.response[0];
    state.news = {
        image: dataNews.thumbnail,
        title: dataNews.title,
    }
}

// loadData();
