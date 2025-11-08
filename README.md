# Morse Code API

Morse Code is a simple tool for encoding and decoding Morse code. It returns the encoded or decoded Morse code.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Morse Code API](https://apiverve.com/marketplace/morsecode)

---

## Installation

Using npm:
```shell
npm install @apiverve/morsecode
```

Using yarn:
```shell
yarn add @apiverve/morsecode
```

---

## Configuration

Before using the Morse Code API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart)

The Morse Code API documentation is found here: [https://docs.apiverve.com/ref/morsecode](https://docs.apiverve.com/ref/morsecode).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const morsecodeAPI = require('@apiverve/morsecode');
const api = new morsecodeAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  "audio": true,
  "text": "This Is A Message"
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  "audio": true,
  "text": "This Is A Message"
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  "audio": true,
  "text": "This Is A Message"
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "text": "This Is A Message",
    "morse": "- .... .. ... / .. ... / .- / -- . ... ... .- --. . ",
    "stats": {
      "characters": 17,
      "dits": 25,
      "dahs": 7
    },
    "valid": true,
    "audio": {
      "audioFile": "9187cc09-7f1c-4ef6-91b2-47b45a779d37.wav",
      "format": ".wav",
      "downloadURL": "https://storage.googleapis.com/apiverve.appspot.com/morsecode/9187cc09-7f1c-4ef6-91b2-47b45a779d37.wav?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1760978073&Signature=msdNuo4gid8r%2F89Tkuo9ybJOh2qccrs9ceqDXX4QAmeTMVNVwqWeLh1ULL2%2BXQAo4p%2FBav7x7K7xIJQyDFqyIMsqlZnSopGHvaFAKLF7K%2BJZlZORk3XrG0KN2VvvTrGWbOLytOdPa8xlxYeWNQZjA48QyNCWgDEG5ovLcbS3HWrPM%2BYz4yE80MV60eb6orHaA0%2FQsVuPAKNYta1GwcyXWGU7HzP8gAUhf6tdsG6bdvcv7Vs92iKv0fSKxxsHiziVe6zQQOKqAzMtzTg9RnujEVksCiq7KzRMsSLKizWBLRvPokEpbaydds8N%2B35fQztmnykFCQ2RDXxxoHQsB2fZzQ%3D%3D",
      "duration": "13.20s",
      "frequency": "600Hz",
      "sampleRate": "44100Hz",
      "expires": 1760978073054
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
