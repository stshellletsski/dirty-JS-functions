// Marcin's Bag Of Dirty JS Functions.
// Don't use unless absolutely desperate.
const extractLast = function(num) {return (num - ((Math.trunc(num/10))*10))} // Extract last digit from number num.
const extractFirst = function(num) {return Math.trunc(num/(10**((num.toString().length) -1)))} // Extract first digit from number num. Breaks if leading zeros.
