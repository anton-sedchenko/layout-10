function getRate(voteAverage) {
    let integer = parseInt(voteAverage);

    if (voteAverage % integer === 0) {

        return integer / 2;
    }

    return integer / 2 + 0.5;
}
