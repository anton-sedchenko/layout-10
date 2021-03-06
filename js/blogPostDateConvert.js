function dateConvert(date) {
    let fullDate = new Date(date);
    let dd = fullDate.getDate();
    let mm = fullDate.getMonth();
    let yy = fullDate.getFullYear();
    const monthArr = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];

    monthArr.forEach((item, i) => {
        if (mm === i) {
            mm = item;

            return mm;
        }
    });

    return `${dd} ${mm}, ${yy}`;
}
