class articlePost extends DefaultPost {

	constructor(postsArrayItem, data, i, default_const) {
		super(postsArrayItem, data, i, default_const);
	}

	renderPostDecorIcon() {
		this.postDecorImage.alt = this.default_const.postArticleDecorIconAlt;
		this.postDecorImage.src = this.default_const.postArticleDecorIconPath;
		this.decorImageContainer.append(this.postDecorImage);
	}

	renderPost(postsArrayItem, data, i) {
        this.renderMovieReleaseDate(this.data, this.i, this.default_const);
        this.renderMovieDuration(this.postsArrayItem);
        this.renderMovieRating(this.data, this.i, this.default_const);
        this.renderPostHeading(this.data, this.i);
        this.renderPostDescription(this.data, this.i);
		this.renderPostDecorIcon(postsArrayItem);
	}
}
