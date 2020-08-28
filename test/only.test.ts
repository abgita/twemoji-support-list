import twemojiSupports from '../src';

describe('if it returns correctly...', () => {
    it("it does!", () => {
            expect(twemojiSupports.has('1F600')).toBeTruthy();
            expect(twemojiSupports.unsafeHas('1F600')).toBeFalsy();
            expect(twemojiSupports.unsafeHas('1f600')).toBeTruthy();
            expect(twemojiSupports.has('fake_emoji_code_point')).toBeFalsy();
        }
    )
});