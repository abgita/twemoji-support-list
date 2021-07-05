# 🗒 Twemoji support list

[![npm](https://img.shields.io/npm/v/twemoji-support-list?label=npm)](https://www.npmjs.com/package/twemoji-support-list "npm")

## Installation

```bash
npm install --save twemoji-support-list
```

## Usage

```javascript
import twemoji from "twemoji";
import twemojiSupportList from 'twemoji-support-list';

const unknownSourceEmoji = '😀';
const emojiCodePoint = twemoji.convert.toCodePoint( unknownSourceEmoji );

if ( twemojiSupportList.has( emojiCodePoint ) ) {
  // Twemoji has an image for 'unknownSourceEmoji'
}
```

## If you only need the list file

```bash
git clone https://github.com/abgita/twemoji-support-list.git
cd twemoji-support-list
npm install && npm run fetch
```

The get it from './src/supported-emojis.json'
