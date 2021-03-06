class videoPost extends DefaultPost {

	constructor(postsArrayItem, data, i, default_const) {
		super(postsArrayItem, data, i, default_const);
	}

	renderPostDecorIcon() {
		this.postDecorImage.alt = this.default_const.postVideoDecorIconAlt;
		this.postDecorImage.src = this.default_const.postVideoDecorIconPath;
		this.decorImageContainer.append(this.postDecorImage);
	}

	renderPost(postsArrayItem, data, i) {
        this.renderPoster(this.postsArrayItem, this.data, this.i, this.default_const);
        this.renderMovieReleaseDate(this.data, this.i, this.default_const);
        this.renderMovieDuration(this.postsArrayItem);
        this.renderMovieRating(this.data, this.i, this.default_const);
        this.renderPostHeading(this.data, this.i);
        this.renderPostDescription(this.data, this.i);
		this.renderPostDecorIcon(postsArrayItem);
	}
}
