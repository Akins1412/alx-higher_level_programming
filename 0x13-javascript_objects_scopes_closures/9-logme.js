#!/usr/bin/node

let au = 0;
exports.logMe = function (item) {
	console.log(au + ': ' + item);
	au;
};
