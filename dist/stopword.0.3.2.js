var stopword =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/stopword.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/stopword.js":
/*!*************************!*\
  !*** ./lib/stopword.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultStopwords = __webpack_require__(/*! ./stopwords_en.js */ "./lib/stopwords_en.js").words

exports.removeStopwords = function(tokens, stopwords) {
  stopwords = stopwords || defaultStopwords
  if (typeof tokens !== 'object' || typeof stopwords != 'object'){
    throw new Error ('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(function (value) {
    return stopwords.indexOf(value.toLowerCase()) === -1
  })
}

exports.af = __webpack_require__(/*! ./stopwords_af.js */ "./lib/stopwords_af.js").words
exports.ar = __webpack_require__(/*! ./stopwords_ar.js */ "./lib/stopwords_ar.js").words
exports.bn = __webpack_require__(/*! ./stopwords_bn.js */ "./lib/stopwords_bn.js").words
exports.br = __webpack_require__(/*! ./stopwords_br.js */ "./lib/stopwords_br.js").words
exports.da = __webpack_require__(/*! ./stopwords_da.js */ "./lib/stopwords_da.js").words
exports.de = __webpack_require__(/*! ./stopwords_de.js */ "./lib/stopwords_de.js").words
exports.en = __webpack_require__(/*! ./stopwords_en.js */ "./lib/stopwords_en.js").words
exports.es = __webpack_require__(/*! ./stopwords_es.js */ "./lib/stopwords_es.js").words
exports.fa = __webpack_require__(/*! ./stopwords_fa.js */ "./lib/stopwords_fa.js").words
exports.fr = __webpack_require__(/*! ./stopwords_fr.js */ "./lib/stopwords_fr.js").words
exports.fi = __webpack_require__(/*! ./stopwords_fi.js */ "./lib/stopwords_fi.js").words
exports.ha = __webpack_require__(/*! ./stopwords_ha.js */ "./lib/stopwords_ha.js").words
exports.he = __webpack_require__(/*! ./stopwords_he.js */ "./lib/stopwords_he.js").words
exports.hi = __webpack_require__(/*! ./stopwords_hi.js */ "./lib/stopwords_hi.js").words
exports.id = __webpack_require__(/*! ./stopwords_id.js */ "./lib/stopwords_id.js").words
exports.it = __webpack_require__(/*! ./stopwords_it.js */ "./lib/stopwords_it.js").words
exports.ja = __webpack_require__(/*! ./stopwords_ja.js */ "./lib/stopwords_ja.js").words
exports.lgg = __webpack_require__(/*! ./stopwords_lgg.js */ "./lib/stopwords_lgg.js").words
exports.lggo = __webpack_require__(/*! ./stopwords_lggo.js */ "./lib/stopwords_lggo.js").words
exports.my = __webpack_require__(/*! ./stopwords_my.js */ "./lib/stopwords_my.js").words
exports.nl = __webpack_require__(/*! ./stopwords_nl.js */ "./lib/stopwords_nl.js").words
exports.no = __webpack_require__(/*! ./stopwords_no.js */ "./lib/stopwords_no.js").words
exports.pa = __webpack_require__(/*! ./stopwords_pa.js */ "./lib/stopwords_pa.js").words
exports.pl = __webpack_require__(/*! ./stopwords_pl.js */ "./lib/stopwords_pl.js").words
exports.pt = __webpack_require__(/*! ./stopwords_pt.js */ "./lib/stopwords_pt.js").words
exports.ru = __webpack_require__(/*! ./stopwords_ru.js */ "./lib/stopwords_ru.js").words
exports.so = __webpack_require__(/*! ./stopwords_so.js */ "./lib/stopwords_so.js").words
exports.st = __webpack_require__(/*! ./stopwords_st.js */ "./lib/stopwords_st.js").words
exports.sv = __webpack_require__(/*! ./stopwords_sv.js */ "./lib/stopwords_sv.js").words
exports.sw = __webpack_require__(/*! ./stopwords_sw.js */ "./lib/stopwords_sw.js").words
exports.vi = __webpack_require__(/*! ./stopwords_vi.js */ "./lib/stopwords_vi.js").words
exports.yo = __webpack_require__(/*! ./stopwords_yo.js */ "./lib/stopwords_yo.js").words
exports.zh = __webpack_require__(/*! ./stopwords_zh.js */ "./lib/stopwords_zh.js").words
exports.zu = __webpack_require__(/*! ./stopwords_zu.js */ "./lib/stopwords_zu.js").words


/***/ }),

/***/ "./lib/stopwords_af.js":
/*!*****************************!*\
  !*** ./lib/stopwords_af.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'die', 'het', 'en', 'sy', 'nie', 'was', 'hy', 'te', 'is', 'ek', 'om', 'hulle', 'in', 'my',
  '\'n', 'vir', 'toe', 'haar', 'van', 'dit', 'op', 'se', 'wat', 'met', 'gaan', 'baie', 'ons', 'jy',
  'na', 'maar', 'hom', 'so', 'n', 'huis', 'kan', 'aan', 'dat', 'daar', 'sal', 'jou', 'gesê', 'by',
  'kom', 'een', 'ma', 'as', 'son', 'groot', 'begin', 'al'
]


// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_ar.js":
/*!*****************************!*\
  !*** ./lib/stopwords_ar.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = ["،","آض","آمينَ","آه","آهاً","آي","أ","أب","أجل","أجمع","أخ","أخذ","أصبح","أضحى","أقبل","أقل","أكثر","ألا","أم","أما","أمامك","أمامكَ","أمسى","أمّا","أن","أنا","أنت","أنتم","أنتما","أنتن","أنتِ","أنشأ","أنّى","أو","أوشك","أولئك","أولئكم","أولاء","أولالك","أوّهْ","أي","أيا","أين","أينما","أيّ","أَنَّ","أََيُّ","أُفٍّ","إذ","إذا","إذاً","إذما","إذن","إلى","إليكم","إليكما","إليكنّ","إليكَ","إلَيْكَ","إلّا","إمّا","إن","إنّما","إي","إياك","إياكم","إياكما","إياكن","إيانا","إياه","إياها","إياهم","إياهما","إياهن","إياي","إيهٍ","إِنَّ","ا","ابتدأ","اثر","اجل","احد","اخرى","اخلولق","اذا","اربعة","ارتدّ","استحال","اطار","اعادة","اعلنت","اف","اكثر","اكد","الألاء","الألى","الا","الاخيرة","الان","الاول","الاولى","التى","التي","الثاني","الثانية","الذاتي","الذى","الذي","الذين","السابق","الف","اللائي","اللاتي","اللتان","اللتيا","اللتين","اللذان","اللذين","اللواتي","الماضي","المقبل","الوقت","الى","اليوم","اما","امام","امس","ان","انبرى","انقلب","انه","انها","او","اول","اي","ايار","ايام","ايضا","ب","بات","باسم","بان","بخٍ","برس","بسبب","بسّ","بشكل","بضع","بطآن","بعد","بعض","بك","بكم","بكما","بكن","بل","بلى","بما","بماذا","بمن","بن","بنا","به","بها","بي","بيد","بين","بَسْ","بَلْهَ","بِئْسَ","تانِ","تانِك","تبدّل","تجاه","تحوّل","تلقاء","تلك","تلكم","تلكما","تم","تينك","تَيْنِ","تِه","تِي","ثلاثة","ثم","ثمّ","ثمّة","ثُمَّ","جعل","جلل","جميع","جير","حار","حاشا","حاليا","حاي","حتى","حرى","حسب","حم","حوالى","حول","حيث","حيثما","حين","حيَّ","حَبَّذَا","حَتَّى","حَذارِ","خلا","خلال","دون","دونك","ذا","ذات","ذاك","ذانك","ذانِ","ذلك","ذلكم","ذلكما","ذلكن","ذو","ذوا","ذواتا","ذواتي","ذيت","ذينك","ذَيْنِ","ذِه","ذِي","راح","رجع","رويدك","ريث","رُبَّ","زيارة","سبحان","سرعان","سنة","سنوات","سوف","سوى","سَاءَ","سَاءَمَا","شبه","شخصا","شرع","شَتَّانَ","صار","صباح","صفر","صهٍ","صهْ","ضد","ضمن","طاق","طالما","طفق","طَق","ظلّ","عاد","عام","عاما","عامة","عدا","عدة","عدد","عدم","عسى","عشر","عشرة","علق","على","عليك","عليه","عليها","علًّ","عن","عند","عندما","عوض","عين","عَدَسْ","عَمَّا","غدا","غير","ـ","ف","فان","فلان","فو","فى","في","فيم","فيما","فيه","فيها","قال","قام","قبل","قد","قطّ","قلما","قوة","كأنّما","كأين","كأيّ","كأيّن","كاد","كان","كانت","كذا","كذلك","كرب","كل","كلا","كلاهما","كلتا","كلم","كليكما","كليهما","كلّما","كلَّا","كم","كما","كي","كيت","كيف","كيفما","كَأَنَّ","كِخ","لئن","لا","لات","لاسيما","لدن","لدى","لعمر","لقاء","لك","لكم","لكما","لكن","لكنَّما","لكي","لكيلا","للامم","لم","لما","لمّا","لن","لنا","له","لها","لو","لوكالة","لولا","لوما","لي","لَسْتَ","لَسْتُ","لَسْتُم","لَسْتُمَا","لَسْتُنَّ","لَسْتِ","لَسْنَ","لَعَلَّ","لَكِنَّ","لَيْتَ","لَيْسَ","لَيْسَا","لَيْسَتَا","لَيْسَتْ","لَيْسُوا","لَِسْنَا","ما","ماانفك","مابرح","مادام","ماذا","مازال","مافتئ","مايو","متى","مثل","مذ","مساء","مع","معاذ","مقابل","مكانكم","مكانكما","مكانكنّ","مكانَك","مليار","مليون","مما","ممن","من","منذ","منها","مه","مهما","مَنْ","مِن","نحن","نحو","نعم","نفس","نفسه","نهاية","نَخْ","نِعِمّا","نِعْمَ","ها","هاؤم","هاكَ","هاهنا","هبّ","هذا","هذه","هكذا","هل","هلمَّ","هلّا","هم","هما","هن","هنا","هناك","هنالك","هو","هي","هيا","هيت","هيّا","هَؤلاء","هَاتانِ","هَاتَيْنِ","هَاتِه","هَاتِي","هَجْ","هَذا","هَذانِ","هَذَيْنِ","هَذِه","هَذِي","هَيْهَاتَ","و","و6","وا","واحد","واضاف","واضافت","واكد","وان","واهاً","واوضح","وراءَك","وفي","وقال","وقالت","وقد","وقف","وكان","وكانت","ولا","ولم","ومن","وهو","وهي","ويكأنّ","وَيْ","وُشْكَانََ","يكون","يمكن","يوم","ّأيّان"]

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_bn.js":
/*!*****************************!*\
  !*** ./lib/stopwords_bn.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = ["অতএব","অথচ","অথবা","অনুযায়ী","অনেক","অনেকে","অনেকেই","অন্তত","অন্য","অবধি","অবশ্য","অর্থাত","আই","আগামী","আগে","আগেই","আছে","আজ","আদ্যভাগে","আপনার","আপনি","আবার","আমরা","আমাকে","আমাদের","আমার","আমি","আর","আরও","ই","ইত্যাদি","ইহা","উচিত","উত্তর","উনি","উপর","উপরে","এ","এঁদের","এঁরা","এই","একই","একটি","একবার","একে","এক্","এখন","এখনও","এখানে","এখানেই","এটা","এটাই","এটি","এত","এতটাই","এতে","এদের","এব","এবং","এবার","এমন","এমনকী","এমনি","এর","এরা","এল","এস","এসে","ঐ","ও","ওঁদের","ওঁর","ওঁরা","ওই","ওকে","ওখানে","ওদের","ওর","ওরা","কখনও","কত","কবে","কমনে","কয়েক","কয়েকটি","করছে","করছেন","করতে","করবে","করবেন","করলে","করলেন","করা","করাই","করায়","করার","করি","করিতে","করিয়া","করিয়ে","করে","করেই","করেছিলেন","করেছে","করেছেন","করেন","কাউকে","কাছ","কাছে","কাজ","কাজে","কারও","কারণ","কি","কিংবা","কিছু","কিছুই","কিন্তু","কী","কে","কেউ","কেউই","কেখা","কেন","কোটি","কোন","কোনও","কোনো","ক্ষেত্রে","কয়েক","খুব","গিয়ে","গিয়েছে","গিয়ে","গুলি","গেছে","গেল","গেলে","গোটা","চলে","চান","চায়","চার","চালু","চেয়ে","চেষ্টা","ছাড়া","ছাড়াও","ছিল","ছিলেন","জন","জনকে","জনের","জন্য","জন্যওজে","জানতে","জানা","জানানো","জানায়","জানিয়ে","জানিয়েছে","জে","জ্নজন","টি","ঠিক","তখন","তত","তথা","তবু","তবে","তা","তাঁকে","তাঁদের","তাঁর","তাঁরা","তাঁাহারা","তাই","তাও","তাকে","তাতে","তাদের","তার","তারপর","তারা","তারৈ","তাহলে","তাহা","তাহাতে","তাহার","তিনঐ","তিনি","তিনিও","তুমি","তুলে","তেমন","তো","তোমার","থাকবে","থাকবেন","থাকা","থাকায়","থাকে","থাকেন","থেকে","থেকেই","থেকেও","দিকে","দিতে","দিন","দিয়ে","দিয়েছে","দিয়েছেন","দিলেন","দু","দুই","দুটি","দুটো","দেওয়া","দেওয়ার","দেওয়া","দেখতে","দেখা","দেখে","দেন","দেয়","দ্বারা","ধরা","ধরে","ধামার","নতুন","নয়","না","নাই","নাকি","নাগাদ","নানা","নিজে","নিজেই","নিজেদের","নিজের","নিতে","নিয়ে","নিয়ে","নেই","নেওয়া","নেওয়ার","নেওয়া","নয়","পক্ষে","পর","পরে","পরেই","পরেও","পর্যন্ত","পাওয়া","পাচ","পারি","পারে","পারেন","পি","পেয়ে","পেয়্র্","প্রতি","প্রথম","প্রভৃতি","প্রযন্ত","প্রাথমিক","প্রায়","প্রায়","ফলে","ফিরে","ফের","বক্তব্য","বদলে","বন","বরং","বলতে","বলল","বললেন","বলা","বলে","বলেছেন","বলেন","বসে","বহু","বা","বাদে","বার","বি","বিনা","বিভিন্ন","বিশেষ","বিষয়টি","বেশ","বেশি","ব্যবহার","ব্যাপারে","ভাবে","ভাবেই","মতো","মতোই","মধ্যভাগে","মধ্যে","মধ্যেই","মধ্যেও","মনে","মাত্র","মাধ্যমে","মোট","মোটেই","যখন","যত","যতটা","যথেষ্ট","যদি","যদিও","যা","যাঁর","যাঁরা","যাওয়া","যাওয়ার","যাওয়া","যাকে","যাচ্ছে","যাতে","যাদের","যান","যাবে","যায়","যার","যারা","যিনি","যে","যেখানে","যেতে","যেন","যেমন","র","রকম","রয়েছে","রাখা","রেখে","লক্ষ","শুধু","শুরু","সঙ্গে","সঙ্গেও","সব","সবার","সমস্ত","সম্প্রতি","সহ","সহিত","সাধারণ","সামনে","সি","সুতরাং","সে","সেই","সেখান","সেখানে","সেটা","সেটাই","সেটাও","সেটি","স্পষ্ট","স্বয়ং","হইতে","হইবে","হইয়া","হওয়া","হওয়ায়","হওয়ার","হচ্ছে","হত","হতে","হতেই","হন","হবে","হবেন","হয়","হয়তো","হয়নি","হয়ে","হয়েই","হয়েছিল","হয়েছে","হয়েছেন","হল","হলে","হলেই","হলেও","হলো","হাজার","হিসাবে","হৈলে","হোক","হয়"]
// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_br.js":
/*!*****************************!*\
  !*** ./lib/stopwords_br.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Original copyright:
/*
Copyright (c) 2017, Micael Levi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// This version:
/*
The MIT License (MIT)

Copyright (c) 2017 Fabrício Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// a list of commonly used words (pt-BR) that have little meaning and can be excluded
// from analysis.
var words = [
  'a',
  'à',
  'adeus',
  'agora',
  'aí',
  'ainda',
  'além',
  'algo',
  'alguém',
  'algum',
  'alguma',
  'algumas',
  'alguns',
  'ali',
  'ampla',
  'amplas',
  'amplo',
  'amplos',
  'ano',
  'anos',
  'ante',
  'antes',
  'ao',
  'aos',
  'apenas',
  'apoio',
  'após',
  'aquela',
  'aquelas',
  'aquele',
  'aqueles',
  'aqui',
  'aquilo',
  'área',
  'as',
  'às',
  'assim',
  'até',
  'atrás',
  'através',
  'baixo',
  'bastante',
  'bem',
  'boa',
  'boas',
  'bom',
  'bons',
  'breve',
  'cá',
  'cada',
  'catorze',
  'cedo',
  'cento',
  'certamente',
  'certeza',
  'cima',
  'cinco',
  'coisa',
  'coisas',
  'com',
  'como',
  'conselho',
  'contra',
  'contudo',
  'custa',
  'da',
  'dá',
  'dão',
  'daquela',
  'daquelas',
  'daquele',
  'daqueles',
  'dar',
  'das',
  'de',
  'debaixo',
  'dela',
  'delas',
  'dele',
  'deles',
  'demais',
  'dentro',
  'depois',
  'desde',
  'dessa',
  'dessas',
  'desse',
  'desses',
  'desta',
  'destas',
  'deste',
  'destes',
  'deve',
  'devem',
  'devendo',
  'dever',
  'deverá',
  'deverão',
  'deveria',
  'deveriam',
  'devia',
  'deviam',
  'dez',
  'dezanove',
  'dezasseis',
  'dezassete',
  'dezoito',
  'dia',
  'diante',
  'disse',
  'disso',
  'disto',
  'dito',
  'diz',
  'dizem',
  'dizer',
  'do',
  'dois',
  'dos',
  'doze',
  'duas',
  'dúvida',
  'e',
  'é',
  'ela',
  'elas',
  'ele',
  'eles',
  'em',
  'embora',
  'enquanto',
  'entre',
  'era',
  'eram',
  'éramos',
  'és',
  'essa',
  'essas',
  'esse',
  'esses',
  'esta',
  'está',
  'estamos',
  'estão',
  'estar',
  'estas',
  'estás',
  'estava',
  'estavam',
  'estávamos',
  'este',
  'esteja',
  'estejam',
  'estejamos',
  'estes',
  'esteve',
  'estive',
  'estivemos',
  'estiver',
  'estivera',
  'estiveram',
  'estivéramos',
  'estiverem',
  'estivermos',
  'estivesse',
  'estivessem',
  'estivéssemos',
  'estiveste',
  'estivestes',
  'estou',
  'etc',
  'eu',
  'exemplo',
  'faço',
  'falta',
  'favor',
  'faz',
  'fazeis',
  'fazem',
  'fazemos',
  'fazendo',
  'fazer',
  'fazes',
  'feita',
  'feitas',
  'feito',
  'feitos',
  'fez',
  'fim',
  'final',
  'foi',
  'fomos',
  'for',
  'fora',
  'foram',
  'fôramos',
  'forem',
  'forma',
  'formos',
  'fosse',
  'fossem',
  'fôssemos',
  'foste',
  'fostes',
  'fui',
  'geral',
  'grande',
  'grandes',
  'grupo',
  'há',
  'haja',
  'hajam',
  'hajamos',
  'hão',
  'havemos',
  'havia',
  'hei',
  'hoje',
  'hora',
  'horas',
  'houve',
  'houvemos',
  'houver',
  'houvera',
  'houverá',
  'houveram',
  'houvéramos',
  'houverão',
  'houverei',
  'houverem',
  'houveremos',
  'houveria',
  'houveriam',
  'houveríamos',
  'houvermos',
  'houvesse',
  'houvessem',
  'houvéssemos',
  'isso',
  'isto',
  'já',
  'la',
  'lá',
  'lado',
  'lhe',
  'lhes',
  'lo',
  'local',
  'logo',
  'longe',
  'lugar',
  'maior',
  'maioria',
  'mais',
  'mal',
  'mas',
  'máximo',
  'me',
  'meio',
  'menor',
  'menos',
  'mês',
  'meses',
  'mesma',
  'mesmas',
  'mesmo',
  'mesmos',
  'meu',
  'meus',
  'mil',
  'minha',
  'minhas',
  'momento',
  'muita',
  'muitas',
  'muito',
  'muitos',
  'na',
  'nada',
  'não',
  'naquela',
  'naquelas',
  'naquele',
  'naqueles',
  'nas',
  'nem',
  'nenhum',
  'nenhuma',
  'nessa',
  'nessas',
  'nesse',
  'nesses',
  'nesta',
  'nestas',
  'neste',
  'nestes',
  'ninguém',
  'nível',
  'no',
  'noite',
  'nome',
  'nos',
  'nós',
  'nossa',
  'nossas',
  'nosso',
  'nossos',
  'nova',
  'novas',
  'nove',
  'novo',
  'novos',
  'num',
  'numa',
  'número',
  'nunca',
  'o',
  'obra',
  'obrigada',
  'obrigado',
  'oitava',
  'oitavo',
  'oito',
  'onde',
  'ontem',
  'onze',
  'os',
  'ou',
  'outra',
  'outras',
  'outro',
  'outros',
  'para',
  'parece',
  'parte',
  'partir',
  'paucas',
  'pela',
  'pelas',
  'pelo',
  'pelos',
  'pequena',
  'pequenas',
  'pequeno',
  'pequenos',
  'per',
  'perante',
  'perto',
  'pode',
  'pude',
  'pôde',
  'podem',
  'podendo',
  'poder',
  'poderia',
  'poderiam',
  'podia',
  'podiam',
  'põe',
  'põem',
  'pois',
  'ponto',
  'pontos',
  'por',
  'porém',
  'porque',
  'porquê',
  'posição',
  'possível',
  'possivelmente',
  'posso',
  'pouca',
  'poucas',
  'pouco',
  'poucos',
  'primeira',
  'primeiras',
  'primeiro',
  'primeiros',
  'própria',
  'próprias',
  'próprio',
  'próprios',
  'próxima',
  'próximas',
  'próximo',
  'próximos',
  'pude',
  'puderam',
  'quais',
  'quáis',
  'qual',
  'quando',
  'quanto',
  'quantos',
  'quarta',
  'quarto',
  'quatro',
  'que',
  'quê',
  'quem',
  'quer',
  'quereis',
  'querem',
  'queremas',
  'queres',
  'quero',
  'questão',
  'quinta',
  'quinto',
  'quinze',
  'relação',
  'sabe',
  'sabem',
  'são',
  'se',
  'segunda',
  'segundo',
  'sei',
  'seis',
  'seja',
  'sejam',
  'sejamos',
  'sem',
  'sempre',
  'sendo',
  'ser',
  'será',
  'serão',
  'serei',
  'seremos',
  'seria',
  'seriam',
  'seríamos',
  'sete',
  'sétima',
  'sétimo',
  'seu',
  'seus',
  'sexta',
  'sexto',
  'si',
  'sido',
  'sim',
  'sistema',
  'só',
  'sob',
  'sobre',
  'sois',
  'somos',
  'sou',
  'sua',
  'suas',
  'tal',
  'talvez',
  'também',
  'tampouco',
  'tanta',
  'tantas',
  'tanto',
  'tão',
  'tarde',
  'te',
  'tem',
  'tém',
  'têm',
  'temos',
  'tendes',
  'tendo',
  'tenha',
  'tenham',
  'tenhamos',
  'tenho',
  'tens',
  'ter',
  'terá',
  'terão',
  'terceira',
  'terceiro',
  'terei',
  'teremos',
  'teria',
  'teriam',
  'teríamos',
  'teu',
  'teus',
  'teve',
  'ti',
  'tido',
  'tinha',
  'tinham',
  'tínhamos',
  'tive',
  'tivemos',
  'tiver',
  'tivera',
  'tiveram',
  'tivéramos',
  'tiverem',
  'tivermos',
  'tivesse',
  'tivessem',
  'tivéssemos',
  'tiveste',
  'tivestes',
  'toda',
  'todas',
  'todavia',
  'todo',
  'todos',
  'trabalho',
  'três',
  'treze',
  'tu',
  'tua',
  'tuas',
  'tudo',
  'última',
  'últimas',
  'último',
  'últimos',
  'um',
  'uma',
  'umas',
  'uns',
  'vai',
  'vais',
  'vão',
  'vários',
  'vem',
  'vêm',
  'vendo',
  'vens',
  'ver',
  'vez',
  'vezes',
  'viagem',
  'vindo',
  'vinte',
  'vir',
  'você',
  'vocês',
  'vos',
  'vós',
  'vossa',
  'vossas',
  'vosso',
  'vossos',
  'zero',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_'
]

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_da.js":
/*!*****************************!*\
  !*** ./lib/stopwords_da.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Creative Commons – Attribution / ShareAlike 3.0 license
http://creativecommons.org/licenses/by-sa/3.0/

List based on frequently used words in subtitles in 2012.

Thanks to
opensubtitles.org
https://invokeit.wordpress.com/frequency-word-lists/#comment-9707
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'er', 'jeg', 'det', 'du', 'ikke', 'i', 'at', 'en', 'og', 'har',
  'vi', 'til', 'på', 'hvad', 'med', 'mig', 'så', 'for', 'de', 'dig',
  'der', 'den', 'han', 'kan', 'af', 'vil', 'var', 'her', 'et', 'skal',
  'ved', 'nu', 'men', 'om', 'ja', 'som', 'nej', 'min', 'noget', 'ham',
  'hun', 'bare', 'kom', 'være', 'din', 'hvor', 'dem', 'ud', 'os', 'hvis',
  'må', 'se', 'godt', 'have', 'fra', 'ville', 'okay', 'lige', 'op', 'alle',
  'lad', 'hvorfor', 'sig', 'hvordan', 'få', 'kunne', 'eller', 'hvem', 'man', 'bliver',
  'havde', 'da', 'ingen', 'efter', 'når', 'alt', 'jo', 'to', 'mit', 'ind',
  'hej', 'aldrig', 'lidt', 'nogen', 'over', 'også', 'mand', 'far', 'skulle', 'selv',
  'får', 'hans', 'ser', 'vores', 'jer', 'sådan', 'dit', 'kun', 'deres', 'ned',
  'mine', 'komme', 'tage', 'denne', 'sige', 'dette', 'blive', 'helt', 'fordi',
  'end', 'tag', 'før', 'fik', 'dine',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_de.js":
/*!*****************************!*\
  !*** ./lib/stopwords_de.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'a', 'ab', 'aber', 'ach', 'acht', 'achte', 'achten', 'achter', 'achtes', 'ag', 'alle', 'allein', 'allem', 'allen', 'aller', 'allerdings', 'alles', 'allgemeinen', 'als', 'also', 'am', 'an', 'ander', 'andere', 'anderem', 'anderen', 'anderer', 'anderes', 'anderm', 'andern', 'anderr', 'anders', 'au', 'auch', 'auf', 'aus', 'ausser', 'ausserdem', 'außer', 'außerdem', 'b', 'bald', 'bei', 'beide', 'beiden', 'beim', 'beispiel', 'bekannt', 'bereits', 'besonders', 'besser', 'besten', 'bin', 'bis', 'bisher', 'bist', 'c', 'd', 'd.h', 'da', 'dabei', 'dadurch', 'dafür', 'dagegen', 'daher', 'dahin', 'dahinter', 'damals', 'damit', 'danach', 'daneben', 'dank', 'dann', 'daran', 'darauf', 'daraus', 'darf', 'darfst', 'darin', 'darum', 'darunter', 'darüber', 'das', 'dasein', 'daselbst', 'dass', 'dasselbe', 'davon', 'davor', 'dazu', 'dazwischen', 'daß', 'dein', 'deine', 'deinem', 'deinen', 'deiner', 'deines', 'dem', 'dementsprechend', 'demgegenüber', 'demgemäss', 'demgemäß', 'demselben', 'demzufolge', 'den', 'denen', 'denn', 'denselben', 'der', 'deren', 'derer', 'derjenige', 'derjenigen', 'dermassen', 'dermaßen', 'derselbe', 'derselben', 'des', 'deshalb', 'desselben', 'dessen', 'deswegen', 'dich', 'die', 'diejenige', 'diejenigen', 'dies', 'diese', 'dieselbe', 'dieselben', 'diesem', 'diesen', 'dieser', 'dieses', 'dir', 'doch', 'dort', 'drei', 'drin', 'dritte', 'dritten', 'dritter', 'drittes', 'du', 'durch', 'durchaus', 'durfte', 'durften', 'dürfen', 'dürft', 'e', 'eben', 'ebenso', 'ehrlich', 'ei', 'ei, ', 'eigen', 'eigene', 'eigenen', 'eigener', 'eigenes', 'ein', 'einander', 'eine', 'einem', 'einen', 'einer', 'eines', 'einig', 'einige', 'einigem', 'einigen', 'einiger', 'einiges', 'einmal', 'eins', 'elf', 'en', 'ende', 'endlich', 'entweder', 'er', 'ernst', 'erst', 'erste', 'ersten', 'erster', 'erstes', 'es', 'etwa', 'etwas', 'euch', 'euer', 'eure', 'eurem', 'euren', 'eurer', 'eures', 'f', 'folgende', 'früher', 'fünf', 'fünfte', 'fünften', 'fünfter', 'fünftes', 'für', 'g', 'gab', 'ganz', 'ganze', 'ganzen', 'ganzer', 'ganzes', 'gar', 'gedurft', 'gegen', 'gegenüber', 'gehabt', 'gehen', 'geht', 'gekannt', 'gekonnt', 'gemacht', 'gemocht', 'gemusst', 'genug', 'gerade', 'gern', 'gesagt', 'geschweige', 'gewesen', 'gewollt', 'geworden', 'gibt', 'ging', 'gleich', 'gott', 'gross', 'grosse', 'grossen', 'grosser', 'grosses', 'groß', 'große', 'großen', 'großer', 'großes', 'gut', 'gute', 'guter', 'gutes', 'h', 'hab', 'habe', 'haben', 'habt', 'hast', 'hat', 'hatte', 'hatten', 'hattest', 'hattet', 'heisst', 'her', 'heute', 'hier', 'hin', 'hinter', 'hoch', 'hätte', 'hätten', 'i', 'ich', 'ihm', 'ihn', 'ihnen', 'ihr', 'ihre', 'ihrem', 'ihren', 'ihrer', 'ihres', 'im', 'immer', 'in', 'indem', 'infolgedessen', 'ins', 'irgend', 'ist', 'j', 'ja', 'jahr', 'jahre', 'jahren', 'je', 'jede', 'jedem', 'jeden', 'jeder', 'jedermann', 'jedermanns', 'jedes', 'jedoch', 'jemand', 'jemandem', 'jemanden', 'jene', 'jenem', 'jenen', 'jener', 'jenes', 'jetzt', 'k', 'kam', 'kann', 'kannst', 'kaum', 'kein', 'keine', 'keinem', 'keinen', 'keiner', 'keines', 'kleine', 'kleinen', 'kleiner', 'kleines', 'kommen', 'kommt', 'konnte', 'konnten', 'kurz', 'können', 'könnt', 'könnte', 'l', 'lang', 'lange', 'leicht', 'leide', 'lieber', 'los', 'm', 'machen', 'macht', 'machte', 'mag', 'magst', 'mahn', 'mal', 'man', 'manche', 'manchem', 'manchen', 'mancher', 'manches', 'mann', 'mehr', 'mein', 'meine', 'meinem', 'meinen', 'meiner', 'meines', 'mensch', 'menschen', 'mich', 'mir', 'mit', 'mittel', 'mochte', 'mochten', 'morgen', 'muss', 'musst', 'musste', 'mussten', 'muß', 'mußt', 'möchte', 'mögen', 'möglich', 'mögt', 'müssen', 'müsst', 'müßt', 'n', 'na', 'nach', 'nachdem', 'nahm', 'natürlich', 'neben', 'nein', 'neue', 'neuen', 'neun', 'neunte', 'neunten', 'neunter', 'neuntes', 'nicht', 'nichts', 'nie', 'niemand', 'niemandem', 'niemanden', 'noch', 'nun', 'nur', 'o', 'ob', 'oben', 'oder', 'offen', 'oft', 'ohne', 'ordnung', 'p', 'q', 'r', 'recht', 'rechte', 'rechten', 'rechter', 'rechtes', 'richtig', 'rund', 's', 'sa', 'sache', 'sagt', 'sagte', 'sah', 'satt', 'schlecht', 'schluss', 'schon', 'sechs', 'sechste', 'sechsten', 'sechster', 'sechstes', 'sehr', 'sei', 'seid', 'seien', 'sein', 'seine', 'seinem', 'seinen', 'seiner', 'seines', 'seit', 'seitdem', 'selbst', 'sich', 'sie', 'sieben', 'siebente', 'siebenten', 'siebenter', 'siebentes', 'sind', 'so', 'solang', 'solche', 'solchem', 'solchen', 'solcher', 'solches', 'soll', 'sollen', 'sollst', 'sollt', 'sollte', 'sollten', 'sondern', 'sonst', 'soweit', 'sowie', 'später', 'startseite', 'statt', 'steht', 'suche', 't', 'tag', 'tage', 'tagen', 'tat', 'teil', 'tel', 'tritt', 'trotzdem', 'tun', 'u', 'uhr', 'um', 'und', 'und?', 'uns', 'unse', 'unsem', 'unsen', 'unser', 'unsere', 'unserer', 'unses', 'unter', 'v', 'vergangenen', 'viel', 'viele', 'vielem', 'vielen', 'vielleicht', 'vier', 'vierte', 'vierten', 'vierter', 'viertes', 'vom', 'von', 'vor', 'w', 'wahr?', 'wann', 'war', 'waren', 'warst', 'wart', 'warum', 'was', 'weg', 'wegen', 'weil', 'weit', 'weiter', 'weitere', 'weiteren', 'weiteres', 'welche', 'welchem', 'welchen', 'welcher', 'welches', 'wem', 'wen', 'wenig', 'wenige', 'weniger', 'weniges', 'wenigstens', 'wenn', 'wer', 'werde', 'werden', 'werdet', 'weshalb', 'wessen', 'wie', 'wieder', 'wieso', 'will', 'willst', 'wir', 'wird', 'wirklich', 'wirst', 'wissen', 'wo', 'woher', 'wohin', 'wohl', 'wollen', 'wollt', 'wollte', 'wollten', 'worden', 'wurde', 'wurden', 'während', 'währenddem', 'währenddessen', 'wäre', 'würde', 'würden', 'x', 'y', 'z', 'z.b', 'zehn', 'zehnte', 'zehnten', 'zehnter', 'zehntes', 'zeit', 'zu', 'zuerst', 'zugleich', 'zum', 'zunächst', 'zur', 'zurück', 'zusammen', 'zwanzig', 'zwar', 'zwei', 'zweite', 'zweiten', 'zweiter', 'zweites', 'zwischen', 'zwölf', 'über', 'überhaupt', 'übrigens'
]

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_en.js":
/*!*****************************!*\
  !*** ./lib/stopwords_en.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'about', 'after', 'all', 'also', 'am', 'an', 'and', 'another', 'any', 'are', 'as', 'at', 'be',
  'because', 'been', 'before', 'being', 'between', 'both', 'but', 'by', 'came', 'can',
  'come', 'could', 'did', 'do', 'each', 'for', 'from', 'get', 'got', 'has', 'had',
  'he', 'have', 'her', 'here', 'him', 'himself', 'his', 'how', 'if', 'in', 'into',
  'is', 'it', 'like', 'make', 'many', 'me', 'might', 'more', 'most', 'much', 'must',
  'my', 'never', 'now', 'of', 'on', 'only', 'or', 'other', 'our', 'out', 'over',
  'said', 'same', 'see', 'should', 'since', 'some', 'still', 'such', 'take', 'than',
  'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those',
  'through', 'to', 'too', 'under', 'up', 'very', 'was', 'way', 'we', 'well', 'were',
  'what', 'where', 'which', 'while', 'who', 'with', 'would', 'you', 'your', 'a', 'i']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_es.js":
/*!*****************************!*\
  !*** ./lib/stopwords_es.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'a', 'un', 'el', 'ella', 'y', 'sobre', 'de', 'la', 'que', 'en',
  'los', 'del', 'se', 'las', 'por', 'un', 'para', 'con', 'no',
  'una', 'su', 'al', 'lo', 'como', 'más', 'pero', 'sus', 'le',
  'ya', 'o', 'porque', 'cuando', 'muy', 'sin', 'sobre', 'también',
  'me', 'hasta', 'donde', 'quien', 'desde', 'nos', 'durante', 'uno',
  'ni', 'contra', 'ese', 'eso', 'mí', 'qué', 'otro', 'él', 'cual',
  'poco', 'mi', 'tú', 'te', 'ti', 'sí',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_fa.js":
/*!*****************************!*\
  !*** ./lib/stopwords_fa.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, Chris Umbel
Farsi Stop Words by Fardin Koochaki <me@fardinak.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  // Words
  'از', 'با', 'یه', 'برای', 'و', 'باید', 'شاید',

  // Symbols
  '؟', '!', '٪', '.', '،', '؛', ':', ';', ',',

  // Numbers
  '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'
]

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_fi.js":
/*!*****************************!*\
  !*** ./lib/stopwords_fi.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* The MIT License (MIT)
Copyright (c) 2018 Espen Klem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words =[
  "0",
  "ja",
  "on",
  "1",
  "oli",
  "hän",
  "vuonna",
  "2",
  "myös",
  "joka",
  "3",
  "se",
  "sekä",
  "sen",
  "mutta",
  "4",
  "ei",
  "ovat",
  "hänen",
  "n",
  "kanssa",
  "vuoden",
  "jälkeen",
  "että",
  "5",
  "s",
  "tai",
  "jonka",
  "jossa",
  "6",
  "mukaan",
  "kun",
  "muun",
  "muassa",
  "hänet",
  "olivat",
  "kuitenkin",
  "noin",
  "vuosina",
  "7",
  "aikana",
  "lisäksi",
  "kaksi",
  "kuin",
  "ollut",
  "the",
  "myöhemmin",
  "8",
  "eli",
  "10",
  "vain",
  "teki",
  "mm",
  "jotka",
  "ennen",
  "ensimmäinen",
  "a",
  "9",
  "jo",
  "kuten",
  "yksi",
  "ensimmäisen",
  "vastaan",
  "tämän",
  "vuodesta",
  "sitä",
  "000",
  "voi",
  "luvun",
  "luvulla",
  "of",
  "ole",
  "kauden",
  "osa",
  "esimerkiksi",
  "jolloin",
  "yli",
  "de",
  "kaudella",
  "eri",
  "sillä",
  "kolme",
  "he",
  "vuotta"
]

exports.words = words

/***/ }),

/***/ "./lib/stopwords_fr.js":
/*!*****************************!*\
  !*** ./lib/stopwords_fr.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Copyright (c) 2014, Ismaël Héry

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

// A list of commonly used french words that have little meaning and can be excluded
// from analysis.

var words = ['être', 'avoir', 'faire',
  'a',
  'au',
  'aux',
  'avec',
  'ce',
  'ces',
  'dans',
  'de',
  'des',
  'du',
  'elle',
  'en',
  'et',
  'eux',
  'il',
  'je',
  'la',
  'le',
  'leur',
  'lui',
  'ma',
  'mais',
  'me',
  'même',
  'mes',
  'moi',
  'mon',
  'ne',
  'nos',
  'notre',
  'nous',
  'on',
  'ou',
  'où',
  'par',
  'pas',
  'pour',
  'qu',
  'que',
  'qui',
  'sa',
  'se',
  'ses',
  'son',
  'sur',
  'ta',
  'te',
  'tes',
  'toi',
  'ton',
  'tu',
  'un',
  'une',
  'vos',
  'votre',
  'vous',
  'c',
  'd',
  'j',
  'l',
  'à',
  'm',
  'n',
  's',
  't',
  'y',
  'été',
  'étée',
  'étées',
  'étés',
  'étant',
  'suis',
  'es',
  'est',
  'sommes',
  'êtes',
  'sont',
  'serai',
  'seras',
  'sera',
  'serons',
  'serez',
  'seront',
  'serais',
  'serait',
  'serions',
  'seriez',
  'seraient',
  'étais',
  'était',
  'étions',
  'étiez',
  'étaient',
  'fus',
  'fut',
  'fûmes',
  'fûtes',
  'furent',
  'sois',
  'soit',
  'soyons',
  'soyez',
  'soient',
  'fusse',
  'fusses',
  'fût',
  'fussions',
  'fussiez',
  'fussent',
  'ayant',
  'eu',
  'eue',
  'eues',
  'eus',
  'ai',
  'as',
  'avons',
  'avez',
  'ont',
  'aurai',
  'auras',
  'aura',
  'aurons',
  'aurez',
  'auront',
  'aurais',
  'aurait',
  'aurions',
  'auriez',
  'auraient',
  'avais',
  'avait',
  'avions',
  'aviez',
  'avaient',
  'eut',
  'eûmes',
  'eûtes',
  'eurent',
  'aie',
  'aies',
  'ait',
  'ayons',
  'ayez',
  'aient',
  'eusse',
  'eusses',
  'eût',
  'eussions',
  'eussiez',
  'eussent',
  'ceci',
  'cela',
  'cet',
  'cette',
  'ici',
  'ils',
  'les',
  'leurs',
  'quel',
  'quels',
  'quelle',
  'quelles',
  'sans',
  'soi'
]

exports.words = words


/***/ }),

/***/ "./lib/stopwords_ha.js":
/*!*****************************!*\
  !*** ./lib/stopwords_ha.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'ta', 'da', 'ya', 'sai', 'ba', 'yi', 'na', 'kuma', 'ma', 'ji', 'cikin', 'in', 'ni', 'wata', 'wani',
  'ce', 'tana', 'don', 'za', 'sun', 'amma', 'ga', 'ina', 'ne', 'tselane', 'mai', 'suka', 'wannan',
  'a', 'ko', 'lokacin', 'su', 'take', 'kaka', 'shi', 'yake', 'yana', 'mulongo', 'mata', 'ka', 'ban',
  'ita', 'tafi', 'shanshani', 'kai', 'daɗi', 'mi', 'ƙato', 'fara', 'rana'
]


// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_he.js":
/*!*****************************!*\
  !*** ./lib/stopwords_he.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Guy Saar - Stop words list

*/
var words = [
"אבל",
"או",
"אולי",
"אותה",
"אותו",
"אותי",
"אותך",
"אותם",
"אותן",
"אותנו",
"אז",
"אחר",
"אחרות",
"אחרי",
"אחריכן",
"אחרים",
"אחרת",
"אי",
"איזה",
"איך",
"אין",
"איפה",
"איתה",
"איתו",
"איתי",
"איתך",
"איתכם",
"איתכן",
"איתם",
"איתן",
"איתנו",
"אך",
"אל",
"אלה",
"אלו",
"אם",
"אנחנו",
"אני",
"אס",
"אף",
"אצל",
"אשר",
"את",
"אתה",
"אתכם",
"אתכן",
"אתם",
"אתן",
"באיזומידה",
"באמצע",
"באמצעות",
"בגלל",
"בין",
"בלי",
"במידה",
"במקוםשבו",
"ברם",
"בשביל",
"בשעהש",
"בתוך",
"גם",
"דרך",
"הוא",
"היא",
"היה",
"היכן",
"היתה",
"היתי",
"הם",
"הן",
"הנה",
"הסיבהשבגללה",
"הרי",
"ואילו",
"ואת",
"זאת",
"זה",
"זות",
"יהיה",
"יוכל",
"יוכלו",
"יותרמדי",
"יכול",
"יכולה",
"יכולות",
"יכולים",
"יכל",
"יכלה",
"יכלו",
"יש",
"כאן",
"כאשר",
"כולם",
"כולן",
"כזה",
"כי",
"כיצד",
"כך",
"ככה",
"כל",
"כלל",
"כמו",
"כן",
"כפי",
"כש",
"לא",
"לאו",
"לאיזותכלית",
"לאן",
"לבין",
"לה",
"להיות",
"להם",
"להן",
"לו",
"לי",
"לכם",
"לכן",
"למה",
"למטה",
"למעלה",
"למקוםשבו",
"למרות",
"לנו",
"לעבר",
"לעיכן",
"לפיכך",
"לפני",
"מאד",
"מאחורי",
"מאיזוסיבה",
"מאין",
"מאיפה",
"מבלי",
"מבעד",
"מדוע",
"מה",
"מהיכן",
"מול",
"מחוץ",
"מי",
"מכאן",
"מכיוון",
"מלבד",
"מן",
"מנין",
"מסוגל",
"מעט",
"מעטים",
"מעל",
"מצד",
"מקוםבו",
"מתחת",
"מתי",
"נגד",
"נגר",
"נו",
"עד",
"עז",
"על",
"עלי",
"עליה",
"עליהם",
"עליהן",
"עליו",
"עליך",
"עליכם",
"עלינו",
"עם",
"עצמה",
"עצמהם",
"עצמהן",
"עצמו",
"עצמי",
"עצמם",
"עצמן",
"עצמנו",
"פה",
"רק",
"שוב",
"של",
"שלה",
"שלהם",
"שלהן",
"שלו",
"שלי",
"שלך",
"שלכה",
"שלכם",
"שלכן",
"שלנו",
"שם",
"תהיה",
"תחת"
]

exports.words = words



/***/ }),

/***/ "./lib/stopwords_hi.js":
/*!*****************************!*\
  !*** ./lib/stopwords_hi.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Originates from: https://github.com/stopwords-iso/stopwords-hi/
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'अंदर','अत','अदि','अप','अपना','अपनि','अपनी','अपने','अभि','अभी','आदि','आप','इंहिं',
  'इंहें','इंहों','इतयादि','इत्यादि','इन','इनका','इन्हीं','इन्हें','इन्हों','इस','इसका','इसकि',
  'इसकी','इसके','इसमें','इसि','इसी','इसे','उंहिं','उंहें','उंहों','उन','उनका','उनकि','उनकी',
  'उनके','उनको','उन्हीं','उन्हें','उन्हों','उस','उसके','उसि','उसी','उसे','एक','एवं','एस',
  'एसे','ऐसे','ओर','और','कइ','कई','कर','करता','करते','करना','करने','करें','कहते',
  'कहा','का','काफि','काफ़ी','कि','किंहें','किंहों','कितना','किन्हें','किन्हों','किया','किर','किस',
  'किसि','किसी','किसे','की','कुछ','कुल','के','को','कोइ','कोई','कोन','कोनसा','कौन',
  'कौनसा','गया','घर','जब','जहाँ','जहां','जा','जिंहें','जिंहों','जितना','जिधर','जिन','जिन्हें',
  'जिन्हों','जिस','जिसे','जीधर','जेसा','जेसे','जैसा','जैसे','जो','तक','तब','तरह','तिंहें',
  'तिंहों','तिन','तिन्हें','तिन्हों','तिस','तिसे','तो','था','थि','थी','थे','दबारा','दवारा','दिया',
  'दुसरा','दुसरे','दूसरे','दो','द्वारा','न','नहिं','नहीं','ना','निचे','निहायत','नीचे','ने','पर',
  'पहले','पुरा','पूरा','पे','फिर','बनि','बनी','बहि','बही','बहुत','बाद','बाला','बिलकुल',
  'भि','भितर','भी','भीतर','मगर','मानो','मे','में','यदि','यह','यहाँ','यहां','यहि','यही',
  'या','यिह','ये','रखें','रवासा','रहा','रहे','ऱ्वासा','लिए','लिये','लेकिन','व','वगेरह','वरग',
  'वर्ग','वह','वहाँ','वहां','वहिं','वहीं','वाले','वुह','वे','वग़ैरह','संग','सकता','सकते','सबसे',
  'सभि','सभी','साथ','साबुत','साभ','सारा','से','सो','हि','ही','हुअ','हुआ','हुइ','हुई',
  'हुए','हे','हें','है','हैं','हो','होता','होति','होती','होते','होना','होने']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_id.js":
/*!*****************************!*\
  !*** ./lib/stopwords_id.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2019, Luthfi Azhari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Originates from: https://github.com/stopwords-iso/stopwords-hi/
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'ada',
  'adalah',
  'adanya',
  'adapun',
  'agak',
  'agaknya',
  'agar',
  'akan',
  'akankah',
  'akhir',
  'akhiri',
  'akhirnya',
  'aku',
  'akulah',
  'amat',
  'amatlah',
  'anda',
  'andalah',
  'antar',
  'antara',
  'antaranya',
  'apa',
  'apaan',
  'apabila',
  'apakah',
  'apalagi',
  'apatah',
  'artinya',
  'asal',
  'asalkan',
  'atas',
  'atau',
  'ataukah',
  'ataupun',
  'awal',
  'awalnya',
  'bagai',
  'bagaikan',
  'bagaimana',
  'bagaimanakah',
  'bagaimanapun',
  'bagi',
  'bagian',
  'bahkan',
  'bahwa',
  'bahwasanya',
  'bakal',
  'bakalan',
  'balik',
  'banyak',
  'bapak',
  'baru',
  'bawah',
  'beberapa',
  'begini',
  'beginian',
  'beginikah',
  'beginilah',
  'begitu',
  'begitukah',
  'begitulah',
  'begitupun',
  'bekerja',
  'belakang',
  'belakangan',
  'belum',
  'belumlah',
  'benar',
  'benarkah',
  'benarlah',
  'berada',
  'berakhir',
  'berakhirlah',
  'berakhirnya',
  'berapa',
  'berapakah',
  'berapalah',
  'berapapun',
  'berarti',
  'berawal',
  'berbagai',
  'berdatangan',
  'beri',
  'berikan',
  'berikut',
  'berikutnya',
  'berjumlah',
  'berkali-kali',
  'berkata',
  'berkehendak',
  'berkeinginan',
  'berkenaan',
  'berlainan',
  'berlalu',
  'berlangsung',
  'berlebihan',
  'bermacam',
  'bermacam-macam',
  'bermaksud',
  'bermula',
  'bersama',
  'bersama-sama',
  'bersiap',
  'bersiap-siap',
  'bertanya',
  'bertanya-tanya',
  'berturut',
  'berturut-turut',
  'bertutur',
  'berujar',
  'berupa',
  'besar',
  'betul',
  'betulkah',
  'biasa',
  'biasanya',
  'bila',
  'bilakah',
  'bisa',
  'bisakah',
  'boleh',
  'bolehkah',
  'bolehlah',
  'buat',
  'bukan',
  'bukankah',
  'bukanlah',
  'bukannya',
  'bulan',
  'bung',
  'cara',
  'caranya',
  'cukup',
  'cukupkah',
  'cukuplah',
  'cuma',
  'dahulu',
  'dalam',
  'dan',
  'dapat',
  'dari',
  'daripada',
  'datang',
  'dekat',
  'demi',
  'demikian',
  'demikianlah',
  'dengan',
  'depan',
  'di',
  'dia',
  'diakhiri',
  'diakhirinya',
  'dialah',
  'diantara',
  'diantaranya',
  'diberi',
  'diberikan',
  'diberikannya',
  'dibuat',
  'dibuatnya',
  'didapat',
  'didatangkan',
  'digunakan',
  'diibaratkan',
  'diibaratkannya',
  'diingat',
  'diingatkan',
  'diinginkan',
  'dijawab',
  'dijelaskan',
  'dijelaskannya',
  'dikarenakan',
  'dikatakan',
  'dikatakannya',
  'dikerjakan',
  'diketahui',
  'diketahuinya',
  'dikira',
  'dilakukan',
  'dilalui',
  'dilihat',
  'dimaksud',
  'dimaksudkan',
  'dimaksudkannya',
  'dimaksudnya',
  'diminta',
  'dimintai',
  'dimisalkan',
  'dimulai',
  'dimulailah',
  'dimulainya',
  'dimungkinkan',
  'dini',
  'dipastikan',
  'diperbuat',
  'diperbuatnya',
  'dipergunakan',
  'diperkirakan',
  'diperlihatkan',
  'diperlukan',
  'diperlukannya',
  'dipersoalkan',
  'dipertanyakan',
  'dipunyai',
  'diri',
  'dirinya',
  'disampaikan',
  'disebut',
  'disebutkan',
  'disebutkannya',
  'disini',
  'disinilah',
  'ditambahkan',
  'ditandaskan',
  'ditanya',
  'ditanyai',
  'ditanyakan',
  'ditegaskan',
  'ditujukan',
  'ditunjuk',
  'ditunjuki',
  'ditunjukkan',
  'ditunjukkannya',
  'ditunjuknya',
  'dituturkan',
  'dituturkannya',
  'diucapkan',
  'diucapkannya',
  'diungkapkan',
  'dong',
  'dulu',
  'empat',
  'enggak',
  'enggaknya',
  'entah',
  'entahlah',
  'guna',
  'gunakan',
  'hal',
  'hampir',
  'hanya',
  'hanyalah',
  'harus',
  'haruslah',
  'harusnya',
  'hendak',
  'hendaklah',
  'hendaknya',
  'hingga',
  'ia',
  'ialah',
  'ibarat',
  'ibaratkan',
  'ibaratnya',
  'ikut',
  'ingat',
  'ingat-ingat',
  'ingin',
  'inginkah',
  'inginkan',
  'ini',
  'inikah',
  'inilah',
  'itu',
  'itukah',
  'itulah',
  'jadi',
  'jadilah',
  'jadinya',
  'jangan',
  'jangankan',
  'janganlah',
  'jauh',
  'jawab',
  'jawaban',
  'jawabnya',
  'jelas',
  'jelaskan',
  'jelaslah',
  'jelasnya',
  'jika',
  'jikalau',
  'juga',
  'jumlah',
  'jumlahnya',
  'justru',
  'kala',
  'kalau',
  'kalaulah',
  'kalaupun',
  'kalian',
  'kami',
  'kamilah',
  'kamu',
  'kamulah',
  'kan',
  'kapan',
  'kapankah',
  'kapanpun',
  'karena',
  'karenanya',
  'kasus',
  'kata',
  'katakan',
  'katakanlah',
  'katanya',
  'ke',
  'keadaan',
  'kebetulan',
  'kecil',
  'kedua',
  'keduanya',
  'keinginan',
  'kelamaan',
  'kelihatan',
  'kelihatannya',
  'kelima',
  'keluar',
  'kembali',
  'kemudian',
  'kemungkinan',
  'kemungkinannya',
  'kenapa',
  'kepada',
  'kepadanya',
  'kesampaian',
  'keseluruhan',
  'keseluruhannya',
  'keterlaluan',
  'ketika',
  'khususnya',
  'kini',
  'kinilah',
  'kira',
  'kira-kira',
  'kiranya',
  'kita',
  'kitalah',
  'kok',
  'kurang',
  'lagi',
  'lagian',
  'lah',
  'lain',
  'lainnya',
  'lalu',
  'lama',
  'lamanya',
  'lanjut',
  'lanjutnya',
  'lebih',
  'lewat',
  'lima',
  'luar',
  'macam',
  'maka',
  'makanya',
  'makin',
  'malah',
  'malahan',
  'mampu',
  'mampukah',
  'mana',
  'manakala',
  'manalagi',
  'masa',
  'masalah',
  'masalahnya',
  'masih',
  'masihkah',
  'masing',
  'masing-masing',
  'mau',
  'maupun',
  'melainkan',
  'melakukan',
  'melalui',
  'melihat',
  'melihatnya',
  'memang',
  'memastikan',
  'memberi',
  'memberikan',
  'membuat',
  'memerlukan',
  'memihak',
  'meminta',
  'memintakan',
  'memisalkan',
  'memperbuat',
  'mempergunakan',
  'memperkirakan',
  'memperlihatkan',
  'mempersiapkan',
  'mempersoalkan',
  'mempertanyakan',
  'mempunyai',
  'memulai',
  'memungkinkan',
  'menaiki',
  'menambahkan',
  'menandaskan',
  'menanti',
  'menanti-nanti',
  'menantikan',
  'menanya',
  'menanyai',
  'menanyakan',
  'mendapat',
  'mendapatkan',
  'mendatang',
  'mendatangi',
  'mendatangkan',
  'menegaskan',
  'mengakhiri',
  'mengapa',
  'mengatakan',
  'mengatakannya',
  'mengenai',
  'mengerjakan',
  'mengetahui',
  'menggunakan',
  'menghendaki',
  'mengibaratkan',
  'mengibaratkannya',
  'mengingat',
  'mengingatkan',
  'menginginkan',
  'mengira',
  'mengucapkan',
  'mengucapkannya',
  'mengungkapkan',
  'menjadi',
  'menjawab',
  'menjelaskan',
  'menuju',
  'menunjuk',
  'menunjuki',
  'menunjukkan',
  'menunjuknya',
  'menurut',
  'menuturkan',
  'menyampaikan',
  'menyangkut',
  'menyatakan',
  'menyebutkan',
  'menyeluruh',
  'menyiapkan',
  'merasa',
  'mereka',
  'merekalah',
  'merupakan',
  'meski',
  'meskipun',
  'meyakini',
  'meyakinkan',
  'minta',
  'mirip',
  'misal',
  'misalkan',
  'misalnya',
  'mula',
  'mulai',
  'mulailah',
  'mulanya',
  'mungkin',
  'mungkinkah',
  'nah',
  'naik',
  'namun',
  'nanti',
  'nantinya',
  'nyaris',
  'nyatanya',
  'oleh',
  'olehnya',
  'pada',
  'padahal',
  'padanya',
  'paling',
  'panjang',
  'pantas',
  'para',
  'pasti',
  'pastilah',
  'penting',
  'pentingnya',
  'per',
  'percuma',
  'perlu',
  'perlukah',
  'perlunya',
  'pernah',
  'persoalan',
  'pertama',
  'pertama-tama',
  'pertanyaan',
  'pertanyakan',
  'pihak',
  'pihaknya',
  'pukul',
  'pula',
  'pun',
  'punya',
  'rasa',
  'rasanya',
  'rata',
  'rupanya',
  'saat',
  'saatnya',
  'saja',
  'sajalah',
  'saling',
  'sama',
  'sama-sama',
  'sambil',
  'sampai',
  'sampai-sampai',
  'sampaikan',
  'sana',
  'sangat',
  'sangatlah',
  'satu',
  'saya',
  'sayalah',
  'se',
  'sebab',
  'sebabnya',
  'sebagai',
  'sebagaimana',
  'sebagainya',
  'sebagian',
  'sebaik',
  'sebaik-baiknya',
  'sebaiknya',
  'sebaliknya',
  'sebanyak',
  'sebegini',
  'sebegitu',
  'sebelum',
  'sebelumnya',
  'sebenarnya',
  'seberapa',
  'sebesar',
  'sebetulnya',
  'sebisanya',
  'sebuah',
  'sebut',
  'sebutlah',
  'sebutnya',
  'secara',
  'secukupnya',
  'sedang',
  'sedangkan',
  'sedemikian',
  'sedikit',
  'sedikitnya',
  'seenaknya',
  'segala',
  'segalanya',
  'segera',
  'seharusnya',
  'sehingga',
  'seingat',
  'sejak',
  'sejauh',
  'sejenak',
  'sejumlah',
  'sekadar',
  'sekadarnya',
  'sekali',
  'sekali-kali',
  'sekalian',
  'sekaligus',
  'sekalipun',
  'sekarang',
  'sekarang',
  'sekecil',
  'seketika',
  'sekiranya',
  'sekitar',
  'sekitarnya',
  'sekurang-kurangnya',
  'sekurangnya',
  'sela',
  'selain',
  'selaku',
  'selalu',
  'selama',
  'selama-lamanya',
  'selamanya',
  'selanjutnya',
  'seluruh',
  'seluruhnya',
  'semacam',
  'semakin',
  'semampu',
  'semampunya',
  'semasa',
  'semasih',
  'semata',
  'semata-mata',
  'semaunya',
  'sementara',
  'semisal',
  'semisalnya',
  'sempat',
  'semua',
  'semuanya',
  'semula',
  'sendiri',
  'sendirian',
  'sendirinya',
  'seolah',
  'seolah-olah',
  'seorang',
  'sepanjang',
  'sepantasnya',
  'sepantasnyalah',
  'seperlunya',
  'seperti',
  'sepertinya',
  'sepihak',
  'sering',
  'seringnya',
  'serta',
  'serupa',
  'sesaat',
  'sesama',
  'sesampai',
  'sesegera',
  'sesekali',
  'seseorang',
  'sesuatu',
  'sesuatunya',
  'sesudah',
  'sesudahnya',
  'setelah',
  'setempat',
  'setengah',
  'seterusnya',
  'setiap',
  'setiba',
  'setibanya',
  'setidak-tidaknya',
  'setidaknya',
  'setinggi',
  'seusai',
  'sewaktu',
  'siap',
  'siapa',
  'siapakah',
  'siapapun',
  'sini',
  'sinilah',
  'soal',
  'soalnya',
  'suatu',
  'sudah',
  'sudahkah',
  'sudahlah',
  'supaya',
  'tadi',
  'tadinya',
  'tahu',
  'tahun',
  'tak',
  'tambah',
  'tambahnya',
  'tampak',
  'tampaknya',
  'tandas',
  'tandasnya',
  'tanpa',
  'tanya',
  'tanyakan',
  'tanyanya',
  'tapi',
  'tegas',
  'tegasnya',
  'telah',
  'tempat',
  'tengah',
  'tentang',
  'tentu',
  'tentulah',
  'tentunya',
  'tepat',
  'terakhir',
  'terasa',
  'terbanyak',
  'terdahulu',
  'terdapat',
  'terdiri',
  'terhadap',
  'terhadapnya',
  'teringat',
  'teringat-ingat',
  'terjadi',
  'terjadilah',
  'terjadinya',
  'terkira',
  'terlalu',
  'terlebih',
  'terlihat',
  'termasuk',
  'ternyata',
  'tersampaikan',
  'tersebut',
  'tersebutlah',
  'tertentu',
  'tertuju',
  'terus',
  'terutama',
  'tetap',
  'tetapi',
  'tiap',
  'tiba',
  'tiba-tiba',
  'tidak',
  'tidakkah',
  'tidaklah',
  'tiga',
  'tinggi',
  'toh',
  'tunjuk',
  'turut',
  'tutur',
  'tuturnya',
  'ucap',
  'ucapnya',
  'ujar',
  'ujarnya',
  'umum',
  'umumnya',
  'ungkap',
  'ungkapnya',
  'untuk',
  'usah',
  'usai',
  'waduh',
  'wah',
  'wahai',
  'waktu',
  'waktunya',
  'walau',
  'walaupun',
  'wong',
  'yaitu',
  'yakin',
  'yakni',
  'yang'
];
// tell the world about the noise words.
exports.words = words;


/***/ }),

/***/ "./lib/stopwords_it.js":
/*!*****************************!*\
  !*** ./lib/stopwords_it.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'ad', 'al', 'allo', 'ai', 'agli', 'all', 'agl', 'alla', 'alle', 'con', 'col', 'coi', 'da', 'dal', 'dallo',
  'dai', 'dagli', 'dall', 'dagl', 'dalla', 'dalle', 'di', 'del', 'dello', 'dei', 'degli', 'dell', 'degl',
  'della', 'delle', 'in', 'nel', 'nello', 'nei', 'negli', 'nell', 'negl', 'nella', 'nelle', 'su', 'sul',
  'sullo', 'sui', 'sugli', 'sull', 'sugl', 'sulla', 'sulle', 'per', 'tra', 'contro', 'io', 'tu', 'lui',
  'lei', 'noi', 'voi', 'loro', 'mio', 'mia', 'miei', 'mie', 'tuo', 'tua', 'tuoi', 'tue', 'suo', 'sua', 'suoi',
  'sue', 'nostro', 'nostra', 'nostri', 'nostre', 'vostro', 'vostra', 'vostri', 'vostre', 'mi', 'ti', 'ci',
  'vi', 'lo', 'la', 'li', 'le', 'gli', 'ne', 'il', 'un', 'uno', 'una', 'ma', 'ed', 'se', 'perché', 'anche', 'come',
  'dov', 'dove', 'che', 'chi', 'cui', 'non', 'più', 'quale', 'quanto', 'quanti', 'quanta', 'quante', 'quello',
  'quelli', 'quella', 'quelle', 'questo', 'questi', 'questa', 'queste', 'si', 'tutto', 'tutti', 'a', 'c', 'e',
  'i', 'l', 'o', 'ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno', 'abbia', 'abbiate', 'abbiano', 'avrò', 'avrai',
  'avrà', 'avremo', 'avrete', 'avranno', 'avrei', 'avresti', 'avrebbe', 'avremmo', 'avreste', 'avrebbero',
  'avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano', 'ebbi', 'avesti', 'ebbe', 'avemmo', 'aveste',
  'ebbero', 'avessi', 'avesse', 'avessimo', 'avessero', 'avendo', 'avuto', 'avuta', 'avuti', 'avute', 'sono',
  'sei', 'è', 'siamo', 'siete', 'sia', 'siate', 'siano', 'sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno',
  'sarei', 'saresti', 'sarebbe', 'saremmo', 'sareste', 'sarebbero', 'ero', 'eri', 'era', 'eravamo', 'eravate',
  'erano', 'fui', 'fosti', 'fu', 'fummo', 'foste', 'furono', 'fossi', 'fosse', 'fossimo', 'fossero', 'essendo',
  'faccio', 'fai', 'facciamo', 'fanno', 'faccia', 'facciate', 'facciano', 'farò', 'farai', 'farà', 'faremo',
  'farete', 'faranno', 'farei', 'faresti', 'farebbe', 'faremmo', 'fareste', 'farebbero', 'facevo', 'facevi',
  'faceva', 'facevamo', 'facevate', 'facevano', 'feci', 'facesti', 'fece', 'facemmo', 'faceste', 'fecero',
  'facessi', 'facesse', 'facessimo', 'facessero', 'facendo', 'sto', 'stai', 'sta', 'stiamo', 'stanno', 'stia',
  'stiate', 'stiano', 'starò', 'starai', 'starà', 'staremo', 'starete', 'staranno', 'starei', 'staresti',
  'starebbe', 'staremmo', 'stareste', 'starebbero', 'stavo', 'stavi', 'stava', 'stavamo', 'stavate', 'stavano',
  'stetti', 'stesti', 'stette', 'stemmo', 'steste', 'stettero', 'stessi', 'stesse', 'stessimo', 'stessero', 'stando',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_ja.js":
/*!*****************************!*\
  !*** ./lib/stopwords_ja.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Original copyright:
/*
 Licensed to the Apache Software Foundation (ASF) under one or more
 contributor license agreements.  See the NOTICE file distributed with
 this work for additional information regarding copyright ownership.
 The ASF licenses this file to You under the Apache License, Version 2.0
 the "License"); you may not use this file except in compliance with
 the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// This version:
/*
Copyright (c) 2012, Guillaume Marty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
// Original location:
// http://svn.apache.org/repos/asf/lucene/dev/trunk/lucene/analysis/kuromoji/src/resources/org/apache/lucene/analysis/ja/stopwords.txt
var words = ['の', 'に', 'は', 'を', 'た', 'が', 'で', 'て', 'と', 'し', 'れ', 'さ',
  'ある', 'いる', 'も', 'する', 'から', 'な', 'こと', 'として', 'い', 'や', 'れる',
  'など', 'なっ', 'ない', 'この', 'ため', 'その', 'あっ', 'よう', 'また', 'もの',
  'という', 'あり', 'まで', 'られ', 'なる', 'へ', 'か', 'だ', 'これ', 'によって',
  'により', 'おり', 'より', 'による', 'ず', 'なり', 'られる', 'において', 'ば', 'なかっ',
  'なく', 'しかし', 'について', 'せ', 'だっ', 'その後', 'できる', 'それ', 'う', 'ので',
  'なお', 'のみ', 'でき', 'き', 'つ', 'における', 'および', 'いう', 'さらに', 'でも',
  'ら', 'たり', 'その他', 'に関する', 'たち', 'ます', 'ん', 'なら', 'に対して', '特に',
  'せる', '及び', 'これら', 'とき', 'では', 'にて', 'ほか', 'ながら', 'うち', 'そして',
  'とともに', 'ただし', 'かつて', 'それぞれ', 'または', 'お', 'ほど', 'ものの', 'に対する',
  'ほとんど', 'と共に', 'といった', 'です', 'とも', 'ところ', 'ここ']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_lgg.js":
/*!******************************!*\
  !*** ./lib/stopwords_lgg.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'ma', 'ni', 'ri', 'eri', 'di', 'yi', 'si', 'ba', 'nga', 'i', 'ra', 'ku', 'be', 'yo', 'da', 'azini',
  'dria', 'ru', 'azi', 'mu', 'te', 'ndra', 'diyi', 'ima', 'mi', 'alu', 'nde', 'alia', 'le', 'vile',
  'dri', 'pati', 'aria', 'bo', 'e\'yo', 'tu', 'kini', 'dii', 'ama', 'eyi', 'dika', 'pi', 'e', 'angu', 
  'e\'do', 'pie', 'ka', 'ti', 'o\'du', 'du'
]


// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_lggo.js":
/*!*******************************!*\
  !*** ./lib/stopwords_lggo.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  '́', '̀', 'nɨ', 'mà', 'rɨ', 'dɨ', 'ɨ', '́nɨ', 'èrɨ', '́á\'', 'sɨ', 'àzɨ', 'yɨ', 'rá', 'vɨ',
  'nga', 'be', 'mɨ', 'à', 'dà', 'kʉ', 'bá', ' ́lé', 'má', 'e', 'yo', '̀yɨ', 'ma', 'kɨ', 'àlʉ',
  '́mà', 'rʉ́', 'drɨ', 'patí', 'a', 'è', 'yó', 'te', '̀á', 'mà', 'mâ', 'dálé', 'yí', '̌', 'pɨ',
  'e\'yó', 'ndráa', 'bo', 'di', 'drìá'
]


// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_my.js":
/*!*****************************!*\
  !*** ./lib/stopwords_my.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'အပေါ်', 'အနက်', 'အမြဲတမ်း', 'အတွင်းတွင်', 'မကြာမီ', 'မတိုင်မီ', 'ဒါ့အပြင်', 'အောက်မှာ', 'အထဲမှာ', 'ဘယ်တော့မျှ', 'မကြာခဏ',
  'တော်တော်လေး', 'စဉ်တွင်', 'နှင့်အတူ', 'နှင့်', 'နှင့်တကွ', 'ကျွန်တော်', 'ကျွန်မ', 'ငါ', 'ကျုပ်', 'ကျွနု်ပ်', 'ကျနော်', 'ကျမ', 'သူ',
  'သူမ', 'ထိုဟာ', 'ထိုအရာ', 'ဤအရာ', 'ထို', '၄င်း', 'ကျွန်တော်တို့', 'ကျွန်မတို့', 'ငါတို့', 'ကျုပ်တို့', 'ကျွနု်ပ်တို့', 'ကျနော်တို့',
  'ကျမတို့', 'သင်', 'သင်တို့', 'နင်တို့', 'မင်း', 'မင်းတို့', 'သူတို့', 'ကျွန်တော်အား', 'ကျွန်တော်ကို', 'ကျွန်မကို', 'ငါကို', 'ကျုပ်ကို',
  'ကျွနု်ပ်ကို', 'သူ့ကို', 'သူမကို', 'ထိုအရာကို', 'သင့်ကို', 'သင်တို့ကို', 'နင်တို့ကို', 'မင်းကို', 'မင်းတို့ကို', 'ငါတို့ကို', 'ကျုပ်တို့ကို',
  'ကျွနု်ပ်တို့ကို', 'မိမိကိုယ်တိုင်', 'မိမိဘာသာ', 'မင်းကိုယ်တိုင်', 'မင်းဘာသာ', 'မင်းတို့ကိုယ်တိုင်', 'မင်းတို့ဘာသာ', 'သူကိုယ်တိုင်',
  'ကိုယ်တိုင်', 'သူမကိုယ်တိုင်', 'သူ့ဘာသာ', 'သူ့ကိုယ်ကို', 'ကိုယ့်ကိုယ်ကို', 'မိမိကိုယ်ကို', '၄င်းပင်', 'ထိုအရာပင်', 'သည့်', 'မည့်',
  'တဲ့', 'ကျွနု်ပ်၏', 'ကျွန်တော်၏', 'ကျွန်မ၏', 'ကျနော်၏', 'ကျမ၏', 'သူ၏', 'သူမ၏', 'ထိုအရာ၏', 'ထိုဟာ၏', 'ကျွနု်ပ်တို့၏',
  'ငါတို့၏', 'ကျွန်တော်တို့၏', 'ကျွန်မတို့၏', 'ကျနော်တို့၏', 'ကျမတို့၏', 'သင်၏', 'သင်တို့၏', 'မင်း၏', 'မင်းတို့၏', 'သူတို့၏',
  'ကျွန်တော့်ဟာ', 'ကျွန်မဟာ', 'ကျနော်၏ဟာ', 'ကျမ၏ဟာ', 'ကျမဟာ', 'ကျနော်ဟာ', 'သူဟာ', 'သူမဟာ', 'သူ့ဟာ', 'ကျွနု်ပ်တို့ဟာ',
  'ကျွန်တော်တို့ဟာ', 'ကျွန်မတို့ဟာ', 'သင်တို့ဟာ', 'မင်းတို့ဟာ', 'သူတို့ဟာ', 'သူမတို့ဟာ', 'ဤအရာ', 'ဟောဒါ', 'ဟောဒီ', 'ဟောဒီဟာ',
  'ဒီဟာ', 'ဒါ', 'ထိုအရာ', '၄င်းအရာ', 'ယင်းအရာ', 'အဲဒါ', 'ဟိုဟာ', 'အချို့', 'တစ်ခုခု', 'အဘယ်မဆို', 'ဘယ်အရာမဆို',
  'အဘယ်မည်သော', 'အကြင်', 'အရာရာတိုင်း', 'စိုးစဉ်မျှ', 'စိုးစဉ်းမျှ', 'ဘယ်လောက်မဆို', 'တစ်စုံတစ်ရာ', 'တစုံတရာ', 'အလျဉ်းမဟုတ်',
  'မည်သည့်နည်းနှင့်မျှမဟုတ်', 'အလျဉ်းမရှိသော', 'အခြားဖြစ်သော', 'အခြားသော', 'အခြားတစ်ခု', 'အခြားတစ်ယောက်', 'အားလုံး',
  'အရာရာတိုင်း', 'အကုန်လုံး', 'အလုံးစုံ', 'အရာခပ်သိမ်း', 'တစ်ခုစီ', 'အသီးသီး', 'တစ်ဦးဦး', 'တစ်ခုခု', 'ကိုယ်စီကိုယ်ငှ', 'ကိုယ်စီ',
  'တစ်ဦးစီ', 'တစ်ယောက်စီ', 'တစ်ခုစီ', 'အကုန်', 'အပြည့်အစုံ', 'လုံးလုံး', 'နှစ်ခုလုံး', 'နှစ်ယောက်လုံး', 'နှစ်ဘက်လုံး', 'တစ်စုံတစ်ရာ',
  'တစ်စုံတစ်ခု', 'တစုံတခု', 'တစ်စုံတစ်ယောက်', 'တစုံတယောက်', 'တစ်ယောက်ယောက်', 'မည်သူမဆို', 'ဘာမျှမရှိ', 'ဘာမှမရှိ',
  'အဘယ်အရာမျှမရှိ', 'လူတိုင်း', 'လူတကာ', 'နှင့်', 'ပြီးလျှင်', '၄င်းနောက်', 'သို့မဟုတ်', 'သို့တည်းမဟုတ်', 'သို့မဟုတ်လျှင်',
  'ဒါမှမဟုတ်', 'ဖြစ်စေ', 'သို့စေကာမူ', 'ဒါပေမယ့်', 'ဒါပေမဲ့', 'မှတစ်ပါး', 'မှလွဲလျှင်', 'အဘယ်ကြောင့်ဆိုသော်', 'သောကြောင့်', 'သဖြင့်',
  '၍', 'သည့်အတွက်ကြောင့်', 'လျှင်', 'ပါက', 'အကယ်၍', 'သော်ငြားလည်း', 'စေကာမူ', 'နည်းတူ', 'ပေမယ့်', 'ပေမဲ့', 'ထိုနည်းတူစွာ',
  'ထိုနည်းတူ', 'ကဲ့သို့', 'သကဲ့သို့', 'ယင်းကဲ့သို့', 'ထိုကဲ့သို့', 'နှင့်စပ်လျဉ်း၍', 'ဤမျှ', 'ဤမျှလောက်', 'ဤကဲ့သို့', 'အခုလောက်ထိ',
  'ဒါကတော့', 'အဘယ်ကဲ့သလို့', 'မည်ကဲ့သို့', 'မည်သည့်နည်းနှင့်', 'မည်သည့်နည်းဖြင့်', 'မည်သည့်နည့်နှင့်မဆို', 'မည်သည့်နည်းဖြင့်မဆို',
  'မည်သို့', 'ဘယ်လိုလဲ', 'သို့ပေတည့်', 'သို့ပေမည့်', 'ဘယ်နည်းနှင့်', 'မည်ရွေ့မည်မျှ', 'အဘယ်မျှလောက်', 'ဘယ်လောက်', 'မည်သူ',
  'ဘယ်သူ', 'မည်သည့်အကြောင်းကြောင့်', 'ဘာအတွက်ကြောင့်', 'အဘယ်ကြောင့်', 'မည်သည့်အတွက်ကြောင့်', 'ဘာကြောင့်',
  'ဘာအတွက်နဲ့လဲ', 'မည်သည်', 'ဘာလဲ', 'အဘယ်အရာနည်း', 'မည်သည့်အရပ်မှာ', 'ဘယ်နေရာတွင်', 'မည်သည့်နေရာတွင်',
  'မည်သည့်နေရာသို့', 'ဘယ်နေရာသို့', 'ဘယ်နေရာမှာ', 'ဘယ်သူ၏', 'မည်သည့်အရာ၏', 'မည်သည့်အခါ', 'ဘယ်အချိန်', 'ဘယ်အခါ',
  'မည်သည့်အချိန်', 'ဘယ်တော့', 'မည်သူကို', 'မည်သူက', 'ဘယ်သူ့ကို', 'မည်သူမည်ဝါ', 'မည်သည့်အရာ', 'ဘယ်အရာ',
  'မည်သို့ပင်ဖြစ်စေ', 'ဘယ်လိုပဲဖြစ်ဖြစ်', 'မည်ရွေ့မည်မျှဖြစ်စေ', 'မည်သည့်နည်းနှင့်မဆို', 'ဘယ်နည်းနဲ့ဖြစ်ဖြစ်', 'မည်သူမဆို',
  'ဘယ်သူမဆို', 'အဘယ်သူမဆို', 'မည်သည့်အရာမဆို', 'ဘာဖြစ်ဖြစ်', 'မည်သည့်အရာဖြစ်ဖြစ်', 'မည်သည့်အရပ်၌မဆို',
  'မည်သည့်နေရာမဆို', 'ဘယ်အခါမဆို', 'ဘယ်အချိန်မဆို', 'ဘယ်အခါဖြစ်ဖြစ်', 'အချိန်အခါမရွေး'
]
// tell the world about the noise words.
exports.words = words

/***/ }),

/***/ "./lib/stopwords_nl.js":
/*!*****************************!*\
  !*** ./lib/stopwords_nl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, Chris Umbel, Martijn de Boer, Damien van Holten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
// This dutch wordlist has been parsed from a list created by Damien van Holten
// source: http://www.damienvanholten.com/blog/dutch-stop-words/
var words = [
  'aan', 'af', 'al', 'alles', 'als', 'altijd', 'andere', 'ben', 'bij', 'daar',
  'dan', 'dat', 'de', 'der', 'deze', 'die', 'dit', 'doch', 'doen', 'door', 'dus',
  'een', 'eens', 'en', 'er', 'ge', 'geen', 'geweest', 'haar', 'had', 'heb',
  'hebben', 'heeft', 'hem', 'het', 'hier', 'hij', 'hoe', 'hun', 'iemand', 'iets',
  'ik', 'in', 'is', 'ja', 'je ', 'kan', 'kon', 'kunnen', 'maar', 'me', 'meer',
  'men', 'met', 'mij', 'mijn', 'moet', 'na', 'naar', 'niet', 'niets', 'nog', 'nu',
  'of', 'om', 'omdat', 'ons', 'ook', 'op', 'over', 'reeds', 'te', 'tegen', 'toch',
  'toen', 'tot', 'u', 'uit', 'uw', 'van', 'veel', 'voor', 'want', 'waren', 'was',
  'wat', 'we', 'wel', 'werd', 'wezen', 'wie', 'wij', 'wil', 'worden', 'zal', 'ze',
  'zei', 'zelf', 'zich', 'zij', 'zijn', 'zo', 'zonder', 'zou',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '$', '1',
  '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', '-']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_no.js":
/*!*****************************!*\
  !*** ./lib/stopwords_no.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2014, Kristoffer Brabrand

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'og', 'i', 'jeg', 'det', 'at', 'en', 'et', 'den', 'til', 'er', 'som',
  'på', 'de', 'med', 'han', 'av', 'ikke', 'der', 'så', 'var', 'meg',
  'seg', 'men', 'ett', 'har', 'om', 'vi', 'min', 'mitt', 'ha', 'hadde',
  'hun', 'nå', 'over', 'da', 'ved', 'fra', 'du', 'ut', 'sin', 'dem',
  'oss', 'opp', 'man', 'kan', 'hans', 'hvor', 'eller', 'hva', 'skal',
  'selv', 'sjøl', 'her', 'alle', 'vil', 'bli', 'ble', 'blitt', 'kunne',
  'inn', 'når', 'kom', 'noen', 'noe', 'ville', 'dere', 'som',
  'deres', 'kun', 'ja', 'etter', 'ned', 'skulle', 'denne', 'for', 'deg',
  'si', 'sine', 'sitt', 'mot', 'å', 'meget', 'hvorfor', 'dette', 'disse',
  'uten', 'hvordan', 'ingen', 'din', 'ditt', 'blir', 'samme', 'hvilken',
  'hvilke', 'sånn', 'inni', 'mellom', 'vår', 'hver', 'hvem', 'vors',
  'hvis', 'både', 'bare', 'enn', 'fordi', 'før', 'mange', 'også', 'slik',
  'vært', 'være', 'begge', 'siden', 'henne', 'hennar', 'hennes',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_pa.js":
/*!*****************************!*\
  !*** ./lib/stopwords_pa.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* The MIT License (MIT)
Copyright (c) 2018 Espen Klem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  "ਦੇ", "0", "ਵਿੱਚ", "ਦਾ", "ਅਤੇ", "ਦੀ", "ਇੱਕ", "ਨੂੰ", "ਹੈ", "ਤੋਂ", "ਇਸ", "ਇਹ",
  "ਨੇ", "ਤੇ", "ਨਾਲ", "1", "ਲਈ", "ਵੀ", "ਸੀ", "ਵਿਚ", "ਕਿ", "ਜੋ", "ਉਹ", "ਉਸ",
  "ਹਨ", "ਜਾਂਦਾ", "ਕੀਤਾ", "2", "ਗਿਆ", "ਹੀ", "ਕੇ", "ਜਾਂ", "ਦੀਆਂ", "ਜਿਸ", "ਕਰਨ",
  "ਹੋ", "ਕਰ", "ਆਪਣੇ", "ਕੀਤੀ", "ਤੌਰ", "ਬਾਅਦ", "ਨਹੀਂ", "ਭਾਰਤੀ", "ਪਿੰਡ", "3",
  "ਸਿੰਘ", "ਉੱਤੇ", "ਸਾਲ", "।", "ਪੰਜਾਬ", "ਸਭ", "ਭਾਰਤ", "ਉਨ੍ਹਾਂ", "ਹੁੰਦਾ", "ਤੱਕ",
  "ਇਕ", "ਹੋਇਆ", "ਜਨਮ", "ਬਹੁਤ", "ਪਰ", "ਦੁਆਰਾ", "ਰੂਪ", "4", "ਹੋਰ", "ਕੰਮ", "ਆਪਣੀ",
  "ਤਾਂ", "ਸਮੇਂ", "ਪੰਜਾਬੀ", "ਗਈ", "ਦਿੱਤਾ", "ਦੋ", "ਕਿਸੇ", "ਕਈ", "ਜਾ", "ਵਾਲੇ",
  "ਸ਼ੁਰੂ", "5", "ਉਸਨੇ", "ਕਿਹਾ", "ਹੋਣ", "ਲੋਕ", "ਜਾਂਦੀ", "ਵਿੱਚੋਂ", "ਨਾਮ", "ਜਦੋਂ",
  "ਪਹਿਲਾਂ", "ਕਰਦਾ", "ਹੁੰਦੀ", "ਹੋਏ", "ਸਨ", "ਵਜੋਂ", "ਰਾਜ", "ਮੁੱਖ", "ਕਰਦੇ", "ਕੁਝ",
  "ਸਾਰੇ", "ਹੁੰਦੇ", "ਸ਼ਹਿਰ", "ਭਾਸ਼ਾ", "6", "ਹੋਈ", "ਅਨੁਸਾਰ", "ਸਕਦਾ", "ਆਮ", "ਵੱਖ",
  "ਕੋਈ", "ਵਾਰ", "ਗਏ", "ਖੇਤਰ", "ਜੀ", "ਕਾਰਨ", "ਕਰਕੇ", "ਜਿਵੇਂ", "ਜ਼ਿਲ੍ਹੇ",
  "ਲੋਕਾਂ", "ਚ", "ਸਾਹਿਤ", "ਸਦੀ", "ਬਾਰੇ", "ਜਾਂਦੇ", "ਵਾਲਾ", "ਜਾਣ", "ਪਹਿਲੀ",
  "ਪ੍ਰਾਪਤ", "ਰਿਹਾ", "ਵਾਲੀ", "ਨਾਂ", "ਦੌਰਾਨ", "ਤਰ੍ਹਾਂ", "7", "ਯੂਨੀਵਰਸਿਟੀ", "ਨਾ",
  "ਏ", "ਤਿੰਨ", "ਇਨ੍ਹਾਂ", "ਗੁਰੂ", "ਇਸਨੂੰ", "ਇਹਨਾਂ", "ਪਿਤਾ", "ਲਿਆ", "ਸ਼ਾਮਲ",
  "ਸ਼ਬਦ", "ਅੰਗਰੇਜ਼ੀ", "ਉਸਨੂੰ", "ਉਹਨਾਂ", "8", "ਸਥਿਤ", "ਫਿਰ", "ਜੀਵਨ", "ਸਕੂਲ",
  "ਹੁਣ", "ਦਿਨ", "ਕੀਤੇ", "ਆਦਿ", "ਵੱਧ", "ਲੈ", "ਘਰ", "ਵੱਲ", "ਦੇਸ਼", "ਵਲੋਂ", "ਬਣ",
  "ਵੀਂ", "ਫਿਲਮ", "ਉਮਰ", "ਬਲਾਕ", "ਰਹੇ", "10", "ਸਾਹਿਬ", "ਕਰਦੀ", "ਹਰ", "ਪੈਦਾ",
  "ਘੱਟ", "9", "ਲੇਖਕ", "ਹਿੱਸਾ", "ਫ਼ਿਲਮ", "ਮੌਤ", "ਜਿੱਥੇ", "ਵੱਡਾ", "ਵਿਖੇ", "ਆਪਣਾ",
  "ਪਹਿਲਾ", "ਵਰਤੋਂ", "ਆਪ", "ਕਰਨਾ", "ਵਿਆਹ", "ਰਹੀ", "ਰਾਹੀਂ", "ਦਿੱਤੀ", "ਉਸਦੇ",
  "ਪਰਿਵਾਰ", "ਆ", "ਦੂਜੇ", "ਅਮਰੀਕਾ", "ਮੰਨਿਆ", "ਇਸਦੇ", "ਈ", "ਕਾਲਜ", "ਸਰਕਾਰ",
  "ਇੱਥੇ", "ਪਾਕਿਸਤਾਨ", "ਸ਼ਾਮਿਲ", "ਵਿਗਿਆਨ", "ਉਸਦੀ", "ਪੇਸ਼", "ਕਿਉਂਕਿ", "ਪਹਿਲੇ",
  "ਧਰਮ", "ਮਸ਼ਹੂਰ", "ਅੰਦਰ", "ਵਿਚੋਂ", "ਜਿਨ੍ਹਾਂ", "ਜਾਣਿਆ", "ਪਾਣੀ", "ਇਲਾਵਾ", "ਅਰਥ",
  "ਚਾਰ", "ਪ੍ਰਸਿੱਧ", "ਨਾਵਲ", "ਵੱਡੇ", "ਵੱਲੋਂ", "ਕਹਾਣੀ", "ਵਿਸ਼ਵ", "ਮੂਲ", "ਅਮਰੀਕੀ",
  "ਸਥਾਨ", "ਇਤਿਹਾਸ", "ਕੁੱਝ", "ਵਿਕਾਸ", "ਉੱਤਰ", "ਸਿੱਖਿਆ", "ਹਿੰਦੀ", "ਪ੍ਰਮੁੱਖ",
  "ਰਚਨਾ", "ਬਣਾਇਆ", "ਵਿਸ਼ੇਸ਼", "ਡਾ", "ਉੱਪਰ", "ਪੱਛਮੀ", "ਦੇਣ", "ਇਸਦਾ", "ਸਕਦੇ",
  "ਰੱਖਿਆ", "ਕਵੀ", "ਦਿੱਲੀ", "ਵੱਡੀ", "ਭੂਮਿਕਾ", "ਸਮਾਜ", "ਕਾਵਿ", "ਕੀ", "ਕੋਲ", "ਦ",
  "ਗੱਲ", "ਸੰਸਾਰ", "ਭਾਗ", "ਆਈ", "ਦੱਖਣ", "ਅੱਜ", "ਸਿੱਖ", "ਕਹਿੰਦੇ", "ਸੰਗੀਤ",
  "ਕਿਲੋਮੀਟਰ", "ਜਿਹਨਾਂ", "ਸਭਾ", "ਜਿਸਦਾ", "ਜਨਵਰੀ", "ਕਵਿਤਾ", "ਮੈਂਬਰ", "ਲਿਖਿਆ",
  "ਮਾਂ", "ਕਲਾ", "ਪੰਜ", "ਥਾਂ", "ਹੇਠ", "ਜਿਆਦਾ", "ਵਰਤਿਆ", "ਮਾਰਚ", "ਡੀ", "ਅਕਤੂਬਰ",
  "ਤਕ", "ਨਾਟਕ", "ਬੀ", "ਖਾਸ", "ਇਸੇ", "ਆਧੁਨਿਕ", "ਅਗਸਤ", "ਤਿਆਰ", "ਮਾਤਾ", "ਬਣਾਉਣ",
  "ਨਵੰਬਰ", "ਵਿਅਕਤੀ", "ਦੱਖਣੀ", "ਦਸੰਬਰ", "ਆਫ", "ਗੀਤ", "ਗਿਣਤੀ", "ਕਾਲ", "ਖੋਜ",
  "ਸਾਲਾਂ", "ਪੂਰੀ", "ਸਮਾਂ", "ਜ਼ਿਆਦਾ", "ਇਸਦੀ", "ਸਕਦੀ", "ਵਿਚਕਾਰ", "ਰਾਜਧਾਨੀ",
  "ਉਸਦਾ", "ਜੁਲਾਈ", "ਜੂਨ", "ਅਧੀਨ", "ਸਥਾਪਨਾ", "ਸੇਵਾ", "ਭਾਵ", "ਵਰਗ", "ਛੋਟੇ",
  "ਦਿੰਦਾ", "ਸਮਾਜਿਕ", "ਹੁੰਦੀਆਂ", "ਟੀਮ", "ਔਰਤਾਂ", "ਅਕਸਰ", "ਪ੍ਰਕਾਸ਼ਿਤ", "ਉਰਦੂ",
  "ਰੰਗ", "ਪਾਰਟੀ", "ਬਣਾ", "ਪ੍ਰਭਾਵ", "ਸ਼ੁਰੂਆਤ", "ਲਗਭਗ", "ਮਈ", "ਸਿਰਫ", "ਨੇੜੇ",
  "ਜਿਸਨੂੰ", "ਹਾਲਾਂਕਿ", "ਦੂਰ", "ਸਤੰਬਰ", "ਕਿਤਾਬ", "ਕਦੇ", "ਉੱਤਰੀ", "ਪ੍ਰਕਾਰ",
  "ਇਸਨੇ", "ਪ੍ਰਦੇਸ਼", "ਅੱਗੇ", "ਸੰਯੁਕਤ", "ਪੜ੍ਹਾਈ", "ਵਧੇਰੇ", "ਨਾਲ਼", "ਮਨੁੱਖ",
  "ਬਾਕੀ", "ਪ੍ਰਧਾਨ", "ਦੂਜੀ", "ਕੁੱਲ", "ਆਫ਼", "ਅਧਿਐਨ", "ਰਾਸ਼ਟਰੀ", "ਪੁੱਤਰ",
  "ਅੰਤਰਰਾਸ਼ਟਰੀ", "ਧਰਤੀ", "ਕੇਂਦਰ", "ਦੇਸ਼ਾਂ", "ਮੱਧ", "ਜ਼ਿਲ੍ਹਾ", "ਸਾਰੀਆਂ", "ਪੱਧਰ",
  "ਹੋਵੇ", "ਜੇ", "ਭਾਈ", "ਰਹਿਣ", "ਪੁਰਸਕਾਰ", "ਸਭਿਆਚਾਰ", "ਪਤਾ", "ਪਾਸੇ", "ਨਵੇਂ",
  "ਕੰਪਨੀ", "ਬਾਹਰ", "ਵੇਲੇ", "ਸੰਨ", "ਪੂਰਬੀ", "ਵਿਚਾਰ", "ਕਾਰਜ", "ਪੀ", "ਮਹੱਤਵਪੂਰਨ",
  "ਦੁਨੀਆਂ", "ਧਾਰਮਿਕ", "ਮਨੁੱਖੀ", "ਸਮੂਹ", "ਅਜਿਹੇ", "ਲਾਲ", "ਦੂਜਾ", "ਭਰਾ", "ਸ੍ਰੀ",
  "ਅੰਤ", "ਜਾਂਦੀਆਂ", "ਸ਼ਾਹ", "ਰਹਿੰਦੇ", "ਮਹਾਨ", "ਚੀਨ", "ਮੀਟਰ", "ਵਰਗੇ", "ਨਾਲੋਂ",
  "ਹਾਸਲ", "ਕਿਸਮ", "ਅਜਿਹਾ", "ਬਣਿਆ", "ਭਰ", "ਛੱਡ", "ਲੈਣ", "ਹਿੱਸੇ", "ਟੀ", "ਲਿਖੇ",
  "ਮਿਲ", "ਮੌਜੂਦ", "ਦਿੱਤੇ", "ਵਾਸਤੇ", "ਵਾਲੀਆਂ", "ਵਧੀਆ", "ਰੂਸੀ", "ਜਾਰੀ", "ਸਰਕਾਰੀ",
  "ਡਿਗਰੀ", "ਪੱਛਮ", "ਲੜਾਈ", "ਭਾਸ਼ਾਵਾਂ", "ਰਾਜਾ", "ਜਲੰਧਰ", "ਹਿੰਦੂ", "ਔਰਤ", "ਜੰਗ",
  "ਬਾਬਾ", "ਬੱਚਿਆਂ", "ਮੰਤਰੀ", "ਪਟਿਆਲਾ", "ਵਾਂਗ", "ਆਉਣ", "ਭਾਵੇਂ", "ਕੇਵਲ", "ਐਸ",
  "ਪ੍ਰਾਚੀਨ", "ਰਹਿੰਦਾ", "ਬੋਲੀ", "ਅਵਾਰਡ", "ਨਗਰ", "ਖੇਡਾਂ", "ਫਿਲਮਾਂ", "ਬੱਚੇ",
  "ਕੌਰ", "ਤੋ", "ਪ੍ਰਤੀ", "ਕੁਆਂਟਮ", "ਅਬਾਦੀ", "ਪੁਸਤਕ", "ਐਮ", "ਰਾਮ", "ਖੇਤਰਾਂ",
  "ਫਰਵਰੀ", "ਕ੍ਰਿਕਟ", "ਪੈਂਦਾ", "ਇਤਿਹਾਸਕ", "ਲੱਗ", "ਬ੍ਰਿਟਿਸ਼", "ਆਇਆ", "ਮਿਲਦਾ"
]

// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_pl.js":
/*!*****************************!*\
  !*** ./lib/stopwords_pl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2013, Paweł Łaskarzewski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
// list based on: http://pl.wikipedia.org/wiki/Wikipedia:Stopwords
var words = [
  'a', 'aby', 'ach', 'acz', 'aczkolwiek', 'aj', 'albo', 'ale', 'ależ', 'ani',
  'aż', 'bardziej', 'bardzo', 'bo', 'bowiem', 'by', 'byli', 'bynajmniej',
  'być', 'był', 'była', 'było', 'były', 'będzie', 'będą', 'cali', 'cała',
  'cały', 'ci', 'cię', 'ciebie', 'co', 'cokolwiek', 'coś', 'czasami',
  'czasem', 'czemu', 'czy', 'czyli', 'daleko', 'dla', 'dlaczego', 'dlatego',
  'do', 'dobrze', 'dokąd', 'dość', 'dużo', 'dwa', 'dwaj', 'dwie', 'dwoje',
  'dziś', 'dzisiaj', 'gdy', 'gdyby', 'gdyż', 'gdzie', 'gdziekolwiek',
  'gdzieś', 'i', 'ich', 'ile', 'im', 'inna', 'inne', 'inny', 'innych', 'iż',
  'ja', 'ją', 'jak', 'jakaś', 'jakby', 'jaki', 'jakichś', 'jakie', 'jakiś',
  'jakiż', 'jakkolwiek', 'jako', 'jakoś', 'je', 'jeden', 'jedna', 'jedno',
  'jednak', 'jednakże', 'jego', 'jej', 'jemu', 'jest', 'jestem', 'jeszcze',
  'jeśli', 'jeżeli', 'już', 'ją', 'każdy', 'kiedy', 'kilka', 'kimś', 'kto',
  'ktokolwiek', 'ktoś', 'która', 'które', 'którego', 'której', 'który',
  'których', 'którym', 'którzy', 'ku', 'lat', 'lecz', 'lub', 'ma', 'mają',
  'mało', 'mam', 'mi', 'mimo', 'między', 'mną', 'mnie', 'mogą', 'moi', 'moim',
  'moja', 'moje', 'może', 'możliwe', 'można', 'mój', 'mu', 'musi', 'my', 'na',
  'nad', 'nam', 'nami', 'nas', 'nasi', 'nasz', 'nasza', 'nasze', 'naszego',
  'naszych', 'natomiast', 'natychmiast', 'nawet', 'nią', 'nic', 'nich', 'nie',
  'niech', 'niego', 'niej', 'niemu', 'nigdy', 'nim', 'nimi', 'niż', 'no', 'o',
  'obok', 'od', 'około', 'on', 'ona', 'one', 'oni', 'ono', 'oraz', 'oto',
  'owszem', 'pan', 'pana', 'pani', 'po', 'pod', 'podczas', 'pomimo', 'ponad',
  'ponieważ', 'powinien', 'powinna', 'powinni', 'powinno', 'poza', 'prawie',
  'przecież', 'przed', 'przede', 'przedtem', 'przez', 'przy', 'roku',
  'również', 'sam', 'sama', 'są', 'się', 'skąd', 'sobie', 'sobą', 'sposób',
  'swoje', 'ta', 'tak', 'taka', 'taki', 'takie', 'także', 'tam', 'te', 'tego',
  'tej', 'temu', 'ten', 'teraz', 'też', 'to', 'tobą', 'tobie', 'toteż',
  'trzeba', 'tu', 'tutaj', 'twoi', 'twoim', 'twoja', 'twoje', 'twym', 'twój',
  'ty', 'tych', 'tylko', 'tym', 'u', 'w', 'wam', 'wami', 'was', 'wasz', 'zaś',
  'wasza', 'wasze', 'we', 'według', 'wiele', 'wielu', 'więc', 'więcej', 'tę',
  'wszyscy', 'wszystkich', 'wszystkie', 'wszystkim', 'wszystko', 'wtedy',
  'wy', 'właśnie', 'z', 'za', 'zapewne', 'zawsze', 'ze', 'zł', 'znowu',
  'znów', 'został', 'żaden', 'żadna', 'żadne', 'żadnych', 'że', 'żeby',
  '$', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_pt.js":
/*!*****************************!*\
  !*** ./lib/stopwords_pt.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, Luís Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'a',
  'à',
  'ao',
  'aos',
  'aquela',
  'aquelas',
  'aquele',
  'aqueles',
  'aquilo',
  'as',
  'às',
  'até',
  'com',
  'como',
  'da',
  'das',
  'de',
  'dela',
  'delas',
  'dele',
  'deles',
  'depois',
  'do',
  'dos',
  'e',
  'ela',
  'elas',
  'ele',
  'eles',
  'em',
  'entre',
  'essa',
  'essas',
  'esse',
  'esses',
  'esta',
  'estas',
  'este',
  'estes',
  'eu',
  'isso',
  'isto',
  'já',
  'lhe',
  'lhes',
  'mais',
  'mas',
  'me',
  'mesmo',
  'meu',
  'meus',
  'minha',
  'minhas',
  'muito',
  'muitos',
  'na',
  'não',
  'nas',
  'nem',
  'no',
  'nos',
  'nós',
  'nossa',
  'nossas',
  'nosso',
  'nossos',
  'num',
  'nuns',
  'numa',
  'numas',
  'o',
  'os',
  'ou',
  'para',
  'pela',
  'pelas',
  'pelo',
  'pelos',
  'por',
  'quais',
  'qual',
  'quando',
  'que',
  'quem',
  'se',
  'sem',
  'seu',
  'seus',
  'só',
  'sua',
  'suas',
  'também',
  'te',
  'teu',
  'teus',
  'tu',
  'tua',
  'tuas',
  'um',
  'uma',
  'umas',
  'você',
  'vocês',
  'vos',
  'vosso',
  'vossos',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_'
]

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_ru.js":
/*!*****************************!*\
  !*** ./lib/stopwords_ru.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, Polyakov Vladimir, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = ['и', 'в', 'во', 'не', 'что', 'он', 'на', 'я', 'с', 'со', 'как',
'а', 'то', 'все', 'она', 'так', 'его', 'но', 'да', 'ты', 'к', 'у', 'же', 'вы',
 'за', 'бы', 'по', 'только', 'ее', 'мне', 'было', 'вот', 'от', 'меня', 'еще',
 'нет', 'о', 'из', 'ему', 'теперь', 'когда', 'даже', 'ну', 'ли', 'если', 'уже',
 'или', 'ни', 'быть', 'был', 'него', 'до', 'вас', 'нибудь', 'уж', 'вам',
 'сказал', 'ведь', 'там', 'потом', 'себя', 'ничего', 'ей', 'может', 'они',
 'тут', 'где', 'есть', 'надо', 'ней', 'для', 'мы', 'тебя', 'их', 'чем', 'была',
 'сам', 'чтоб', 'без', 'будто', 'чего', 'раз', 'тоже', 'себе', 'под', 'будет',
 'ж', 'тогда', 'кто', 'этот', 'того', 'потому', 'этого', 'какой', 'совсем',
 'ним', 'этом', 'почти', 'мой', 'тем', 'чтобы', 'нее', 'были', 'куда', 'всех',
 'никогда', 'сегодня', 'можно', 'при', 'об', 'другой', 'хоть', 'после', 'над',
 'больше', 'тот', 'через', 'эти', 'нас', 'про', 'всего', 'них', 'какая',
 'много', 'разве', 'эту', 'моя', 'свою', 'этой', 'перед', 'иногда', 'лучше',
 'чуть', 'том', 'нельзя', 'такой', 'им', 'более', 'всегда', 'конечно', 'всю',
 'между', 'это', 'лишь']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_so.js":
/*!*****************************!*\
  !*** ./lib/stopwords_so.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'oo', 'atabo', 'ay', 'ku', 'waxeey', 'uu', 'lakin', 'si', 'ayuu', 'soo',
  'waa', 'ka', 'kasoo', 'kale', 'waxuu', 'ayee', 'ayaa', 'kuu', 'isku', 'ugu',
  'jiray', 'dhan', 'dambeestii', 'inuu', 'in', 'jirtay', 'uheestay', 'aad',
  'uga', 'hadana', 'timaado', 'timaaday'
]


// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_st.js":
/*!*****************************!*\
  !*** ./lib/stopwords_st.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'a', 'le', 'o', 'ba', 'ho', 'oa', 'ea', 'ka', 'hae', 'tselane', 'eaba', 'ke',
  'hore', 'ha', 'e', 'ne', 're', 'bona', 'me', 'limo', 'tsa', 'haholo', 'la',
  'empa', 'ngoanake', 'se', 'moo', 'm\'e', 'bane', 'mo', 'tse', 'sa', 'li',
  'ena', 'bina', 'pina', 'hape'
]


// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_sv.js":
/*!*****************************!*\
  !*** ./lib/stopwords_sv.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Creative Commons – Attribution / ShareAlike 3.0 license
http://creativecommons.org/licenses/by-sa/3.0/

List based on frequently used words in subtitles in 2012.

Thanks to
opensubtitles.org
https://invokeit.wordpress.com/frequency-word-lists/#comment-9707
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'jag', 'det', 'är', 'du', 'inte', 'att', 'en', 'och', 'har', 'vi',
  'på', 'i', 'för', 'han', 'vad', 'med', 'mig', 'som', 'här', 'om',
  'dig', 'var', 'den', 'så', 'till', 'kan', 'de', 'ni', 'ska', 'ett',
  'men', 'av', 'vill', 'nu', 'ja', 'nej', 'bara', 'hon', 'hur', 'min',
  'där', 'honom', 'kom', 'din', 'då', 'när', 'ha', 'er', 'ta', 'ut',
  'får', 'man', 'vara', 'oss', 'dem', 'eller', 'varför', 'alla', 'från', 'upp',
  'igen', 'sa', 'hade', 'allt', 'in', 'sig', 'ingen', 'henne', 'vem', 'mitt',
  'nåt', 'blir', 'än', 'bli', 'ju', 'två', 'tar', 'hans', 'ditt', 'mina',
  'åt', 'väl', 'också', 'nån', 'låt', 'detta', 'va', 'dina', 'dom', 'blev',
  'inga', 'sin', 'just', 'många', 'vart', 'vilken', 'ur', 'ens', 'sitt', 'e',
  'jo', 'era', 'deras', 'fem', 'sex', 'denna', 'vilket', 'fyra', 'vårt', 'emot',
  'tio', 'ert', 'sju', 'åtta', 'nånting', 'ned', 'ers', 'nio', 'mej',
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_']

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_sw.js":
/*!*****************************!*\
  !*** ./lib/stopwords_sw.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
The MIT License (MIT)


Frequency sorted
*/

// Swahili - Stop words list. A list of commonly used words that have little
// meaning and can be excluded from analysis.

// This list is frequency sorted. That means it can be sliced from the bottom
// and be less agressive in excluding stopwords */

var words = ["na","ya","wa","kwa","ni","za","katika","la","kuwa","kama",
  "kwamba","cha","hiyo","lakini","yake","hata","wakati","hivyo","sasa","wake",
  "au","watu","hii","zaidi","vya","huo","tu","kwenye","si","pia","ili","moja",
  "kila","baada","ambao","ambayo","yao","wao","kuna","hilo","kutoka","kubwa",
  "pamoja","bila","huu","hayo","sana","ndani","mkuu","hizo","kufanya","wengi",
  "hadi","mmoja","hili","juu","kwanza","wetu","kuhusu","baadhi","wote","yetu",
  "hivi","kweli","mara","wengine","nini","ndiyo","zao","kati","hao","hapa",
  "kutokana","muda","habari","ambaye","wenye","nyingine","hakuna","tena",
  "hatua","bado","nafasi","basi","kabisa","hicho","nje","huyo","vile","yote",
  "mkubwa","alikuwa","zote","leo","haya","huko","kutoa","mwa","kiasi","hasa",
  "nyingi","kabla","wale","chini","gani","hapo","lazima","mwingine","bali",
  "huku","zake","ilikuwa","tofauti","kupata","mbalimbali","pale","kusema",
  "badala","wazi","yeye","alisema","hawa","ndio","hizi","tayari","wala",
  "muhimu","ile","mpya","ambazo","dhidi","kwenda","sisi","kwani","jinsi",
  "binafsi","kutumia","mbili","mbali","kuu","mengine","mbele","namna","mengi",
  "upande"]

exports.words = words



/***/ }),

/***/ "./lib/stopwords_vi.js":
/*!*****************************!*\
  !*** ./lib/stopwords_vi.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, David Przybilla, Chris Umbel
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  'bị', 'bởi', 'cả', 'các', 'cái', 'cần', 'càng', 'chỉ',
  'chiếc', 'cho', 'chứ', 'chưa', 'chuyện', 'có', 'có thể',
  'cứ', 'của', 'cùng', 'cũng', 'đã', 'đang', 'để', 'đến nỗi',
  'đều', 'điều', 'do', 'đó', 'được', 'dưới', 'gì', 'khi',
  'không', 'là', 'lại', 'lên', 'lúc', 'mà', 'mỗi', 'một cách',
  'này', 'nên', 'nếu', 'ngay', 'nhiều', 'như', 'nhưng', 'những',
  'nơi', 'nữa', 'phải', 'qua', 'ra', 'rằng', 'rất', 'rồi',
  'sau', 'sẽ', 'so', 'sự', 'tại', 'theo', 'thì', 'trên', 'trước', 'từ', 'từng', 'và',
  'vẫn', 'vào', 'vậy', 'vì', 'việc', 'với', 'vừa', 'vâng', 'à', 'ừ', 'từ'
]

// tell the world about the noise words.
exports.words = words

/***/ }),

/***/ "./lib/stopwords_yo.js":
/*!*****************************!*\
  !*** ./lib/stopwords_yo.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'ó', 'ní', 'ìjàpá', 'ṣe', 'rẹ̀', 'tí', 'àwọn', 'sí', 'ni', 'náà', 'anansi',
  'láti', 'kan', 'ti', 'ń', 'lọ', 'o', 'bí', 'padà', 'sì', 'wá', 'wangari',
  'lè', 'wà', 'kí', 'púpọ̀', 'odò', 'mi', 'wọ́n', 'pẹ̀lú', 'a', 'ṣùgbọ́n',
  'fún', 'jẹ́', 'fẹ́', 'oúnjẹ', 'rí', 'igi', 'kò', 'ilé', 'jù', 'olóńgbò',
  'pé', 'é', 'gbogbo', 'iṣu', 'inú', 'bẹ̀rẹ̀', 'jẹ', 'fi', 'dúró', 'alẹ́',
  'ọjọ́', 'nítorí', 'nǹkan', 'ọ̀rẹ́', 'àkókò', 'sínú', 'ṣ', 'yìí'
]


// Tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_zh.js":
/*!*****************************!*\
  !*** ./lib/stopwords_zh.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// a list of commonly used words that have little meaning and can be excluded
// from analysis.
var words = [
  '的', '地', '得', '和', '跟',
  '与', '及', '向', '并', '等',
  '更', '已', '含', '做', '我',
  '你', '他', '她', '们', '某',
  '该', '各', '每', '这', '那',
  '哪', '什', '么', '谁', '年',
  '月', '日', '时', '分', '秒',
  '几', '多', '来', '在', '就',
  '又', '很', '呢', '吧', '吗',
  '了', '嘛', '哇', '儿', '哼',
  '啊', '嗯', '是', '着', '都',
  '不', '说', '也', '看', '把',
  '还', '个', '有', '小', '到',
  '一', '为', '中', '于', '对',
  '会', '之', '第', '此', '或',
  '共', '按', '请'
]

// tell the world about the noise words.
exports.words = words


/***/ }),

/***/ "./lib/stopwords_zu.js":
/*!*****************************!*\
  !*** ./lib/stopwords_zu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* A list of commonly used words that have little meaning and can be excluded
from analysis.
This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

var words = [
  'ukuthi', 'kodwa', 'futhi', 'kakhulu', 'wakhe', 'kusho', 'uma', 'wathi',
  'umama', 'kanye', 'phansi', 'ngesikhathi', 'lapho', 'u', 'zakhe', 'khona',
  'ukuba', 'nje', 'phezulu', 'yakhe', 'kungani', 'wase', 'la', 'mina', 'wami',
  'ukuze', 'unonkungu', 'wabona', 'wahamba', 'lakhe', 'yami', 'kanjani',
  'kwakukhona', 'ngelinye'
]


// Tell the world about the noise words.
exports.words = words


/***/ })

/******/ });