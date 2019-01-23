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
    AppConfig.getMetricByMetricName = function (metricName) {
        return this.METRICS.find(function (namePair) { return namePair.metricName === metricName; });
    };
    AppConfig.getGithubName = function (commitAuthor) {
        var githubUser = this.USER_NAME_MAPPING.find(function (namePair) { return namePair.personName === commitAuthor; });
        if (githubUser) {
            console.log(githubUser.githubName);
            return githubUser.githubName;
        }
        else {
            console.log(commitAuthor);
            return commitAuthor;
        }
    };
    AppConfig.getPersonName = function (commitAuthor) {
        var person = this.USER_NAME_MAPPING.find(function (namePair) { return namePair.githubName === commitAuthor; });
        if (person) {
            return person.personName;
        }
        else {
            return commitAuthor;
        }
    };
    // CODERADAR SERVER CONFIG
    AppConfig.BASE_URL = 'https://adesso-coderadar-dev01.test-server.ag';
    AppConfig.BASE_URL_LOCAL = 'http://localhost:8080';
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
    AppConfig.USER_NAME_MAPPING = [
        {
            personName: 'Maxim Atanasov',
            githubName: 'maximAtanasov'
        },
        {
            personName: 'Leonie Adis',
            githubName: 'adis'
        },
        {
            personName: 'Leonie Adis',
            githubName: 'LeonieAdis'
        },
        {
            personName: 'Krause',
            githubName: 'KilianKrause'
        },
        {
            personName: 'Kilian Krause',
            githubName: 'Krause'
        },
        {
            personName: 'Kilian Krause',
            githubName: 'KilianKrause'
        }
    ];
    // METRICS
    AppConfig.METRICS = [
        {
            shortName: 'Source Lines of Code (SLOC)',
            metricName: 'coderadar:size:sloc:java',
            pointValue: 0.1,
            shortDescription: 'Source Lines of Code.'
        },
        {
            shortName: 'ArrayTypeStyle',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.ArrayTypeStyleCheck',
            pointValue: 5,
            shortDescription: 'Checks the style of array type definitions.'
        },
        {
            shortName: 'TodoComments',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.TodoCommentCheck',
            pointValue: 15,
            shortDescription: 'A check for TODO comments.'
        },
        {
            shortName: 'TrailingComment',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.TrailingCommentCheck',
            pointValue: 5,
            shortDescription: 'Check to ensure that comments are the only thing on a line. '
        },
        {
            shortName: 'UncommentedMains',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.UncommentedMainCheck',
            pointValue: 10,
            shortDescription: 'Detects uncommented main methods.'
        },
        {
            shortName: 'MissingOverride',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.annotation.MissingOverrideCheck',
            pointValue: 15,
            shortDescription: 'Verifies that the Override annotation is present when the inheritDoc javadoc tag is present. '
        },
        {
            shortName: 'AvoidNestedBlocks',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.AvoidNestedBlocksCheck',
            pointValue: 10,
            shortDescription: 'Finds nested blocks.'
        },
        {
            shortName: 'EmptyCatchBlock',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.blocks.EmptyCatchBlockCheck',
            pointValue: 10,
            shortDescription: 'Checks for empty catch blocks. '
        },
        {
            shortName: 'AvoidInlineConditionals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.AvoidInlineConditionalsCheck',
            pointValue: 5,
            shortDescription: 'Detects inline conditionals. '
        },
        {
            shortName: 'CovariantEquals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.CovariantEqualsCheck',
            pointValue: 5,
            shortDescription: 'Checks that if a class defines a covariant method equals, then it defines method equals(java.lang.Object). '
        },
        {
            shortName: 'DefaultComesLast',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.DefaultComesLastCheck',
            pointValue: 5,
            shortDescription: 'Check that the default is after all the cases in a switch statement.'
        },
        {
            shortName: 'EqualsAvoidNull',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.EqualsAvoidNullCheck',
            pointValue: 5,
            shortDescription: 'Checks that any combination of String literals is on the left side of an equals() comparison.'
        },
        {
            shortName: 'ExplicitInitialization',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.ExplicitInitializationCheck',
            pointValue: 5,
            shortDescription: 'Checks if any class or object member explicitly initialized to default for its type value.'
        },
        {
            shortName: 'FallThrough',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.FallThroughCheck',
            pointValue: 10,
            shortDescription: 'Checks for fall through in switch statements Finds locations where a case contains Java code - but lacks a break, return, throw or continue statement.'
        },
        {
            shortName: 'FinalLocalVariable',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.FinalLocalVariableCheck',
            pointValue: 3,
            shortDescription: 'Ensures that local variables that never get their values changed, must be declared final.'
        },
        {
            shortName: 'HiddenField',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.HiddenFieldCheck',
            pointValue: 10,
            shortDescription: 'Checks that a local variable or a parameter does not shadow a field that is defined in the same class.'
        },
        {
            shortName: 'IllegalCatch',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.IllegalCatchCheck',
            pointValue: 15,
            shortDescription: 'Catching java.lang.Exception, java.lang.Error or java.lang.RuntimeException is almost never acceptable.'
        },
        {
            shortName: 'IllegalThrows',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.IllegalThrowsCheck',
            pointValue: 15,
            shortDescription: 'Throwing java.lang.Error or java.lang.RuntimeException is almost never acceptable. '
        },
        {
            shortName: 'MagicNumber',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MagicNumberCheck',
            pointValue: 5,
            shortDescription: 'Checks for magic numbers.'
        },
        {
            shortName: 'MissingSwitchDefault',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MissingSwitchDefaultCheck',
            pointValue: 15,
            shortDescription: 'Checks that switch statement has "default" clause.'
        },
        {
            shortName: 'MultipleStringLiterals',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleStringLiteralsCheck',
            pointValue: 15,
            shortDescription: 'Checks for multiple occurrences of the same string literal within a single file.'
        },
        {
            shortName: 'MultipleVariableDeclarations',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.MultipleVariableDeclarationsCheck',
            pointValue: 5,
            shortDescription: 'Checks that each variable declaration is in its own statement and on its own line. '
        },
        {
            shortName: 'NestedForDepth',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.NestedForDepthCheck',
            pointValue: 5,
            shortDescription: 'Check the number of nested for -statements. '
        },
        {
            shortName: 'NestedIfDepth',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.NestedIfDepthCheck',
            pointValue: 5,
            shortDescription: 'Restricts nested if-else blocks to a specified depth (default = 1).'
        },
        {
            shortName: 'OneStatementPerLine',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.OneStatementPerLineCheck',
            pointValue: 5,
            shortDescription: 'Restricts the number of statements per line to one. '
        },
        {
            shortName: 'ReturnCount',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.ReturnCountCheck',
            pointValue: 5,
            shortDescription: ' Restricts return statements to a specified count (default = 2).'
        },
        {
            shortName: 'SimplifyBooleanExpression',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.SimplifyBooleanExpressionCheck',
            pointValue: 10,
            shortDescription: 'Checks for overly complicated boolean expressions. '
        },
        {
            shortName: 'SimplifyBooleanReturn',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.coding.SimplifyBooleanReturnCheck',
            pointValue: 10,
            shortDescription: 'Checks for overly complicated boolean return statements. '
        },
        {
            shortName: 'OneTopLevelClass',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.OneTopLevelClassCheck',
            pointValue: 5,
            shortDescription: 'Checks that each top-level class, interface or enum resides in a source file of its own.'
        },
        {
            shortName: 'VisibilityModifier',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.design.VisibilityModifierCheck',
            pointValue: 5,
            shortDescription: 'Checks visibility of class members. '
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
            pointValue: 5,
            shortDescription: 'Checks for unused import statements.'
        },
        {
            shortName: 'BooleanExpressionComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.BooleanExpressionComplexityCheck',
            pointValue: 1,
            shortDescription: 'Restricts nested boolean operators (&&, ||, &, | and ^) to a specified depth (default = 3). '
        },
        {
            shortName: 'CyclomaticComplexity',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.metrics.CyclomaticComplexityCheck',
            pointValue: 1,
            shortDescription: 'Checks cyclomatic complexity against a specified limit.'
        },
        {
            shortName: 'RedundantModifier',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.modifier.RedundantModifierCheck',
            pointValue: 5,
            shortDescription: 'Checks for redundant modifiers in interface and annotation definitions.'
        },
        {
            shortName: 'AbstractClassName',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.naming.AbstractClassNameCheck',
            pointValue: 5,
            shortDescription: 'Ensures that the names of abstract classes conforming to some regular expression and check that abstract modifier exists. '
        },
        {
            shortName: 'ExecutableStatementCount',
            metricName: 'checkstyle:com.puppycrawl.tools.checkstyle.checks.sizes.ExecutableStatementCountCheck',
            pointValue: 1,
            shortDescription: 'Restricts the number of executable statements to a specified limit (default = 30).'
        },
    ];
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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_general_view_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/general-view.module */ "./src/app/components/general-view.module.ts");
/* harmony import */ var _service_commit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/commit.service */ "./src/app/service/commit.service.ts");
/* harmony import */ var _service_metric_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/metric.service */ "./src/app/service/metric.service.ts");
/* harmony import */ var _service_setup_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/setup.service */ "./src/app/service/setup.service.ts");
/* harmony import */ var _service_element_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/element.service */ "./src/app/service/element.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _components_general_view_module__WEBPACK_IMPORTED_MODULE_9__["ViewModule"]
            ],
            providers: [
                _service_commit_service__WEBPACK_IMPORTED_MODULE_10__["CommitService"],
                _service_metric_service__WEBPACK_IMPORTED_MODULE_11__["MetricService"],
                _service_setup_service__WEBPACK_IMPORTED_MODULE_12__["SetupService"],
                _service_element_service__WEBPACK_IMPORTED_MODULE_13__["ElementService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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

module.exports = ".choose-time-filter {\r\n   background: #213B4C;\r\n   border: solid 3px #213B4C;\r\n   display: inline-block;\r\n   margin: 1%;\r\n   margin-top: 10px;\r\n   margin-bottom: 3px;\r\n   border-radius: 10px;\r\n   overflow: hidden;\r\n   font-size: 20px;\r\n   text-align: center;\r\n   padding: 20px 0px 20px 0px;\r\n   width: 98%;\r\n   color: #ccc;\r\n   font-family: 'Arial', sans-serif;\r\n\r\n }\r\n\r\n.choose-board {\r\n   background: #213B4C;\r\n      border: solid 3px #213B4C;\r\n      display: inline-block;\r\n      margin: 1%;\r\n      margin-top: 3px;\r\n      margin-bottom: 10px;\r\n      border-radius: 10px;\r\n      overflow: hidden;\r\n      font-size: 20px;\r\n      text-align: center;\r\n      padding: 20px 0px 20px 0px;\r\n      width: 98%;\r\n      color: #ccc;\r\n      font-family: 'Arial', sans-serif;\r\n }\r\n\r\ninput[type=radio] {\r\n  position: absolute;\r\n  visibility: hidden;\r\n  display: none;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  padding: 2px 10px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\ninput[type=radio]:checked + label{\r\n  background: #0C1E28;\r\n  border-radius: 20px;\r\n}\r\n\r\nlabel + input[type=radio] + label {\r\n  border-left: solid $borderWidth $fg;\r\n}\r\n\r\n.board-container {\r\n  box-sizing: border-box;\r\n  max-height: 80%;\r\n  height: 80%;\r\n  place-content: center space-around;\r\n  align-content: center;\r\n  justify-content: space-around;\r\n  margin-top: 10px;\r\n  font-family: 'Arial', sans-serif;\r\n\r\n}\r\n\r\n.board-container::after {\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC12aWV3L2JvYXJkLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLG9CQUFvQjtHQUNwQiwwQkFBMEI7R0FDMUIsc0JBQXNCO0dBQ3RCLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIsbUJBQW1CO0dBQ25CLG9CQUFvQjtHQUNwQixpQkFBaUI7R0FDakIsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtHQUNuQiwyQkFBMkI7R0FDM0IsV0FBVztHQUNYLFlBQVk7R0FDWixpQ0FBaUM7O0VBRWxDOztBQUVGO0dBQ0csb0JBQW9CO01BQ2pCLDBCQUEwQjtNQUMxQixzQkFBc0I7TUFDdEIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixvQkFBb0I7TUFDcEIsb0JBQW9CO01BQ3BCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLDJCQUEyQjtNQUMzQixXQUFXO01BQ1gsWUFBWTtNQUNaLGlDQUFpQztFQUNyQzs7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztDQUNmOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0Usb0NBQW9DO0NBQ3JDOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGlDQUFpQzs7Q0FFbEM7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQtdmlldy9ib2FyZC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvb3NlLXRpbWUtZmlsdGVyIHtcclxuICAgYmFja2dyb3VuZDogIzIxM0I0QztcclxuICAgYm9yZGVyOiBzb2xpZCAzcHggIzIxM0I0QztcclxuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICBtYXJnaW46IDElO1xyXG4gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcclxuICAgd2lkdGg6IDk4JTtcclxuICAgY29sb3I6ICNjY2M7XHJcbiAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG5cclxuIH1cclxuXHJcbi5jaG9vc2UtYm9hcmQge1xyXG4gICBiYWNrZ3JvdW5kOiAjMjEzQjRDO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDNweCAjMjEzQjRDO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMSU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgICB3aWR0aDogOTglO1xyXG4gICAgICBjb2xvcjogI2NjYztcclxuICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiB9XHJcblxyXG5pbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbHtcclxuICBiYWNrZ3JvdW5kOiAjMEMxRTI4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsICsgaW5wdXRbdHlwZT1yYWRpb10gKyBsYWJlbCB7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkICRib3JkZXJXaWR0aCAkZmc7XHJcbn1cclxuXHJcbi5ib2FyZC1jb250YWluZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWF4LWhlaWdodDogODAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4uYm9hcmQtY29udGFpbmVyOjphZnRlciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/board-view/board-view.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/board-view/board-view.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ICommitElements.length == commits.length-1\r\n              && IUserElements\r\n              && activeTimeFilterValue\r\n            else loadingScreen\">\r\n  <div class=\"choose-time-filter\">\r\n    <input type=\"radio\" id=\"radio-today\" name=\"radio-time-filter\" class=\"custom-control-input\" [value]=\"86400000\" [(ngModel)]=\"activeTimeFilterValue\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-today\" title=\"Heute\">1 Tag</label>\r\n    <input type=\"radio\" id=\"radio-3-days\" name=\"radio-time-filter\" class=\"custom-control-input\" [value]=\"259200000\" [(ngModel)]=\"activeTimeFilterValue\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-3-days\" title=\"Diese 3 Tage\">3 Tage</label>\r\n    <input type=\"radio\" id=\"radio-week\" name=\"radio-time-filter\" class=\"custom-control-input\" [value]=\"604800000\" [(ngModel)]=\"activeTimeFilterValue\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-week\" title=\"Diese Woche\">7 Tage</label>\r\n    <input type=\"radio\" id=\"radio-2-weeks\" name=\"radio-time-filter\" class=\"custom-control-input\" [value]=\"1209600000\" [(ngModel)]=\"activeTimeFilterValue\" />\r\n    <label class=\"custom-control-label\" for=\"radio-2-weeks\" title=\"Diese 2 Wochen\">2 Wochen</label>\r\n    <input type=\"radio\" id=\"radio-3-weeks\" name=\"radio-time-filter\" class=\"custom-control-input\" [value]=\"1814400000\" [(ngModel)]=\"activeTimeFilterValue\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-3-weeks\" title=\"Diese 3 Wochen\">3 Wochen</label>\r\n    <input type=\"radio\" id=\"radio-month\" name=\"radio-time-filter\" class=\"custom-control-input\" [value]=\"2629743000\" [(ngModel)]=\"activeTimeFilterValue\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-month\" title=\"Dieser Monat\">1 Monat</label>\r\n  </div>\r\n  <div class=\"choose-board\">\r\n    <input type=\"radio\" id=\"radio-commit-feed\" name=\"radio-board\" class=\"custom-control-input-2\" [value]=\"'selectCommitFeed'\" [(ngModel)]=\"selectedBoard\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-commit-feed\" title=\"Alle Commits\">Alle Commits</label>\r\n    <input type=\"radio\" id=\"radio-commit-leaderboard\" name=\"radio-board\" class=\"custom-control-input-2\" [value]=\"'selectCommitLeaderboard'\" [(ngModel)]=\"selectedBoard\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-commit-leaderboard\" title=\"Beste Commits\">Beste Commits</label>\r\n    <input type=\"radio\" id=\"radio-user-leaderboard\" name=\"radio-board\" class=\"custom-control-input-2\" [value]=\"'selectUserLeaderboard'\" [(ngModel)]=\"selectedBoard\"/>\r\n    <label class=\"custom-control-label\" for=\"radio-user-leaderboard\" title=\"Beste User\">Beste User</label>\r\n  </div>\r\n</div>\r\n<div class=\"board-container\" *ngIf=\"ICommitElements.length > 1\r\n                                      && IUserElements\r\n                                      && activeTimeFilterValue\r\n                                      && selectedBoard\">\r\n  <div class=\"user-leader-board-container\" *ngIf=\"selectedBoard == 'selectUserLeaderboard' \">\r\n    <user-leader-board\r\n      [userElements]=\"IUserElements\"\r\n      [activeFilter]=\"activeTimeFilterValue\">Loading...\r\n    </user-leader-board>\r\n  </div>\r\n  <div class=\"commit-leader-board-container\" *ngIf=\"selectedBoard == 'selectCommitLeaderboard' \">\r\n    <commit-leader-board\r\n      [commitElements]=\"ICommitElements\"\r\n      [activeFilter]=\"activeTimeFilterValue\">Loading...\r\n    </commit-leader-board>\r\n  </div>\r\n  <div class=\"commit-feed-container\" *ngIf=\"selectedBoard == 'selectCommitFeed' \">\r\n    <commit-feed\r\n      [commitElements]=\"ICommitElements\"\r\n      [activeFilter]=\"activeTimeFilterValue\">Loading...\r\n    </commit-feed>\r\n  </div>\r\n</div>\r\n<ng-template #loadingScreen>\r\n  <loading-screen\r\n    [loadingIterator]=\"ICommitElements.length\"\r\n    [loadingElements]=\"commits.length-1\">\r\n  </loading-screen>\r\n</ng-template>\r\n\r\n"

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
/* harmony import */ var _service_setup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/setup.service */ "./src/app/service/setup.service.ts");
/* harmony import */ var _AppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AppConfig */ "./src/app/AppConfig.ts");
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
    function BoardViewComponent(metricService, setupService) {
        this.metricService = metricService;
        this.setupService = setupService;
    }
    BoardViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Geladene Commits");
        console.log(this.commits);
        console.log("Geladene Metriken");
        console.log(this.availableMetrics);
        this.activeTimeFilterValue = this.setActiveTimeFilter(this.commits[0].timestamp);
        this.selectedBoard = "";
        this.ICommitElements = [];
        this.IUserElements = [];
        this.authors = Array.from(new Set(this.commits.map(function (commit) { return _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].getPersonName(commit.author); })));
        this.metricNames = this.availableMetrics.map(function (metric) { return metric.metricName; });
        this.setupService.authorizeUser().subscribe(function (loginResultAccessToken) {
            console.log(loginResultAccessToken);
            var totalUserPoints = 0;
            for (var k = 0; k < _this.authors.length; k++) {
                var authorName = _this.authors[k];
                var totalUserHighscore = 0;
                var bestCommitName = _this.commits[0].name;
                var bestCommitDate = new Date(_this.commits[0].timestamp).toLocaleDateString();
                var singleUserHighscore = 0;
                _this.IUserElements.push({
                    user: authorName,
                    commitsPerUser: []
                });
            }
            var _loop_1 = function () {
                var deltaTree;
                var tableRows = [];
                var totalCommitPoints = 20;
                var currentCommit = _this.commits[i];
                var previousCommit = _this.commits[i + 1];
                //console.log(previousCommit);
                /**console.log("------------------------------");
                console.log(this.commits.length-i);
                console.log(new Date(currentCommit.timestamp).toLocaleDateString());
                console.log(new Date(previousCommit.timestamp).toLocaleDateString());**/
                var commitDate = new Date(currentCommit.timestamp).toLocaleDateString();
                var currentUserKey = _this.IUserElements.findIndex(function (i) { return i.user === _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].getPersonName(currentCommit.author); });
                _this.metricService.loadDeltaTree(loginResultAccessToken, previousCommit, currentCommit, _this.metricNames).subscribe(function (node) {
                    deltaTree = node;
                    //console.log(deltaTree);
                    tableRows = _this.verarbeiteMetricData(deltaTree);
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
                    _this.IUserElements[currentUserKey].commitsPerUser.push({
                        currentCommit: currentCommit,
                        previousCommit: previousCommit,
                        date: commitDate,
                        totalPoints: totalCommitPoints,
                        tableRows: tableRows
                    });
                    _this.ICommitElements.sort(function (a, b) { return b.currentCommit.timestamp - a.currentCommit.timestamp; });
                });
            };
            for (var i = 0; i < _this.commits.length - 1; i++) {
                _loop_1();
            }
        });
    };
    BoardViewComponent.prototype.verarbeiteMetricData = function (foundElement) {
        var rows = [];
        for (var _i = 0, _a = Object.keys(this.availableMetrics); _i < _a.length; _i++) {
            var key = _a[_i];
            var metricName = this.availableMetrics[key].metricName;
            //console.log("Metricname: " + metricName);
            var previousCommitValue = void 0;
            if (foundElement.commit1Metrics && foundElement.commit1Metrics[metricName]) {
                previousCommitValue = foundElement.commit1Metrics[metricName];
                //console.log("Previous Value: " + previousCommitValue);
            }
            var currentCommitValue = void 0;
            if (foundElement.commit2Metrics && foundElement.commit2Metrics[metricName]) {
                currentCommitValue = foundElement.commit2Metrics[metricName];
                //console.log("Current Value: " + currentCommitValue);
            }
            var difference = 0;
            if (currentCommitValue && previousCommitValue) {
                difference = previousCommitValue - currentCommitValue;
                //console.log("Difference: " + difference);
            }
            var points = 0;
            var metricValueDown = true;
            if (difference != 0) {
                if (difference > 0) {
                    points = _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].getMetricByMetricName(metricName).pointValue * difference;
                    metricValueDown = true;
                }
                else {
                    difference = difference * -1;
                    metricValueDown = false;
                    if (metricName == 'coderadar:size:sloc:java') {
                        points = _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].getMetricByMetricName(metricName).pointValue * difference;
                    }
                }
                //console.log("Points: " + points);
                rows.push({
                    metricName: _AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].getMetricByMetricName(metricName).shortName,
                    currentCommitValue: currentCommitValue || 'N/A',
                    previousCommitValue: previousCommitValue || 'N/A',
                    difference: difference,
                    points: Math.round(points),
                    metricValueDown: metricValueDown
                });
            }
        }
        return rows;
    };
    BoardViewComponent.prototype.setActiveTimeFilter = function (firstCommitTimestamp) {
        console.log(new Date(firstCommitTimestamp).toLocaleDateString());
        if (firstCommitTimestamp > (Date.now() - 86400000)) {
            return 86400000;
        }
        else if (firstCommitTimestamp > (Date.now() - 259200000)) {
            return 259200000;
        }
        else if (firstCommitTimestamp > (Date.now() - 604800000)) {
            return 604800000;
        }
        else if (firstCommitTimestamp > (Date.now() - 1209600000)) {
            return 1209600000;
        }
        else if (firstCommitTimestamp > (Date.now() - 1814400000)) {
            return 1814400000;
        }
        else if (firstCommitTimestamp > (Date.now() - 2629743000)) {
            return 2629743000;
        }
        else {
            return 15778458000;
        }
    };
    BoardViewComponent.prototype.ngOnChanges = function () {
        if (this.selectedBoard) {
            console.log(this.selectedBoard);
        }
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
        __metadata("design:paramtypes", [_service_metric_service__WEBPACK_IMPORTED_MODULE_1__["MetricService"], _service_setup_service__WEBPACK_IMPORTED_MODULE_2__["SetupService"]])
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
/* harmony import */ var _leader_boards_user_leader_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leader-boards/user-leader-board.component */ "./src/app/components/board-view/leader-boards/user-leader-board.component.ts");
/* harmony import */ var _leader_boards_commit_leader_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leader-boards/commit-leader-board.component */ "./src/app/components/board-view/leader-boards/commit-leader-board.component.ts");
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
                _leader_boards_user_leader_board_component__WEBPACK_IMPORTED_MODULE_7__["UserLeaderBoardComponent"],
                _leader_boards_commit_leader_board_component__WEBPACK_IMPORTED_MODULE_8__["CommitLeaderBoardComponent"],
            ],
            exports: [
                _board_view_component__WEBPACK_IMPORTED_MODULE_5__["BoardViewComponent"],
                _commit_feed_commit_feed_component__WEBPACK_IMPORTED_MODULE_6__["CommitFeedComponent"],
                _leader_boards_user_leader_board_component__WEBPACK_IMPORTED_MODULE_7__["UserLeaderBoardComponent"],
                _leader_boards_commit_leader_board_component__WEBPACK_IMPORTED_MODULE_8__["CommitLeaderBoardComponent"],
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

module.exports = "#commit-feed {\r\n  .display: block;\r\n  text-align: center;\r\n  margin: 2%;\r\n  margin-top: 5px;\r\n  max-height: 50%;\r\n  height: 500px;\r\n  padding: 10px;\r\n  border-spacing: 10 10;\r\n  background: #0C1E28;\r\n  overflow-y: auto;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  border-color: #0C1E28;\r\n\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  border-spacing: 0 0;\r\n  background: #213B4C;\r\n  color: white;\r\n  box-shadow: 0 0 20px #1E3344;\r\n  overflow: hidden;\r\n  padding: 10px;\r\n  margin: 5px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.metric-table {\r\n  background: #0C1E28;\r\n  border: none;\r\n  margin: 10px;\r\n  text-align: left;\r\n  padding: 5px 10px 5px 10px;\r\n\r\n}\r\n\r\ntd {\r\n  border: 1px ;\r\n  text-align: left;\r\n  padding: 2px 10px 2px 10px;\r\n}\r\n\r\nthead {\r\n background: #0C1E28;\r\n  border: none;\r\n  margin: 10px;\r\n  padding: 10px 10px 20px 10px;\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.commit-points {\r\n  padding: 10px 10px 10px 10px;\r\n  text-align: center;\r\n  background: green;\r\n  font-size: 24px;\r\n}\r\n\r\nfa-icon {\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC12aWV3L2NvbW1pdC1mZWVkL2NvbW1pdC1mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixzQkFBc0I7O0NBRXZCOztBQUVEO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkJBQTJCOztDQUU1Qjs7QUFFRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsMkJBQTJCO0NBQzVCOztBQUVEO0NBQ0Msb0JBQW9CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSw2QkFBNkI7Q0FDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JvYXJkLXZpZXcvY29tbWl0LWZlZWQvY29tbWl0LWZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb21taXQtZmVlZCB7XHJcbiAgLmRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1zcGFjaW5nOiAxMCAxMDtcclxuICBiYWNrZ3JvdW5kOiAjMEMxRTI4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMEMxRTI4O1xyXG5cclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwIDA7XHJcbiAgYmFja2dyb3VuZDogIzIxM0I0QztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggIzFFMzM0NDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLm1ldHJpYy10YWJsZSB7XHJcbiAgYmFja2dyb3VuZDogIzBDMUUyODtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcblxyXG59XHJcblxyXG50ZCB7XHJcbiAgYm9yZGVyOiAxcHggO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHg7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuIGJhY2tncm91bmQ6ICMwQzFFMjg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMjBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jb21taXQtcG9pbnRzIHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbmZhLWljb24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/board-view/commit-feed/commit-feed.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/board-view/commit-feed/commit-feed.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"commit-feed\">\r\n  <table *ngFor=\"let commitElement of formattedCommitElements\" class=\"commit-feed-element\" class=\"table table-striped table-sm\">\r\n    <thead>\r\n    <tr>\r\n      <th colspan=\"5\">{{commitElement.currentCommit.name}}</th>\r\n    </tr>\r\n    <tr>\r\n      <th colspan=\"2\"><fa-icon [icon]=\"faUser\"></fa-icon>{{commitElement.currentCommit.author}}</th>\r\n      <th colspan=\"3\"><fa-icon [icon]=\"faCalendarAlt\"></fa-icon>{{commitElement.date}}</th>\r\n    </tr>\r\n    </thead>\r\n    <tr class=\"metric-table\" *ngIf=\"commitElement.tableRows!=0\">\r\n      <th>Veränderte Metriken</th>\r\n      <th id=\"second-commit-id\">Vorher</th>\r\n      <th id=\"first-commit-id\">Nachher</th>\r\n      <th>Änderung</th>\r\n      <th>Zusätzliche Punkte</th>\r\n    </tr>\r\n    <tbody>\r\n    <tr *ngFor=\"let row of commitElement.tableRows\" class=\"commit-metric-data\">\r\n      <td>{{row.metricName}}</td>\r\n      <td>{{row.previousCommitValue}}</td>\r\n      <td>{{row.currentCommitValue}}</td>\r\n      <td>\r\n        <fa-icon *ngIf=\"!row.metricValueDown\" [icon]=\"faCaretUp\"></fa-icon>\r\n        <fa-icon *ngIf=\"row.metricValueDown\" [icon]=\"faCaretDown\"></fa-icon>\r\n        {{row.difference}}\r\n      </td>\r\n      <td>{{row.points}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"5\" class=\"commit-points\" *ngIf=\"commitElement.totalPoints>0\">\r\n        <fa-icon [icon]=\"faPlusSquare\"></fa-icon>\r\n        {{commitElement.totalPoints}}\r\n        <fa-icon [icon]=\"faPlusSquare\"></fa-icon>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

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
        this.formattedCommitElements = [];
        for (var i = 0; i < this.commitElements.length; i++) {
            if (this.commitElements[i].currentCommit.timestamp > (Date.now() - this.activeFilter)) {
                this.formattedCommitElements.push(this.commitElements[i]);
                this.formattedCommitElements.sort(function (a, b) { return b.currentCommit.timestamp - a.currentCommit.timestamp; });
            }
        }
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

/***/ "./src/app/components/board-view/leader-boards/commit-leader-board.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/board-view/leader-boards/commit-leader-board.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leader-board\">\r\n  <div id=\"leader-board-commits\">\r\n    <table id=\"commit-leaderboard\" class=\"leader-board-element\" class=\"table table-striped table-sm\">\r\n      <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Commit</th>\r\n        <th>User</th>\r\n        <th>Datum</th>\r\n        <th>Punkte</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let commitElement of formattedCommitElements; let c = index;\r\n                    let f = first;\r\n                    let o= odd; let e=even;\"\r\n                    [ngClass]=\"{ odd: o, even: e, first: f }\">\r\n          <td>{{c+1}}</td>\r\n          <td>{{commitElement.currentCommit.name}}</td>\r\n          <td>{{commitElement.currentCommit.author}}</td>\r\n          <td>{{commitElement.date}}</td>\r\n          <td>{{commitElement.totalPoints}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/board-view/leader-boards/commit-leader-board.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/board-view/leader-boards/commit-leader-board.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CommitLeaderBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitLeaderBoardComponent", function() { return CommitLeaderBoardComponent; });
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

var CommitLeaderBoardComponent = /** @class */ (function () {
    function CommitLeaderBoardComponent() {
    }
    CommitLeaderBoardComponent.prototype.ngOnChanges = function () {
        this.formattedCommitElements = [];
        for (var i = 0; i < 15; i++) {
            if (this.commitElements[i]) {
                if (this.commitElements[i].currentCommit.timestamp > (Date.now() - this.activeFilter)) {
                    this.formattedCommitElements.push(this.commitElements[i]);
                    this.formattedCommitElements.sort(function (a, b) { return b.totalPoints - a.totalPoints; });
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommitLeaderBoardComponent.prototype, "commitElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CommitLeaderBoardComponent.prototype, "activeFilter", void 0);
    CommitLeaderBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'commit-leader-board',
            template: __webpack_require__(/*! ./commit-leader-board.component.html */ "./src/app/components/board-view/leader-boards/commit-leader-board.component.html"),
            styles: [__webpack_require__(/*! ./leader-board.component.css */ "./src/app/components/board-view/leader-boards/leader-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommitLeaderBoardComponent);
    return CommitLeaderBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/board-view/leader-boards/leader-board.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/board-view/leader-boards/leader-board.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#leader-board {\r\n  .display: block;\r\n  text-align: center;\r\n  margin: 1%;\r\n  max-width: 90%;\r\n  max-height: 50%;\r\n  height: 500px;\r\n  padding: 10px;\r\n  border-spacing: 10 10;\r\n  background: #0C1E28;\r\n  overflow-y: auto;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  border-color: #0C1E28;\r\n\r\n}\r\n\r\n.even { background-color: #213B4C; }\r\n\r\n.odd { background-color: #0C1E28; }\r\n\r\n.first { background-color: green; }\r\n\r\n.best-commit-per-user{ text-align: left; }\r\n\r\ntable {\r\n  width: 96%;\r\n  background: #213B4C;\r\n  color: white;\r\n  box-shadow: 0 0 20px #1E3344;\r\n  overflow: hidden;\r\n  padding: 10px;\r\n  margin: 2%;\r\n  margin-top: 5px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\nth {\r\n  font-size: 24px;\r\n  background: #0C1E28;\r\n  border: none;\r\n  margin: 10px;\r\n  padding: 0;\r\n  text-align: center;\r\n  padding: 20px 10px 20px 10px;\r\n\r\n}\r\n\r\ntd {\r\n  border: 1px ;\r\n  text-align: center;\r\n  padding: 20px 10px 20px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2FyZC12aWV3L2xlYWRlci1ib2FyZHMvbGVhZGVyLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixzQkFBc0I7O0NBRXZCOztBQUVELFFBQVEsMEJBQTBCLEVBQUU7O0FBQ3BDLE9BQU8sMEJBQTBCLEVBQUU7O0FBQ25DLFNBQVMsd0JBQXdCLEVBQUU7O0FBRW5DLHVCQUF1QixpQkFBaUIsRUFBRTs7QUFFMUM7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDZCQUE2Qjs7Q0FFOUI7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtDQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9hcmQtdmlldy9sZWFkZXItYm9hcmRzL2xlYWRlci1ib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xlYWRlci1ib2FyZCB7XHJcbiAgLmRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDElO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEwIDEwO1xyXG4gIGJhY2tncm91bmQ6ICMwQzFFMjg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBib3JkZXItY29sb3I6ICMwQzFFMjg7XHJcblxyXG59XHJcblxyXG4uZXZlbiB7IGJhY2tncm91bmQtY29sb3I6ICMyMTNCNEM7IH1cclxuLm9kZCB7IGJhY2tncm91bmQtY29sb3I6ICMwQzFFMjg7IH1cclxuLmZpcnN0IHsgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47IH1cclxuXHJcbi5iZXN0LWNvbW1pdC1wZXItdXNlcnsgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiA5NiU7XHJcbiAgYmFja2dyb3VuZDogIzIxM0I0QztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggIzFFMzM0NDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwQzFFMjg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xyXG5cclxufVxyXG5cclxudGQge1xyXG4gIGJvcmRlcjogMXB4IDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4IDIwcHggMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/board-view/leader-boards/user-leader-board.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/board-view/leader-boards/user-leader-board.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leader-board\">\r\n  <div id=\"leader-board-users\">\r\n    <table id=\"user-leaderboard\" class=\"leader-board-element\" class=\"table table-striped table-sm\">\r\n      <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>User</th>\r\n        <th>Insgesamte Punktzahl</th>\r\n        <th>Commits in Zeitraum</th>\r\n        <th>Durchschnittliche Punktzahl</th>\r\n        <th>Bester Commit</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let userElement of formattedUserElements;\r\n                    let u = index;\r\n                    let f = first;\r\n                    let o= odd; let e=even;\"\r\n                    [ngClass]=\"{ odd: o, even: e, first: f }\">\r\n          <td>{{u+1}}</td>\r\n          <td>{{userElement.userData.user}}</td>\r\n          <td>{{userElement.totalUserPoints}}</td>\r\n          <td>{{userElement.commitCount}}</td>\r\n          <td>{{userElement.averageUserPoints}}</td>\r\n          <td class=\"best-commit-per-user\">\r\n            <tr>{{userElement.bestCommitName}}</tr>\r\n            <tr>{{userElement.bestCommitDate}}</tr>\r\n            <tr>{{userElement.bestCommitPoints}} Punkte</tr>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/board-view/leader-boards/user-leader-board.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/board-view/leader-boards/user-leader-board.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserLeaderBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLeaderBoardComponent", function() { return UserLeaderBoardComponent; });
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

var UserLeaderBoardComponent = /** @class */ (function () {
    function UserLeaderBoardComponent() {
    }
    UserLeaderBoardComponent.prototype.ngOnChanges = function () {
        this.formattedUserElements = [];
        for (var i = 0; i < this.userElements.length; i++) {
            var totalPointsPerUser = 0;
            var averagePointsPerUser = 0;
            var commitsInTimeframe = 0;
            var bestCommitName = "";
            var bestCommitDate = "";
            var bestCommitPoints = 0;
            if (this.userElements[i].commitsPerUser[0]) {
                var bestCommitName_1 = this.userElements[i].commitsPerUser[0].currentCommit.name;
                var bestCommitDate_1 = new Date(this.userElements[i].commitsPerUser[0].currentCommit.timestamp).toLocaleDateString();
                var bestCommitPoints_1 = this.userElements[i].commitsPerUser[0].totalPoints;
            }
            for (var j = 0; j < this.userElements[i].commitsPerUser.length; j++) {
                if (this.userElements[i].commitsPerUser[j].currentCommit.timestamp > (Date.now() - this.activeFilter)) {
                    totalPointsPerUser = totalPointsPerUser + this.userElements[i].commitsPerUser[j].totalPoints;
                    commitsInTimeframe++;
                    averagePointsPerUser = Math.round(totalPointsPerUser / commitsInTimeframe * 100) / 100;
                    if (this.userElements[i].commitsPerUser[j].totalPoints > bestCommitPoints) {
                        bestCommitName = this.userElements[i].commitsPerUser[j].currentCommit.name;
                        bestCommitDate = this.userElements[i].commitsPerUser[j].date;
                        bestCommitPoints = this.userElements[i].commitsPerUser[j].totalPoints;
                    }
                }
            }
            if (totalPointsPerUser) {
                this.formattedUserElements.push({
                    userData: this.userElements[i],
                    totalUserPoints: totalPointsPerUser,
                    averageUserPoints: averagePointsPerUser,
                    commitCount: commitsInTimeframe,
                    bestCommitName: bestCommitName,
                    bestCommitDate: bestCommitDate,
                    bestCommitPoints: bestCommitPoints
                });
            }
            this.formattedUserElements = this.formattedUserElements.sort(function (a, b) { return b.totalUserPoints - a.totalUserPoints; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserLeaderBoardComponent.prototype, "userElements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UserLeaderBoardComponent.prototype, "activeFilter", void 0);
    UserLeaderBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-leader-board',
            template: __webpack_require__(/*! ./user-leader-board.component.html */ "./src/app/components/board-view/leader-boards/user-leader-board.component.html"),
            styles: [__webpack_require__(/*! ./leader-board.component.css */ "./src/app/components/board-view/leader-boards/leader-board.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserLeaderBoardComponent);
    return UserLeaderBoardComponent;
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
        this.setupService.authorizeUser().subscribe(function (loginResultAccessToken) {
            _this.commitService.loadCommits(loginResultAccessToken).subscribe(function (commits) {
                commits.filter(function (ICommit) { return ICommit.analyzed == true; });
                commits.filter(function (ICommit) { return new Date(ICommit.timestamp).toLocaleDateString() > new Date((Date.now() - 2629743000)).toLocaleDateString(); });
                _this.commits = commits.sort(function (a, b) { return b.timestamp - a.timestamp; });
            });
            _this.appMetrics = Array.from(new Set(_AppConfig__WEBPACK_IMPORTED_MODULE_4__["AppConfig"].METRICS));
            //this.metricService.loadAvailableMetrics().subscribe(metrics => this.availableMetrics = metrics);
        });
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

module.exports = "<div class=\"header\">\r\n  <p>Gamification-App für adessoAG/budgeteer</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared-components/header/header.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/shared-components/header/header.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #bbb;\n  width: 100%;\n  left: 0;\n  top: 0;\n  border-bottom: 1px solid #666;\n  border-top: 1px solid #666;\n  font-size: 30px;\n  color: #ccc;\n  background-color: #213B4C;\n  text-align: center;\n  font-family: 'Arial', sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtY29tcG9uZW50cy9oZWFkZXIvQzpcXGRldlxcYmFjaGVsb3JcXHRlYW0tZ2FtaWZpY2F0aW9uLWFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkLWNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCO0VBQ2hCLFlBQVc7RUFDWCxRQUFPO0VBQ1AsT0FBTTtFQUNOLDhCQUE0QjtFQUM1QiwyQkFBeUI7RUFDekIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixpQ0FBZ0MsRUFFakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYmJiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM2NjY7XHJcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgIzY2NjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxM0I0QztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4iXX0= */"

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

module.exports = "<div class=\"preloader\">\r\n  <div>\r\n    {{loadingIterator}} von {{loadingElements}} Commits ausgewertet...\r\n  </div>\r\n  <ng-template #ladeAllgemein><div>Commits werden geladen...</div></ng-template>\r\n  <span class=\"line line-1\"></span>\r\n  <span class=\"line line-2\"></span>\r\n  <span class=\"line line-3\"></span>\r\n  <span class=\"line line-4\"></span>\r\n  <span class=\"line line-5\"></span>\r\n  <span class=\"line line-6\"></span>\r\n  <span class=\"line line-7\"></span>\r\n  <span class=\"line line-8\"></span>\r\n  <span class=\"line line-9\"></span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared-components/loading-screen/loading-screen.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/shared-components/loading-screen/loading-screen.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #000; }\n\n.preloader {\n  padding: 0px 0px 40px 0px;\n  height: 12px; }\n\ndiv {\n  color: #213B4C;\n  margin: 50px 0;\n  text-transform: uppercase;\n  text-align: center;\n  font-family: 'Arial', sans-serif;\n  font-size: 20px;\n  letter-spacing: 2px; }\n\n.preloader .line {\n  width: 1px;\n  height: 15px;\n  background: #213B4C;\n  margin: 0 1px;\n  display: inline-block;\n  -webkit-animation: opacity-1 1000ms infinite ease-in-out;\n          animation: opacity-1 1000ms infinite ease-in-out; }\n\n.preloader .line-1, .preloader-2 .line-1 {\n  -webkit-animation-delay: 800ms;\n          animation-delay: 800ms; }\n\n.preloader .line-2, .preloader-2 .line-2 {\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms; }\n\n.preloader .line-3, .preloader-2 .line-3 {\n  -webkit-animation-delay: 400ms;\n          animation-delay: 400ms; }\n\n.preloader .line-4, .preloader-2 .line-4 {\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms; }\n\n.preloader .line-6, .preloader-2 .line-6 {\n  -webkit-animation-delay: 200ms;\n          animation-delay: 200ms; }\n\n.preloader .line-7, .preloader-2 .line-7 {\n  -webkit-animation-delay: 400ms;\n          animation-delay: 400ms; }\n\n.preloader .line-8, .preloader-2 .line-8 {\n  -webkit-animation-delay: 600ms;\n          animation-delay: 600ms; }\n\n.preloader .line-9, .preloader-2 .line-9 {\n  -webkit-animation-delay: 800ms;\n          animation-delay: 800ms; }\n\n@-webkit-keyframes opacity-1 {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opacity-1 {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes opacity-2 {\n  0% {\n    opacity: 1;\n    height: 15px; }\n  50% {\n    opacity: 0;\n    height: 12px; }\n  100% {\n    opacity: 1;\n    height: 15px; } }\n\n@keyframes opacity-2 {\n  0% {\n    opacity: 1;\n    height: 15px; }\n  50% {\n    opacity: 0;\n    height: 12px; }\n  100% {\n    opacity: 1;\n    height: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtY29tcG9uZW50cy9sb2FkaW5nLXNjcmVlbi9DOlxcZGV2XFxiYWNoZWxvclxcdGVhbS1nYW1pZmljYXRpb24tYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWQtY29tcG9uZW50c1xcbG9hZGluZy1zY3JlZW5cXGxvYWRpbmctc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVksRUFDYjs7QUFHRDtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2QsMEJBQXlCO0VBQ3pCLG1CQUFrQjtFQUNsQixpQ0FBZ0M7RUFDaEMsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsYUFBWTtFQUNaLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2Isc0JBQXFCO0VBQ3JCLHlEQUFnRDtVQUFoRCxpREFBZ0QsRUFDakQ7O0FBRUQ7RUFBMkMsK0JBQXNCO1VBQXRCLHVCQUFzQixFQUFJOztBQUNyRTtFQUEyQywrQkFBc0I7VUFBdEIsdUJBQXNCLEVBQUk7O0FBQ3JFO0VBQTJDLCtCQUFzQjtVQUF0Qix1QkFBc0IsRUFBSTs7QUFDckU7RUFBMkMsK0JBQXNCO1VBQXRCLHVCQUFzQixFQUFJOztBQUNyRTtFQUEyQywrQkFBc0I7VUFBdEIsdUJBQXNCLEVBQUk7O0FBQ3JFO0VBQTJDLCtCQUFzQjtVQUF0Qix1QkFBc0IsRUFBSTs7QUFDckU7RUFBMkMsK0JBQXNCO1VBQXRCLHVCQUFzQixFQUFJOztBQUNyRTtFQUEyQywrQkFBc0I7VUFBdEIsdUJBQXNCLEVBQUk7O0FBRXJFO0VBQ0U7SUFDRSxXQUFVLEVBQUE7RUFFWjtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBLEVBQUE7O0FBUmQ7RUFDRTtJQUNFLFdBQVUsRUFBQTtFQUVaO0lBQ0UsV0FBVSxFQUFBO0VBRVo7SUFDRSxXQUFVLEVBQUEsRUFBQTs7QUFJZDtFQUNFO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQSxFQUFBOztBQVhoQjtFQUNFO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQTtFQUVkO0lBQ0UsV0FBVTtJQUNWLGFBQVksRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQtY29tcG9uZW50cy9sb2FkaW5nLXNjcmVlbi9sb2FkaW5nLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxuLnByZWxvYWRlcntcclxuICBwYWRkaW5nOiAwcHggMHB4IDQwcHggMHB4O1xyXG4gIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuXHJcbmRpdiB7XHJcbiAgY29sb3I6ICMyMTNCNEM7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuXHJcbi5wcmVsb2FkZXIgLmxpbmUge1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICMyMTNCNEM7XHJcbiAgbWFyZ2luOiAwIDFweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYW5pbWF0aW9uOiBvcGFjaXR5LTEgMTAwMG1zIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ucHJlbG9hZGVyIC5saW5lLTEsIC5wcmVsb2FkZXItMiAubGluZS0xIHsgYW5pbWF0aW9uLWRlbGF5OiA4MDBtczsgfVxyXG4ucHJlbG9hZGVyIC5saW5lLTIsIC5wcmVsb2FkZXItMiAubGluZS0yIHsgYW5pbWF0aW9uLWRlbGF5OiA2MDBtczsgfVxyXG4ucHJlbG9hZGVyIC5saW5lLTMsIC5wcmVsb2FkZXItMiAubGluZS0zIHsgYW5pbWF0aW9uLWRlbGF5OiA0MDBtczsgfVxyXG4ucHJlbG9hZGVyIC5saW5lLTQsIC5wcmVsb2FkZXItMiAubGluZS00IHsgYW5pbWF0aW9uLWRlbGF5OiAyMDBtczsgfVxyXG4ucHJlbG9hZGVyIC5saW5lLTYsIC5wcmVsb2FkZXItMiAubGluZS02IHsgYW5pbWF0aW9uLWRlbGF5OiAyMDBtczsgfVxyXG4ucHJlbG9hZGVyIC5saW5lLTcsIC5wcmVsb2FkZXItMiAubGluZS03IHsgYW5pbWF0aW9uLWRlbGF5OiA0MDBtczsgfVxyXG4ucHJlbG9hZGVyIC5saW5lLTgsIC5wcmVsb2FkZXItMiAubGluZS04IHsgYW5pbWF0aW9uLWRlbGF5OiA2MDBtczsgfVxyXG4ucHJlbG9hZGVyIC5saW5lLTksIC5wcmVsb2FkZXItMiAubGluZS05IHsgYW5pbWF0aW9uLWRlbGF5OiA4MDBtczsgfVxyXG5cclxuQGtleWZyYW1lcyBvcGFjaXR5LTEge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG9wYWNpdHktMiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuIl19 */"

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
    CommitService.prototype.loadCommits = function (accessToken) {
        //console.log("--------LOADING-COMMITS---------");
        //console.log(accessToken);
        return this.http.get(_AppConfig__WEBPACK_IMPORTED_MODULE_3__["AppConfig"].BASE_URL + "/projects/9/commits?page=0&size=999", { headers: { 'Authorization': accessToken } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result._embedded.commitResourceList; }));
    };
    CommitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CommitService);
    return CommitService;
}());



/***/ }),

/***/ "./src/app/service/element.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/element.service.ts ***!
  \********************************************/
/*! exports provided: ElementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementService", function() { return ElementService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ElementService = /** @class */ (function () {
    function ElementService() {
        this.userElementsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.commitElementsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userElements$ = this.userElementsSource.asObservable();
        this.commitElements$ = this.commitElementsSource.asObservable();
    }
    ElementService.prototype.saveElements = function (userElements, commitElements) {
        this.userElementsSource.next(userElements);
        this.commitElementsSource.next(commitElements);
    };
    ElementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ElementService);
    return ElementService;
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
/* harmony import */ var _setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup.service */ "./src/app/service/setup.service.ts");
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
    function MetricService(http, setupService) {
        this.http = http;
        this.setupService = setupService;
    }
    MetricService.prototype.loadAvailableMetrics = function () {
        return this.http.get(_AppConfig__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].BASE_URL + "/projects/9/metrics")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result._embedded.metricResourceList.map(function (metric) { return _AppConfig__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].getMetricByMetricName(metric.metricName); }); }));
    };
    MetricService.prototype.loadDeltaTree = function (accessToken, currentCommit, previousCommit, metricNames) {
        //console.log("--------LOADING-DELTATREE---------");
        //console.log(accessToken);
        var body = {
            'commit1': currentCommit.name,
            'commit2': previousCommit.name,
            'metrics': metricNames
        };
        return this.http.post(_AppConfig__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].BASE_URL + "/projects/9/metricvalues/deltaTree", body, { headers: { 'Authorization': accessToken } });
    };
    MetricService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _setup_service__WEBPACK_IMPORTED_MODULE_4__["SetupService"]])
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
        var accessToken;
        this.authorizeUser().subscribe(function (loginResult) {
            accessToken = loginResult;
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
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.accessToken; }));
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