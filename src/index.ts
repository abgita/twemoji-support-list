/*
    Copyright (c) 2020, @abgita

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import supportedEmojis from './supported-emojis.json';

const supportedEmojisMap: Map<string, null> = new Map();

supportedEmojis.list.forEach((emojiId: string) => {
    return supportedEmojisMap.set(emojiId, null);
});

interface TwemojiSupportList {
    unsafeHas(emojiCodePoint: string): boolean;

    has(emojiCodePoint: string): boolean;
}

const tsl: TwemojiSupportList = {
    unsafeHas: function (emojiCodePoint: string) {
        return supportedEmojisMap.has(emojiCodePoint);
    },

    has: (emojiCodePoint: string) => {
        if (!emojiCodePoint) return false;

        const key = emojiCodePoint.toLowerCase();

        return supportedEmojisMap.has(key);
    }
};

export default tsl;
