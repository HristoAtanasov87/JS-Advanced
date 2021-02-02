const { expect } = require('chai');
const rgbToHexColor = require('./rgbToHex');

describe('rgbToHex', () => {
    it('convert black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('convert white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('convert red to hex', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('convert green to hex', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });

    it('convert blue to hex', () => {
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    });

    it('returns undefined if input is smaller', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('returns undefined if input is smaller', () => {
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('returns undefined if input is smaller', () => {
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('returns undefined if input is greater', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('returns undefined if input is greater', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it('returns undefined if input is greater', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('returns undefined if input type is invalid', () => {
        expect(rgbToHexColor('a', 0, 0)).to.be.undefined;
    });

    it('returns undefined if input type is invalid', () => {
        expect(rgbToHexColor(0, 'a', 0)).to.be.undefined;
    });

    it('returns undefined if input type is invalid', () => {
        expect(rgbToHexColor(0, 0, 'a')).to.be.undefined;
    });


    //test overloading
    it('converts (151, 104, 172) to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC');
    });

    it('converts (42, 173, 170) to hex', () => {
        expect(rgbToHexColor(42, 173, 170)).to.equal('#2AADAA');
    });
})