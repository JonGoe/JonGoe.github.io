(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/AppConfig.ts":
/*!******************************!*\
  !*** ./src/app/AppConfig.ts ***!
  \******************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.getShortNameByMetricName = function (metricName) {
        return this.METRIC_NAME_MAPPING.find(function (namePair) { return namePair.metricName === metricName; });
    };
    // CODERADAR SERVER CONFIG
    AppConfig.BASE_URL = 'https://adesso-coderadar-dev01.test-server.ag';
    //static BASE_URL = 'http://localhost:8080';
    AppConfig.USERNAME = 'radar';
    AppConfig.PASSWORD = 'Password12!';
    AppConfig.TIME_FILTER_MAPPING = [
        {
            name: "total",
            timestampValue: -1,
        },
        {
            name: "today",
            timestampValue: 86400000,
        },
        {
            name: "lastWeek",
            timestampValue: 604800000,
        },
        {
            name: "lastTwoWeeks",
            timestampValue: 1209600000,
        },
        {
            name: "lastMonth",
            timestampValue: 2629743000,
        },
        {
            name: "lastSixMonths",
            timestampValue: 15778458000,
        },
    ];
    // METRIC NAME MAPPING
    AppConfig.METRIC_NAME_MAPPING = [
        {
            shortName: 'CyclomaticComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.CyclomaticComplexityCheck',
            pointValue: 15,
            shortDescription: 'Checks cyclomatic complexity against a specified limit.'
        },
        {
            shortName: 'NPathComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.NPathComplexityCheck',
            pointValue: 15,
            shortDescription: 'Checks the npath complexity against a specified limit.'
        },
        {
            shortName: 'TodoComments',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.TodoCommentCheck',
            pointValue: 15,
            shortDescription: 'A check for TODO comments.'
        },
        {
            shortName: 'UncommentedMains',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.UncommentedMainCheck',
            pointValue: 5,
            shortDescription: 'Detects uncommented main methods.'
        },
        {
            shortName: 'EqualsAvoidNull',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.EqualsAvoidNullCheck',
            pointValue: 10,
            shortDescription: 'Checks that any combination of String literals is on the left side of an equals() comparison.'
        },
        {
            shortName: 'FinalLocalVariable',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.FinalLocalVariableCheck',
            pointValue: 5,
            shortDescription: 'Ensures that local variables that never get their values changed, must be declared final.'
        },
        {
            shortName: 'HiddenField',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.HiddenFieldCheck',
            pointValue: 5,
            shortDescription: 'Checks that a local variable or a parameter does not shadow a field that is defined in the same class.'
        },
        {
            shortName: 'IllegalCatch',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.IllegalCatchCheck',
            pointValue: 15,
            shortDescription: 'Catching java.lang.Exception, java.lang.Error or java.lang.RuntimeException is almost never acceptable.'
        },
        {
            shortName: 'MagicNumber',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MagicNumberCheck',
            pointValue: 15,
            shortDescription: 'Checks for magic numbers.'
        },
        {
            shortName: 'MultipleStringLiterals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleStringLiteralsCheck',
            pointValue: 10,
            shortDescription: 'Checks for multiple occurrences of the same string literal within a single file.'
        },
        {
            shortName: 'OverloadMethodsDeclarationOrder',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.OverloadMethodsDeclarationOrderCheck',
            pointValue: 5,
            shortDescription: 'Checks that overload methods are grouped together.'
        },
        {
            shortName: 'ReturnCount',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.ReturnCountCheck',
            pointValue: 10,
            shortDescription: ' Restricts return statements to a specified count (default = 2).'
        },
        {
            shortName: 'VariableDeclarationUsageDistance',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.VariableDeclarationUsageDistanceCheck',
            pointValue: 5,
            shortDescription: 'Checks the distance between declaration of variable and its first usage.'
        },
        {
            shortName: 'HideUtilityClassConstructor',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.HideUtilityClassConstructorCheck',
            pointValue: 5,
            shortDescription: 'Make sure that utility classes (classes that contain only static methods) do not have a public constructor.'
        },
        {
            shortName: 'AvoidStarImport',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.AvoidStarImportCheck',
            pointValue: 5,
            shortDescription: 'Check that finds import statements that use the * notation.'
        },
        {
            shortName: 'AvoidStaticImport',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.AvoidStaticImportCheck',
            pointValue: 5,
            shortDescription: 'Check that finds static imports.'
        },
        {
            shortName: 'UnusedImports',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.imports.UnusedImportsCheck',
            pointValue: 10,
            shortDescription: 'Checks for unused import statements.'
        },
        {
            shortName: 'AbstractClassName',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.name.AbstractClassNameCheck',
            pointValue: 5,
            shortDescription: 'Ensures that the names of abstract classes conforming to some regular expression and check that abstract modifier exists. '
        },
        {
            shortName: 'LineLength',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.sizes.LineLengthCheck',
            pointValue: 5,
            shortDescription: 'Checks for long lines.'
        },
    ];
    // VISUALIZATION SETTINGS
    AppConfig.EDGE_LENGTH_FACTOR = 2;
    AppConfig.HEIGHT_FACTOR = 0.1;
    // static GLOBAL_MAX_GROUND_AREA = 100;
    // static GLOBAL_MIN_GROUND_AREA = 1;
    // static GLOBAL_MAX_HEIGHT = 100;
    // static GLOBAL_MIN_HEIGHT = 1;
    AppConfig.BLOCK_SPACING = 5;
    AppConfig.MODULE_BLOCK_HEIGHT = 5;
    // CAMERA SETTINGS
    AppConfig.CAMERA_NEAR = 0.1;
    AppConfig.CAMERA_FAR = 100000;
    AppConfig.CAMERA_DISTANCE_TO_FOCUSSED_ELEMENT = 100;
    AppConfig.CAMERA_ANIMATION_DURATION = 1500;
    // COLORS
    AppConfig.COLOR_HIERARCHY_RANGE = ['#cccccc', '#525252'];
    AppConfig.COLOR_HEATMAP_RANGE = ['#ffffff', '#ffc905', '#f78400', '#e92100', '#9b1909', '#4f1609', '#5d0000'];
    AppConfig.COLOR_CONNECTION = '#000000';
    AppConfig.COLOR_FIRST_COMMIT = '#0e8cf3';
    AppConfig.COLOR_SECOND_COMMIT = '#ffb100';
    AppConfig.COLOR_ADDED_FILE = '#49c35c';
    AppConfig.COLOR_DELETED_FILE = '#d90206';
    AppConfig.COLOR_UNCHANGED_FILE = '#cccccc';
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<general-view></general-view>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: TeamGamificationAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamGamificationAppModule", function() { return TeamGamificationAppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_general_view_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/general-view.module */ "./src/app/components/general-view.module.ts");
/* harmony import */ var _service_commit_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/commit.service */ "./src/app/service/commit.service.ts");
/* harmony import */ var _service_metric_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/metric.service */ "./src/app/service/metric.service.ts");
/* harmony import */ var _service_setup_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/setup.service */ "./src/app/service/setup.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var TeamGamificationAppModule = /** @class */ (function () {
    function TeamGamificationAppModule() {
    }
    TeamGamificationAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _components_general_view_module__WEBPACK_IMPORTED_MODULE_10__["ViewModule"],
                _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({ maxAge: 50 })
            ],
            providers: [
                _service_commit_service__WEBPACK_IMPORTED_MODULE_11__["CommitService"],
                _service_metric_service__WEBPACK_IMPORTED_MODULE_12__["MetricService"],
                _service_setup_service__WEBPACK_IMPORTED_MODULE_13__["SetupService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], TeamGamificationAppModule);
    return TeamGamificationAppModule;
}());



/***/ }),

/***/ "./src/app/components/board-view/board-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/board-view/board-view.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choose-time-filter {\r\n  background: #213B4C;\r\n  border: solid 3px #213B4C;\r\n  display: inline-block;\r\n  margin: 1%;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-size: 30px;\r\n  text-align: center;\r\n  padding: 20px 0px 20px 0px;\r\n  width: 98%;\r\n  color: #ccc;\r\n  font-family: 'Arial', sans-serif;\r\n\r\n}\r\n\r\ninput[type=radio] {\r\n  position: absolute;\r\n  visibility: hidden;\r\n  display: none;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  padding: 2px 10px;\r\n  width: 15%;\r\n}\r\n\r\ninput[type=radio]:checked + label{\r\n  background: #0C1E28;\r\n  border-radius: 20px;\r\n}\r\n\r\nlabel + input[type=radio] + label {\r\n  border-left: solid $borderWidth $fg;\r\n}\r\n\r\n.board-container {\r\n  box-sizing: border-box;\r\n  display: flex;\r\n  max-height: 80%;\r\n  height: 80%;\r\n  place-content: center space-around;\r\n  align-content: center;\r\n  justify-content: space-around;\r\n  margin-top: 10px;\r\n  font-family: 'Arial', sans-serif;\r\n\r\n}\r\n\r\n.board-container::after {\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.leader-board-container {\r\n  float:left;\r\n  width: 60%;\r\n  height: 80%;\r\n}\r\n\r\n.commit-feed-container {\r\n  float: float;\r\n  width: 40%;\r\n  height: 80%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC12aWV3L2JvYXJkLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7O0NBRWxDOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztDQUNaOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLG9DQUFvQztDQUNyQzs7QUFFRDtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsaUNBQWlDOztDQUVsQzs7QUFFRDtFQUNFLFlBQVk7RUFDWixlQUFlO0NBQ2hCOztBQUdEO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQtdmlldy9ib2FyZC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvb3NlLXRpbWUtZmlsdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjEzQjRDO1xyXG4gIGJvcmRlcjogc29saWQgM3B4ICMyMTNCNEM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xyXG4gIHdpZHRoOiA5OCU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWx7XHJcbiAgYmFja2dyb3VuZDogIzBDMUUyODtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbCArIGlucHV0W3R5cGU9cmFkaW9dICsgbGFiZWwge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAkYm9yZGVyV2lkdGggJGZnO1xyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyOjphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcblxyXG4ubGVhZGVyLWJvYXJkLWNvbnRhaW5lciB7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogODAlO1xyXG59XHJcblxyXG4uY29tbWl0LWZlZWQtY29udGFpbmVyIHtcclxuICBmbG9hdDogZmxvYXQ7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/board-view/board-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/board-view/board-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ICommitElements.length == commits.length-1\n              && IUserLeaderboardElements\n              && activeTimeFilterValue;\n            else loadingScreen\">\n  <div class=\"choose-time-filter\">\n    <input type=\"radio\" id=\"radio-today\" name=\"radio-group-screen\" class=\"custom-control-input\" [value]=\"86400000\" [(ngModel)]=\"activeTimeFilterValue\"/>\n    <label class=\"custom-control-label\" for=\"radio-today\" title=\"Heute\">24 Stunden</label>\n    <input type=\"radio\" id=\"radio-3-days\" name=\"radio-group-screen\" class=\"custom-control-input\" [value]=\"259200000\" [(ngModel)]=\"activeTimeFilterValue\"/>\n    <label class=\"custom-control-label\" for=\"radio-3-days\" title=\"Diese Woche\">3 Tage</label>\n    <input type=\"radio\" id=\"radio-week\" name=\"radio-group-screen\" class=\"custom-control-input\" [value]=\"604800000\" [(ngModel)]=\"activeTimeFilterValue\"/>\n    <label class=\"custom-control-label\" for=\"radio-week\" title=\"Diese Woche\">7 Tage</label>\n    <input type=\"radio\" id=\"radio-2-weeks\" name=\"radio-group-screen\" class=\"custom-control-input\" [value]=\"1209600000\" [(ngModel)]=\"activeTimeFilterValue\" />\n    <label class=\"custom-control-label\" for=\"radio-2-weeks\" title=\"Insgesamt\">2 Wochen</label>\n    <input type=\"radio\" id=\"radio-month\" name=\"radio-group-screen\" class=\"custom-control-input\" [value]=\"2629743000\" [(ngModel)]=\"activeTimeFilterValue\"/>\n    <label class=\"custom-control-label\" for=\"radio-month\" title=\"Dieser Monat\">1 Monat</label>\n  </div>\n  <div class=\"board-container\">\n    <div class=\"leader-board-container\">\n      <leader-board\n        [commitElements]=\"ICommitElements\"\n        [userLeaderboardElements]=\"IUserLeaderboardElements\"\n        [activeFilter]=\"activeTimeFilterValue\">Loading...\n      </leader-board>\n    </div>\n    <div class=\"commit-feed-container\">\n      <commit-feed\n        [commitElements]=\"ICommitElements\"\n        [activeFilter]=\"activeTimeFilterValue\">Loading...\n      </commit-feed>\n    </div>\n  </div>\n</div>\n<ng-template #loadingScreen>\n  <loading-screen\n    [loadingIterator]=\"ICommitElements.length\"\n    [loadingElements]=\"commits.length-1\">\n  </loading-screen>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/components/board-view/board-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/board-view/board-view.component.ts ***!
  \***************************************************************/
/*! exports provided: BoardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardViewComponent", function() { return BoardViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/metric.service */ "./src/app/service/metric.service.ts");
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AppConfig */ "./src/app/AppConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BoardViewComponent = /** @class */ (function () {
    function BoardViewComponent(metricService) {
        this.metricService = metricService;
    }
    BoardViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.commits);
        console.log(this.availableMetrics);
        console.log(Date.now() - 15778458000);
        this.commits.filter(function (ICommit) { return ICommit.timestamp > (Date.now() - 15778458000); });
        console.log(this.commits);
        this.activeTimeFilterValue = 15778458000;
        this.ICommitElements = [];
        this.IUserLeaderboardElements = [];
        this.authors = Array.from(new Set(this.commits.map(function (commit) { return commit.author; })));
        this.metricNames = this.availableMetrics.map(function (metric) { return metric.metricName; });
        var totalUserPoints = 0;
        for (var k = 0; k < this.authors.length; k++) {
            var authorName = this.authors[k];
            var totalUserHighscore = 0;
            var bestCommitName = this.commits[0].name;
            var bestCommitDate = new Date(this.commits[0].timestamp).toLocaleDateString();
            var singleUserHighscore = 0;
            this.IUserLeaderboardElements.push({
                user: authorName,
                totalUserPoints: totalUserHighscore,
                bestCommitName: bestCommitName,
                bestCommitDate: bestCommitDate,
                bestCommitPoints: singleUserHighscore,
            });
        }
        var _loop_1 = function () {
            var deltaTree;
            var tableRows = [];
            var totalCommitPoints = 0;
            var currentCommit = this_1.commits[i];
            //console.log(currentCommit);
            var previousCommit = this_1.commits[i + 1];
            //console.log(previousCommit);
            var commitDate = new Date(currentCommit.timestamp).toLocaleDateString();
            var currentUserKey = this_1.IUserLeaderboardElements.findIndex(function (i) { return i.user === currentCommit.author; });
            //console.log("------------------------------");
            this_1.metricService.loadDeltaTree(previousCommit, currentCommit, this_1.metricNames).subscribe(function (node) {
                deltaTree = node;
                //console.log(deltaTree);
                tableRows = _this.prepareTableData(deltaTree);
                for (var j = 0; j < tableRows.length; j++) {
                    totalCommitPoints += tableRows[j].points;
                }
                _this.ICommitElements.push({
                    currentCommit: currentCommit,
                    previousCommit: previousCommit,
                    date: commitDate,
                    totalPoints: totalCommitPoints,
                    tableRows: tableRows
                });
                if (totalCommitPoints > _this.IUserLeaderboardElements[currentUserKey].bestCommitPoints) {
                    _this.IUserLeaderboardElements[currentUserKey].bestCommitName = currentCommit.name;
                    _this.IUserLeaderboardElements[currentUserKey].bestCommitDate = commitDate;
                    _this.IUserLeaderboardElements[currentUserKey].bestCommitPoints = totalCommitPoints;
                }
                _this.IUserLeaderboardElements[currentUserKey].totalUserPoints += totalCommitPoints;
                _this.ICommitElements.sort(function (a, b) { return b.currentCommit.timestamp - a.currentCommit.timestamp; });
                _this.IUserLeaderboardElements.sort(function (a, b) { return b.totalUserPoints - a.totalUserPoints; });
                //console.log(this.IUserLeaderboardElements);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.commits.length - 1; i++) {
            _loop_1();
        }
    };
    BoardViewComponent.prototype.prepareTableData = function (foundElement) {
        var rows = [];
        for (var _i = 0, _a = Object.keys(this.availableMetrics); _i < _a.length; _i++) {
            var key = _a[_i];
            var metricName = this.availableMetrics[key].metricName;
            //console.log("Metricname: " + metricName);
            var currentCommitValue = void 0;
            if (foundElement.commit1Metrics && foundElement.commit1Metrics[metricName]) {
                currentCommitValue = foundElement.commit1Metrics[metricName];
                //console.log("Current Value: " + currentCommitValue);
            }
            var previousCommitValue = void 0;
            if (foundElement.commit2Metrics && foundElement.commit2Metrics[metricName]) {
                previousCommitValue = foundElement.commit2Metrics[metricName];
                //console.log("Previous Value: " + previousCommitValue);
            }
            var difference = 0;
            if (currentCommitValue && previousCommitValue) {
                difference = previousCommitValue - currentCommitValue;
                //console.log("Difference: " + difference);
            }
            var points = 0;
            if (difference != 0) {
                points = 10 * difference;
                //console.log("Points: " + points);
                rows.push({
                    metricName: _AppConfig__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].getShortNameByMetricName(metricName).shortName,
                    currentCommitValue: currentCommitValue || 'N/A',
                    previousCommitValue: previousCommitValue || 'N/A',
                    difference: difference,
                    points: points
                });
            }
        }
        return rows;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BoardViewComponent.prototype, "commits", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BoardViewComponent.prototype, "availableMetrics", void 0);
    BoardViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'board-view',
            template: __webpack_require__(/*! ./board-view.component.html */ "./src/app/components/board-view/board-view.component.html"),
            styles: [__webpack_require__(/*! ./board-view.component.css */ "./src/app/components/board-view/board-view.component.css")]
        }),
        __metadata("design:paramtypes", [_service_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"]])
    ], BoardViewComponent);
    return BoardViewComponent;
}());



/***/ }),

/***/ "./src/app/components/board-view/board-view.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/board-view/board-view.module.ts ***!
  \************************************************************/
/*! exports provided: BoardViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardViewModule", function() { return BoardViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-components/shared.module */ "./src/app/components/shared-components/shared.module.ts");
/* harmony import */ var _board_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board-view.component */ "./src/app/components/board-view/board-view.component.ts");
/* harmony import */ var _commit_feed_commit_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commit-feed/commit-feed.component */ "./src/app/components/board-view/commit-feed/commit-feed.component.ts");
/* harmony import */ var _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leader-board/leader-board.component */ "./src/app/components/board-view/leader-board/leader-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BoardViewModule = /** @class */ (function () {
    function BoardViewModule() {
    }
    BoardViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _board_view_component__WEBPACK_IMPORTED_MODULE_5__["BoardViewComponent"],
                _commit_feed_commit_feed_component__WEBPACK_IMPORTED_MODULE_6__["CommitFeedComponent"],
                _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_7__["LeaderBoardComponent"],
            ],
            exports: [
                _board_view_component__WEBPACK_IMPORTED_MODULE_5__["BoardViewComponent"],
                _commit_feed_commit_feed_component__WEBPACK_IMPORTED_MODULE_6__["CommitFeedComponent"],
                _leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_7__["LeaderBoardComponent"],
            ],
        })
    ], BoardViewModule);
    return BoardViewModule;
}());



/***/ }),

/***/ "./src/app/components/board-view/commit-feed/commit-feed.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/board-view/commit-feed/commit-feed.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#commit-feed {\r\n  .display: block;\r\n  max-height: 80%;\r\n  max-width: 90%;\r\n  height: 940px;\r\n  width: 90%;\r\n  padding: 10px;\r\n  border-spacing: 10 10;\r\n  background: #0C1E28;\r\n  overflow-y: auto;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  border-color: #0C1E28;\r\n\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-spacing: 0 0;\r\n  background: #213B4C;\r\n  color: white;\r\n  box-shadow: 0 0 20px #1E3344;\r\n  overflow: hidden;\r\n  padding: 10px;\r\n  margin: 5px;\r\n}\r\n\r\n.metric-table {\r\n  background: #0C1E28;\r\n  border: none;\r\n  margin: 10px;\r\n  text-align: left;\r\n  padding: 5px 10px 5px 10px;\r\n\r\n}\r\n\r\ntd {\r\n  border: 1px ;\r\n  text-align: left;\r\n  padding: 2px 10px 2px 10px;\r\n}\r\n\r\nthead {\r\n background: #0C1E28;\r\n  border: none;\r\n  margin: 10px;\r\n  padding: 10px 10px 20px 10px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.commit-points {\r\n  padding: 10px 10px 10px 10px;\r\n  text-align: center;\r\n  background: #0C1E28;\r\n  font-size: 20px;\r\n}\r\n\r\nfa-icon {\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC12aWV3L2NvbW1pdC1mZWVkL2NvbW1pdC1mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHNCQUFzQjs7Q0FFdkI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtDQUNiOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDJCQUEyQjs7Q0FFNUI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDJCQUEyQjtDQUM1Qjs7QUFFRDtDQUNDLG9CQUFvQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsNkJBQTZCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC12aWV3L2NvbW1pdC1mZWVkL2NvbW1pdC1mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29tbWl0LWZlZWQge1xyXG4gIC5kaXNwbGF5OiBibG9jaztcclxuICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA5NDBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEwIDEwO1xyXG4gIGJhY2tncm91bmQ6ICMwQzFFMjg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBib3JkZXItY29sb3I6ICMwQzFFMjg7XHJcblxyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMDtcclxuICBiYWNrZ3JvdW5kOiAjMjEzQjRDO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjMUUzMzQ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLm1ldHJpYy10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogIzBDMUUyODtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcblxyXG59XHJcblxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHg7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuIGJhY2tncm91bmQ6ICMwQzFFMjg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jb21taXQtcG9pbnRzIHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMEMxRTI4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuZmEtaWNvbiB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/board-view/commit-feed/commit-feed.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/board-view/commit-feed/commit-feed.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"commit-feed\">\n  <table *ngFor=\"let commitElement of formattedCommitElements\" class=\"commit-feed-element\" class=\"table table-striped table-sm\">\n    <thead>\n    <tr>\n      <th colspan=\"5\">{{commitElement.currentCommit.name}}</th>\n    </tr>\n    <tr>\n      <th colspan=\"2\"><fa-icon [icon]=\"faUser\"></fa-icon>{{commitElement.currentCommit.author}}</th>\n      <th colspan=\"3\"><fa-icon [icon]=\"faCalendarAlt\"></fa-icon>{{commitElement.date}}</th>\n    </tr>\n    </thead>\n    <tr class=\"metric-table\" *ngIf=\"commitElement.tableRows!=0\">\n      <th>Veränderte Metriken</th>\n      <th id=\"second-commit-id\">Vorher</th>\n      <th id=\"first-commit-id\">Nachher</th>\n      <th>Änderung</th>\n      <th>Punkte</th>\n    </tr>\n    <tbody>\n    <tr *ngFor=\"let row of commitElement.tableRows\" class=\"commit-metric-data\">\n      <td>{{row.metricName}}</td>\n      <td>{{row.previousCommitValue}}</td>\n      <td>{{row.currentCommitValue}}</td>\n      <td>\n        <fa-icon *ngIf=\"row.difference < 0\" [icon]=\"faCaretUp\"></fa-icon>\n        <fa-icon *ngIf=\"row.difference > 0\" [icon]=\"faCaretDown\"></fa-icon>\n        {{row.difference}}\n      </td>\n      <td>{{row.points}}</td>\n    </tr>\n    <tr>\n      <td colspan=\"5\" class=\"commit-points\">\n        <fa-icon *ngIf=\"commitElement.totalPoints>0\"[icon]=\"faPlusSquare\"></fa-icon>\n        <fa-icon *ngIf=\"commitElement.totalPoints==0\"[icon]=\"faSquare\"></fa-icon>\n        {{commitElement.totalPoints}}\n        <fa-icon *ngIf=\"commitElement.totalPoints>0\"[icon]=\"faPlusSquare\"></fa-icon>\n        <fa-icon *ngIf=\"commitElement.totalPoints==0\"[icon]=\"faSquare\"></fa-icon>\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/board-view/commit-feed/commit-feed.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/board-view/commit-feed/commit-feed.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommitFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitFeedComponent", function() { return CommitFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommitFeedComponent = /** @class */ (function () {
    function CommitFeedComponent() {
        this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"];
        this.faCaretUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretUp"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlusSquare"];
        this.faChevronCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronCircleRight"];
        this.faJedi = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faJedi"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
        this.faSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        this.faSortAmountUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortAmountUp"];
    }
    CommitFeedComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.commitElements.sort(function (a, b) { return b.currentCommit.timestamp - a.currentCommit.timestamp; });
        this.formattedCommitElements = this.commitElements.filter(function (commitElement) { return commitElement.currentCommit.timestamp > Date.now() - _this.activeFilter; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommitFeedComponent.prototype, "commitElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CommitFeedComponent.prototype, "activeFilter", void 0);
    CommitFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'commit-feed',
            template: __webpack_require__(/*! ./commit-feed.component.html */ "./src/app/components/board-view/commit-feed/commit-feed.component.html"),
            styles: [__webpack_require__(/*! ./commit-feed.component.css */ "./src/app/components/board-view/commit-feed/commit-feed.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommitFeedComponent);
    return CommitFeedComponent;
}());



/***/ }),

/***/ "./src/app/components/board-view/leader-board/leader-board.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/board-view/leader-board/leader-board.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#leader-board {\r\n  .display: block;\r\n  max-height: 80%;\r\n  max-width: 90%;\r\n  height: 940px;\r\n  width: 90%;\r\n  padding: 10px;\r\n  border-spacing: 10 10;\r\n  background: #0C1E28;\r\n  overflow-y: auto;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  border-color: #0C1E28;\r\n\r\n}\r\n\r\ntable {\r\n  width: 80%;\r\n  border-spacing: 0 0;\r\n  background: #213B4C;\r\n  color: white;\r\n  box-shadow: 0 0 20px #1E3344;\r\n  overflow: hidden;\r\n  padding: 10px;\r\n  margin: 50px;\r\n  margin-top: 5px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\nth {\r\n  font-size: 30px;\r\n  background: #0C1E28;\r\n  border: none;\r\n  margin: 10px;\r\n  padding: 0;\r\n  text-align: left;\r\n  padding: 20px 10px 20px 10px;\r\n\r\n}\r\n\r\ntd {\r\n  border: 1px ;\r\n  text-align: left;\r\n  padding: 20px 10px 20px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC12aWV3L2xlYWRlci1ib2FyZC9sZWFkZXItYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCOztDQUV2Qjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDZCQUE2Qjs7Q0FFOUI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtDQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQtdmlldy9sZWFkZXItYm9hcmQvbGVhZGVyLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGVhZGVyLWJvYXJkIHtcclxuICAuZGlzcGxheTogYmxvY2s7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIGhlaWdodDogOTQwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1zcGFjaW5nOiAxMCAxMDtcclxuICBiYWNrZ3JvdW5kOiAjMEMxRTI4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMEMxRTI4O1xyXG5cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMDtcclxuICBiYWNrZ3JvdW5kOiAjMjEzQjRDO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjMUUzMzQ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjMEMxRTI4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDIwcHggMTBweCAyMHB4IDEwcHg7XHJcblxyXG59XHJcblxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/board-view/leader-board/leader-board.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/board-view/leader-board/leader-board.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leader-board\">\n  <div id=\"leader-board-users\">\n    <table id=\"user-leaderboard\" class=\"leader-board-element\" class=\"table table-striped table-sm\">\n      <thead>\n      <tr>\n        <th>#</th>\n        <th>User</th>\n        <th>Score</th>\n        <th>Bester Commit</th>\n      </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let userElement of formattedUserElements; let u = index\">\n          <td>{{u+1}}</td>\n          <td>{{userElement.user}}</td>\n          <td>{{userElement.totalUserPoints}}</td>\n          <td>\n            <tr>{{userElement.bestCommitName}}</tr>\n            <tr>{{userElement.bestCommitDate}}</tr>\n            <tr>{{userElement.bestCommitPoints}} Punkte</tr>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div id=\"leader-board-commits\">\n    <table id=\"commit-leaderboard\" class=\"leader-board-element\" class=\"table table-striped table-sm\">\n      <thead>\n      <tr>\n        <th>#</th>\n        <th>Commit</th>\n        <th>User</th>\n        <th>Datum</th>\n        <th>Punkte</th>\n      </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let commitElement of formattedCommitElements; let c = index\">\n          <td>{{c+1}}</td>\n          <td>{{commitElement.currentCommit.name}}</td>\n          <td>{{commitElement.currentCommit.author}}</td>\n          <td>{{commitElement.date}}</td>\n          <td>{{commitElement.totalPoints}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/board-view/leader-board/leader-board.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/board-view/leader-board/leader-board.component.ts ***!
  \******************************************************************************/
/*! exports provided: LeaderBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderBoardComponent", function() { return LeaderBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeaderBoardComponent = /** @class */ (function () {
    function LeaderBoardComponent() {
        this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretDown"];
        this.faCaretUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCaretUp"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlusSquare"];
        this.faChevronCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronCircleRight"];
        this.faJedi = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faJedi"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"];
        this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendarAlt"];
        this.faSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquare"];
        this.faSortAmountUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSortAmountUp"];
    }
    LeaderBoardComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.formattedCommitElements = [];
        this.commitElements.sort(function (a, b) { return b.totalPoints - a.totalPoints; }).filter(function (commitElement) { return commitElement.currentCommit.timestamp > Date.now() - _this.activeFilter; });
        console.log(this.commitElements);
        this.formattedUserElements = this.userLeaderboardElements.sort(function (a, b) { return b.totalUserPoints - a.totalUserPoints; });
        for (var i = 0; i < 10; i++) {
            this.formattedCommitElements.push(this.commitElements[i]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LeaderBoardComponent.prototype, "commitElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LeaderBoardComponent.prototype, "userLeaderboardElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LeaderBoardComponent.prototype, "activeFilter", void 0);
    LeaderBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'leader-board',
            template: __webpack_require__(/*! ./leader-board.component.html */ "./src/app/components/board-view/leader-board/leader-board.component.html"),
            styles: [__webpack_require__(/*! ./leader-board.component.css */ "./src/app/components/board-view/leader-board/leader-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeaderBoardComponent);
    return LeaderBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/general-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/components/general-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "font-family: 'Arial', sans-serif;\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZW5lcmFsLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dlbmVyYWwtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/general-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/general-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<board-view *ngIf=\"commits && appMetrics\"\n            [commits]=\"commits\"\n            [availableMetrics]=\"appMetrics\">\n</board-view>\n"

/***/ }),

/***/ "./src/app/components/general-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/general-view.component.ts ***!
  \******************************************************/
/*! exports provided: GeneralViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralViewComponent", function() { return GeneralViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_metric_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/metric.service */ "./src/app/service/metric.service.ts");
/* harmony import */ var _service_commit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/commit.service */ "./src/app/service/commit.service.ts");
/* harmony import */ var _service_setup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/setup.service */ "./src/app/service/setup.service.ts");
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AppConfig */ "./src/app/AppConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GeneralViewComponent = /** @class */ (function () {
    function GeneralViewComponent(commitService, metricService, setupService) {
        this.commitService = commitService;
        this.metricService = metricService;
        this.setupService = setupService;
    }
    GeneralViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serverSetUp = false;
        this.setupService.setupServer();
        if (this.serverSetUp) {
            this.commitService.loadCommits().subscribe(function (commits) {
                commits
                    .filter(function (ICommit) { return ICommit.timestamp > (Date.now() - 15778458000); })
                    .filter(function (ICommit) { return ICommit.analyzed == true; })
                    .sort(function (a, b) { return b.timestamp - a.timestamp; });
                _this.commits = commits;
            });
            this.appMetrics = Array.from(new Set(_AppConfig__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].METRIC_NAME_MAPPING));
            //this.metricService.loadAvailableMetrics().subscribe(metrics => this.availableMetrics = metrics);
        }
    };
    GeneralViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'general-view',
            template: __webpack_require__(/*! ./general-view.component.html */ "./src/app/components/general-view.component.html"),
            styles: [__webpack_require__(/*! ./general-view.component.css */ "./src/app/components/general-view.component.css")]
        }),
        __metadata("design:paramtypes", [_service_commit_service__WEBPACK_IMPORTED_MODULE_2__["CommitService"],
            _service_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"],
            _service_setup_service__WEBPACK_IMPORTED_MODULE_3__["SetupService"]])
    ], GeneralViewComponent);
    return GeneralViewComponent;
}());



/***/ }),

/***/ "./src/app/components/general-view.module.ts":
/*!***************************************************!*\
  !*** ./src/app/components/general-view.module.ts ***!
  \***************************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_view_board_view_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-view/board-view.module */ "./src/app/components/board-view/board-view.module.ts");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-components/shared.module */ "./src/app/components/shared-components/shared.module.ts");
/* harmony import */ var _general_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-view.component */ "./src/app/components/general-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _board_view_board_view_module__WEBPACK_IMPORTED_MODULE_3__["BoardViewModule"],
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _general_view_component__WEBPACK_IMPORTED_MODULE_5__["GeneralViewComponent"],
            ],
            exports: [
                _general_view_component__WEBPACK_IMPORTED_MODULE_5__["GeneralViewComponent"],
            ],
        })
    ], ViewModule);
    return ViewModule;
}());



/***/ }),

/***/ "./src/app/components/shared-components/header/header.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared-components/header/header.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <p>Team-Gamification-App</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared-components/header/header.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared-components/header/header.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #bbb;\n  width: 100%;\n  left: 0;\n  top: 0;\n  border-bottom: 1px solid #666;\n  border-top: 1px solid #666;\n  font-size: 35px;\n  color: #ccc;\n  background-color: #213B4C;\n  text-align: center;\n  font-family: 'Arial', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtY29tcG9uZW50cy9oZWFkZXIvQzpcXGRldlxcYmFjaGVsb3JcXHRlYW0tZ2FtaWZpY2F0aW9uLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkLWNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxRQUFPO0VBQ1AsT0FBTTtFQUNOLDhCQUE0QjtFQUM1QiwyQkFBeUI7RUFDekIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixpQ0FBZ0MsRUFFakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYmJiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM2NjY7XHJcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgIzY2NjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxM0I0QztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/shared-components/header/header.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/shared-components/header/header.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/shared-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/shared-components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared-components/loading-screen/loading-screen.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shared-components/loading-screen/loading-screen.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\">\n  <div *ngIf=\"loadingIterator && loadingElements; else ladeAllgemein\">\n    {{loadingIterator}} von {{loadingElements}} werden ausgewertet...\n  </div>\n  <ng-template #ladeAllgemein><div>Commits werden geladen...</div></ng-template>\n  <span class=\"line line-1\"></span>\n  <span class=\"line line-2\"></span>\n  <span class=\"line line-3\"></span>\n  <span class=\"line line-4\"></span>\n  <span class=\"line line-5\"></span>\n  <span class=\"line line-6\"></span>\n  <span class=\"line line-7\"></span>\n  <span class=\"line line-8\"></span>\n  <span class=\"line line-9\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared-components/loading-screen/loading-screen.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shared-components/loading-screen/loading-screen.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #000; }\n\n.preloader {\n  margin: 100px auto 0;\n  height: 12px; }\n\ndiv {\n  color: #213B4C;\n  margin: 20px 0;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: 'Arial', sans-serif;\n  font-size: 20px;\n  letter-spacing: 2px; }\n\n.preloader .line {\n  width: 1px;\n  height: 15px;\n  background: #213B4C;\n  margin: 0 1px;\n  display: inline-block;\n  -webkit-animation: opacity-1 1000ms infinite ease-in-out;\n          animation: opacity-1 1000ms infinite ease-in-out; }\n\n.preloader .line-1, .preloader-2 .line-1 {\n  -webkit-animation-delay: 800ms;\n          animation-delay: 800ms; }\n\n.preloader .line-2, .preloader-2 .line-2 {\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms; }\n\n.preloader .line-3, .preloader-2 .line-3 {\n  -webkit-animation-delay: 400ms;\n          animation-delay: 400ms; }\n\n.preloader .line-4, .preloader-2 .line-4 {\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms; }\n\n.preloader .line-6, .preloader-2 .line-6 {\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms; }\n\n.preloader .line-7, .preloader-2 .line-7 {\n  -webkit-animation-delay: 400ms;\n          animation-delay: 400ms; }\n\n.preloader .line-8, .preloader-2 .line-8 {\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms; }\n\n.preloader .line-9, .preloader-2 .line-9 {\n  -webkit-animation-delay: 800ms;\n          animation-delay: 800ms; }\n\n@-webkit-keyframes opacity-1 {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opacity-1 {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes opacity-2 {\n  0% {\n    opacity: 1;\n    height: 15px; }\n  50% {\n    opacity: 0;\n    height: 12px; }\n  100% {\n    opacity: 1;\n    height: 15px; } }\n\n@keyframes opacity-2 {\n  0% {\n    opacity: 1;\n    height: 15px; }\n  50% {\n    opacity: 0;\n    height: 12px; }\n  100% {\n    opacity: 1;\n    height: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtY29tcG9uZW50cy9sb2FkaW5nLXNjcmVlbi9DOlxcZGV2XFxiYWNoZWxvclxcdGVhbS1nYW1pZmljYXRpb24tYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWQtY29tcG9uZW50c1xcbG9hZGluZy1zY3JlZW5cXGxvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UscUJBQW9CO0VBQ3BCLGFBQVksRUFDYjs7QUFHRDtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixpQ0FBZ0M7RUFDaEMsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLHlEQUFnRDtVQUFoRCxpREFBZ0QsRUFDakQ7O0FBRUQ7RUFBMkMsK0JBQXNCO1VBQXRCLHVCQUFzQixFQUFJOztBQUNyRTtFQUEyQywrQkFBc0I7VUFBdEIsdUJBQXNCLEVBQUk7O0FBQ3JFO0VBQTJDLCtCQUFzQjtVQUF0Qix1QkFBc0IsRUFBSTs7QUFDckU7RUFBMkMsK0JBQXNCO1VBQXRCLHVCQUFzQixFQUFJOztBQUNyRTtFQUEyQywrQkFBc0I7VUFBdEIsdUJBQXNCLEVBQUk7O0FBQ3JFO0VBQTJDLCtCQUFzQjtVQUF0Qix1QkFBc0IsRUFBSTs7QUFDckU7RUFBMkMsK0JBQXNCO1VBQXRCLHVCQUFzQixFQUFJOztBQUNyRTtFQUEyQywrQkFBc0I7VUFBdEIsdUJBQXNCLEVBQUk7O0FBRXJFO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBUmQ7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQSxFQUFBOztBQVhoQjtFQUNFO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtY29tcG9uZW50cy9sb2FkaW5nLXNjcmVlbi9sb2FkaW5nLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuLnByZWxvYWRlcntcclxuICBtYXJnaW46IDEwMHB4IGF1dG8gMDtcclxuICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcblxyXG5kaXYge1xyXG4gIGNvbG9yOiAjMjEzQjRDO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG4ucHJlbG9hZGVyIC5saW5lIHtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjMjEzQjRDO1xyXG4gIG1hcmdpbjogMCAxcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogb3BhY2l0eS0xIDEwMDBtcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByZWxvYWRlciAubGluZS0xLCAucHJlbG9hZGVyLTIgLmxpbmUtMSB7IGFuaW1hdGlvbi1kZWxheTogODAwbXM7IH1cclxuLnByZWxvYWRlciAubGluZS0yLCAucHJlbG9hZGVyLTIgLmxpbmUtMiB7IGFuaW1hdGlvbi1kZWxheTogNjAwbXM7IH1cclxuLnByZWxvYWRlciAubGluZS0zLCAucHJlbG9hZGVyLTIgLmxpbmUtMyB7IGFuaW1hdGlvbi1kZWxheTogNDAwbXM7IH1cclxuLnByZWxvYWRlciAubGluZS00LCAucHJlbG9hZGVyLTIgLmxpbmUtNCB7IGFuaW1hdGlvbi1kZWxheTogMjAwbXM7IH1cclxuLnByZWxvYWRlciAubGluZS02LCAucHJlbG9hZGVyLTIgLmxpbmUtNiB7IGFuaW1hdGlvbi1kZWxheTogMjAwbXM7IH1cclxuLnByZWxvYWRlciAubGluZS03LCAucHJlbG9hZGVyLTIgLmxpbmUtNyB7IGFuaW1hdGlvbi1kZWxheTogNDAwbXM7IH1cclxuLnByZWxvYWRlciAubGluZS04LCAucHJlbG9hZGVyLTIgLmxpbmUtOCB7IGFuaW1hdGlvbi1kZWxheTogNjAwbXM7IH1cclxuLnByZWxvYWRlciAubGluZS05LCAucHJlbG9hZGVyLTIgLmxpbmUtOSB7IGFuaW1hdGlvbi1kZWxheTogODAwbXM7IH1cclxuXHJcbkBrZXlmcmFtZXMgb3BhY2l0eS0xIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGFjaXR5LTIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared-components/loading-screen/loading-screen.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/shared-components/loading-screen/loading-screen.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LoadingScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreenComponent", function() { return LoadingScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingScreenComponent = /** @class */ (function () {
    function LoadingScreenComponent() {
    }
    LoadingScreenComponent.prototype.ngOnChanges = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LoadingScreenComponent.prototype, "loadingIterator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LoadingScreenComponent.prototype, "loadingElements", void 0);
    LoadingScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-screen',
            template: __webpack_require__(/*! ./loading-screen.component.html */ "./src/app/components/shared-components/loading-screen/loading-screen.component.html"),
            styles: [__webpack_require__(/*! ./loading-screen.component.scss */ "./src/app/components/shared-components/loading-screen/loading-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingScreenComponent);
    return LoadingScreenComponent;
}());



/***/ }),

/***/ "./src/app/components/shared-components/shared.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/shared-components/shared.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-screen/loading-screen.component */ "./src/app/components/shared-components/loading-screen/loading-screen.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/shared-components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [
                _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_3__["LoadingScreenComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
            ],
            exports: [
                _loading_screen_loading_screen_component__WEBPACK_IMPORTED_MODULE_3__["LoadingScreenComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/service/commit.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/commit.service.ts ***!
  \*******************************************/
/*! exports provided: CommitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitService", function() { return CommitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppConfig */ "./src/app/AppConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommitService = /** @class */ (function () {
    function CommitService(http) {
        this.http = http;
    }
    CommitService.prototype.loadCommits = function () {
        return this.http.get(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/projects/8/commits?page=0&size=999", {
            headers: { 'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcmFkYXIiLCJleHAiOjE1NDI5OTQ4ODksInR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE1NDI5OTM5ODksInVzZXJJZCI6IjMiLCJ1c2VybmFtZSI6InJhZGFyIn0.QUfDl7GRWvWlvUP2J32nuR4cJ_jH95rJz4CfoCO2ScQ" }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result._embedded.commitResourceList; }));
    };
    CommitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommitService);
    return CommitService;
}());



/***/ }),

/***/ "./src/app/service/metric.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/metric.service.ts ***!
  \*******************************************/
/*! exports provided: MetricService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricService", function() { return MetricService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppConfig */ "./src/app/AppConfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MetricService = /** @class */ (function () {
    function MetricService(http) {
        this.http = http;
    }
    MetricService.prototype.loadAvailableMetrics = function () {
        return this.http.get(_AppConfig__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].BASE_URL + "/projects/8/metrics")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result._embedded.metricResourceList.map(function (metric) { return _AppConfig__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].getShortNameByMetricName(metric.metricName); }); }));
    };
    MetricService.prototype.loadDeltaTree = function (currentCommit, previousCommit, metricNames) {
        var body = {
            'commit1': currentCommit.name,
            'commit2': previousCommit.name,
            'metrics': metricNames
        };
        //console.log(currentCommit.name);
        //console.log(this.http.post<INode>(`${AppConfig.BASE_URL}/projects/8/metricvalues/deltaTree`, body));
        return this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].BASE_URL + "/projects/8/metricvalues/deltaTree", body);
    };
    MetricService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetricService);
    return MetricService;
}());



/***/ }),

/***/ "./src/app/service/setup.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/setup.service.ts ***!
  \******************************************/
/*! exports provided: SetupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupService", function() { return SetupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppConfig */ "./src/app/AppConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupService = /** @class */ (function () {
    function SetupService(http) {
        this.http = http;
    }
    SetupService.prototype.setupServer = function () {
        var _this = this;
        var accessToken;
        this.authorizeUser().subscribe(function (loginResult) {
            accessToken = loginResult;
            console.log(accessToken);
            _this.createProject(accessToken);
            _this.addFilePattern(accessToken);
            _this.addAnalyzerConfig(accessToken);
            _this.addAnalyzingStrategy(accessToken);
        });
        return true;
    };
    SetupService.prototype.registerUser = function () {
        console.log('registering user...');
        return this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/user/registration", {
            "username": _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].USERNAME,
            "password": _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].PASSWORD
        });
    };
    SetupService.prototype.authorizeUser = function () {
        console.log('authorizing user...');
        return this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/user/auth", {
            "username": _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].USERNAME,
            "password": _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].PASSWORD
        }, {
            headers: { 'accept': '*/*' }
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.accessToken; }));
    };
    SetupService.prototype.createProject = function (accessToken) {
        console.log('creating project...');
        return this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/projects", {
            "name": "budgeteer",
            "vcsUrl": "https://github.com/adessoAG/budgeteer.git",
            "startDate": [2018, 10, 1],
            "endDate": [],
        }, {
            headers: { 'Authorization': accessToken }
        });
    };
    SetupService.prototype.addFilePattern = function (accessToken) {
        console.log('adding file pattern...');
        return this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/projects/8/files", {
            "filePatterns": [{
                    "pattern": "**/*.java",
                    "inclusionType": "INCLUDE",
                    "fileSetType": "SOURCE"
                }]
        }, {
            headers: { 'Authorization': accessToken }
        });
    };
    SetupService.prototype.addAnalyzerConfig = function (accessToken) {
        console.log('adding analyzing configs...');
        var enabledAnalyzerPlugins = [
            'org.wickedsource.coderadar.analyzer.loc.LocAnalyzerPlugin',
            'org.wickedsource.coderadar.analyzer.checkstyle.CheckstyleSourceCodeFileAnalyzerPlugin'
        ];
        var promises = [];
        for (var _i = 0, enabledAnalyzerPlugins_1 = enabledAnalyzerPlugins; _i < enabledAnalyzerPlugins_1.length; _i++) {
            var pluginName = enabledAnalyzerPlugins_1[_i];
            promises.push(this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/projects/8/analyzers", {
                "analyzerName": pluginName,
                "enabled": true
            }, {
                headers: { 'Authorization': accessToken }
            }));
        }
    };
    SetupService.prototype.addAnalyzingStrategy = function (accessToken) {
        console.log('adding analyzing strategy...');
        return this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/projects/8/analyzingJob", {
            "fromDate": "1538352000000",
            "active": true,
            "rescan": true
        }, {
            headers: { 'Authorization': accessToken }
        });
    };
    SetupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SetupService);
    return SetupService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    useCoderadarEndpoint: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["TeamGamificationAppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\bachelor\team-gamification-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map