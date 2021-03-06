'use strict';

const default_const = {
    apiKey: '5b00025b01f3a03da0f7493fcbbd1f02',
    postsArr: document.querySelectorAll('.blog-post'),
    baseUrl: 'https://image.tmdb.org/t/p/w185/',
    postVideoDecorIconPath: 'img/a-icon-playmini.svg',
    postVideoDecorIconAlt: 'play icon',
    postAudioDecorIconPath: 'img/a-icon-melody.svg',
    postAudioDecorIconAlt: 'melody icon',
    postPicDecorIconPath: 'img/a-icon-picture.svg',
    postPicDecorIconAlt: 'picture icon',
    postArticleDecorIconPath: 'img/a-icon-text.svg',
    postArticleDecorIconAlt: 'text icon',
    getRateFunc: getRate,
    releaseDateConvertFunc: dateConvert,
    posterHeight: '379px',
    postTypeVideo: 0,
    postTypeAudio: 1,
    postTypePic: 2,
    postTypeArticle: 3,
    selectors: {
        movieAddInfoContainer: '.post-extra-info-container',
        movieReleaseDate: '.section-blog__post-time',
        movieHeading: '.section-blog__post-heading',
        movieDescription: '.section-blog__post-text',
        movieRating: '.section-blog__comments-num-container',
        moviePoster: '.section-blog__media-pic',
        userName: '.section-blog__user-name',
        movieDuration: '.section-blog__min-read',
        image: 'img',
        audio: 'audio',
        movieVoteAverageDOM: 'span',
        decorImage: '.section-blog__post-decor',
        audioPlayerContainer: '.post-audio-player-container',
        audioPlayerControls: 'controls',
        audioPlayer: '.post-audio-player',
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${default_const.apiKey}&language=en-US&page=1`).then(response => response.json())
    .then(result => {
        const data = result.results;

        for (let i = 0; i < default_const.postsArr.length; i++) {

            if (i === default_const.postTypeVideo) {
                let newBlogPost = new videoPost(default_const.postsArr[i], data, i, default_const);

                newBlogPost.renderPost(default_const.postsArr[i], data, i);
            }
            
            if (i === default_const.postTypeAudio) {
                let newBlogPost = new audioPost(default_const.postsArr[i], data, i, default_const);

                newBlogPost.renderPost(default_const.postsArr[i], data, i);
            }

            if (i === default_const.postTypePic) {
                let newBlogPost = new picPost(default_const.postsArr[i], data, i, default_const);

                newBlogPost.renderPost(default_const.postsArr[i], data, i);
            }

            if (i === default_const.postTypeArticle) {
                let newBlogPost = new articlePost(default_const.postsArr[i], data, i, default_const);

                newBlogPost.renderPost(default_const.postsArr[i], data, i);
            }
        }
    }).catch((e) => { console.log(e) });
}, default_const);
