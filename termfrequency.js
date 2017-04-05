var natural = require('natural'),
    TfIdf = natural.TfIdf,
    tfidf = new TfIdf();

//from docs
tfidf.addDocument('this document is about node.');
tfidf.addDocument('this document is about ruby.');
tfidf.addDocument('this document is about ruby and node.');
tfidf.addDocument('this document is about node. it has node examples');

console.log('node --------------------------------');
tfidf.tfidfs('node', function(i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

console.log('ruby --------------------------------');
tfidf.tfidfs('ruby', function(i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

// //term frequency, inverse document frequency
// var tf = ;
// var idf = 1 + Math.log(numDocs/(1 + numDocswithTerm));
// //log decreases importance of common words like is, and, the
// var combinedTfidf = tf * idf;

