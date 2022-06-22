const converter = require('../index')

test('should convert time to text', () => {
    expect(converter.convertTimeToText(4,50)).toBe('ten minutes to five');
    expect(converter.convertTimeToText(5,0)).toBe('five o\' clock');
    expect(converter.convertTimeToText(12,0)).toBe('twelve o\' clock');
    expect(converter.convertTimeToText(0,0)).toBe('twelve o\' clock');
    expect(converter.convertTimeToText(5,1)).toBe('one minute past five');
    expect(converter.convertTimeToText(12,1)).toBe('one minute past twelve');
    expect(converter.convertTimeToText(5,10)).toBe('ten minutes past five');
    expect(converter.convertTimeToText(5,15)).toBe('quarter past five');
    expect(converter.convertTimeToText(5,30)).toBe('half past five');
    expect(converter.convertTimeToText(5,37)).toBe('twenty three minutes to six');
    expect(converter.convertTimeToText(5,40)).toBe('twenty minutes to six');
    expect(converter.convertTimeToText(5,45)).toBe('quarter to six');
    expect(converter.convertTimeToText(5,47)).toBe('thirteen minutes to six');
    expect(converter.convertTimeToText(5,28)).toBe('twenty eight minutes past five');
    expect(converter.convertTimeToText(12,24)).toBe('twenty four minutes past twelve');
    expect(converter.convertTimeToText(11,50)).toBe('ten minutes to twelve');
    expect(converter.convertTimeToText(12,50)).toBe('ten minutes to one');
    expect(converter.convertTimeToText(12,20)).toBe('twenty minutes past twelve');
});
