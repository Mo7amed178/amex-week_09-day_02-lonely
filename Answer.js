
var arr1 = [4, 3, 3, 5];
var a = [];
arr1.filter(function (i) {

    if (arr1.indexOf(i) === arr1.lastIndexOf(i)) {
        a.push(i);
        console.log(i);
    }
})