'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\dev\\workspace\\DecentralisedFutureFundDAO\\front-end\\components\\Header.js';


var SiteMenu = function (_Component) {
	(0, _inherits3.default)(SiteMenu, _Component);

	function SiteMenu() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SiteMenu);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SiteMenu.__proto__ || (0, _getPrototypeOf2.default)(SiteMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = { activeItem: 'home' }, _this.handleItemClick = function (e, _ref2) {
			var name = _ref2.name;
			return _this.setState({ activeItem: name });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SiteMenu, [{
		key: 'render',
		value: function render() {
			var activeItem = this.state.activeItem;

			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, _react2.default.createElement(_semanticUiReact.Menu, { attached: 'top', tabular: true, style: { marginTop: '10px', marginBottom: '20px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'home', active: activeItem === 'home', __source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement(_routes.Link, { route: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, _react2.default.createElement('a', { className: 'item', __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, 'Home'))), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'proposals', active: activeItem === 'proposals', __source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, _react2.default.createElement(_routes.Link, { route: '/proposals', __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, _react2.default.createElement('a', { className: 'item', __source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, 'Proposals'))), _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'members', active: activeItem === 'members', __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, _react2.default.createElement(_routes.Link, { route: '/members', __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement('a', { className: 'item', __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, 'Members')))));
		}
	}]);

	return SiteMenu;
}(_react.Component);

exports.default = SiteMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJMaW5rIiwiU2l0ZU1lbnUiLCJzdGF0ZSIsImFjdGl2ZUl0ZW0iLCJoYW5kbGVJdGVtQ2xpY2siLCJlIiwibmFtZSIsInNldFN0YXRlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQVMsQUFBWTs7Ozs7OztJQUVBLEE7Ozs7Ozs7Ozs7Ozs7OzhNQUNuQixBLFFBQVEsRUFBRSxZQUFGLEFBQWMsQSxnQixBQUV0QixrQkFBa0IsVUFBQSxBQUFDLFVBQUQ7T0FBQSxBQUFNLGFBQU4sQUFBTTtVQUFXLE1BQUEsQUFBSyxTQUFTLEVBQUUsWUFBakMsQUFBaUIsQUFBYyxBQUFjO0E7Ozs7OzJCQUV0RDtPQUFBLEFBQ0YsYUFBZSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0YsQUFFUjs7MEJBQ0UsY0FBQTs7ZUFBQTtpQkFBQSxBQUNEO0FBREM7QUFBQSxJQUFBLGtCQUNELEFBQUMsdUNBQUssVUFBTixBQUFlLE9BQU0sU0FBckIsTUFBNkIsT0FBTyxFQUFFLFdBQUYsQUFBYSxRQUFRLGNBQXpELEFBQW9DLEFBQW1DO2VBQXZFO2lCQUFBLEFBQ0U7QUFERjtzQkFDRyxjQUFELHNCQUFBLEFBQU0sUUFBSyxNQUFYLEFBQWdCLFFBQU8sUUFBUSxlQUEvQixBQUE4QztlQUE5QztpQkFBQSxBQUNEO0FBREM7c0JBQ0QsQUFBQyw4QkFBSyxPQUFOLEFBQVk7ZUFBWjtpQkFBQSxBQUNFO0FBREY7c0JBQ0UsY0FBQSxPQUFHLFdBQUgsQUFBYTtlQUFiO2lCQUFBO0FBQUE7TUFISCxBQUNFLEFBQ0QsQUFDRSxBQUdELDJCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE1BQVgsQUFBZ0IsYUFBWSxRQUFRLGVBQXBDLEFBQW1EO2VBQW5EO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0U7QUFERjtzQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2VBQWI7aUJBQUE7QUFBQTtNQVJMLEFBTUUsQUFDQyxBQUNFLEFBR0gsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQixXQUFVLFFBQVEsZUFBbEMsQUFBaUQ7ZUFBakQ7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsOEJBQUssT0FBTixBQUFZO2VBQVo7aUJBQUEsQUFDRTtBQURGO3NCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7ZUFBYjtpQkFBQTtBQUFBO01BZk4sQUFDRSxBQUNELEFBV0UsQUFDQyxBQUNFLEFBTUo7Ozs7O0FBN0JtQyxBOztrQkFBakIsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiQzovZGV2L3dvcmtzcGFjZS9EZWNlbnRyYWxpc2VkRnV0dXJlRnVuZERBTy9mcm9udC1lbmQifQ==