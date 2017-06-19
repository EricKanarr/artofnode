const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum();


  output = loremIpsum({
      count: 3                    // Number of words, sentences, or paragraphs to generate.
    , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
    , sentenceLowerBound: 5         // Minimum words per sentence.
    , sentenceUpperBound: 15        // Maximum words per sentence.
    , paragraphLowerBound: 3        // Minimum sentences per paragraph.
    , paragraphUpperBound: 7        // Maximum sentences per paragraph.
    , format: 'plain'               // Plain text or html
    // , words: ['ad', 'dolor', ... ]  // Custom word dictionary. Uses dictionary.words (in lib/dictionary.js) by default.
    // , random: Math.random           // A PRNG function. Uses Math.random by default
    , suffix: "*****"                  // The character to insert between paragraphs. Defaults to default EOL for your OS.
  });

  app.get('/lorem', function (req, res) {
    res.send(output);
  });

  app.listen(3000, function () {
    console.log('Successfully started express application!')
  });
