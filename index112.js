function showNumbers(start, end) {

    if (start > end) {
        for (i = start; i >= end; i--) {
            console.log(i);
        } 
    } else {
        for (i = start; i <= end; i++) {
            console.log(i);
        }
    }
}
showNumbers(100, 10);