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