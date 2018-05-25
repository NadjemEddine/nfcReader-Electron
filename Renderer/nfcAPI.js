const {NFC} = require('nfc-pcsc');
var u
var getUID = function () {
    const nfc = new NFC();
    nfc.on('reader', function (reader) {
        document.querySelector('.uid').innerHTML = "Waiting for card"
        reader.on('card', function (card) {
            document.querySelector('.uid').innerHTML = card.uid
        })
        reader.on('card.off', card => {
            document.querySelector('.uid').innerHTML = "Waiting for card"
        });
    })
}

module.exports = getUID