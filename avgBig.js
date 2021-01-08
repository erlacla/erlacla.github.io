function averageBig(list) {
    let e = 0;
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > 1000) {
            e += list[i];
            count += 1;
        }
    }
    let avg = e/count;
    return avg;



}