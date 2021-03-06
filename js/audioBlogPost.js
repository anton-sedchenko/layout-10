class audioPost extends DefaultPost {

	constructor(postsArrayItem, data, i, default_const) {
		super(postsArrayItem, data, i, default_const);
		this.audioPlayerContainer = postsArrayItem.querySelector(default_const.selectors.audioPlayerContainer);
		this.audioPlayer = document.createElement(default_const.selectors.audio);
		this.audioPlayerControlsAttr = default_const.selectors.audioPlayerControls;
		this.audioPlayerClass = default_const.selectors.audioPlayer;
	}

	renderPostDecorIcon() {
		this.postDecorImage.alt = this.default_const.postAudioDecorIconAlt;
		this.postDecorImage.src = this.default_const.postAudioDecorIconPath;
		this.decorImageContainer.append(this.postDecorImage);
	}

	renderPostAudioPlayer() {
		this.audioPlayer.src = '#';
		this.audioPlayer.controls = this.audioPlayerControlsAttr;
		this.audioPlayer.classList.add(this.audioPlayerClass);
		this.audioPlayer.style.height = '37px';
		this.audioPlayerContainer.append(this.audioPlayer);
	}

	renderPost(postsArrayItem, data, i) {
        this.renderPoster(this.postsArrayItem, this.data, this.i, this.default_const);
        this.renderMovieReleaseDate(this.data, this.i, this.default_const);
        this.renderMovieDuration(this.postsArrayItem);
        this.renderMovieRating(this.data, this.i, this.default_const);
        this.renderPostHeading(this.data, this.i);
        this.renderPostDescription(this.data, this.i);
		this.renderPostDecorIcon(postsArrayItem);
		this.renderPostAudioPlayer(postsArrayItem);
	}
}
