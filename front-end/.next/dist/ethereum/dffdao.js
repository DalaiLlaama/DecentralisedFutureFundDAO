'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('../web3');

var _web2 = _interopRequireDefault(_web);

var _DFFDAO = require('./build/DFFDAO.json');

var _DFFDAO2 = _interopRequireDefault(_DFFDAO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(JSON.parse(DecentralisedFutureFundDAO.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxkZmZkYW8uanMiXSwibmFtZXMiOlsid2ViMyIsIkRGRkRBTyIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsIkRlY2VudHJhbGlzZWRGdXR1cmVGdW5kREFPIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBbUIsQUFBbkIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzNCO1FBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ04sS0FBSyxBQUFMLE1BQVcsMkJBQTJCLEFBQXRDLEFBRE0sWUFFTixBQUZNLEFBQVAsQUFJQTtBQUxEIiwiZmlsZSI6ImRmZmRhby5qcyIsInNvdXJjZVJvb3QiOiJDOi9kZXYvd29ya3NwYWNlL0RlY2VudHJhbGlzZWRGdXR1cmVGdW5kREFPL2Zyb250LWVuZCJ9