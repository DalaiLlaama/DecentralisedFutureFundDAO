webpackHotUpdate(6,{

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(436);

var _routes = __webpack_require__(870);

var _dffdao = __webpack_require__(992);

var _dffdao2 = _interopRequireDefault(_dffdao);

var _Layout = __webpack_require__(868);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\dev\\workspace\\DecentralisedFutureFundDAO\\front-end\\pages\\proposals\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\dev\\workspace\\DecentralisedFutureFundDAO\\front-end\\pages\\proposals\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/proposals\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi42MTc0MTFiZGQwZTY2ZTgzOWEyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvcG9zYWxzPzM5N2Q0N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBkZmZkYW8gZnJvbSAnLi4vLi4vZXRoZXJldW0vZGZmZGFvJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5cclxuY2xhc3MgRGZmRGFvSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1x0XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuXHRcdGNvbnN0IHByb3BDb3VudCA9IGF3YWl0IGRmZmRhby5tZXRob2RzLm51bWJlck9mUHJvcG9zYWxzKCkuY2FsbCgpO1xyXG5cdFx0Y29uc3QgcHJvcG9zYWxzID0gW107XHJcblx0XHRmb3IgKHZhciBpOyBpPD1wcm9wQ291bnQ7IGkrKykge1xyXG5cdFx0XHRjb25zdCBwcm9wb3NhbCA9IGF3YWl0IGRmZmRhby5tZXRob2RzLmdldFByb3Bvc2FsRGF0YTEoaSkuY2FsbCgpO1xyXG5cdFx0XHRwcm9wb3NhbHMucHVzaChwcm9wb3NhbCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiB7IHByb3Bvc2FscyB9O1xyXG5cdH1cclxuXHJcblx0cmVuZGVyUHJvcG9zYWxzKCkge1xyXG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnByb3Bvc2Fscy5tYXAoaW5kZXggPT4ge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGhlYWRlcjogZGVzY3JpcHRpb24sXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IChcclxuXHRcdFx0XHRcdDxMaW5rIHJvdXRlPXtgL3Byb3Bvc2Fscy8ke2luZGV4fWB9PlxyXG5cdFx0XHRcdFx0XHQ8YT5WaWV3IFByb3Bvc2FsPC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdCksXHJcblx0XHRcdFx0Zmx1aWQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xyXG5cdH1cclxuXHRcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRcclxuXHRcdHJldHVybiAoXHJcblx0XHQ8TGF5b3V0PlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGgzPkN1cnJlbnQgUHJvcG9zYWxzPC9oMz5cclxuXHRcdFx0PExpbmsgcm91dGU9XCIvcHJvcG9zYWxzL25ld1wiID5cclxuXHRcdFx0PGE+XHJcblx0XHRcdFx0PEJ1dHRvbiBcclxuXHRcdFx0XHRcdGNvbnRlbnQ9XCJDcmVhdGUgUHJvcG9zYWxcIlxyXG5cdFx0XHRcdFx0aWNvbj1cImFkZFwiIFxyXG5cdFx0XHRcdFx0cHJpbWFyeVxyXG5cdFx0XHRcdFx0ZmxvYXRlZD1cInJpZ2h0XCJcdFx0XHRcdFx0XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHQ8L0xpbms+XHJcblx0XHRcdHt0aGlzLnJlbmRlclByb3Bvc2FscygpfVxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8L0xheW91dD5cclxuXHQpfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZmZEYW9JbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wcm9wb3NhbHM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUFBOztBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBUkE7QUFVQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUtBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBSkE7QUFRQTtBQVJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQW5DQTtBQUNBO0FBREE7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUhBOzs7Ozs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9