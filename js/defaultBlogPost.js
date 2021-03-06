class DefaultPost {

    constructor(postsArrayItem, data, i, default_const) {
        this.postsArrayItem = postsArrayItem;
        this.data = data;
        this.i = i;
        this.default_const = default_const;
        this.apiKey = default_const.apiKey;
        this.image = default_const.selectors.image;
        this.postAddInfoContainer = postsArrayItem.querySelector(default_const.selectors.movieAddInfoContainer);
        this.postMovieReleaseDate = postsArrayItem.querySelector(default_const.selectors.movieReleaseDate);
        this.postHeading = postsArrayItem.querySelector(default_const.selectors.movieHeading);
        this.postDescription = postsArrayItem.querySelector(default_const.selectors.movieDescription);
        this.poster = '';
        this.movieId = data[i].id;
        this.postMovieDuration = postsArrayItem.querySelector(default_const.selectors.movieDuration);
        this.postRatingContainer = postsArrayItem.querySelector(default_const.selectors.movieRating);
        this.rating = default_const.getRateFunc(data[i].vote_average);
        this.decorImageContainer = postsArrayItem.querySelector(default_const.selectors.decorImage);
        this.postDecorImage = document.createElement(default_const.selectors.image);
    }

    renderPoster(postsArrayItem, data, i, default_const) {
        if (postsArrayItem.querySelector(default_const.selectors.moviePoster)) {
            
            this.poster = postsArrayItem.querySelector(default_const.selectors.moviePoster);
            this.poster.src = default_const.baseUrl + data[i].poster_path;
            this.poster.style.height = default_const.posterHeight;
        }
    }

    renderPostHeading(data, i) {
        this.postHeading.textContent = data[i].title;
    }

    renderPostDescription(data, i) {
        this.postDescription.textContent = data[i].overview;
    }

    renderMovieReleaseDate(data, i, default_const) {
        let date = default_const.releaseDateConvertFunc(data[i].release_date);


        this.postMovieReleaseDate.textContent = date;
    }

    renderMovieDuration() {
        fetch(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=${this.apiKey}`)
            .then(response => response.json())
            .then(result => {
                let movieRunTime = result.runtime;

                this.postMovieDuration.textContent = movieRunTime + ' min';             
            });
    }

    renderMovieRating(data, i, default_const) {
        let movieVoteAverage = document.createElement(default_const.movieVoteAverageDOM);

        this.postRatingContainer.textContent = '';
        movieVoteAverage.textContent = `${data[i].vote_average}`;
        movieVoteAverage.style.marginRight = '10px';
        this.postRatingContainer.append(movieVoteAverage);

        for (let i = 0; i < parseInt(this.rating); i++) {
            let rateStarImage = document.createElement(this.image);

            rateStarImage.src = "img/Star-1.svg";
            rateStarImage.alt = "post rating";
            this.postRatingContainer.appendChild(rateStarImage);
        }

        if (this.rating % 2 !== 0) {
            let rateStarImage = document.createElement(this.image);

            rateStarImage.src = "img/Group.svg";
            rateStarImage.alt = "post rating";
            this.postRatingContainer.append(rateStarImage);
        }

        if (this.postRatingContainer.querySelectorAll(this.image).length < 5) {
            let rateStarsNum = this.postRatingContainer.querySelectorAll(this.image).length;

            for (let i = rateStarsNum; i < 5; i++) {
                let rateStarImage = document.createElement(this.image);

                rateStarImage.src = "img/Star-2.svg";
                rateStarImage.alt = "post rating";
                this.postRatingContainer.appendChild(rateStarImage);
            }
        }
    }
}
