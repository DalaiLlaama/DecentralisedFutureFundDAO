'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _routes = require('../../routes');

var _dffdao = require('../../ethereum/dffdao');

var _dffdao2 = _interopRequireDefault(_dffdao);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\dev\\workspace\\DecentralisedFutureFundDAO\\front-end\\pages\\proposals\\index.js?entry';


var DffDaoIndex = function (_Component) {
	(0, _inherits3.default)(DffDaoIndex, _Component);

	function DffDaoIndex() {
		(0, _classCallCheck3.default)(this, DffDaoIndex);

		return (0, _possibleConstructorReturn3.default)(this, (DffDaoIndex.__proto__ || (0, _getPrototypeOf2.default)(DffDaoIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(DffDaoIndex, [{
		key: 'renderProposals',
		value: function renderProposals() {
			var items = this.props.proposals.map(function (index) {
				return {
					header: description,
					description: _react2.default.createElement(_routes.Link, { route: '/proposals/' + index, __source: {
							fileName: _jsxFileName,
							lineNumber: 26
						}
					}, _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 27
						}
					}, 'View Proposal')),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'Current Proposals'), _react2.default.createElement(_routes.Link, { route: '/proposals/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				content: 'Create Proposal',
				icon: 'add',
				primary: true,
				floated: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}))), this.renderProposals()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var propCount, proposals, i, proposal;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _dffdao2.default.methods.numberOfProposals().call();

							case 2:
								propCount = _context.sent;
								proposals = [];

							case 4:
								if (!(i <= propCount)) {
									_context.next = 12;
									break;
								}

								_context.next = 7;
								return _dffdao2.default.methods.getProposalData1(i).call();

							case 7:
								proposal = _context.sent;

								proposals.push(proposal);

							case 9:
								i++;
								_context.next = 4;
								break;

							case 12:
								return _context.abrupt('return', { proposals: proposals });

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return DffDaoIndex;
}(_react.Component);

exports.default = DffDaoIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9wb3NhbHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkljb24iLCJMaW5rIiwiZGZmZGFvIiwiTGF5b3V0IiwiRGZmRGFvSW5kZXgiLCJpdGVtcyIsInByb3BzIiwicHJvcG9zYWxzIiwibWFwIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJpbmRleCIsImZsdWlkIiwicmVuZGVyUHJvcG9zYWxzIiwibWV0aG9kcyIsIm51bWJlck9mUHJvcG9zYWxzIiwiY2FsbCIsInByb3BDb3VudCIsImkiLCJnZXRQcm9wb3NhbERhdGExIiwicHJvcG9zYWwiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQVMsQUFBTSxBQUFROztBQUN2QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBR2I7Ozs7Ozs7Ozs7O29DQVlhLEFBQ2pCO09BQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksaUJBQVMsQUFDL0M7O2FBQU8sQUFDRSxBQUNSO2tDQUNDLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7aUJBQTNCO21CQUFBLEFBQ0M7QUFERDtNQUFBLGtCQUNDLGNBQUE7O2lCQUFBO21CQUFBO0FBQUE7QUFBQSxRQUpJLEFBR0wsQUFDQyxBQUdGO1lBUEQsQUFBTyxBQU9DLEFBRVI7QUFUTyxBQUNOO0FBRkYsQUFBYyxBQVlkLElBWmM7O3dDQVlQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUVSOzswQkFDQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0E7QUFEQTtBQUFBLElBQUEsa0JBQ0EsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxzQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtlQUFaO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQSxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUM7YUFBRCxBQUNTLEFBQ1I7VUFGRCxBQUVNLEFBQ0w7YUFIRCxBQUlDO2FBSkQsQUFJUzs7ZUFKVDtpQkFKRixBQUVDLEFBQ0EsQUFDQyxBQVFBO0FBUkE7QUFDQyxjQVBILEFBQ0EsQUFDQSxBQVlFLEFBQUssQUFHTjs7Ozs7Ozs7Ozs7O2VBN0N1QixpQkFBQSxBQUFPLFFBQVAsQUFBZSxvQixBQUFmLEFBQW1DOztZQUFyRDtBLDZCQUNBO0Esb0JBQVksQTs7O2NBQ04sSyxBQUFHOzs7Ozs7ZUFDUyxpQkFBQSxBQUFPLFFBQVAsQUFBZSxpQkFBZixBQUFnQyxHQUFoQyxBQUFtQyxBOztZQUFwRDtBLDRCQUNOOztrQkFBQSxBQUFVLEtBQVYsQUFBZTs7WUFGVTtBOzs7Ozt5Q0FLbkIsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUaUIsQSxBQWtEMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovZGV2L3dvcmtzcGFjZS9EZWNlbnRyYWxpc2VkRnV0dXJlRnVuZERBTy9mcm9udC1lbmQifQ==