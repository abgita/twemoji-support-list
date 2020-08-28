# Twemoji support list

![npm](https://img.shields.io/npm/v/twemoji-support-list)

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

if ( twemojiSupportList.has( emojiId ) ) {
  // Twemoji has an image for 'unknownSourceEmoji'
}
```

## If you only need the list file

Run <code>'./build'</code> and get it from './src/supported-emojis.json'
