function incrementNasra(x) {
    // var splits = x.split(/(\d+)$/), ---> I dont understand this part.
    one = 1;
    if (splits[1] !== undefined) one = parseInt(splits[1]) + 1;
    return splits[0] + one; }
undefined
incrementNasra('foo143');
"foo144"
incrementNasra('foo');
"foo1"
