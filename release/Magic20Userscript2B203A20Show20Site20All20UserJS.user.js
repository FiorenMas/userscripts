// ==UserScript==
// @version      7.0.0
// @name         Magic Userscript+ : Show Site All UserJS
// @description  Finds available userscripts for the current webpage.
// @supportURL   https://github.com/magicoflolis/Userscript-Plus/issues
// @namespace    https://github.com/magicoflolis/Userscript-Plus
// @homepageURL  https://github.com/magicoflolis/Userscript-Plus
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8TRZFKBzuIOGSoTnZREcGlVLEIFkpboVUHk0u/oElDkuLiKLgWHPxYrDq4OOvq4CoIgh8gzg5Oii5S4v+SQosYD4778e7e4+4dIDSrTLN6YoCm22Y6EZdy+VWp7xUigghhDqLMLCOZWczCd3zdI8DXuyjP8j/35xhUCxYDAhJxjBmmTbxBPLNpG5z3icOsLKvE58QTJl2Q+JHrisdvnEsuCzwzbGbT88RhYqnUxUoXs7KpEU8TR1RNp3wh57HKeYuzVq2z9j35C4MFfSXDdZqjSGAJSaQgQUEdFVRhI0qrToqFNO3Hffwjrj9FLoVcFTByLKAGDbLrB/+D391axalJLykYB3pfHOdjDOjbBVoNx/k+dpzWCSA+A1d6x19rArOfpDc6WuQICG0DF9cdTdkDLneA4SdDNmVXEmkKxSLwfkbflAeGboGBNa+39j5OH4AsdbV8AxwcAuMlyl73eXd/d2//nmn39wOjunK6jS33SAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+gDDBAAJWyXgRAAABRPSURBVHjazVt9VNRl9v9854VhhjdBiHcUaFQEDTVCdk1IstTV0jb1LLZkJZrl4knLTnZaKjdqdXdLXcvfyoHUErPUBBEMLREJ6egJFBUUBF9WMd6R4WW+M/P5/eHMdxkYEJS0e8498MzzzPN87537PM+9n3u/An49kgFwA+AJIACAP4AxAEIA+AFwBzDEPLYJQB2AqwDOATgN4AqAywBubNu2rTk+Pl4EAJIyABAEwTQYDyn8CoIrAEQD+BOAMLPgLgAcAGDs2LGQyWSora1FYGAg6urqUFZWBgCIiYnBqVOn0NDQAAA6T0/Pm/X19ZflcvkZo9G4w2AwHAFgwG+Q5ACCg4KClixZsuT82rVrTTt27CCAHpybm8vq6moWFRXRZDKxpqaGkyZN4q0fl3zyySelsaIoMiYmhg899BD/9re/mQAUAogHEGxe8/5TaGiob0RERMrSpUuvZ2Zmmo4cOcIjR44wLy/PpgIOHjzI2tpaTp06lVqtlhUVFUxLS5MU8MQTT0hjLQqZPHkySRIAFy1aZAwNDa0C8C/z9rpvNBbAPwBctyVob3zw4EEWFBRQJpNJFvH999/3WwE5OTncs2ePZUwVgDjzWXPHB9Wd0GsACuRy+UoXFxev5cuXo7OzEyStWBBsHzGiKMJkunWGmUwmyGQy6X+lUgkAcHBw6HXxoUOHWv4dDiAFwNcAJtzpgTUQUgNYIgjCP2bNmiX7+9//jo0bN2Lz5s3IyspCUFCQJIz5xB7Q5FVVVZg9ezby8vKwYsWKgTzTFACZAFYC+BZA+6ArQKlUOouiuAZAgiAIMq1WixEjRuCjjz6Cq6srPvzwQ1RUVNze5GQyKyV1bW/atAnJycmIj49Henr6/66qLpbUdbzRaMS0adOQm5sLAN4A/g/ARADvAGgZvCNeLvdUq9VbzVcQAXDo0KHcs2cPDQYD29ramJiYSKVSedszICIigpGRkTbb9vb2nDRpEmNiYujk5MQZM2bQ3d2dbm5unDFjhtX4qKgonj59mt7e3t3XEAH82+xnDAp5AThjSxgPDw9++eWXNJlMbGpq4htvvCEdbr82r1ixgr/73e966zeaz4W7VoIzgAyZTMaoqChOnTqVarW6hxIyMzNpMBio0+m4ZMmSflnCPWCj2RKc71R4NYD1AIwODg4sKipiU1MTV69e3UNAT09Pfv311yTJxsZGLl++/J5Zwm1YNMugvhMFxAFoA0CFQsH33nuPHR0dbGtr49KlS6lSqawW8/LyYnZ2Ng0GA2/evMkXXniBCoXit6CEFrNbPiB6SalUtncVwNnZmcnJySTJlpYWvv7665TL5VaL+fj4cN++fSTJ+vp6vvzyy31agrOzc1/7eMAcFRXFIUOG2Oq7NhA/YaRcLr85bNgwuri4WE2kUqn48ccfs7OzkzqdjgkJCT0swdfXl7m5uTQajWxubuaCBQskRYWGhjIrK4uCIBAAY2JiSFJq3y2T5PTp03vrP9wfj1EA8PkjjzzC8+fPMysriz4+PlYTubi4cN26dSTJ5uZmm/vdz8+PBw4cIEnW1tbyxRdfpCAIDA4OpsFgsBo7WML3Y64287buk7x9fX07oqOj2dLSQpPJxMzMzB5KUKvV3LRpE/V6PW/evMmFCxfSzs7Oaoy/vz9/+OEHGo1GNjY2cu7cudRoNExNTeWePXuYkZHBsLAw7t+/n4IgUBAEPv/889y+fTu/+OILvvDCC5JAGRkZjIiI4OrVq/nll19aRYxdOSMjg+PHjycAJiUl8cMPP+TMmTO5Y8cOzpo1yxI7ePYV0v5rzpw51Gg0/Mtf/kKdTkeDwcCcnBx6enpaLebq6sr169dLJ7+t/a7Vann+/HmS5I0bN7hgwQK6urpy1apVLCwslLaASqViSkoKW1tbWVJSwuLiYt68eZNpaWlUKpUkyR9//JE///wzL126xOrqagYFBdncAhblZGdns66ujoWFhTx16hQ7Ozvp7+9PcxRpM5QOBlBu2cdOTk5877332NraSpPJxN27d9PLy8tqQQcHB27ZsoWiKLKlpYULFiyQrkhHR0e+++671Ov1tFB9fT1nz54tKSo6OpokOWbMGDY0NPC1116jWq2mvb09ly9fzsbGRoaHh5MkP/nkE9rb23PMmDESTnA7BVy4cIHBwcF0cXHhTz/9xH/+8580yxhsSwHx5nuT0dHRTEpKokql4sqVK9ne3k5RFLl//356eHhYLerm5sbPPvtMEvDFF1+kvb09165dy/b2dnan69ev86mnnqIgCJJwlnC366Hr7OxMk8nE2NhYkpRcYVvASW8KyM/Pl/qys7OZk5Nj8Q3ibQVFhZbBjz32GHU6HQFQqVQyOTmZOp2ORqOR6enpPZTg5OTErVu30mAwsKmpiSkpKezs7GRvdO7cOXp7e9PHx4cGg4GRkZHs7Ozkww8/LM05fvx4dnR0cNKkST0E7q8Cjh49aqUAC0gjCEJh90Aw1uw6SgqwABAWc37rrbfY0dFBURS5d+9eurm5WS3u7u7OlJQU9of0ej2fffZZOjk5UafT0dPTkydOnGBpaSmfeeYZzpkzh6dOnWJxcTG9vLwGTQGWtqOjo9EsM2Rm/lNXcKQ7kOHs7IwNGzZg48aNEEURTz31FD7++OOuwATa2tpw/vx5GAy3xyyVSiV8fX1hMplgMplw48YNvPTSS7h48SJ27NiB9PR0XL58GQsXLkRNTY3t+7oXsMXyeV9h9/z5861kdgdwvPt92tULtFxTarWaSUlJ1Ov11Ov13LVrF4cMGUKlUsl33nmHOp2uXxYgiiLnz59Pi5ttWUcmk1GhUFChUFjdKAqFwuqO79629blcLrfyVLu2zX+PW6LFUAD/7a+zoVKp+Mknn7C9vZ0Gg4Fbtmzh66+/zo6ODvaXzp07R19f3/sdI/zXLDumA2gdyJcdHByYnJxMURSp1+v7PPC6k8lk4ubNm38LIXMrgOlyM572zEAiJVEUUVBQAHd3d4wbNw4qlar/mRhBwKhRo3DlyhWcPXtWAkfvA9kBOCoHsBDAIwP9tsFgwNGjR6HRaBAZGWl14Nx2ZTs7PProo6irq0NxcfGAwdNBpEsAcOhOzSgoKIhqtZr/+c9/BnQGWKilpYVxcXE2cYO3336b77777q+9DQ4BQNmdfDk0NJS5ubm0s7Ojs7Mz169fT6PRaHPP90W//PIL4+Pje8QRmzZtYkpKyqAIGh0dzRMnTrC5uZm7du2in5+fpa8M5qzsgCaUyWRMT0+3+NbS7fDBBx+wvLyc9fX1rK2t5cmTJ/nSSy/xq6++oiiKvSqhqamJc+fO/VUQpMDAQNbW1jI9PZ0JCQksLy/nd999R3t7ewKow7fffmuqq6tjWlqapBlRFBkfH8+srCzJJe4e6lZUVEggaVlZGbVaLRUKBYOCgjhp0iRGRkbS29ubgiDQ3d2d27dv79MSampqOH/+fOke379/Pw8fPmxz24WHh9vkBx98sMf41atXs7KykgEBAQTAWbNmsba2lsHBwQRgwLx584wrVqxgdXU18/PzOXToUJJkVVUVk5KSGBcX12PShx9+WHJhAXDt2rVWgYeDgwMfe+wxenh48NVXX6W/vz/d3Ny4Z8+ePi2hsbGRs2fPplwuZ0JCAg8dOtRj7cOHD/f6/cLCwh7j09PTWVhYKDlBTk5OFEWR4eHhtKTa6yzwVFtbGydOnEiSfOutt3pFWCzRm+UunzBhAltaWjh69GgC4LJly5iXl0dBEOjm5sbg4GA6OTnxgQce4M6dO/u0hGvXrtGCSSQkJPRYWy6XS95id+6OUQJgZmam1Y8jCAJJWhRQpzArYOjJkyehVquhVt9CkH/++ederyeDwQCDwQCVSgVRFFFWVobS0lIkJCRg5cqVWLFiBdasWQMPDw9s2bIFTzzxBGpraxEXF4dly5ZBo9FgxowZkMt74hLe3t5ISUnB888/j23btvXof+ONNzB27Fibz1VWVob333/f6rOGhgZ4enrCzs4Oer0e7u7u0Ov1aGtrA4A6mUKh+K9SqcTTTz+NlpYWNDc3S0L2Ro2NjWhoaEBQUBAAQKfTYdeuXZgyZQoWL14MOzs7HDt2DFqtFjNnzsTcuXMRFhYGPz8/hIaGYvHixdi3b1+v87u5uWHz5s2IjY3t0Tds2DCEhoba5MDAwB7ji4qK4OPjg5CQEMhkMsyZMwcNDQ1obGwEgKtITEzcn5mZyaamJn7zzTfUaDQkyccff7zXk9XR0ZGFhYVctmyZ9NmQIUN45coV3rhxg/v27aNcLmd4eDibm5uZm5vLvXv3sqCggBcvXpSSKdnZ2TavTgvV1tbyySefvKski6urK8vLy1lSUsLdu3ezvr6eqampljk3YsGCBe/n5+fzzTfflCDu0tJSTpw4sc+Jly5dypycHKt9l5SUxNLSUgmalsvlXLp0KY8dO8ZPP/2U0dHRPHPmDAEwODiYPj4+zMjI6PNMuHTpUp8/Rn94+PDh/OKLL1hUVMQ1a9ZIcsrl8iV3FAxZMrm7d+9mWFjYXT2ct7e3lEfo64qMjY0d7HRbq6+v79MDDod7i7/vhv39/Zmdnd2nJVRVVXHy5MmDGg4LghBqExC5H+zv788jR4706Tpfu3aN0dHRg2UJEiAiM9fZ3PdE5vDhw5mbm9unJVRUVDAqKmow1kvpCgNagaL3WwnHjh3r0xKuXLnC3//+93ez/SRQ1AoWDwwM5PDhwwc84eTJkymKIgEwICCAw4YNs+rXaDSSlwiAo0ePpoODQ6/toKAgHjlypE9LKC8vt4LRB8g9YHFoNJqF5eXlpr/+9a8DntCS4rL46l1dz64wu+UX6w/MrdVqefz48T4tobq6mpGRkQO1BKvEiKwLrJ2/bt26ms8++wwAEBAQgGHDhsHNzQ0jRoyAp+etnKK7uztGjBgBb29vm16c0Wjs4UVaYC+S8Pf3BwD4+fkhJCQEo0aNAgD4+/sjJCQEDg4OCAwMRGVlJf785z/jxx9/7NVjDAgIQFpamuQay2Qy+Pj4YOTIkdBqtXB1dZVgOA8PD/j6+kIQhIsACmwmR11cXDZYNPX999+zsrJSMsWysjJOmTKFRUVF0rVkMeuuFvDdd99JlZ8WtmR3ANzWtKdNm0aSfPPNNxkUFMSQkBCeOHHitgfjhAkTqFarmZKSQpPJRKPRyIKCAoaEhDA0NJR5eXkcNWpUn8lRmFPHVZYS1oaGBs6ZM4djx45ldXU1q6urrdobN260qQCj0cj29naJLaixIAi0s7MjSc6cOVNKhHZty2QykuSZM2c4cuRIqlQqjho1isePH+8TaT59+jRHjx5NjUZDZ2dnhoSEMD8/n3v37uVXX33FxMREm+nx7oWSNwC8bb4i1GfPnkVGRgaMRiMqKythb29v1X7wwQdtavHChQv46KOPJKB05MiRWLVqFQBAr9dLf9vb/1fQ2b29bt06lJeXAwCuXr2KxYsXY9u2bXjooYdsIs1hYWHYu3cv5s2bh6qqKjz99NPo6OjA1KlTcfHiRSQkJLSbZbtxu1rhHACFDQ0N0Ov1MBqN0j7u2jYajbC3t7epgOvXr+Pzzz9HamoqUlNTceDAgQHDtR0dHdL/EyZMQGtrK5577jmcPHmy1+9otVps2bIFSqUSxcXF8PLywoULF/D++++jpaWl0CzbbYulGwCsysrKaureMVjwdUdHBwICAnptA8DLL78MX19feHt7IykpCYmJiaioqMCSJUtQWlraa84hIiICr732GnJychAbG4tFixbhm2++uQ5glVm2flWLn9y5c+erhw8f7uwtIdlbctJWX/f2gQMHsGHDBnR0dCA2NrZHGwBu3ryJkpISVFZWIiwsDPv378fIkSNRX1+P5557DiUlJb2uHx0dDZlMhk2bNuHSpUut5iLqkwMulHR0dPy3pWhixowZ/MMf/iCd7NOnT5fa3t7eXLx4cY/Pu0Z8ln4AfOCBBzhv3jwmJCTQz8/Pqu3r6yv5BY8//jgXLlzIRx55hDKZjF5eXlKhxMSJE3nu3Dmbh+LWrVspCAI1Gs1dFUpaSmX/fa/d5O4vTvTG48ePZ3FxsZXwlZWVluvOBODTuymVtZC7ufDYeC8VMG3atH6NHTFiBNPS0piXl8ddu3Z19QwPDGbFuLvZEsR7oQCNRmMT4e2NlUolhwwZYkl2mABsHUzhu26H9ebaW/5GWXe3FeL9qSD/k7n29p4K5+Pjc7uiimvmZ1PjHtAEc+1t271SwKFDh1hQUGAVLU6dOpX+/v7t5me5Jy9NSX4CgLkApgH4ALfe3vpVyWAwQBRFAMCUKVNgNBrxww8/VBsMhrfNHl7DHb0OdBfP1I5b7/juBCAPDg72GjdunLOXl5csMTERoaGhOH36NERRhEajQVxcHOLj4zF58mSIoojLly9Dq9UiOTkZJ06cwMqVK/Hoo4/i7NmzaGtrg4ODA1555RU8++yz0Ov1GDduHI4ePYqSkhJDfX191blz57aaTKYXzNheO+4zyZVK5YMajWahq6vrT4sWLTLl5eUxNTWVLi4uzMnJYW1tLauqqnj58mXW1dVx1qxZUqlsVlYWq6qq2Nrays2bN1OlUnH79u2sqqriwYMH+corr9DLy8uoUCiOC4Lw23p1tpdtFatSqVLHjx9fEhUV9curr77aYYHaVCoVk5KSWFRUxJiYGOr1es6bN49yuZxxcXFcv349PTw8+Mc//rHd09PzuvkXTjFjeIrBflihl/2mkMlkTgAUwi1HXiDZaPbpXVtbW39xcnKiOUByNcf6wi23X2gAgPj4eHl4ePiI4uJij5qaGv+Wlhbftra2EL1erzWZTN4k3a5everk4+ODixcvNpGs02g01wIDA6uvXr16IiIioik/P/9UZ2dnjZ+fX8OVK1dczOuZBEGQ63S6RkdHR5vRGUlPk8nUJJfLOy1tAI2CIOi7j/1/l0eTL0xHMHkAAAAASUVORK5CYII=
// @author       Magic <magicoflolis@tuta.io>
// @license      MIT
// @compatible     chrome
// @compatible     firefox
// @compatible     edge
// @compatible     opera
// @compatible     safari
// @connect     greasyfork.org
// @connect     sleazyfork.org
// @connect     github.com
// @connect     openuserjs.org
// @grant     GM_addElement
// @grant     GM_info
// @grant     GM_getValue
// @grant     GM_openInTab
// @grant     GM_setValue
// @grant     GM_registerMenuCommand
// @grant     GM_xmlhttpRequest
// @grant     GM.addElement
// @grant     GM.info
// @grant     GM.getValue
// @grant     GM.openInTab
// @grant     GM.setValue
// @grant     GM.registerMenuCommand
// @grant     GM.xmlHttpRequest
// @match     https://*/*
// @noframes
// @run-at     document-start
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Magic20Userscript2B203A20Show20Site20All20UserJS.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Magic20Userscript2B203A20Show20Site20All20UserJS.meta.js
// ==/UserScript==
      query: encodeURIComponent('https://api.github.com/search/code?q="// ==UserScript=="+{host}+ "// ==/UserScript=="+in:file+language:js&per_page=30')
    }
  ],
  theme: {
    'even-row': '',
    'odd-row': '',
    'even-err': '',
    'odd-err': '',
    'background-color': '',
    'gf-color': '',
    'sf-color': '',
    'border-b-color': '',
    'gf-btn-color': '',
    'sf-btn-color': '',
    'sf-txt-color': '',
    'txt-color': '',
    'chck-color': '',
    'chck-gf': '',
    'chck-git': '',
    'chck-open': '',
    placeholder: '',
    'position-top': '',
    'position-bottom': '',
    'position-left': '',
    'position-right': '',
    'font-family': ''
  },
  recommend: {
    author: true,
    others: true
  }
};
//#region i18n
class i18nHandler {
  constructor() {
    /**
     * @type { string[] }
     */
    this.cache = [];

    const languages = navigator.languages ?? [];
    for (const nlang of languages) {
      const lg = nlang.split('-')[0];
      if (this.cache.indexOf(lg) === -1) {
        this.cache.push(lg);
      }
    }

    const current = navigator.language.split('-')[0] ?? 'en';
    if (!this.cache.includes(current)) {
      this.cache.push(current);
    }
  }
  toDate(str = '') {
    return new Intl.DateTimeFormat(navigator.language).format(new Date(str));
  }
  toNumber(number) {
    return new Intl.NumberFormat(navigator.language).format(number);
  }
  i18n$(...keys) {
    const current = navigator.language.split('-')[0] ?? 'en';
    const list = translations[cfg.language] ?? translations[current];
    const arr = [];
    for (const key of keys) {
      arr.push(list[key]);
    }
    return arr.length !== 1 ? arr : arr[0];
  }
}
const language = new i18nHandler();
const { i18n$ } = language;
//#endregion
// #region Utilities
/**
 * @type { import("../typings/types.d.ts").qs }
 */
const qs = (selector, root) => {
  try {
    return (root || document).querySelector(selector);
  } catch (ex) {
    err(ex);
  }
  return null;
};
/**
 * @type { import("../typings/types.d.ts").qsA }
 */
const qsA = (selectors, root) => {
  try {
    return (root || document).querySelectorAll(selectors);
  } catch (ex) {
    err(ex);
  }
  return [];
};
/**
 * @type { import("../typings/types.d.ts").hasOwn }
 */
const hasOwn = (o, v) => {
  if (typeof Object.hasOwn !== 'undefined') {
    return Object.hasOwn(o, v);
  }
  return Object.prototype.hasOwnProperty.call(o, v);
};
/**
 * @type { import("../typings/types.d.ts").objToStr }
 */
const objToStr = (obj) => {
  return Object.prototype.toString.call(obj);
};
/**
 * @type { import("../typings/types.d.ts").strToURL }
 */
const strToURL = (str) => {
  const WIN_LOCATION = window.location ?? BLANK_PAGE;
  try {
    str = str ?? WIN_LOCATION;
    return objToStr(str).includes('URL') ? str : new URL(str);
  } catch (ex) {
    err({ cause: 'strToURL', message: ex.message });
  }
  return WIN_LOCATION;
};
/**
 * @type { import("../typings/types.d.ts").isRegExp }
 */
const isRegExp = (obj) => {
  const s = objToStr(obj);
  return s.includes('RegExp');
};
/**
 * @type { import("../typings/types.d.ts").isElem }
 */
const isElem = (obj) => {
  const s = objToStr(obj);
  return s.includes('Element');
};
/**
 * @type { import("../typings/types.d.ts").isObj }
 */
const isObj = (obj) => {
  const s = objToStr(obj);
  return s.includes('Object');
};
/**
 * @type { import("../typings/types.d.ts").isFN }
 */
const isFN = (obj) => {
  const s = objToStr(obj);
  return s.includes('Function');
};
/**
 * @type { import("../typings/types.d.ts").isNull }
 */
const isNull = (obj) => {
  return Object.is(obj, null) || Object.is(obj, undefined);
};
/**
 * @type { import("../typings/types.d.ts").isBlank }
 */
const isBlank = (obj) => {
  return (
    (typeof obj === 'string' && Object.is(obj.trim(), '')) ||
    ((obj instanceof Set || obj instanceof Map) && Object.is(obj.size, 0)) ||
    (Array.isArray(obj) && Object.is(obj.length, 0)) ||
    (isObj(obj) && Object.is(Object.keys(obj).length, 0))
  );
};
/**
 * @type { import("../typings/types.d.ts").isEmpty }
 */
const isEmpty = (obj) => {
  return isNull(obj) || isBlank(obj);
};
/**
 * @type { import("../typings/types.d.ts").normalizeTarget }
 */
const normalizeTarget = (target, toQuery = true, root) => {
  if (Object.is(target, null) || Object.is(target, undefined)) {
    return [];
  }
  if (Array.isArray(target)) {
    return target;
  }
  if (typeof target === 'string') {
    return toQuery ? Array.from((root || document).querySelectorAll(target)) : [target];
  }
  if (isElem(target)) {
    return [target];
  }
  return Array.from(target);
};
/**
 * @type { import("../typings/types.d.ts").ael }
 */
const ael = (el, type, listener, options = {}) => {
  try {
    for (const elem of normalizeTarget(el)) {
      if (!elem) {
        continue;
      }
      if (isMobile && type === 'click') {
        elem.addEventListener('touchstart', listener, options);
        continue;
      }
      elem.addEventListener(type, listener, options);
    }
  } catch (ex) {
    err(ex);
  }
};
/**
 * @type { import("../typings/types.d.ts").formAttrs }
 */
const formAttrs = (elem, attr = {}) => {
  if (!elem) {
    return elem;
  }
  for (const key in attr) {
    if (typeof attr[key] === 'object') {
      formAttrs(elem[key], attr[key]);
    } else if (isFN(attr[key])) {
      if (/^on/.test(key)) {
        elem[key] = attr[key];
        continue;
      }
      ael(elem, key, attr[key]);
    } else if (key === 'class') {
      elem.className = attr[key];
    } else {
      elem[key] = attr[key];
    }
  }
  return elem;
};
/**
 * @type { import("../typings/types.d.ts").make }
 */
const make = (tagName, cname, attrs) => {
  let el;
  try {
    const safe = safeSelf();
    el = safe.createElement(tagName);
    if (!isEmpty(cname)) {
      if (typeof cname === 'string') {
        el.className = cname;
      } else if (isObj(cname)) {
        formAttrs(el, cname);
      }
    }
    if (!isEmpty(attrs)) {
      if (typeof attrs === 'string') {
        el.textContent = attrs;
      } else if (isObj(attrs)) {
        formAttrs(el, attrs);
      }
    }
  } catch (ex) {
    err(ex);
  }
  return el;
};

/**
 * @type { import("../typings/UserJS.d.ts").getGMInfo }
 */
const getGMInfo = () => {
  if (isGM) {
    if (isObj(GM.info)) {
      return GM.info;
    } else if (isObj(GM_info)) {
      return GM_info;
    }
  }
  return {
    script: {
      icon: '',
      name: 'Magic Userscript+',
      namespace: 'https://github.com/magicoflolis/Userscript-Plus',
      updateURL: 'https://github.com/magicoflolis/Userscript-Plus/releases',
      version: 'Bookmarklet',
      bugs: 'https://github.com/magicoflolis/Userscript-Plus/issues'
    }
  };
};
const $info = getGMInfo();
// #endregion
/**
 * @type { import("../typings/types.d.ts").dom }
 */
const dom = {
  attr(target, attr, value = undefined) {
    for (const elem of normalizeTarget(target)) {
      if (value === undefined) {
        return elem.getAttribute(attr);
      }
      if (value === null) {
        elem.removeAttribute(attr);
      } else {
        elem.setAttribute(attr, value);
      }
    }
  },
  prop(target, prop, value = undefined) {
    for (const elem of normalizeTarget(target)) {
      if (value === undefined) {
        return elem[prop];
      }
      elem[prop] = value;
    }
  },
  text(target, text) {
    const targets = normalizeTarget(target);
    if (text === undefined) {
      return targets.length !== 0 ? targets[0].textContent : undefined;
    }
    for (const elem of targets) {
      elem.textContent = text;
    }
  },
  cl: {
    add(target, token) {
      if (Array.isArray(token)) {
        for (const elem of normalizeTarget(target)) {
          elem.classList.add(...token);
        }
      } else {
        for (const elem of normalizeTarget(target)) {
          elem.classList.add(token);
        }
      }
    },
    remove(target, token) {
      if (Array.isArray(token)) {
        for (const elem of normalizeTarget(target)) {
          elem.classList.remove(...token);
        }
      } else {
        for (const elem of normalizeTarget(target)) {
          elem.classList.remove(token);
        }
      }
    },
    toggle(target, token, force) {
      let r;
      for (const elem of normalizeTarget(target)) {
        r = elem.classList.toggle(token, force);
      }
      return r;
    },
    has(target, token) {
      for (const elem of normalizeTarget(target)) {
        if (elem.classList.contains(token)) {
          return true;
        }
      }
      return false;
    }
  }
};
class Memorize {
  constructor() {
    /**
     * @type {Map<string, Map<string, any>>}
     */
    this.store = new Map();
    /**
     * @type { { [key: string]: Map<string, any>; userjs: Map<number, import("../typings/types.d.ts").GSForkQuery> } }
     */
    this.maps = {};
    this.create('cfg', 'container', 'userjs');
  }
  /**
   * @template { string } S
   * @param { ...S } maps
   * @returns { S | S[] }
   */
  create(...maps) {
    const resp = [];
    for (const key of maps) {
      if (this.store.has(key)) {
        return this.store.get(key);
      }
      const m = new Map();
      this.store.set(key, m);
      this.maps[key] = m;
      resp.push(this.store.get(key));
    }
    return resp.length >= 2 ? resp : resp[0];
  }
}
const memory = new Memorize();
//#region Icon SVGs
const iconSVG = {
  cfg: {
    viewBox: '0 0 24 24',
    html: '<g><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z" fill="currentColor"></path></g>'
  },
  close: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M4.70718 2.58574C4.31666 2.19522 3.68349 2.19522 3.29297 2.58574L2.58586 3.29285C2.19534 3.68337 2.19534 4.31654 2.58586 4.70706L9.87877 12L2.5859 19.2928C2.19537 19.6834 2.19537 20.3165 2.5859 20.7071L3.293 21.4142C3.68353 21.8047 4.31669 21.8047 4.70722 21.4142L12.0001 14.1213L19.293 21.4142C19.6835 21.8047 20.3167 21.8047 20.7072 21.4142L21.4143 20.7071C21.8048 20.3165 21.8048 19.6834 21.4143 19.2928L14.1214 12L21.4143 4.70706C21.8048 4.31654 21.8048 3.68337 21.4143 3.29285L20.7072 2.58574C20.3167 2.19522 19.6835 2.19522 19.293 2.58574L12.0001 9.87865L4.70718 2.58574Z" fill="currentColor"></path></g>'
  },
  filter: {
    viewBox: '0 0 24 24',
    html: '<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z" fill="currentColor"/></g>'
  },
  fsClose: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H7.5C6.94772 1.5 6.5 1.94772 6.5 2.5V6.5H2.5C1.94772 6.5 1.5 6.94772 1.5 7.5V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H7Z" fill="currentColor"></path> <path d="M17 9.5C15.6193 9.5 14.5 8.38071 14.5 7V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H16.5C17.0523 1.5 17.5 1.94772 17.5 2.5V6.5H21.5C22.0523 6.5 22.5 6.94772 22.5 7.5V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H17Z" fill="currentColor"></path> <path d="M17 14.5C15.6193 14.5 14.5 15.6193 14.5 17V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H16.5C17.0523 22.5 17.5 22.0523 17.5 21.5V17.5H21.5C22.0523 17.5 22.5 17.0523 22.5 16.5V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H17Z" fill="currentColor"></path> <path d="M9.5 17C9.5 15.6193 8.38071 14.5 7 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V16.5C1.5 17.0523 1.94772 17.5 2.5 17.5H6.5V21.5C6.5 22.0523 6.94772 22.5 7.5 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V17Z" fill="currentColor"></path></g>'
  },
  fsOpen: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H3.5C4.05228 9.5 4.5 9.05228 4.5 8.5V4.5H8.5C9.05228 4.5 9.5 4.05228 9.5 3.5V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H4Z" fill="currentColor"></path> <path d="M20 1.5C21.3807 1.5 22.5 2.61929 22.5 4V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H20.5C19.9477 9.5 19.5 9.05228 19.5 8.5V4.5H15.5C14.9477 4.5 14.5 4.05228 14.5 3.5V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H20Z" fill="currentColor"></path> <path d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H20.5C19.9477 14.5 19.5 14.9477 19.5 15.5V19.5H15.5C14.9477 19.5 14.5 19.9477 14.5 20.5V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H20Z" fill="currentColor"></path> <path d="M1.5 20C1.5 21.3807 2.61929 22.5 4 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V20.5C9.5 19.9477 9.05228 19.5 8.5 19.5H4.5V15.5C4.5 14.9477 4.05228 14.5 3.5 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V20Z" fill="currentColor"></path></g>'
  },
  fullscreen: {
    viewBox: '0 0 96 96',
    html: '<g><path d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g>'
  },
  gf: {
    viewBox: '0 0 510.4 510.4',
    html: '<g><path d="M505.2,80c-6.4-6.4-16-6.4-22.4,0l-89.6,89.6c-1.6,1.6-6.4,3.2-12.8,1.6c-4.8-1.6-9.6-3.2-14.4-6.4L468.4,62.4 c6.4-6.4,6.4-16,0-22.4c-6.4-6.4-16-6.4-22.4,0L343.6,142.4c-3.2-4.8-4.8-9.6-4.8-12.8c-1.6-6.4-1.6-11.2,1.6-12.8L430,27.2 c6.4-6.4,6.4-16,0-22.4c-6.4-6.4-16-6.4-22.4,0L290.8,121.6c-16,16-20.8,40-14.4,62.4l-264,256c-16,16-16,43.2,0,59.2 c6.4,6.4,16,11.2,27.2,11.2c11.2,0,22.4-4.8,30.4-12.8L319.6,232c8,3.2,16,4.8,24,4.8c16,0,32-6.4,44.8-17.6l116.8-116.8 C511.6,96,511.6,86.4,505.2,80z M46,475.2c-3.2,3.2-9.6,3.2-14.4,0c-3.2-3.2-3.2-9.6,1.6-12.8l257.6-249.6c0,0,1.6,1.6,1.6,3.2 L46,475.2z M316.4,192c-14.4-14.4-16-35.2-4.8-48c4.8,11.2,11.2,22.4,20.8,32c9.6,9.6,20.8,16,32,20.8 C351.6,208,329.2,206.4,316.4,192z"/></g>'
  },
  gh: {
    viewBox: '0 0 16 16',
    html: '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'
  },
  hide: {
    viewBox: '0 0 24 24',
    html: '<g> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="currentColor"></path></g>'
  },
  install: {
    viewBox: '0 0 16 16',
    html: '<g><path d="M8.75 1.75a.75.75 0 00-1.5 0v6.59L5.3 6.24a.75.75 0 10-1.1 1.02L7.45 10.76a.78.78 0 00.038.038.748.748 0 001.063-.037l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V1.75z"/><path d="M1.75 9a.75.75 0 01.75.75v3c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-3A.75.75 0 011.75 9z"/></g>'
  },
  issue: {
    viewBox: '0 0 24 24',
    html: '<path fill="none" stroke="#ffff" stroke-width="2" d="M23,20 C21.62,17.91 20,17 19,17 M5,17 C4,17 2.38,17.91 1,20 M19,9 C22,9 23,6 23,6 M1,6 C1,6 2,9 5,9 M19,13 L24,13 L19,13 Z M5,13 L0,13 L5,13 Z M12,23 L12,12 L12,23 L12,23 Z M12,23 C8,22.9999998 5,20.0000002 5,16 L5,9 C5,9 8,6.988 12,7 C16,7.012 19,9 19,9 C19,9 19,11.9999998 19,16 C19,20.0000002 16,23.0000002 12,23 L12,23 Z M7,8 L7,6 C7,3.24 9.24,1 12,1 C14.76,1 17,3.24 17,6 L17,8"/>'
  },
  nav: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M2 5.5C2 4.94772 2.44772 4.5 3 4.5H21C21.5523 4.5 22 4.94772 22 5.5V6.5C22 7.05228 21.5523 7.5 21 7.5H3C2.44772 7.5 2 7.05228 2 6.5V5.5Z" fill="currentColor"></path> <path d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="currentColor"></path><path d="M3 16.5C2.44772 16.5 2 16.9477 2 17.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V17.5C22 16.9477 21.5523 16.5 21 16.5H3Z" fill="currentColor"></path></g>'
  },
  plus: {
    viewBox: '0 0 24 24',
    html: '<g><path d="M13.5 3C13.5 2.44772 13.0523 2 12.5 2H11.5C10.9477 2 10.5 2.44772 10.5 3V10.5H3C2.44772 10.5 2 10.9477 2 11.5V12.5C2 13.0523 2.44772 13.5 3 13.5H10.5V21C10.5 21.5523 10.9477 22 11.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13.5H21C21.5523 13.5 22 13.0523 22 12.5V11.5C22 10.9477 21.5523 10.5 21 10.5H13.5V3Z" fill="currentColor"/></g>'
  },
  search: {
    viewBox: '0 0 24 24',
    html: '<g><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z" fill="currentColor"/></g>'
  },
  verified: {
    viewBox: '0 0 56 56',
    fill: 'currentColor',
    stroke: 'currentColor',
    html: '<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'
  },
  refresh: {
    viewBox: '0 0 1024 1024',
    fill: 'currentColor',
    html: '<path d="M981.314663 554.296783a681.276879 681.276879 0 0 1-46.986468 152.746388q-105.706098 230.734238-360.983096 242.19829a593.06288 593.06288 0 0 1-228.689008-33.853939v-1.022615l-31.808709 79.979258a55.759429 55.759429 0 0 1-20.506122 22.551352 40.043451 40.043451 0 0 1-21.04434 5.382184 51.076928 51.076928 0 0 1-19.483507-5.382184 95.210839 95.210839 0 0 1-13.347817-7.158305 52.314831 52.314831 0 0 1-5.382184-4.628679L71.671707 731.908862a57.427906 57.427906 0 0 1-7.158305-21.528737 46.932646 46.932646 0 0 1 1.022615-17.438277 35.952991 35.952991 0 0 1 7.158305-13.347816 74.435608 74.435608 0 0 1 10.279972-10.279972 60.495751 60.495751 0 0 1 11.248765-7.373593 50.431066 50.431066 0 0 1 8.18092-3.606063 6.189512 6.189512 0 0 0 3.067845-1.776121l281.003839-74.866183a91.497132 91.497132 0 0 1 35.899168-2.583448 122.337047 122.337047 0 0 1 22.174599 6.404799 21.528737 21.528737 0 0 1 12.325202 12.325202 76.157907 76.157907 0 0 1 4.628679 14.854829 47.63233 47.63233 0 0 1 0 14.370431 55.167388 55.167388 0 0 1-2.04523 10.764369 10.764368 10.764368 0 0 0-1.022615 3.606063l-32.831324 79.979258a677.50935 677.50935 0 0 0 164.264262 39.505232q77.395809 7.696523 131.809692-3.606063a358.507291 358.507291 0 0 0 101.023598-36.921784 381.27393 381.27393 0 0 0 73.951211-50.753997 352.64071 352.64071 0 0 0 48.708767-55.382676 410.391547 410.391547 0 0 0 26.910921-41.550462c3.767529-7.481236 6.673908-13.616926 8.719139-18.460892zM40.885614 449.667121a685.69027 685.69027 0 0 1 63.563595-176.427998q118.0313-212.273346 374.330913-207.160271a571.803252 571.803252 0 0 1 207.160271 39.989629l33.853939-78.956643A75.619688 75.619688 0 0 1 735.187378 9.189165a37.67529 37.67529 0 0 1 15.393047-8.234742 42.303968 42.303968 0 0 1 14.854829-0.538219 47.578509 47.578509 0 0 1 13.347817 3.606064 102.907362 102.907362 0 0 1 11.302586 6.13569 49.569917 49.569917 0 0 1 6.673909 4.628678l3.067845 3.067845 154.84544 276.913379a81.970666 81.970666 0 0 1 6.13569 22.712817 46.986468 46.986468 0 0 1-1.022615 17.438277 32.293105 32.293105 0 0 1-7.696523 13.347817 69.322533 69.322533 0 0 1-10.764369 9.741753 92.142994 92.142994 0 0 1-11.302587 6.673909l-8.18092 4.09046a7.104483 7.104483 0 0 1-3.067845 1.022615l-283.049068 67.546412a112.003254 112.003254 0 0 1-46.125319-1.022615c-11.571696-3.390776-19.160576-8.019454-22.551352-13.832214a41.173709 41.173709 0 0 1-5.382184-21.04434 97.256069 97.256069 0 0 1 1.291724-17.438277 24.381295 24.381295 0 0 1 3.067845-8.234742L600.632773 296.81309a663.730958 663.730958 0 0 0-164.102797-43.057474q-77.987849-9.203535-131.809692 0a348.227319 348.227319 0 0 0-101.292707 33.853938 368.571976 368.571976 0 0 0-75.350579 49.246986 383.31916 383.31916 0 0 0-50.269601 54.360061 408.507783 408.507783 0 0 0-28.740863 41.012244A113.025869 113.025869 0 0 0 40.885614 449.667121z m0 0" fill="#ffffff" p-id="2275"></path>'
  },
  load(type, container) {
    const safe = safeSelf();
    const svgElem = safe.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (const [k, v] of Object.entries(iconSVG[type])) {
      if (k === 'html') {
        continue;
      }
      svgElem.setAttributeNS(null, k, v);
    }
    try {
      if (typeof iconSVG[type].html === 'string') {
        svgElem.innerHTML = iconSVG[type].html;
      }
      // eslint-disable-next-line no-unused-vars
    } catch (ex) {
      /* empty */
    }
    if (container) {
      container.appendChild(svgElem);
      return svgElem;
    }
    return svgElem.outerHTML;
  }
};
//#endregion
/**
 * @type { import("../typings/UserJS.d.ts").StorageSystem }
 */
const StorageSystem = {
  prefix: 'MUJS',
  getItem(key) {
    return window.localStorage.getItem(key);
  },
  has(key) {
    return !isNull(this.getItem(key));
  },
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  },
  remove(key) {
    window.localStorage.removeItem(key);
  },
  async setValue(key, v) {
    v = typeof v === 'string' ? v : JSON.stringify(v ?? {});
    if (isGM) {
      if (isFN(GM.setValue)) {
        await GM.setValue(key, v);
      } else if (isFN(GM_setValue)) {
        GM_setValue(key, v);
      }
    } else {
      this.setItem(`${this.prefix}-${key}`, v);
    }
  },
  async getValue(key, def = {}) {
    try {
      if (isGM) {
        let GMType;
        if (isFN(GM.getValue)) {
          GMType = await GM.getValue(key, JSON.stringify(def));
        } else if (isFN(GM_getValue)) {
          GMType = GM_getValue(key, JSON.stringify(def));
        }
        if (!isNull(GMType)) {
          return JSON.parse(GMType);
        }
      }
      return this.has(`${this.prefix}-${key}`)
        ? JSON.parse(this.getItem(`${this.prefix}-${key}`))
        : def;
    } catch (ex) {
      err(ex);
    }
  }
};
const Command = {
  cmds: new Set(),
  register(text, command) {
    if (!isGM) {
      return;
    }

    if (isFN(command)) {
      if (this.cmds.has(command)) {
        return;
      }
      this.cmds.add(command);
    }

    if (isFN(GM.registerMenuCommand)) {
      GM.registerMenuCommand(text, command);
    } else if (isFN(GM_registerMenuCommand)) {
      GM_registerMenuCommand(text, command);
    }
  }
};
/**
 * @type { import("../typings/UserJS.d.ts").Network }
 */
const Network = {
  async req(url, method = 'GET', responseType = 'json', data = {}, useFetch = false) {
    if (isEmpty(url)) {
      throw new Error('"url" parameter is empty');
    }
    method = this.bscStr(method, false);
    responseType = this.bscStr(responseType);
    const params = {
      method,
      ...data
    };
    if (params.hermes) {
      delete params.hermes;
    }
    if (isGM && !useFetch) {
      if (params.credentials) {
        Object.assign(params, {
          anonymous: false
        });
        if (Object.is(params.credentials, 'omit')) {
          Object.assign(params, {
            anonymous: true
          });
        }
        delete params.credentials;
      }
    } else if (params.onprogress) {
      delete params.onprogress;
    }
    return await new Promise((resolve, reject) => {
      if (isGM && !useFetch) {
        Network.xmlRequest({
          url,
          responseType,
          ...params,
          onerror: reject,
          onload: (r_1) => {
            if (r_1.status !== 200) reject(new Error(`${r_1.status} ${url}`));
            if (responseType.match(/basic/)) resolve(r_1);
            resolve(r_1.response);
          }
        });
      } else {
        fetch(url, params)
          .then((response_1) => {
            if (!response_1.ok) reject(response_1);
            const check = (str_2 = 'text') => {
              return isFN(response_1[str_2]) ? response_1[str_2]() : response_1;
            };
            if (responseType.match(/buffer/)) {
              resolve(check('arrayBuffer'));
            } else if (responseType.match(/json/)) {
              resolve(check('json'));
            } else if (responseType.match(/text/)) {
              resolve(check('text'));
            } else if (responseType.match(/blob/)) {
              resolve(check('blob'));
            } else if (responseType.match(/formdata/)) {
              resolve(check('formData'));
            } else if (responseType.match(/clone/)) {
              resolve(check('clone'));
            } else if (responseType.match(/document/)) {
              const domParser = new DOMParser();
              const respTxt = check('text');
              if (respTxt instanceof Promise) {
                respTxt.then((txt) => {
                  const doc = domParser.parseFromString(txt, 'text/html');
                  resolve(doc);
                });
              } else {
                const doc = domParser.parseFromString(respTxt, 'text/html');
                resolve(doc);
              }
            } else {
              resolve(response_1);
            }
          })
          .catch(reject);
      }
    });
  },
  format(bytes, decimals = 2) {
    if (Number.isNaN(bytes)) return `0 ${this.sizes[0]}`;
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${this.sizes[i]}`;
  },
  sizes: ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
  async xmlRequest(details) {
    if (isGM) {
      if (isFN(GM.xmlHttpRequest)) {
        return GM.xmlHttpRequest(details);
      } else if (isFN(GM_xmlhttpRequest)) {
        return GM_xmlhttpRequest(details);
      }
    }
    return await new Promise((resolve, reject) => {
      const safe = safeSelf();
      const req = new safe.XMLHttpRequest();
      let method = 'GET';
      let url = BLANK_PAGE;
      let body;
      for (const [key, value] of Object.entries(details)) {
        if (key === 'onload') {
          req.addEventListener('load', () => {
            if (isFN(value)) {
              value(req);
            }
            resolve(req);
          });
        } else if (key === 'onerror') {
          req.addEventListener('error', (evt) => {
            if (isFN(value)) {
              value(evt);
            }
            reject(evt);
          });
        } else if (key === 'onabort') {
          req.addEventListener('abort', (evt) => {
            if (isFN(value)) {
              value(evt);
            }
            reject(evt);
          });
        } else if (key === 'onprogress') {
          req.addEventListener('progress', value);
        } else if (key === 'responseType') {
          if (value === 'buffer') {
            req.responseType = 'arraybuffer';
          } else {
            req.responseType = value;
          }
        } else if (key === 'method') {
          method = value;
        } else if (key === 'url') {
          url = value;
        } else if (key === 'body') {
          body = value;
        }
      }
      req.open(method, url);

      if (isEmpty(req.responseType)) {
        req.responseType = 'text';
      }

      if (body) {
        req.send(body);
      } else {
        req.send();
      }
    });
  },
  bscStr(str = '', lowerCase = true) {
    const txt = str[lowerCase ? 'toLowerCase' : 'toUpperCase']();
    return txt.replaceAll(/\W/g, '');
  }
};
const sleazyRedirect = () => {
  const locObj = window.top.location;
  const { hostname } = locObj;
  const gfSite = /greasyfork\.org/.test(hostname);
  if (!gfSite && cfg.sleazyredirect) {
    return;
  }
  const otherSite = gfSite ? 'sleazyfork' : 'greasyfork';
  if (!qs('span.sign-in-link')) {
    return;
  }
  if (!/scripts\/\d+/.test(locObj.href)) {
    return;
  }
  if (
    !qs('#script-info') &&
    (otherSite == 'greasyfork' || qs('div.width-constraint>section>p>a'))
  ) {
    const str = locObj.href.replace(
      /\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,
      '//$1' + otherSite + '.org'
    );
    info(`Redirecting to "${str}"`);
    if (isFN(locObj.assign)) {
      locObj.assign(str);
    } else {
      locObj.href = str;
    }
  }
};
// #region Container
/**
 * @type { import("../typings/UserJS.d.ts").Container }
 */
class Container {
  webpage;
  host;
  domain;
  ready;
  injected;
  shadowRoot;
  supported;
  frame;
  cache;
  userjsCache;
  root;
  unsaved;
  isBlacklisted;
  rebuild;
  counters;
  opacityMin;
  opacityMax;
  constructor(url) {
    this.remove = this.remove.bind(this);
    this.refresh = this.refresh.bind(this);
    this.updateCounter = this.updateCounter.bind(this);
    this.updateCounters = this.updateCounters.bind(this);
    this.showError = this.showError.bind(this);
    this.webpage = strToURL(url);
    this.host = this.getHost(this.webpage.host);
    this.domain = this.getDomain(this.webpage.host);
    this.ready = false;
    this.injected = false;
    this.shadowRoot = undefined;
    this.supported = isFN(make('main-userjs').attachShadow);
    this.frame = this.supported
      ? make('main-userjs', '', {
          dataset: {
            insertedBy: $info.script.name,
            role: 'primary-container'
          }
        })
      : make('iframe', 'mujs-iframe', {
          dataset: {
            insertedBy: $info.script.name,
            role: 'primary-iframe'
          },
          loading: 'lazy',
          src: BLANK_PAGE,
          style:
            'position: fixed;bottom: 1rem;right: 1rem;height: 525px;width: 90%;margin: 0px 1rem;z-index: 100000000000000020 !important;',
          onload: (iFrame) => {
            /**
             * @type { HTMLIFrameElement }
             */
            const target = iFrame.target;
            if (!target.contentDocument) {
              return;
            }
            this.shadowRoot = target.contentDocument.documentElement;
            this.ready = true;
            dom.cl.add([this.shadowRoot, target.contentDocument.body], 'mujs-iframe');
          }
        });
    if (this.supported) {
      this.shadowRoot = this.frame.attachShadow({
        mode: 'open',
        clonable: false,
        delegatesfocus: false
      });
      this.ready = true;
    }
    this.cache = memory.maps.container;
    this.userjsCache = memory.maps.userjs;
    this.root = make('mujs-root');
    this.unsaved = false;
    this.isBlacklisted = false;
    this.rebuild = false;
    this.counters = {
      total: 0
    };
    this.opacityMin = '0.15';
    this.opacityMax = '1';
    this.elementsReady = this.init();

    const Timeout = class {
      constructor() {
        this.ids = [];
      }

      set(delay, reason) {
        return new Promise((resolve, reject) => {
          const id = setTimeout(() => {
            Object.is(reason, null) || Object.is(reason, undefined) ? resolve() : reject(reason);
            this.clear(id);
          }, delay);
          this.ids.push(id);
        });
      }

      clear(...ids) {
        this.ids = this.ids.filter((id) => {
          if (ids.includes(id)) {
            clearTimeout(id);
            return false;
          }
          return true;
        });
      }
    };
    this.timeouts = {
      frame: new Timeout(),
      mouse: new Timeout()
    };

    window.addEventListener('beforeunload', this.remove);
  }
  /**
   * @param { Function } callback
   * @param { Document } doc
   */
  async inject(callback, doc) {
    if (this.checkBlacklist(this.host)) {
      err(`Blacklisted "${this.host}"`);
      this.remove();
      return;
    }
    if (!this.shadowRoot) {
      return;
    }
    if (doc === null) {
      return;
    }
    while (this.ready === false) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    try {
      doc.documentElement.appendChild(this.frame);
      if (this.injected) {
        return;
      }
      this.shadowRoot.append(this.root);
      if (isNull(this.loadCSS(main_css, 'primary-stylesheet'))) {
        throw new Error('Failed to initialize script!', { cause: 'loadCSS' });
      }
      this.injected = true;
      this.initFn();
      if (this.elementsReady && isFN(callback)) {
        callback.call(this, this.shadowRoot);
      }
    } catch (ex) {
      err(ex);
      this.remove();
    }
  }
  initFn() {
    this.renderTheme(cfg.theme);

    for (const engine of cfg.engines) {
      if (engine.enabled) {
        const counter = make('count-frame', '', {
          dataset: {
            counter: engine.name
          },
          title: engine.query ? decodeURIComponent(engine.query) : engine.url,
          textContent: '0'
        });
        this.countframe.append(counter);
      }
      this.counters[engine.name] = 0;
    }

    const cfgpage = this.cfgpage;
    const table = this.table;
    const exBtn = this.exBtn;
    const supported = this.supported;
    const frame = this.frame;
    const refresh = this.refresh;
    const cache = this.cache;
    const cHost = this.host;
    const urlBar = this.urlBar;

    class Tabs {
      /**
       * @param { HTMLElement } root
       */
      constructor(root) {
        this.Tab = new Map();
        this.blank = BLANK_PAGE;
        this.protocal = 'mujs:';
        this.protoReg = new RegExp(`${this.protocal}(.+)`);
        this.el = {
          add: make('mujs-addtab', '', {
            textContent: '+',
            dataset: {
              command: 'new-tab'
            }
          }),
          head: make('mujs-tabs'),
          root
        };
        this.el.head.append(this.el.add);
        this.el.root.append(this.el.head);
        this.custom = () => {};
      }
      hasTab(...params) {
        for (const p of params) {
          if (!this.Tab.has(p)) {
            return false;
          }
          const content = normalizeTarget(this.Tab.get(p)).filter((t) => p === t.dataset.host);
          if (isBlank(content)) {
            return false;
          }
        }
        return true;
      }
      storeTab(host) {
        const h = host ?? this.blank;
        if (!this.Tab.has(h)) {
          this.Tab.set(h, new Set());
        }
        return this.Tab.get(h);
      }
      cache(host, ...tabs) {
        const h = host ?? this.blank;
        const tabCache = this.storeTab(h);
        for (const t of normalizeTarget(tabs)) {
          if (tabCache.has(t)) {
            continue;
          }
          tabCache.add(t);
        }
        this.Tab.set(h, tabCache);
        return tabCache;
      }
      intFN(host) {
        if (!host.startsWith(this.protocal)) {
          return;
        }
        const type = host.match(this.protoReg)[1];
        if (type === 'settings') {
          dom.cl.remove([cfgpage, exBtn], 'hidden');
          dom.cl.add(table, 'hidden');
          if (!supported) {
            dom.attr(frame, 'style', 'height: 100%;');
          }
        }
      }
      active(tab, build = true) {
        for (const t of normalizeTarget(tab, false)) {
          dom.cl.add([cfgpage, exBtn], 'hidden');
          dom.cl.remove(table, 'hidden');
          dom.cl.remove(qsA('mujs-tab', this.el.head), 'active');
          dom.cl.add(t, 'active');
          if (!build) {
            continue;
          }
          const host = t.dataset.host ?? this.blank;
          if (host === this.blank) {
            refresh();
          } else if (host.startsWith(this.protocal)) {
            this.intFN(host);
          } else {
            this.custom(host);
            // MUList.host = host;
            // MUList.build();
          }
        }
      }
      /** @param { HTMLElement } tab */
      close(tab) {
        for (const t of normalizeTarget(tab, false)) {
          const host = t.dataset.host;
          if (cache.has(host)) {
            cache.delete(host);
          }
          if (dom.cl.has(t, 'active')) {
            refresh();
          }
          const sibling = t.previousElementSibling ?? t.nextElementSibling;
          if (sibling) {
            if (sibling.dataset.command !== 'new-tab') {
              this.active(sibling);
            }
          }
          if (this.Tab.has(host)) {
            this.Tab.delete(host);
          }
          t.remove();
        }
      }
      create(host = undefined) {
        if (typeof host === 'string') {
          if (host.startsWith(this.protocal) && this.hasTab(host)) {
            this.active(this.Tab.get(host));
            return;
          }
          const content = normalizeTarget(this.storeTab(host)).filter(
            (t) => host === t.dataset.host
          );
          if (!isEmpty(content)) {
            return;
          }
        }
        const tab = make('mujs-tab', '', {
          dataset: {
            command: 'switch-tab'
          },
          style: `order: ${this.el.head.childElementCount};`
        });
        const tabClose = make('mu-js', '', {
          dataset: {
            command: 'close-tab'
          },
          title: i18n$('close'),
          textContent: 'X'
        });
        const tabHost = make('mujs-host');
        tab.append(tabHost, tabClose);
        this.el.head.append(tab);
        this.active(tab, false);
        this.cache(host, tab);
        if (isNull(host)) {
          refresh();
          urlBar.placeholder = i18n$('newTab');
          tab.dataset.host = this.blank;
          tabHost.title = i18n$('newTab');
          tabHost.textContent = i18n$('newTab');
        } else if (host.startsWith(this.protocal)) {
          const type = host.match(this.protoReg)[1];
          tab.dataset.host = host || cHost;
          tabHost.title = type || tab.dataset.host;
          tabHost.textContent = tabHost.title;
          this.intFN(host);
        } else {
          tab.dataset.host = host || cHost;
          tabHost.title = host || cHost;
          tabHost.textContent = tabHost.title;
        }
        return tab;
      }
    }
    this.tab = new Tabs(this.toolbar);
    this.tab.create(this.host);

    const tabbody = this.tabbody;
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
    const comparer = (idx, asc) => (a, b) =>
      ((v1, v2) =>
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2))(
        getCellValue(asc ? a : b, idx),
        getCellValue(asc ? b : a, idx)
      );
    for (const th of this.tabhead.rows[0].cells) {
      if (dom.text(th) === i18n$('install')) continue;
      dom.cl.add(th, 'mujs-pointer');
      ael(th, 'click', () => {
        /** [Stack Overflow Reference](https://stackoverflow.com/questions/14267781/sorting-html-table-with-javascript/53880407#53880407) */
        Array.from(tabbody.querySelectorAll('tr'))
          .sort(comparer(Array.from(th.parentNode.children).indexOf(th), (this.asc = !this.asc)))
          .forEach((tr) => tabbody.appendChild(tr));
      });
    }
  }
  init() {
    try {
      // #region Elements
      this.mainframe = make('mu-js', 'mainframe', {
        style: `opacity: ${this.opacityMin};`
      });
      this.countframe = make('mujs-column');
      this.mainbtn = make('count-frame', 'mainbtn', {
        textContent: '0'
      });
      this.urlBar = make('input', 'mujs-url-bar', {
        autocomplete: 'off',
        spellcheck: false,
        type: 'text',
        placeholder: i18n$('search_placeholder')
      });
      this.rateContainer = make('mujs-column', 'rate-container');
      this.footer = make('mujs-row', 'mujs-footer');
      this.tabbody = make('tbody');
      this.promptElem = make('mujs-row', 'mujs-prompt');
      this.toolbar = make('mujs-toolbar');
      this.table = make('table');
      this.tabhead = make('thead');
      this.header = make('mujs-header');
      this.tbody = make('mujs-body');
      this.cfgpage = make('mujs-row', 'mujs-cfg hidden');
      this.btnframe = make('mujs-column', 'btn-frame');
      this.exBtn = make('mujs-column', 'mujs-sty-flex hidden');
      this.fsearch = make('mujs-btn', 'hidden');
      this.exportCFG = make('mujs-btn', 'mujs-export', {
        textContent: i18n$('export_config'),
        dataset: {
          command: 'export-cfg'
        }
      });
      this.importCFG = make('mujs-btn', 'mujs-import', {
        textContent: i18n$('import_config'),
        dataset: {
          command: 'import-cfg'
        }
      });
      this.exportTheme = make('mujs-btn', 'mujs-export', {
        textContent: i18n$('export_theme'),
        dataset: {
          command: 'export-theme'
        }
      });
      this.importTheme = make('mujs-btn', 'mujs-import', {
        textContent: i18n$('import_theme'),
        dataset: {
          command: 'import-theme'
        }
      });
      this.btnHandles = make('mujs-column', 'btn-handles');
      this.btnHide = make('mujs-btn', 'hide-list', {
        title: i18n$('min'),
        innerHTML: iconSVG.load('hide'),
        dataset: {
          command: 'hide-list'
        }
      });
      this.btnfullscreen = make('mujs-btn', 'fullscreen', {
        title: i18n$('max'),
        innerHTML: iconSVG.load('fullscreen'),
        dataset: {
          command: 'fullscreen'
        }
      });
      this.main = make('mujs-main', 'hidden');
      this.urlContainer = make('mujs-url');
      this.closebtn = make('mujs-btn', 'close', {
        title: i18n$('close'),
        innerHTML: iconSVG.load('close'),
        dataset: {
          command: 'close'
        }
      });
      this.btncfg = make('mujs-btn', 'settings hidden', {
        title: 'Settings',
        innerHTML: iconSVG.load('cfg'),
        dataset: {
          command: 'settings'
        }
      });
      this.btnhome = make('mujs-btn', 'github hidden', {
        title: `GitHub (v${
          $info.script.version.includes('.') || $info.script.version.includes('Book')
            ? $info.script.version
            : $info.script.version.slice(0, 5)
        })`,
        innerHTML: iconSVG.load('gh'),
        dataset: {
          command: 'open-tab',
          webpage: $info.script.namespace
        }
      });
      this.btnissue = make('mujs-btn', 'issue hidden', {
        innerHTML: iconSVG.load('issue'),
        title: i18n$('issue'),
        dataset: {
          command: 'open-tab',
          webpage: $info.script.bugs ?? 'https://github.com/magicoflolis/Userscript-Plus/issues'
        }
      });
      this.btngreasy = make('mujs-btn', 'greasy hidden', {
        title: 'Greasy Fork',
        innerHTML: iconSVG.load('gf'),
        dataset: {
          command: 'open-tab',
          webpage: 'https://greasyfork.org/scripts/421603'
        }
      });
      this.btnnav = make('mujs-btn', 'nav', {
        title: 'Navigation',
        innerHTML: iconSVG.load('nav'),
        dataset: {
          command: 'navigation'
        }
      });
      const makeTHead = (rows) => {
        const tr = make('tr');
        for (const r of normalizeTarget(rows)) {
          const tparent = make('th', r.class ?? '', r);
          tr.append(tparent);
        }
        this.tabhead.append(tr);
        this.table.append(this.tabhead, this.tabbody);
      };
      makeTHead([
        {
          class: 'mujs-header-name',
          textContent: i18n$('name')
        },
        {
          textContent: i18n$('createdby')
        },
        {
          textContent: i18n$('daily_installs')
        },
        {
          textContent: i18n$('updated')
        },
        {
          textContent: i18n$('install')
        }
      ]);
      // #endregion

      this.btnHandles.append(this.btnHide, this.btnfullscreen, this.closebtn);
      this.btnframe.append(this.btnhome, this.btngreasy, this.btnissue, this.btncfg, this.btnnav);
      this.toolbar.append(this.btnHandles);
      this.urlContainer.append(this.urlBar);
      this.header.append(this.urlContainer, this.rateContainer, this.countframe, this.btnframe);
      this.tbody.append(this.table, this.cfgpage);
      this.main.append(this.toolbar, this.header, this.tbody, this.footer, this.promptElem);
      this.mainframe.append(this.mainbtn);
      this.exBtn.append(this.importCFG, this.importTheme, this.exportCFG, this.exportTheme);
      this.header.append(this.exBtn);
      this.root.append(this.mainframe, this.main);

      return true;
    } catch (ex) {
      err(ex);
    }
    return false;
  }
  remove() {
    memory.store.clear();
    if (this.frame) {
      this.frame.remove();
    }
  }
  async save() {
    this.unsaved = false;
    await StorageSystem.setValue('Config', cfg);
    info('Saved:', cfg);
    return cfg;
  }
  /**
   * @param { string } css - CSS to inject
   * @param { string } name - Name of stylesheet
   * @return { HTMLStyleElement } Style element
   */
  loadCSS(css, name = 'CSS') {
    try {
      if (typeof name !== 'string') {
        throw new Error('"name" must be a typeof "string"', { cause: 'loadCSS' });
      }
      if (qs(`style[data-role="${name}"]`, this.root)) {
        return qs(`style[data-role="${name}"]`, this.root);
      }
      if (typeof css !== 'string') {
        throw new Error('"css" must be a typeof "string"', { cause: 'loadCSS' });
      }
      if (isBlank(css)) {
        throw new Error(`"${name}" contains empty CSS string`, { cause: 'loadCSS' });
      }
      const parent = isEmpty(this.root.shadowRoot) ? this.root : this.root.shadowRoot;
      if (isGM) {
        let sty;
        if (isFN(GM.addElement)) {
          sty = GM.addElement(parent, 'style', {
            textContent: css
          });
        } else if (isFN(GM_addElement)) {
          sty = GM_addElement(parent, 'style', {
            textContent: css
          });
        }
        if (isElem(sty)) {
          sty.dataset.insertedBy = $info.script.name;
          sty.dataset.role = name;
          return sty;
        }
      }
      const sty = make('style', '', {
        textContent: css,
        dataset: {
          insertedBy: $info.script.name,
          role: name
        }
      });
      parent.appendChild(sty);
      return sty;
    } catch (ex) {
      err(ex);
    }
    return null;
  }
  checkBlacklist(str) {
    str = str || this.host;
    let blacklisted = false;
    if (/accounts*\.google\./.test(this.webpage.host)) {
      blacklisted = true;
    }
    for (const b of normalizeTarget(cfg.blacklist)) {
      if (typeof b === 'string') {
        if (b.startsWith('userjs-')) {
          const r = /userjs-(\w+)/.exec(b)[1];
          const biList = builtinList[r];
          if (isRegExp(biList)) {
            if (!biList.test(str)) continue;
            blacklisted = true;
          } else if (isObj(biList) && biList.host === this.host) {
            blacklisted = true;
          }
        }
      } else if (isObj(b)) {
        if (!b.enabled) {
          continue;
        }
        if (b.regex === true) {
          const reg = new RegExp(b.url, b.flags);
          if (!reg.test(str)) continue;
          blacklisted = true;
        }
        if (Array.isArray(b.url)) {
          for (const c of b.url) {
            if (!str.includes(c)) continue;
            blacklisted = true;
          }
        }
        if (!str.includes(b.url)) continue;
        blacklisted = true;
      }
    }
    this.isBlacklisted = blacklisted;
    return blacklisted;
  }
  getInfo(url) {
    const webpage = strToURL(url || this.webpage);
    const host = this.getHost(webpage.host);
    const domain = this.getDomain(webpage.host);
    return {
      domain,
      host,
      webpage
    };
  }
  /**
   * @template { string } S
   * @param { S } str
   */
  getHost(str = '') {
    return str.split('.').splice(-2).join('.');
  }
  /**
   * @template { string } S
   * @param { S } str
   */
  getDomain(str = '') {
    return str.split('.').at(-2) ?? BLANK_PAGE;
  }
  renderTheme(theme) {
    theme = theme || cfg.theme;
    if (theme === DEFAULT_CONFIG.theme) {
      return;
    }
    const sty = this.root.style;
    for (const [k, v] of Object.entries(theme)) {
      const str = `--mujs-${k}`;
      const prop = sty.getPropertyValue(str);
      if (isEmpty(v)) {
        theme[k] = prop;
      }
      if (prop === v) {
        continue;
      }
      sty.removeProperty(str);
      sty.setProperty(str, v);
    }
  }
  makePrompt(txt, dataset = {}, usePrompt = true) {
    if (qs('.prompt', this.promptElem)) {
      for (const elem of qsA('.prompt', this.promptElem)) {
        if (elem.dataset.prompt) {
          elem.remove();
        }
      }
    }
    const el = make('mu-js', 'prompt', {
      dataset: {
        prompt: txt
      }
    });
    const elHead = make('mu-js', 'prompt-head', {
      innerHTML: `${iconSVG.load('refresh')} ${txt}`
    });
    el.append(elHead);
    if (usePrompt) {
      const elPrompt = make('mu-js', 'prompt-body', { dataset });
      const elYes = make('mujs-btn', 'prompt-confirm', {
        innerHTML: 'Confirm',
        dataset: {
          command: 'prompt-confirm'
        }
      });
      const elNo = make('mujs-btn', 'prompt-deny', {
        innerHTML: 'Deny',
        dataset: {
          command: 'prompt-deny'
        }
      });
      elPrompt.append(elYes, elNo);
      el.append(elPrompt);
    }
    this.promptElem.append(el);
  }
  makeError(...ex) {
    const safe = safeSelf();
    const error = make('mu-js', 'error');
    let str = '';
    for (const e of ex) {
      str += `${typeof e === 'string' ? e : `${e.cause ? `[${e.cause}] ` : ''}${e.message} ${e.stack ?? ''}`}\n`;
      if (isObj(e)) {
        if (e.notify) {
          dom.cl.add(this.mainframe, 'error');
        }
      }
    }
    error.appendChild(safe.createTextNode(str));
    this.footer.append(error);
  }
  showError(...ex) {
    err(...ex);
    this.makeError(...ex);
  }
  updateCounter(count, engine) {
    this.counters[engine.name] += count;
    this.counters.total += count;
    this.updateCounters();
  }
  updateCounters() {
    for (const [k, v] of Object.entries(this.counters)) {
      if (k === 'total') {
        continue;
      }
      if (qs(`count-frame[data-counter="${k}"]`, this.countframe)) {
        dom.text(qs(`count-frame[data-counter="${k}"]`, this.countframe), v);
      }
    }
    dom.text(this.mainbtn, this.counters.total);
  }
  refresh() {
    this.urlBar.placeholder = i18n$('newTab');
    this.counters.total = 0;
    for (const engine of cfg.engines) {
      this.counters[engine.name] = 0;
    }
    this.updateCounters();
    dom.cl.remove(qsA('tr[data-engine]', this.tabbody), 'hidden');
    dom.cl.remove(qsA('mujs-section[data-name]', this.cfgpage), 'hidden');
    dom.prop([this.tabbody, this.rateContainer, this.footer], 'innerHTML', '');
  }
}
const container = new Container();
// #endregion
// #region Primary Function
function primaryFN() {
  try {
    const {
      mainframe,
      urlBar,
      rateContainer,
      footer,
      tabbody,
      toolbar,
      tabhead,
      cfgpage,
      fsearch,
      btnfullscreen,
      main,
      btncfg,
      btnhome,
      btnissue,
      btngreasy,
      tab,
      userjsCache,
      updateCounter,
      showError
    } = container;
    const frameTimeout = container.timeouts.frame;
    const cfgMap = memory.maps.cfg;
    const rebuildCfg = () => {
      for (const engine of cfg.engines) {
        if (cfgMap.has(engine.name)) {
          const inp = cfgMap.get(engine.name);
          inp.checked = engine.enabled;
          if (engine.name === 'github') {
            const txt = cfgMap.get('github-token');
            dom.prop(txt, 'value', engine.token);
          }
        }
      }
      for (const [k, v] of Object.entries(cfg)) {
        if (typeof v === 'boolean') {
          if (cfgMap.has(k)) {
            const inp = cfgMap.get(k);
            if (inp.type === 'checkbox') {
              inp.checked = v;
            } else {
              dom.prop(inp, 'value', v);
            }
          }
        }
      }
      dom.prop(cfgMap.get('blacklist'), 'value', JSON.stringify(cfg.blacklist, null, ' '));
      dom.prop(cfgMap.get('theme'), 'value', JSON.stringify(cfg.theme, null, ' '));
      container.renderTheme(cfg.theme);
    };
    const doInstallProcess = async (installLink) => {
      const locObj = window.top.location;
      if (isFN(locObj.assign)) {
        locObj.assign(installLink.href);
      } else {
        locObj.href = installLink.href;
      }
      installLink.remove();
      await init();
    };
    // #region Main event handlers
    ael(main, 'click', async (evt) => {
      try {
        /** @type { HTMLElement } */
        const target = evt.target.closest('[data-command]');
        if (!target) {
          return;
        }
        const prmpt = /prompt-/.test(target.dataset.command);
        let dataset = target.dataset;
        let cmd = dataset.command;
        let prmptChoice = false;
        if (prmpt) {
          dataset = target.parentElement.dataset;
          cmd = dataset.command;
          prmptChoice = /confirm/.test(target.dataset.command);
          target.parentElement.parentElement.remove();
        }
        if (cmd === 'install-script' && dataset.userjs) {
          let installCode = dataset.userjs;
          if (!prmpt && dataset.userjs.endsWith('.user.css')) {
            container.makePrompt(i18n$('prmpt_css'), dataset);
            return;
          } else if (prmpt !== prmptChoice) {
            installCode = dataset.userjs.replace(/\.user\.css$/, '.user.js');
          }
          const dlBtn = make('a', '', {
            onclick(evt) {
              evt.preventDefault();
              doInstallProcess(evt.target);
            }
          });
          dlBtn.href = installCode;
          dlBtn.click();
        } else if (cmd === 'open-tab' && dataset.webpage) {
          if (isGM) {
            if (isFN(GM.openInTab)) {
              return GM.openInTab(dataset.webpage);
            } else if (isFN(GM_openInTab)) {
              return GM_openInTab(dataset.webpage, {
                active: true,
                insert: true
              });
            }
          }
          return window.open(dataset.webpage, '_blank');
        } else if (cmd === 'navigation') {
          if (dom.cl.has(btngreasy, 'hidden')) {
            dom.cl.remove([btncfg, btngreasy, btnhome, btnissue], 'hidden');
          } else {
            dom.cl.add([btncfg, btngreasy, btnhome, btnissue], 'hidden');
          }
        } else if (cmd === 'list-description') {
          const arr = [];
          const ignoreTags = new Set(['TD', 'MUJS-A', 'MU-JS']);
          for (const node of target.parentElement.childNodes) {
            if (ignoreTags.has(node.tagName)) {
              continue;
            }
            if (node.tagName === 'TEXTAREA' && isEmpty(node.value)) {
              continue;
            }
            arr.push(node);
          }
          if (target.nextElementSibling) {
            arr.push(target.nextElementSibling);
            if (target.nextElementSibling.nextElementSibling) {
              arr.push(target.nextElementSibling.nextElementSibling);
            }
          }
          if (dom.cl.has(arr[0], 'hidden')) {
            dom.cl.remove(arr, 'hidden');
          } else {
            dom.cl.add(arr, 'hidden');
          }
        } else if (cmd === 'close') {
          container.remove();
        } else if (cmd === 'show-filter') {
          dom.cl.toggle(fsearch, 'hidden');
        } else if (cmd === 'fullscreen') {
          if (dom.cl.has(btnfullscreen, 'expanded')) {
            dom.cl.remove([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsOpen'));
          } else {
            dom.cl.add([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsClose'));
          }
        } else if (cmd === 'hide-list') {
          dom.cl.add(main, 'hidden');
          dom.cl.remove(mainframe, 'hidden');
          timeoutFrame();
        } else if (cmd === 'save') {
          // if (!isNull(ghMsg)) {
          //   ghMsg = null;
          //   container.rebuild = true;
          //   dom.prop(rateContainer, 'innerHTML', '');
          // }
          container.rebuild = true;
          dom.prop(rateContainer, 'innerHTML', '');
          if (!dom.prop(target, 'disabled')) {
            container.save();
            sleazyRedirect();
            if (container.rebuild) {
              container.cache.clear();
              MUList.build();
            }
            container.unsaved = false;
            container.rebuild = false;
          }
        } else if (cmd === 'reset') {
          cfg = DEFAULT_CONFIG;
          dom.cl.remove(mainframe, 'error');
          if (qs('.error', footer)) {
            for (const elem of qsA('.error', footer)) {
              elem.remove();
            }
          }
          container.unsaved = true;
          container.rebuild = true;
          rebuildCfg();
        } else if (cmd === 'settings') {
          if (container.unsaved) {
            showError('Unsaved changes');
          }
          tab.create('mujs:settings');
          container.rebuild = false;
        } else if (cmd === 'new-tab') {
          tab.create();
        } else if (cmd === 'switch-tab') {
          tab.active(target);
        } else if (cmd === 'close-tab' && target.parentElement) {
          tab.close(target.parentElement);
        } else if (cmd === 'download-userjs') {
          if (!container.userjsCache.has(+dataset.userjs)) {
            return;
          }
          const dataUserJS = container.userjsCache.get(+dataset.userjs);
          let installCode = dataUserJS.code_url;
          if (!prmpt && dataUserJS.code_url.endsWith('.user.css')) {
            container.makePrompt('Download as UserStyle?', dataset);
            return;
          } else if (prmpt !== prmptChoice) {
            installCode = dataUserJS.code_url.replace(/\.user\.css$/, '.user.js');
          }
          const r = await dataUserJS._mujs.code.request(false, installCode);
          const txt = r.data;
          if (typeof txt !== 'string') {
            return;
          }
          const userjsName = dataset.userjsName ?? dataset.userjs;
          const userjsExt = prmpt !== prmptChoice ? '.user.js' : '.user.css';
          const makeUserJS = new Blob([txt], { type: 'text/plain' });
          const dlBtn = make('a', 'mujs_Downloader');
          dlBtn.href = URL.createObjectURL(makeUserJS);
          dlBtn.download = `${userjsName}${userjsExt}`;
          dlBtn.click();
          URL.revokeObjectURL(dlBtn.href);
          dlBtn.remove();
        } else if (cmd === 'load-userjs') {
          if (!container.userjsCache.has(+dataset.userjs)) {
            return;
          }
          const codeArea = qs('textarea', target.parentElement.parentElement);
          if (!isEmpty(codeArea.value)) {
            dom.cl.toggle(codeArea, 'hidden');
            return;
          }
          const dataUserJS = container.userjsCache.get(+dataset.userjs);
          const r = await dataUserJS._mujs.code.request();
          const txt = r.data;
          if (typeof txt !== 'string') {
            return;
          }
          const code_obj = new ParseUserJS(txt);
          codeArea.value = code_obj.get_code_block();
          dom.cl.remove(codeArea, 'hidden');
          const apTo = (name, elem, root) => {
            const n = dataUserJS._mujs.code[name];
            if (isEmpty(n)) {
              const el = make('mujs-a', '', {
                textContent: i18n$('listing_none')
              });
              elem.append(el);
              return;
            }
            dom.prop(elem, 'innerHTML', '');
            dom.cl.remove(root, 'hidden');
            for (const c of n) {
              if (typeof c === 'string' && c.startsWith('http')) {
                const el = make('mujs-a', '', {
                  textContent: c,
                  dataset: {
                    command: 'open-tab',
                    webpage: c
                  }
                });
                elem.append(el);
              } else if (isObj(c)) {
                if (name === 'resource') {
                  for (const [k, v] of Object.entries(c)) {
                    const el = make('mujs-a', '', {
                      textContent: k ?? 'ERROR'
                    });
                    if (v.startsWith('http')) {
                      el.dataset.command = 'open-tab';
                      el.dataset.webpage = v;
                    }
                    elem.append(el);
                  }
                } else {
                  const el = make('mujs-a', '', {
                    textContent: c.text
                  });
                  if (c.domain) {
                    el.dataset.command = 'open-tab';
                    el.dataset.webpage = `https://${c.text}`;
                  }
                  elem.append(el);
                }
              } else {
                const el = make('mujs-a', '', {
                  textContent: c
                });
                elem.append(el);
              }
            }
          };
          const m = qsA('mujs-column[data-el="matches"]', target.parentElement.parentElement);
          for (const e of normalizeTarget(m)) {
            apTo(e.dataset.type, qs('.mujs-grants', e), e);
          }
        } else if (/export-/.test(cmd)) {
          const str = JSON.stringify(cmd === 'export-cfg' ? cfg : cfg.theme, null, ' ');
          const bytes = new TextEncoder().encode(str);
          const blob = new Blob([bytes], { type: 'application/json;charset=utf-8' });
          const dlBtn = make('a', 'mujs-exporter', {
            href: URL.createObjectURL(blob),
            download: `Magic_Userscript_${cmd === 'export-cfg' ? 'config' : 'theme'}.json`
          });
          dlBtn.click();
          URL.revokeObjectURL(dlBtn.href);
        } else if (/import-/.test(cmd)) {
          if (qs('input', target.parentElement)) {
            qs('input', target.parentElement).click();
            return;
          }
          const inpJSON = make('input', 'hidden', {
            type: 'file',
            accept: '.json',
            onchange(evt) {
              try {
                [...evt.target.files].forEach((file) => {
                  const reader = new FileReader();
                  reader.readAsText(file);
                  reader.onload = () => {
                    const result = JSON.parse(reader.result);
                    if (result.blacklist) {
                      log(`Imported config: { ${file.name} }`, result);
                      cfg = result;
                      container.unsaved = true;
                      container.rebuild = true;
                      rebuildCfg();
                      container.save();
                      sleazyRedirect();
                      container.cache.clear();
                      MUList.build();
                      container.unsaved = false;
                      container.rebuild = false;
                    } else {
                      log(`Imported theme: { ${file.name} }`, result);
                      cfg.theme = result;
                      container.renderTheme(cfg.theme);
                    }
                    inpJSON.remove();
                  };
                  reader.onerror = () => {
                    showError(reader.error);
                    inpJSON.remove();
                  };
                });
              } catch (ex) {
                showError(ex);
                inpJSON.remove();
              }
            }
          });
          target.parentElement.append(inpJSON);
          inpJSON.click();
        }
      } catch (ex) {
        showError(ex);
      }
    });
    ael(main, 'auxclick', (evt) => {
      if (evt.button !== 1) {
        return;
      }
      /** @type { HTMLElement } */
      const target = evt.target.closest('[data-command]');
      if (!target) {
        return;
      }
      const dataset = target.dataset;
      const cmd = dataset.command;
      if (cmd === 'switch-tab' || cmd === 'close-tab') {
        tab.close(target);
      } else if (cmd === 'new-tab') {
        tab.create();
      }
    });
    if (!isMobile) {
      const fade = async (target, type) => {
        if (type === 'mouseenter') {
          frameTimeout.clear(...frameTimeout.ids);
          container.timeouts.mouse.clear(...container.timeouts.mouse.ids);
          target.style.opacity = container.opacityMax;
        } else if (type === 'mouseleave') {
          await container.timeouts.mouse.set(cfg.time);
          target.style.opacity = container.opacityMin;
        }
      };
      for (const e of ['mouseenter', 'mouseleave']) {
        ael(main, e, (evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          fade(evt.target, evt.type);
        });
      }
    }
    // #endregion
    const META_START_COMMENT = '// ==UserScript==';
    const META_END_COMMENT = '// ==/UserScript==';
                toQuery(`${engine.url}"// ==UserScript=="+${host}+ "// ==/UserScript=="+in:file+language:js&per_page=30`),
                'GET',
                'json',
                {
                  headers: {
                    Accept: 'application/vnd.github+json',
                    Authorization: `Bearer ${engine.token}`,
                    'X-GitHub-Api-Version': '2022-11-28'
                  }
                }
              )
                .then(gitFN)
                .then(() => {
                  Network.req('https://api.github.com/rate_limit', 'GET', 'json', {
                    headers: {
                      Accept: 'application/vnd.github+json',
                      Authorization: `Bearer ${engine.token}`,
                      'X-GitHub-Api-Version': '2022-11-28'
                    }
                  })
                    .then((data) => {
                      for (const [key, value] of Object.entries(data.resources.code_search)) {
                        const txt = make('mujs-row', 'rate-info', {
                          textContent: `${key.toUpperCase()}: ${value}`
                        });
                        rateContainer.append(txt);
                      }
                    })
                    .catch(showError);
                })
                .catch(showError);
            } else if (/openuserjs/gi.test(engine.name)) {
              netFN = Network.req(toQuery(`${engine.url}${host}`), 'GET', 'document')
                .then(openuserjs)
                .catch((error) => {
                  showError(`Engine: "${engine.name}"`, error);
                });
            } else {
              netFN = Network.req(toQuery(`${engine.url}/scripts/by-site/${host}.json?language=all`))
              .then(forkFN)
              .catch(showError);
            }
            if (netFN) {
              arr.push(netFN);
            }
          }

          urlBar.placeholder = i18n$('search_placeholder');
          urlBar.value = '';
          Promise.allSettled(arr).then(() => {
            tabhead.rows[0].cells[2].dispatchEvent(new MouseEvent('click'));
            tabhead.rows[0].cells[2].dispatchEvent(new MouseEvent('click'));
          });
        } catch (ex) {
          showError(ex);
        }
      }
    }
    const MUList = new List();
    // #endregion
    // #region Make Config
    const makecfg = () => {
      const makerow = (desc, type = null, nm, attrs = {}) => {
        desc = desc ?? i18n$('no_license');
        nm = nm ?? i18n$('no_license');
        const sec = make('mujs-section', '', {
          dataset: {
            name: nm
          }
        });
        const lb = make('label');
        const divDesc = make('mu-js', '', {
          textContent: desc
        });
        lb.append(divDesc);
        sec.append(lb);
        cfgpage.append(sec);
        if (isNull(type)) {
          return lb;
        }
        const inp = make('input', '', {
          type,
          dataset: {
            name: nm
          },
          ...attrs
        });
        if (!cfgMap.has(nm)) {
          cfgMap.set(nm, inp);
        }
        if (type === 'checkbox') {
          const inlab = make('mu-js', 'mujs-inlab');
          const la = make('label', '', {
            onclick() {
              inp.dispatchEvent(new MouseEvent('click'));
            }
          });
          inlab.append(inp, la);
          lb.append(inlab);
          if (nm.includes('-')) {
            return inp;
          }
          if (/(greasy|sleazy)fork|openuserjs|gi(thub|st)/gi.test(nm)) {
            for (const engine of cfg.engines) {
              if (engine.name !== nm) continue;
              inp.checked = engine.enabled;
              inp.dataset.engine = engine.name;
              ael(inp, 'change', (evt) => {
                container.unsaved = true;
                container.rebuild = true;
                engine.enabled = evt.target.checked;
              });

              if (engine.query) {
                const d = DEFAULT_CONFIG.engines.find(e => e.name === engine.name);
                const urlInp = make('input', '', {
                  type: 'text',
                  defaultValue: '',
                  value: decodeURIComponent(engine.query) ?? '',
                  placeholder: decodeURIComponent(d.query) ?? '',
                  dataset: {
                    name: nm,
                    engine: engine.name
                  },
                  onchange(evt) {
                    container.unsaved = true;
                    container.rebuild = true;
                    try {
                      engine.query = encodeURIComponent(new URL(evt.target.value).toString());
                    } catch (ex) {
                      err(ex);
                    }
                  }
                });
                sec.append(urlInp);
              }
              if (engine.name === 'github') {
                const ghToken = make('input', '', {
                  type: 'text',
                  defaultValue: '',
                  value: engine.token ?? '',
                  placeholder: 'Paste Access Token',
                  dataset: {
                    engine: 'github-token'
                  },
                  onchange(evt) {
                    container.unsaved = true;
                    container.rebuild = true;
                    engine.token = evt.target.value;
                  }
                });
                sec.append(ghToken);
                cfgMap.set('github-token', ghToken);
              }
            }

          } else {
            inp.checked = cfg[nm];
            ael(inp, 'change', (evt) => {
              container.unsaved = true;
              if (/filterlang/i.test(nm)) {
                container.rebuild = true;
              }
              cfg[nm] = evt.target.checked;
            });
          }
        } else {
          lb.append(inp);
        }
        return inp;
      };
      if (isGM) {
        makerow('Sync with GM', 'checkbox', 'cache');
      }
      makerow(i18n$('userjs_fullscreen'), 'checkbox', 'autoexpand', {
        onchange(e) {
          if (e.target.checked) {
            dom.cl.add([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsClose'));
          } else {
            dom.cl.remove([btnfullscreen, main], 'expanded');
            dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsOpen'));
          }
        }
      });
      makerow(i18n$('redirect'), 'checkbox', 'sleazyredirect');
      makerow(i18n$('filter'), 'checkbox', 'filterlang');
      makerow(i18n$('preview_code'), 'checkbox', 'codePreview');
      for (const inp of [
        makerow('Recommend author', 'checkbox', 'recommend-author'),
        makerow('Recommend scripts', 'checkbox', 'recommend-others')
      ]) {
        const nm = inp.dataset.name === 'recommend-author' ? 'author' : 'others';
        inp.checked = cfg.recommend[nm];
        ael(inp, 'change', (evt) => {
          container.unsaved = true;
          cfg.recommend[nm] = evt.target.checked;
        });
      }
      makerow('Greasy Fork', 'checkbox', 'greasyfork');
      makerow('Sleazy Fork', 'checkbox', 'sleazyfork');
      makerow('Open UserJS', 'checkbox', 'openuserjs');
      makerow('GitHub API', 'checkbox', 'github');
      // const ghAPI = cfg.engines.find((c) => c.name === 'github');
      // const ghToken = makerow('GitHub API (Token)', 'text', 'github', {
      //   defaultValue: '',
      //   value: ghAPI.token ?? '',
      //   placeholder: 'Paste Access Token',
      //   onchange(evt) {
      //     container.unsaved = true;
      //     container.rebuild = true;
      //     ghAPI.token = evt.target.value;
      //     // if (isNull(ghMsg)) {
      //     //   ghAPI.token = evt.target.value;
      //     // }
      //   }
      // });
      // ghToken.dataset.engine = 'github-token';
      // cfgMap.set('github-token', ghToken);
      makerow(`${i18n$('dtime')} (ms)`, 'number', 'time', {
        defaultValue: 10000,
        value: cfg.time,
        min: 0,
        step: 500,
        onbeforeinput(evt) {
          if (evt.target.validity.badInput) {
            dom.cl.add(evt.target, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', true);
          } else {
            dom.cl.remove(evt.target, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', false);
          }
        },
        oninput(evt) {
          container.unsaved = true;
          const t = evt.target;
          if (t.validity.badInput || (t.validity.rangeUnderflow && t.value !== '-1')) {
            dom.cl.add(t, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', true);
          } else {
            dom.cl.remove(t, 'mujs-invalid');
            dom.prop(savebtn, 'disabled', false);
            cfg.time = isEmpty(t.value) ? cfg.time : parseFloat(t.value);
          }
        }
      });
      const cbtn = make('mu-js', 'mujs-sty-flex');
      const savebtn = make('mujs-btn', 'save', {
        textContent: i18n$('save'),
        dataset: {
          command: 'save'
        },
        disabled: false
      });
      const resetbtn = make('mujs-btn', 'reset', {
        textContent: i18n$('reset'),
        dataset: {
          command: 'reset'
        }
      });
      const blacklist = make('textarea', '', {
        dataset: {
          name: 'blacklist'
        },
        rows: '10',
        autocomplete: false,
        spellcheck: false,
        wrap: 'soft',
        value: JSON.stringify(cfg.blacklist, null, ' '),
        oninput(evt) {
          let isvalid = true;
          try {
            cfg.blacklist = JSON.parse(evt.target.value);
            isvalid = true;
          } catch (ex) {
            err(ex);
            isvalid = false;
          } finally {
            if (isvalid) {
              dom.cl.remove(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', false);
            } else {
              dom.cl.add(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', true);
            }
          }
        }
      });
      const theme = make('textarea', '', {
        dataset: {
          name: 'theme'
        },
        rows: '10',
        autocomplete: false,
        spellcheck: false,
        wrap: 'soft',
        value: JSON.stringify(cfg.theme, null, ' '),
        oninput(evt) {
          let isvalid = true;
          try {
            cfg.theme = JSON.parse(evt.target.value);
            container.renderTheme(JSON.parse(evt.target.value));
            isvalid = true;
          } catch (ex) {
            err(ex);
            isvalid = false;
          } finally {
            if (isvalid) {
              dom.cl.remove(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', false);
            } else {
              dom.cl.add(evt.target, 'mujs-invalid');
              dom.prop(savebtn, 'disabled', true);
            }
          }
        }
      });
      cfgMap.set('blacklist', blacklist);
      cfgMap.set('theme', theme);
      cbtn.append(resetbtn, savebtn);
      cfgpage.append(blacklist, theme, cbtn);
    };
    // #endregion
    container.tab.custom = (host) => {
      MUList.host = host;
      MUList.build();
    };
    ael(mainframe, 'mouseenter', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.target.style.opacity = container.opacityMax;
      frameTimeout.clear(...frameTimeout.ids);
    });
    ael(mainframe, 'mouseleave', (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      evt.target.style.opacity = container.opacityMin;
      timeoutFrame();
    });
    ael(mainframe, 'click', (evt) => {
      evt.preventDefault();
      frameTimeout.clear(...frameTimeout.ids);
      dom.cl.remove(main, 'hidden');
      dom.cl.add(mainframe, 'hidden');
      if (cfg.autoexpand) {
        dom.cl.add([btnfullscreen, main], 'expanded');
        dom.prop(btnfullscreen, 'innerHTML', iconSVG.load('fsClose'));
      }
      if (dom.cl.has(mainframe, 'error')) {
        tab.create('mujs:settings');
      }
    });
    ael(urlBar, 'input', (evt) => {
      evt.preventDefault();
      if (urlBar.placeholder === i18n$('newTab')) {
        return;
      }
      /**
       * @type { string }
       */
      const val = evt.target.value;
      if (isEmpty(val)) {
        dom.cl.remove(qsA('tr[data-engine]', tabbody), 'hidden');
        dom.cl.remove(qsA('mujs-section[data-name]', cfgpage), 'hidden');
        return;
      }
      const finds = new Set();
      if (!dom.cl.has(cfgpage, 'hidden')) {
        const reg = new RegExp(val, 'gi');
        for (const elem of qsA('mujs-section[data-name]', cfgpage)) {
          if (!elem) {
            continue;
          }
          if (finds.has(elem)) {
            continue;
          }
          if (elem.dataset.name.match(reg)) {
            finds.add(elem);
          }
        }
        dom.cl.add(qsA('mujs-section[data-name]', cfgpage), 'hidden');
        dom.cl.remove([...finds], 'hidden');
        return;
      }
      /**
       * @param {RegExpMatchArray} regExp
       * @param {keyof import("../typings/types.d.ts").GSForkQuery} key
       */
      const ezQuery = (regExp, key) => {
        const q_value = val.replace(regExp, '');
        const reg = new RegExp(q_value, 'gi');
        for (const v of userjsCache.values()) {
          const elem = v._mujs.root;
          if (!elem) {
            continue;
          }
          if (finds.has(elem)) {
            continue;
          }
          let k = v[key];
          if (typeof k === 'number') {
            k = `${v[key]}`;
          }
          if (k && k.match(reg)) {
            finds.add(elem);
          }
        }
      };
      if (val.match(/^(code_url|url):/)) {
        ezQuery(/^(code_url|url):/, 'code_url');
      } else if (val.match(/^(author|users?):/)) {
        const q_value = val.replace(/^(author|users?):/, '');
        const reg = new RegExp(q_value, 'gi');
        for (const v of userjsCache.values()) {
          const elem = v._mujs.root;
          if (!elem) {
            continue;
          }
          if (finds.has(elem)) {
            continue;
          }
          if (v.users) {
            for (const user of v.users) {
              for (const value of Object.values(user)) {
                if (typeof value === 'string' && value.match(reg)) {
                  finds.add(elem);
                } else if (typeof value === 'number' && `${value}`.match(reg)) {
                  finds.add(elem);
                }
              }
            }
          }
        }
      } else if (val.match(/^(locale|i18n):/)) {
        ezQuery(/^(locale|i18n):/, 'locale');
      } else if (val.match(/^id:/)) {
        ezQuery(/^id:/, 'id');
      } else if (val.match(/^license:/)) {
        ezQuery(/^license:/, 'license');
      } else if (val.match(/^name:/)) {
        ezQuery(/^name:/, 'name');
      } else if (val.match(/^description:/)) {
        ezQuery(/^description:/, 'description');
      } else if (val.match(/^(search_engine|engine):/)) {
        const q_value = val.replace(/^(search_engine|engine):/, '');
        const reg = new RegExp(q_value, 'gi');
        for (const v of userjsCache.values()) {
          const elem = v._mujs.root;
          if (!elem) {
            continue;
          }
          if (finds.has(elem)) {
            continue;
          }
          if (v._mujs.info.engine) {
            for (const value of Object.values(v._mujs.info.engine)) {
              if (typeof value === 'string' && value.match(reg)) {
                finds.add(elem);
              }
            }
          }
        }
      } else {
        const reg = new RegExp(val, 'gi');
        for (const v of userjsCache.values()) {
          const elem = v._mujs.root;
          if (!elem) {
            continue;
          }
          if (finds.has(elem)) {
            continue;
          }
          if (v.name && v.name.match(reg)) {
            finds.add(elem);
          }
          if (v.description && v.description.match(reg)) {
            finds.add(elem);
          }
          const code_data = v._mujs.code.data;
          if (code_data) {
            const code_obj = new ParseUserJS(code_data);
            const meta = code_obj.parse_meta(code_data);
            for (const key of Object.keys(meta)) {
              if (/name|desc/i.test(key) && key.match(reg)) {
                finds.add(elem);
              }
            }
          }
        }
      }
      dom.cl.add(qsA('tr[data-engine]', tabbody), 'hidden');
      dom.cl.remove([...finds], 'hidden');
    });
    ael(urlBar, 'change', (evt) => {
      evt.preventDefault();
      const val = evt.target.value;
      if (urlBar.placeholder === i18n$('newTab') && qs('mujs-tab.active', toolbar)) {
        const tabElem = qs('mujs-tab.active', toolbar);
        const tabHost = qs('mujs-host', tabElem);
        if (val.startsWith(tab.protocal)) {
          tab.close(tabElem);
          if (tab.hasTab(val)) {
            tab.active(tab.Tab.get(val));
          } else {
            tab.create(val);
          }
          return;
        } else if (val === '*') {
          tabElem.dataset.host = val;
          tabHost.title = '<All Sites>';
          tabHost.textContent = '<All Sites>';
          MUList.host = val;
          MUList.build();
          return;
        }
        const value = container.getHost(val);
        if (container.checkBlacklist(value)) {
          showError(`Blacklisted "${value}"`);
          return;
        }
        tabElem.dataset.host = value;
        tabHost.title = value;
        tabHost.textContent = value;
        MUList.host = value;
        MUList.build();
        return;
      }
    });
    makecfg();
    MUList.build().then(timeoutFrame);
    dbg('Container', container);
  } catch (ex) {
    err(ex);
    container.remove();
  }
}
// #endregion
/**
 * @template { Function } F
 * @param { (this: F, doc: Document) => any } onDomReady
 */
const loadDOM = (onDomReady) => {
  if (!isFN(onDomReady)) {
    return;
  }
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    onDomReady.call({}, document);
  }
  document.addEventListener('DOMContentLoaded', (evt) => onDomReady.call({}, evt.target), {
    once: true
  });
};

const init = async () => {
  const stored = await StorageSystem.getValue('Config', DEFAULT_CONFIG);
  cfg = {
    ...DEFAULT_CONFIG,
    ...stored
  };
  info('Config:', cfg);
  loadDOM((doc) => {
    try {
      if (window.location === null) {
        throw new Error('"window.location" is null, reload the webpage or use a different one');
      }
      if (doc === null) {
        throw new Error('"doc" is null, reload the webpage or use a different one');
      }
      if (window.trustedTypes && window.trustedTypes.createPolicy) {
        window.trustedTypes.createPolicy('default', {
          createHTML: (string) => string
        });
      }
      sleazyRedirect();
      container.inject(primaryFN, doc);
      Command.register(i18n$('userjs_inject'), () => {
        container.inject(primaryFN, doc);
      });
      Command.register(i18n$('userjs_close'), () => {
        container.remove();
      });
    } catch (ex) {
      err(ex);
    }
  });
};
init();

})();(()=>{"use strict";if((()=>{try{return window.self!==window.top}catch(e){return!0}})())return;let e=self.userjs;if(!(document instanceof Document||document instanceof XMLDocument&&document.createElement("div")instanceof HTMLDivElement)||!1!==/^image\/|^text\/plain/.test(document.contentType||"")||self.userjs instanceof Object!=!1&&!0===e.UserJS||(e=self.userjs={UserJS:!0}),"object"!=typeof e||!e.UserJS)return;const t={ar:{createdby:"انشأ من قبل",name:"اسم",daily_installs:"التثبيت اليومي",close:"يغلق",filterA:"منقي",max:"تحقيق أقصى قدر",min:"تصغير",search:"يبحث",search_placeholder:"بحث في البرامج النصية",install:"تثبيت",issue:"إصدار جديد",version_number:"الإصدار",updated:"آخر تحديث",total_installs:"إجمالي التثبيت",ratings:"التقييمات",good:"جيد",ok:"جيد",bad:"سيء",created_date:"تم إنشاؤه",redirect:"شوكة دهنية للكبار",filter:"تصفية اللغات الأخرى",dtime:"عرض المهلة",save:"حفظ",reset:"إعادة تعيين",preview_code:"كود المعاينة",saveFile:"احفظ الملف",newTab:"علامة تبويب جديدة",applies_to:"ينطبق على",license:"الترخيص",no_license:"لا يوجد",antifeatures:"إعلانات",userjs_fullscreen:"ملء الشاشة الكاملة التلقائي",listing_none:"(لا يوجد)",export_config:"تهيئة التصدير",export_theme:"تصدير السمة",import_config:"استيراد تهيئة الاستيراد",import_theme:"استيراد النسق",code_size:"حجم الرمز",prmpt_css:"التثبيت كأسلوب المستخدم؟",userjs_inject:"حقن Userscript+",userjs_close:"إغلاق Userscript+"},de:{createdby:"Erstellt von",name:"Name",daily_installs:"Tägliche Installationen",close:"Schließen Sie",filterA:"Filter",max:"Maximieren Sie",min:"minimieren",search:"Suche",search_placeholder:"Suche nach Userscripts",install:"Installieren Sie",issue:"Neue Ausgabe",version_number:"Version",updated:"Zuletzt aktualisiert",total_installs:"Installationen insgesamt",ratings:"Bewertungen",good:"Gut",ok:"Okay",bad:"Schlecht",created_date:"Erstellt",redirect:"Greasy Fork für Erwachsene",filter:"Andere Sprachen herausfiltern",dtime:"Zeitüberschreitung anzeigen",save:"Speichern Sie",reset:"Zurücksetzen",preview_code:"Vorschau Code",saveFile:"Datei speichern",newTab:"Neue Registerkarte",applies_to:"Gilt für",license:"Lizenz",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatischer Vollbildmodus",listing_none:"(Keine)",export_config:"Konfig exportieren",export_theme:"Thema exportieren",import_config:"Konfig importieren",import_theme:"Thema importieren",code_size:"Code Größe",prmpt_css:"Als UserStyle installieren?",userjs_inject:"Userscript+ einfügen",userjs_close:"Userscript+ schließen"},en:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search for userscripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Okay",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Save File",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+"},en_GB:{createdby:"Created by",name:"Name",daily_installs:"Daily Installs",close:"Close",filterA:"Filter",max:"Maximize",min:"Minimize",search:"Search",search_placeholder:"Search scripts",install:"Install",issue:"New Issue",version_number:"Version",updated:"Last Updated",total_installs:"Total Installs",ratings:"Ratings",good:"Good",ok:"Ok",bad:"Bad",created_date:"Created",redirect:"Greasy Fork for adults",filter:"Filter out other languages",dtime:"Display Timeout",save:"Save",reset:"Reset",preview_code:"Preview Code",saveFile:"Save File",newTab:"New Tab",applies_to:"Applies to",license:"License",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Automatic Fullscreen",listing_none:"(None)",export_config:"Export Config",export_theme:"Export Theme",import_config:"Import Config",import_theme:"Import Theme",code_size:"Code Size",prmpt_css:"Install as UserStyle?",userjs_inject:"Inject Userscript+",userjs_close:"Close Userscript+"},es:{createdby:"Creado por",name:"Nombre",daily_installs:"Instalaciones diarias",close:"Ya no se muestra",filterA:"Filtro",max:"Maximizar",min:"Minimizar",search:"Busque en",search_placeholder:"Buscar userscripts",install:"Instalar",issue:"Nueva edición",version_number:"Versión",updated:"Última actualización",total_installs:"Total de instalaciones",ratings:"Clasificaciones",good:"Bueno",ok:"Ok",bad:"Malo",created_date:"Creado",redirect:"Greasy Fork para adultos",filter:"Filtrar otros idiomas",dtime:"Mostrar el tiempo de espera",save:"Guardar",reset:"Reiniciar",preview_code:"Vista previa del código",saveFile:"Guardar archivo",newTab:"Guardar archivo",applies_to:"Se aplica a",license:"Licencia",no_license:"Desconocida",antifeatures:"Características indeseables",userjs_fullscreen:"Pantalla completa automática",listing_none:"(Ninguno)",export_config:"Exportar configuración",export_theme:"Exportar tema",import_config:"Importar configuración",import_theme:"Importar tema",code_size:"Código Tamaño",prmpt_css:"¿Instalar como UserStyle?",userjs_inject:"Inyectar Userscript+",userjs_close:"Cerrar Userscript+"},fr:{createdby:"Créé par",name:"Nom",daily_installs:"Installations quotidiennes",close:"Ne plus montrer",filterA:"Filtre",max:"Maximiser",min:"Minimiser",search:"Recherche",search_placeholder:"Rechercher des userscripts",install:"Installer",issue:"Nouveau numéro",version_number:"Version",updated:"Dernière mise à jour",total_installs:"Total des installations",ratings:"Notations",good:"Bon",ok:"Ok",bad:"Mauvais",created_date:"Créé",redirect:"Greasy Fork pour les adultes",filter:"Filtrer les autres langues",dtime:"Délai d'affichage",save:"Sauvez",reset:"Réinitialiser",preview_code:"Prévisualiser le code",saveFile:"Enregistrer le fichier",newTab:"Nouvel onglet",applies_to:"S'applique à",license:"Licence",no_license:"N/A",antifeatures:"Antifeatures",userjs_fullscreen:"Plein écran automatique",listing_none:"(Aucun)",export_config:"Export Config",export_theme:"Exporter le thème",import_config:"Importer la configuration",import_theme:"Importer le thème",code_size:"Code Taille",prmpt_css:"Installer comme UserStyle ?",userjs_inject:"Injecter Userscript+",userjs_close:"Fermer Userscript+"},ja:{createdby:"によって作成された",name:"名前",daily_installs:"デイリーインストール",close:"表示されなくなりました",filterA:"フィルター",max:"最大化",min:"ミニマム",search:"検索",search_placeholder:"ユーザースクリプトの検索",install:"インストール",issue:"新刊のご案内",version_number:"バージョン",updated:"最終更新日",total_installs:"総インストール数",ratings:"レーティング",good:"グッド",ok:"良い",bad:"悪い",created_date:"作成",redirect:"大人のGreasyfork",filter:"他の言語をフィルタリングする",dtime:"表示タイムアウト",save:"拯救",reset:"リセット",preview_code:"コードのプレビュー",saveFile:"ファイルを保存",newTab:"新しいタブ",applies_to:"適用対象",license:"ライセンス",no_license:"不明",antifeatures:"アンチ機能",userjs_fullscreen:"自動フルスクリーン",listing_none:"(なし)",export_config:"エクスポート設定",export_theme:"テーマのエクスポート",import_config:"設定のインポート",import_theme:"テーマのインポート",code_size:"コード・サイズ",prmpt_css:"UserStyleとしてインストールしますか？",userjs_inject:"Userscript+ を挿入",userjs_close:"Userscript+ を閉じる"},nl:{createdby:"Gemaakt door",name:"Naam",daily_installs:"Dagelijkse Installaties",close:"Sluit",filterA:"Filter",max:"Maximaliseer",min:"Minimaliseer",search:"Zoek",search_placeholder:"Zoeken naar gebruikersscripts",install:"Installeer",issue:"Nieuw Issue",version_number:"Versie",updated:"Laatste Update",total_installs:"Totale Installaties",ratings:"Beoordeling",good:"Goed",ok:"Ok",bad:"Slecht",created_date:"Aangemaakt",redirect:"Greasy Fork voor volwassenen",filter:"Filter andere talen",dtime:"Weergave timeout",save:"Opslaan",reset:"Opnieuw instellen",preview_code:"Voorbeeldcode",saveFile:"Bestand opslaan",newTab:"Nieuw tabblad",applies_to:"Geldt voor",license:"Licentie",no_license:"N.v.t.",antifeatures:"Functies voor eigen gewin",userjs_fullscreen:"Automatisch volledig scherm",listing_none:"(Geen)",export_config:"Configuratie exporteren",export_theme:"Thema exporteren",import_config:"Configuratie importeren",import_theme:"Thema importeren",code_size:"Code Grootte",prmpt_css:"Installeren als UserStyle?",userjs_inject:"Injecteer Userscript+",userjs_close:"Sluit Userscript+"},pl:{createdby:"Stworzony przez",name:"Nazwa",daily_installs:"Codzienne instalacje",close:"Zamknij",filterA:"Filtr",max:"Maksymalizuj",min:"Minimalizuj",search:"Wyszukiwanie",search_placeholder:"Wyszukiwanie skryptów użytkownika",install:"Instalacja",issue:"Nowy numer",version_number:"Wersja",updated:"Ostatnia aktualizacja",total_installs:"Łączna liczba instalacji",ratings:"Oceny",good:"Dobry",ok:"Ok",bad:"Zły",created_date:"Utworzony",redirect:"Greasy Fork dla dorosłych",filter:"Odfiltruj inne języki",dtime:"Limit czasu wyświetlania",save:"Zapisz",reset:"Reset",preview_code:"Kod podglądu",saveFile:"Zapisz plik",newTab:"Nowa karta",applies_to:"Dotyczy",license:"Licencja",no_license:"N/A",antifeatures:"Antywzorce",userjs_fullscreen:"Automatyczny pełny ekran",listing_none:"(Brak)",export_config:"Konfiguracja eksportu",export_theme:"Motyw eksportu",import_config:"Importuj konfigurację",import_theme:"Importuj motyw",code_size:"Kod Rozmiar",prmpt_css:"Zainstalować jako UserStyle?",userjs_inject:"Wstrzyknij Userscript+",userjs_close:"Zamknij Userscript+"},ru:{createdby:"Сделано",name:"Имя",daily_installs:"Ежедневные установки",close:"Больше не показывать",filterA:"Фильтр",max:"Максимизировать",min:"Минимизировать",search:"Поиск",search_placeholder:"Поиск юзерскриптов",install:"Установите",issue:"Новый выпуск",version_number:"Версия",updated:"Последнее обновление",total_installs:"Всего установок",ratings:"Рейтинги",good:"Хорошо",ok:"Хорошо",bad:"Плохо",created_date:"Создано",redirect:"Greasy Fork для взрослых",filter:"Отфильтровать другие языки",dtime:"Тайм-аут отображения",save:"Сохранить",reset:"Перезагрузить",preview_code:"Предварительный просмотр кода",saveFile:"Сохранить файл",newTab:"Новая вкладка",applies_to:"Применяется к",license:"Лицензия",no_license:"Недоступно",antifeatures:"Нежелательная функциональность",userjs_fullscreen:"Автоматический полноэкранный режим",listing_none:"(нет)",export_config:"Экспорт конфигурации",export_theme:"Экспорт темы",import_config:"Импорт конфигурации",import_theme:"Импортировать тему",code_size:"Код Размер",prmpt_css:"Установить как UserStyle?",userjs_inject:"Вставить Userscript+",userjs_close:"Закрыть Userscript+"},zh:{createdby:"由...制作",name:"姓名",daily_installs:"日常安装",close:"不再显示",filterA:"过滤器",max:"最大化",min:"最小化",search:"搜索",search_placeholder:"搜索用户脚本",install:"安装",issue:"新问题",version_number:"版本",updated:"最后更新",total_installs:"总安装量",ratings:"评级",good:"好的",ok:"好的",bad:"不好",created_date:"创建",redirect:"大人的Greasyfork",filter:"过滤掉其他语言",dtime:"显示超时",save:"拯救",reset:"重置",preview_code:"预览代码",saveFile:"保存存档",newTab:"新标签",applies_to:"适用于",license:"许可证",no_license:"暂无",antifeatures:"可能不受欢迎的功能",userjs_fullscreen:"自动全屏",listing_none:"(无)",export_config:"导出配置",export_theme:"导出主题",import_config:"导入配置",import_theme:"导入主题",code_size:"代码 尺寸",prmpt_css:"安装为用户风格？",userjs_inject:"注入 Userscript+",userjs_close:"关闭 Userscript+"},zh_CN:{createdby:"由...制作",name:"姓名",daily_installs:"日常安装",close:"不再显示",filterA:"过滤器",max:"最大化",min:"最小化",search:"搜索",search_placeholder:"搜索用户脚本",install:"安装",issue:"新问题",version_number:"版本",updated:"最后更新",total_installs:"总安装量",ratings:"评级",good:"好的",ok:"好的",bad:"不好",created_date:"创建",redirect:"大人的Greasyfork",filter:"过滤掉其他语言",dtime:"显示超时",save:"拯救",reset:"重置",preview_code:"预览代码",saveFile:"保存存档",newTab:"新标签",applies_to:"适用于",license:"许可证",no_license:"暂无",antifeatures:"可能不受欢迎的功能",userjs_fullscreen:"自动全屏",listing_none:"(无)",export_config:"导出配置",export_theme:"导出主题",import_config:"导入配置",import_theme:"导入主题",code_size:"代码 尺寸",prmpt_css:"安装为用户风格？",userjs_inject:"注入 Userscript+",userjs_close:"关闭 Userscript+"},zh_TW:{createdby:"由...制作",name:"姓名",daily_installs:"日常安装",close:"不再显示",filterA:"过滤器",max:"最大化",min:"最小化",search:"搜索",search_placeholder:"搜索用户脚本",install:"安装",issue:"新问题",version_number:"版本",updated:"最后更新",total_installs:"总安装量",ratings:"评级",good:"好的",ok:"好的",bad:"不好",created_date:"创建",redirect:"大人的Greasyfork",filter:"过滤掉其他语言",dtime:"显示超时",save:"拯救",reset:"重置",preview_code:"预览代码",saveFile:"保存存档",newTab:"新标签",applies_to:"适用于",license:"许可证",no_license:"暂无",antifeatures:"可能不受欢迎的功能",userjs_fullscreen:"自动全屏",listing_none:"(无)",export_config:"导出配置",export_theme:"导出主题",import_config:"导入配置",import_theme:"导入主题",code_size:"代码 尺寸",prmpt_css:"作為使用者樣式安裝？",userjs_inject:"注入用戶腳本+",userjs_close:"關閉用戶腳本+"}},n=(...e)=>{console.error("[%cMagic Userscript+%c] %cERROR","color: rgb(29, 155, 240);","","color: rgb(249, 24, 128);",...e);for(const t of e)"object"==typeof t&&"cause"in t&&"undefined"!=typeof alert&&alert(`[Magic Userscript+] (${t.cause}) ${t.message}`)},s=(...e)=>{console.info("[%cMagic Userscript+%c] %cINF","color: rgb(29, 155, 240);","","color: rgb(0, 186, 124);",...e)},a=(...e)=>{console.log("[%cMagic Userscript+%c] %cLOG","color: rgb(29, 155, 240);","","color: rgb(219, 160, 73);",...e)};let o={};function r(){if(e.safeSelf)return e.safeSelf;const t=globalThis,n={XMLHttpRequest:t.XMLHttpRequest,createElement:t.document.createElement.bind(t.document),createElementNS:t.document.createElementNS.bind(t.document),createTextNode:t.document.createTextNode.bind(t.document),setTimeout:t.setTimeout,clearTimeout:t.clearTimeout,trustedTypes:t.trustedTypes};return e.safeSelf=n,n}const i="about:blank",l=[423001,376510,23840,40525,6456,"https://github.com/TagoDR/MangaOnlineViewer/raw/master/Manga_OnlineViewer.user.js","https://github.com/jesus2099/konami-command/raw/master/INSTALL-USER-SCRIPT.user.js","https://github.com/TagoDR/MangaOnlineViewer/raw/master/dist/Manga_OnlineViewer_Adult.user.js"],c=[478597],d={greasyfork:["pornhub.com"],sleazyfork:["pornhub.com"],openuserjs:[],github:[]},m=(()=>{if(void 0!==e.isMobile)return e.isMobile;try{const{platform:t,mobile:n}=navigator.userAgentData??{};e.isMobile=/Mobile|Tablet/.test(navigator.userAgent??"")||n||/Android|Apple/.test(t??"")}catch(t){n({cause:"getUAData",message:t.message}),e.isMobile=!1}return e.isMobile})(),u="undefined"!=typeof GM,h={local:/localhost|router|gov|(\d+\.){3}\d+/,finance:/school|pay|bank|money|cart|checkout|authorize|bill|wallet|venmo|zalo|skrill|bluesnap|coin|crypto|currancy|insurance|finance/,social:/login|join|signin|signup|sign-up|password|reset|password_reset/,unsupported:{host:"fakku.net",pathname:"/hentai/.+/read/page/.+"}},p={cache:!0,codePreview:!1,autoexpand:!1,filterlang:!1,sleazyredirect:!1,time:1e4,blacklist:["userjs-local","userjs-finance","userjs-social","userjs-unsupported"],engines:[{enabled:!0,name:"greasyfork",query:encodeURIComponent("https://greasyfork.org/scripts/by-site/{host}.json?language=all")},{enabled:!1,name:"sleazyfork",query:encodeURIComponent("https://sleazyfork.org/scripts/by-site/{host}.json?language=all")},{enabled:!1,name:"openuserjs",query:encodeURIComponent("https://openuserjs.org/?q={host}")},{enabled:!1,name:"github",token:"",query:encodeURIComponent('https://api.github.com/search/code?q="// ==UserScript=="+{host}+ "// ==/UserScript=="+in:file+language:js&per_page=30')}],theme:{"even-row":"","odd-row":"","even-err":"","odd-err":"","background-color":"","gf-color":"","sf-color":"","border-b-color":"","gf-btn-color":"","sf-btn-color":"","sf-txt-color":"","txt-color":"","chck-color":"","chck-gf":"","chck-git":"","chck-open":"",placeholder:"","position-top":"","position-bottom":"","position-left":"","position-right":"","font-family":""},recommend:{author:!0,others:!0}};const f=new class{constructor(){this.cache=[];const e=navigator.languages??[];for(const t of e){const e=t.split("-")[0];-1===this.cache.indexOf(e)&&this.cache.push(e)}const t=navigator.language.split("-")[0]??"en";this.cache.includes(t)||this.cache.push(t)}toDate(e=""){return new Intl.DateTimeFormat(navigator.language).format(new Date(e))}toNumber(e){return new Intl.NumberFormat(navigator.language).format(e)}i18n$(...e){const n=navigator.language.split("-")[0]??"en",s=t[o.language]??t[n],a=[];for(const t of e)a.push(s[t]);return 1!==a.length?a:a[0]}},{i18n$:b}=f,g=(e,t)=>{try{return(t||document).querySelector(e)}catch(e){n(e)}return null},j=(e,t)=>{try{return(t||document).querySelectorAll(e)}catch(e){n(e)}return[]},y=e=>Object.prototype.toString.call(e),v=e=>{const t=window.location??i;try{return y(e=e??t).includes("URL")?e:new URL(e)}catch(e){n({cause:"strToURL",message:e.message})}return t},w=e=>y(e).includes("Element"),x=e=>y(e).includes("Object"),_=e=>y(e).includes("Function"),k=e=>Object.is(e,null)||Object.is(e,void 0),C=e=>"string"==typeof e&&Object.is(e.trim(),"")||(e instanceof Set||e instanceof Map)&&Object.is(e.size,0)||Array.isArray(e)&&Object.is(e.length,0)||x(e)&&Object.is(Object.keys(e).length,0),M=e=>k(e)||C(e),L=(e,t=!0,n)=>Object.is(e,null)||Object.is(e,void 0)?[]:Array.isArray(e)?e:"string"==typeof e?t?Array.from((n||document).querySelectorAll(e)):[e]:w(e)?[e]:Array.from(e),z=(e,t,s,a={})=>{try{for(const n of L(e))n&&(m&&"click"===t?n.addEventListener("touchstart",s,a):n.addEventListener(t,s,a))}catch(e){n(e)}},T=(e,t={})=>{if(!e)return e;for(const n in t)if("object"==typeof t[n])T(e[n],t[n]);else if(_(t[n])){if(/^on/.test(n)){e[n]=t[n];continue}z(e,n,t[n])}else"class"===n?e.className=t[n]:e[n]=t[n];return e},S=(e,t,s)=>{let a;try{a=r().createElement(e),M(t)||("string"==typeof t?a.className=t:x(t)&&T(a,t)),M(s)||("string"==typeof s?a.textContent=s:x(s)&&T(a,s))}catch(e){n(e)}return a},E=(()=>{if(u){if(x(GM.info))return GM.info;if(x(GM_info))return GM_info}return{script:{icon:"",name:"Magic Userscript+",namespace:"https://github.com/magicoflolis/Userscript-Plus",updateURL:"https://github.com/magicoflolis/Userscript-Plus/releases",version:"Bookmarklet",bugs:"https://github.com/magicoflolis/Userscript-Plus/issues"}}})(),O={attr(e,t,n=void 0){for(const s of L(e)){if(void 0===n)return s.getAttribute(t);null===n?s.removeAttribute(t):s.setAttribute(t,n)}},prop(e,t,n=void 0){for(const s of L(e)){if(void 0===n)return s[t];s[t]=n}},text(e,t){const n=L(e);if(void 0===t)return 0!==n.length?n[0].textContent:void 0;for(const e of n)e.textContent=t},cl:{add(e,t){if(Array.isArray(t))for(const n of L(e))n.classList.add(...t);else for(const n of L(e))n.classList.add(t)},remove(e,t){if(Array.isArray(t))for(const n of L(e))n.classList.remove(...t);else for(const n of L(e))n.classList.remove(t)},toggle(e,t,n){let s;for(const a of L(e))s=a.classList.toggle(t,n);return s},has(e,t){for(const n of L(e))if(n.classList.contains(t))return!0;return!1}}};const A=new class{constructor(){this.store=new Map,this.maps={},this.create("cfg","container","userjs")}create(...e){const t=[];for(const n of e){if(this.store.has(n))return this.store.get(n);const e=new Map;this.store.set(n,e),this.maps[n]=e,t.push(this.store.get(n))}return t.length>=2?t:t[0]}},H={cfg:{viewBox:"0 0 24 24",html:'<g><path fill-rule="evenodd" clip-rule="evenodd" d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z" fill="currentColor"></path></g>'},close:{viewBox:"0 0 24 24",html:'<g><path d="M4.70718 2.58574C4.31666 2.19522 3.68349 2.19522 3.29297 2.58574L2.58586 3.29285C2.19534 3.68337 2.19534 4.31654 2.58586 4.70706L9.87877 12L2.5859 19.2928C2.19537 19.6834 2.19537 20.3165 2.5859 20.7071L3.293 21.4142C3.68353 21.8047 4.31669 21.8047 4.70722 21.4142L12.0001 14.1213L19.293 21.4142C19.6835 21.8047 20.3167 21.8047 20.7072 21.4142L21.4143 20.7071C21.8048 20.3165 21.8048 19.6834 21.4143 19.2928L14.1214 12L21.4143 4.70706C21.8048 4.31654 21.8048 3.68337 21.4143 3.29285L20.7072 2.58574C20.3167 2.19522 19.6835 2.19522 19.293 2.58574L12.0001 9.87865L4.70718 2.58574Z" fill="currentColor"></path></g>'},filter:{viewBox:"0 0 24 24",html:'<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M4.22657 2C2.50087 2 1.58526 4.03892 2.73175 5.32873L8.99972 12.3802V19C8.99972 19.3788 9.21373 19.725 9.55251 19.8944L13.5525 21.8944C13.8625 22.0494 14.2306 22.0329 14.5255 21.8507C14.8203 21.6684 14.9997 21.3466 14.9997 21V12.3802L21.2677 5.32873C22.4142 4.03893 21.4986 2 19.7729 2H4.22657Z" fill="currentColor"/></g>'},fsClose:{viewBox:"0 0 24 24",html:'<g><path d="M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H7.5C6.94772 1.5 6.5 1.94772 6.5 2.5V6.5H2.5C1.94772 6.5 1.5 6.94772 1.5 7.5V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H7Z" fill="currentColor"></path> <path d="M17 9.5C15.6193 9.5 14.5 8.38071 14.5 7V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H16.5C17.0523 1.5 17.5 1.94772 17.5 2.5V6.5H21.5C22.0523 6.5 22.5 6.94772 22.5 7.5V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H17Z" fill="currentColor"></path> <path d="M17 14.5C15.6193 14.5 14.5 15.6193 14.5 17V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H16.5C17.0523 22.5 17.5 22.0523 17.5 21.5V17.5H21.5C22.0523 17.5 22.5 17.0523 22.5 16.5V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H17Z" fill="currentColor"></path> <path d="M9.5 17C9.5 15.6193 8.38071 14.5 7 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V16.5C1.5 17.0523 1.94772 17.5 2.5 17.5H6.5V21.5C6.5 22.0523 6.94772 22.5 7.5 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V17Z" fill="currentColor"></path></g>'},fsOpen:{viewBox:"0 0 24 24",html:'<g><path d="M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H3.5C4.05228 9.5 4.5 9.05228 4.5 8.5V4.5H8.5C9.05228 4.5 9.5 4.05228 9.5 3.5V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H4Z" fill="currentColor"></path> <path d="M20 1.5C21.3807 1.5 22.5 2.61929 22.5 4V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H20.5C19.9477 9.5 19.5 9.05228 19.5 8.5V4.5H15.5C14.9477 4.5 14.5 4.05228 14.5 3.5V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H20Z" fill="currentColor"></path> <path d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H20.5C19.9477 14.5 19.5 14.9477 19.5 15.5V19.5H15.5C14.9477 19.5 14.5 19.9477 14.5 20.5V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H20Z" fill="currentColor"></path> <path d="M1.5 20C1.5 21.3807 2.61929 22.5 4 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V20.5C9.5 19.9477 9.05228 19.5 8.5 19.5H4.5V15.5C4.5 14.9477 4.05228 14.5 3.5 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V20Z" fill="currentColor"></path></g>'},fullscreen:{viewBox:"0 0 96 96",html:'<g><path d="M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z"/><path d="M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z"/><path d="M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z"/><path d="M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"/></g>'},gf:{viewBox:"0 0 510.4 510.4",html:'<g><path d="M505.2,80c-6.4-6.4-16-6.4-22.4,0l-89.6,89.6c-1.6,1.6-6.4,3.2-12.8,1.6c-4.8-1.6-9.6-3.2-14.4-6.4L468.4,62.4 c6.4-6.4,6.4-16,0-22.4c-6.4-6.4-16-6.4-22.4,0L343.6,142.4c-3.2-4.8-4.8-9.6-4.8-12.8c-1.6-6.4-1.6-11.2,1.6-12.8L430,27.2 c6.4-6.4,6.4-16,0-22.4c-6.4-6.4-16-6.4-22.4,0L290.8,121.6c-16,16-20.8,40-14.4,62.4l-264,256c-16,16-16,43.2,0,59.2 c6.4,6.4,16,11.2,27.2,11.2c11.2,0,22.4-4.8,30.4-12.8L319.6,232c8,3.2,16,4.8,24,4.8c16,0,32-6.4,44.8-17.6l116.8-116.8 C511.6,96,511.6,86.4,505.2,80z M46,475.2c-3.2,3.2-9.6,3.2-14.4,0c-3.2-3.2-3.2-9.6,1.6-12.8l257.6-249.6c0,0,1.6,1.6,1.6,3.2 L46,475.2z M316.4,192c-14.4-14.4-16-35.2-4.8-48c4.8,11.2,11.2,22.4,20.8,32c9.6,9.6,20.8,16,32,20.8 C351.6,208,329.2,206.4,316.4,192z"/></g>'},gh:{viewBox:"0 0 16 16",html:'<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},hide:{viewBox:"0 0 24 24",html:'<g> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5L21 10.5C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="currentColor"></path></g>'},install:{viewBox:"0 0 16 16",html:'<g><path d="M8.75 1.75a.75.75 0 00-1.5 0v6.59L5.3 6.24a.75.75 0 10-1.1 1.02L7.45 10.76a.78.78 0 00.038.038.748.748 0 001.063-.037l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V1.75z"/><path d="M1.75 9a.75.75 0 01.75.75v3c0 .414.336.75.75.75h9.5a.75.75 0 00.75-.75v-3a.75.75 0 011.5 0v3A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-3A.75.75 0 011.75 9z"/></g>'},issue:{viewBox:"0 0 24 24",html:'<path fill="none" stroke="#ffff" stroke-width="2" d="M23,20 C21.62,17.91 20,17 19,17 M5,17 C4,17 2.38,17.91 1,20 M19,9 C22,9 23,6 23,6 M1,6 C1,6 2,9 5,9 M19,13 L24,13 L19,13 Z M5,13 L0,13 L5,13 Z M12,23 L12,12 L12,23 L12,23 Z M12,23 C8,22.9999998 5,20.0000002 5,16 L5,9 C5,9 8,6.988 12,7 C16,7.012 19,9 19,9 C19,9 19,11.9999998 19,16 C19,20.0000002 16,23.0000002 12,23 L12,23 Z M7,8 L7,6 C7,3.24 9.24,1 12,1 C14.76,1 17,3.24 17,6 L17,8"/>'},nav:{viewBox:"0 0 24 24",html:'<g><path d="M2 5.5C2 4.94772 2.44772 4.5 3 4.5H21C21.5523 4.5 22 4.94772 22 5.5V6.5C22 7.05228 21.5523 7.5 21 7.5H3C2.44772 7.5 2 7.05228 2 6.5V5.5Z" fill="currentColor"></path> <path d="M2 11.5C2 10.9477 2.44772 10.5 3 10.5H21C21.5523 10.5 22 10.9477 22 11.5V12.5C22 13.0523 21.5523 13.5 21 13.5H3C2.44772 13.5 2 13.0523 2 12.5V11.5Z" fill="currentColor"></path><path d="M3 16.5C2.44772 16.5 2 16.9477 2 17.5V18.5C2 19.0523 2.44772 19.5 3 19.5H21C21.5523 19.5 22 19.0523 22 18.5V17.5C22 16.9477 21.5523 16.5 21 16.5H3Z" fill="currentColor"></path></g>'},plus:{viewBox:"0 0 24 24",html:'<g><path d="M13.5 3C13.5 2.44772 13.0523 2 12.5 2H11.5C10.9477 2 10.5 2.44772 10.5 3V10.5H3C2.44772 10.5 2 10.9477 2 11.5V12.5C2 13.0523 2.44772 13.5 3 13.5H10.5V21C10.5 21.5523 10.9477 22 11.5 22H12.5C13.0523 22 13.5 21.5523 13.5 21V13.5H21C21.5523 13.5 22 13.0523 22 12.5V11.5C22 10.9477 21.5523 10.5 21 10.5H13.5V3Z" fill="currentColor"/></g>'},search:{viewBox:"0 0 24 24",html:'<g><path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.5C4.75329 0.5 0.5 4.75329 0.5 10C0.5 15.2467 4.75329 19.5 10 19.5C12.082 19.5 14.0076 18.8302 15.5731 17.6944L20.2929 22.4142C20.6834 22.8047 21.3166 22.8047 21.7071 22.4142L22.4142 21.7071C22.8047 21.3166 22.8047 20.6834 22.4142 20.2929L17.6944 15.5731C18.8302 14.0076 19.5 12.082 19.5 10C19.5 4.75329 15.2467 0.5 10 0.5ZM3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10Z" fill="currentColor"/></g>'},verified:{viewBox:"0 0 56 56",fill:"currentColor",stroke:"currentColor",html:'<g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><g><path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z"/></g>'},refresh:{viewBox:"0 0 1024 1024",fill:"currentColor",html:'<path d="M981.314663 554.296783a681.276879 681.276879 0 0 1-46.986468 152.746388q-105.706098 230.734238-360.983096 242.19829a593.06288 593.06288 0 0 1-228.689008-33.853939v-1.022615l-31.808709 79.979258a55.759429 55.759429 0 0 1-20.506122 22.551352 40.043451 40.043451 0 0 1-21.04434 5.382184 51.076928 51.076928 0 0 1-19.483507-5.382184 95.210839 95.210839 0 0 1-13.347817-7.158305 52.314831 52.314831 0 0 1-5.382184-4.628679L71.671707 731.908862a57.427906 57.427906 0 0 1-7.158305-21.528737 46.932646 46.932646 0 0 1 1.022615-17.438277 35.952991 35.952991 0 0 1 7.158305-13.347816 74.435608 74.435608 0 0 1 10.279972-10.279972 60.495751 60.495751 0 0 1 11.248765-7.373593 50.431066 50.431066 0 0 1 8.18092-3.606063 6.189512 6.189512 0 0 0 3.067845-1.776121l281.003839-74.866183a91.497132 91.497132 0 0 1 35.899168-2.583448 122.337047 122.337047 0 0 1 22.174599 6.404799 21.528737 21.528737 0 0 1 12.325202 12.325202 76.157907 76.157907 0 0 1 4.628679 14.854829 47.63233 47.63233 0 0 1 0 14.370431 55.167388 55.167388 0 0 1-2.04523 10.764369 10.764368 10.764368 0 0 0-1.022615 3.606063l-32.831324 79.979258a677.50935 677.50935 0 0 0 164.264262 39.505232q77.395809 7.696523 131.809692-3.606063a358.507291 358.507291 0 0 0 101.023598-36.921784 381.27393 381.27393 0 0 0 73.951211-50.753997 352.64071 352.64071 0 0 0 48.708767-55.382676 410.391547 410.391547 0 0 0 26.910921-41.550462c3.767529-7.481236 6.673908-13.616926 8.719139-18.460892zM40.885614 449.667121a685.69027 685.69027 0 0 1 63.563595-176.427998q118.0313-212.273346 374.330913-207.160271a571.803252 571.803252 0 0 1 207.160271 39.989629l33.853939-78.956643A75.619688 75.619688 0 0 1 735.187378 9.189165a37.67529 37.67529 0 0 1 15.393047-8.234742 42.303968 42.303968 0 0 1 14.854829-0.538219 47.578509 47.578509 0 0 1 13.347817 3.606064 102.907362 102.907362 0 0 1 11.302586 6.13569 49.569917 49.569917 0 0 1 6.673909 4.628678l3.067845 3.067845 154.84544 276.913379a81.970666 81.970666 0 0 1 6.13569 22.712817 46.986468 46.986468 0 0 1-1.022615 17.438277 32.293105 32.293105 0 0 1-7.696523 13.347817 69.322533 69.322533 0 0 1-10.764369 9.741753 92.142994 92.142994 0 0 1-11.302587 6.673909l-8.18092 4.09046a7.104483 7.104483 0 0 1-3.067845 1.022615l-283.049068 67.546412a112.003254 112.003254 0 0 1-46.125319-1.022615c-11.571696-3.390776-19.160576-8.019454-22.551352-13.832214a41.173709 41.173709 0 0 1-5.382184-21.04434 97.256069 97.256069 0 0 1 1.291724-17.438277 24.381295 24.381295 0 0 1 3.067845-8.234742L600.632773 296.81309a663.730958 663.730958 0 0 0-164.102797-43.057474q-77.987849-9.203535-131.809692 0a348.227319 348.227319 0 0 0-101.292707 33.853938 368.571976 368.571976 0 0 0-75.350579 49.246986 383.31916 383.31916 0 0 0-50.269601 54.360061 408.507783 408.507783 0 0 0-28.740863 41.012244A113.025869 113.025869 0 0 0 40.885614 449.667121z m0 0" fill="#ffffff" p-id="2275"></path>'},load(e,t){const n=r().createElementNS("http://www.w3.org/2000/svg","svg");for(const[t,s]of Object.entries(H[e]))"html"!==t&&n.setAttributeNS(null,t,s);try{"string"==typeof H[e].html&&(n.innerHTML=H[e].html)}catch(e){}return t?(t.appendChild(n),n):n.outerHTML}},$={prefix:"MUJS",getItem:e=>window.localStorage.getItem(e),has(e){return!k(this.getItem(e))},setItem(e,t){window.localStorage.setItem(e,t)},remove(e){window.localStorage.removeItem(e)},async setValue(e,t){t="string"==typeof t?t:JSON.stringify(t??{}),u?_(GM.setValue)?await GM.setValue(e,t):_(GM_setValue)&&GM_setValue(e,t):this.setItem(`${this.prefix}-${e}`,t)},async getValue(e,t={}){try{if(u){let n;if(_(GM.getValue)?n=await GM.getValue(e,JSON.stringify(t)):_(GM_getValue)&&(n=GM_getValue(e,JSON.stringify(t))),!k(n))return JSON.parse(n)}return this.has(`${this.prefix}-${e}`)?JSON.parse(this.getItem(`${this.prefix}-${e}`)):t}catch(e){n(e)}}},U={cmds:new Set,register(e,t){if(u){if(_(t)){if(this.cmds.has(t))return;this.cmds.add(t)}_(GM.registerMenuCommand)?GM.registerMenuCommand(e,t):_(GM_registerMenuCommand)&&GM_registerMenuCommand(e,t)}}},N={async req(e,t="GET",n="json",s={},a=!1){if(M(e))throw new Error('"url" parameter is empty');t=this.bscStr(t,!1),n=this.bscStr(n);const o={method:t,...s};return o.hermes&&delete o.hermes,u&&!a?o.credentials&&(Object.assign(o,{anonymous:!1}),Object.is(o.credentials,"omit")&&Object.assign(o,{anonymous:!0}),delete o.credentials):o.onprogress&&delete o.onprogress,await new Promise(((t,s)=>{u&&!a?N.xmlRequest({url:e,responseType:n,...o,onerror:s,onload:a=>{200!==a.status&&s(new Error(`${a.status} ${e}`)),n.match(/basic/)&&t(a),t(a.response)}}):fetch(e,o).then((e=>{e.ok||s(e);const a=(t="text")=>_(e[t])?e[t]():e;if(n.match(/buffer/))t(a("arrayBuffer"));else if(n.match(/json/))t(a("json"));else if(n.match(/text/))t(a("text"));else if(n.match(/blob/))t(a("blob"));else if(n.match(/formdata/))t(a("formData"));else if(n.match(/clone/))t(a("clone"));else if(n.match(/document/)){const e=new DOMParser,n=a("text");if(n instanceof Promise)n.then((n=>{const s=e.parseFromString(n,"text/html");t(s)}));else{const s=e.parseFromString(n,"text/html");t(s)}}else t(e)})).catch(s)}))},format(e,t=2){if(Number.isNaN(e))return`0 ${this.sizes[0]}`;const n=t<0?0:t,s=Math.floor(Math.log(e)/Math.log(1024));return`${parseFloat((e/Math.pow(1024,s)).toFixed(n))} ${this.sizes[s]}`},sizes:["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],async xmlRequest(e){if(u){if(_(GM.xmlHttpRequest))return GM.xmlHttpRequest(e);if(_(GM_xmlhttpRequest))return GM_xmlhttpRequest(e)}return await new Promise(((t,n)=>{const s=new(r().XMLHttpRequest);let a,o="GET",l=i;for(const[r,i]of Object.entries(e))"onload"===r?s.addEventListener("load",(()=>{_(i)&&i(s),t(s)})):"onerror"===r?s.addEventListener("error",(e=>{_(i)&&i(e),n(e)})):"onabort"===r?s.addEventListener("abort",(e=>{_(i)&&i(e),n(e)})):"onprogress"===r?s.addEventListener("progress",i):"responseType"===r?s.responseType="buffer"===i?"arraybuffer":i:"method"===r?o=i:"url"===r?l=i:"body"===r&&(a=i);s.open(o,l),M(s.responseType)&&(s.responseType="text"),a?s.send(a):s.send()}))},bscStr:(e="",t=!0)=>e[t?"toLowerCase":"toUpperCase"]().replaceAll(/\W/g,"")},R=()=>{const e=window.top.location,{hostname:t}=e,n=/greasyfork\.org/.test(t);if(!n&&o.sleazyredirect)return;const a=n?"sleazyfork":"greasyfork";if(g("span.sign-in-link")&&/scripts\/\d+/.test(e.href)&&!g("#script-info")&&("greasyfork"==a||g("div.width-constraint>section>p>a"))){const t=e.href.replace(/\/\/([^.]+\.)?(greasyfork|sleazyfork)\.org/,"//$1"+a+".org");s(`Redirecting to "${t}"`),_(e.assign)?e.assign(t):e.href=t}};const V=new class{webpage;host;domain;ready;injected;shadowRoot;supported;frame;cache;userjsCache;root;unsaved;isBlacklisted;rebuild;counters;opacityMin;opacityMax;constructor(e){this.remove=this.remove.bind(this),this.refresh=this.refresh.bind(this),this.updateCounter=this.updateCounter.bind(this),this.updateCounters=this.updateCounters.bind(this),this.showError=this.showError.bind(this),this.webpage=v(e),this.host=this.getHost(this.webpage.host),this.domain=this.getDomain(this.webpage.host),this.ready=!1,this.injected=!1,this.shadowRoot=void 0,this.supported=_(S("main-userjs").attachShadow),this.frame=this.supported?S("main-userjs","",{dataset:{insertedBy:E.script.name,role:"primary-container"}}):S("iframe","mujs-iframe",{dataset:{insertedBy:E.script.name,role:"primary-iframe"},loading:"lazy",src:i,style:"position: fixed;bottom: 1rem;right: 1rem;height: 525px;width: 90%;margin: 0px 1rem;z-index: 100000000000000020 !important;",onload:e=>{const t=e.target;t.contentDocument&&(this.shadowRoot=t.contentDocument.documentElement,this.ready=!0,O.cl.add([this.shadowRoot,t.contentDocument.body],"mujs-iframe"))}}),this.supported&&(this.shadowRoot=this.frame.attachShadow({mode:"open",clonable:!1,delegatesfocus:!1}),this.ready=!0),this.cache=A.maps.container,this.userjsCache=A.maps.userjs,this.root=S("mujs-root"),this.unsaved=!1,this.isBlacklisted=!1,this.rebuild=!1,this.counters={total:0},this.opacityMin="0.15",this.opacityMax="1",this.elementsReady=this.init();const t=class{constructor(){this.ids=[]}set(e,t){return new Promise(((n,s)=>{const a=setTimeout((()=>{Object.is(t,null)||Object.is(t,void 0)?n():s(t),this.clear(a)}),e);this.ids.push(a)}))}clear(...e){this.ids=this.ids.filter((t=>!e.includes(t)||(clearTimeout(t),!1)))}};this.timeouts={frame:new t,mouse:new t},window.addEventListener("beforeunload",this.remove)}async inject(e,t){if(this.checkBlacklist(this.host))return n(`Blacklisted "${this.host}"`),void this.remove();if(this.shadowRoot&&null!==t){for(;!1===this.ready;)await new Promise((e=>requestAnimationFrame(e)));try{if(t.documentElement.appendChild(this.frame),this.injected)return;if(this.shadowRoot.append(this.root),k(this.loadCSS('mujs-root {\n  --mujs-even-row: hsl(222, 14%, 22%);\n  --mujs-odd-row: hsl(222, 14%, 11%);\n  --mujs-even-err: hsl(0, 100%, 22%);\n  --mujs-odd-err: hsl(0, 100%, 11%);\n  --mujs-background-color: hsl(222, 14%, 33%);\n  --mujs-gf-color: hsl(204, 100%, 40%);\n  --mujs-sf-color: hsl(12, 86%, 50%);\n  --mujs-border-b-color: hsla(0, 0%, 0%, 0);\n  --mujs-gf-btn-color: hsl(211, 87%, 56%);\n  --mujs-sf-btn-color: hsl(12, 86%, 50%);\n  --mujs-sf-txt-color: hsl(12, 79%, 55%);\n  --mujs-txt-color: hsl(0, 0%, 100%);\n  --mujs-chck-color: hsla(0, 0%, 100%, 0.568);\n  --mujs-chck-gf: hsla(197, 100%, 50%, 0.568);\n  --mujs-chck-git: hsla(213, 13%, 16%, 0.568);\n  --mujs-chck-open: hsla(12, 86%, 50%, 0.568);\n  --mujs-placeholder: hsl(81, 56%, 54%);\n  --mujs-position-top: unset;\n  --mujs-position-bottom: 1em;\n  --mujs-position-left: unset;\n  --mujs-position-right: 1em;\n  --mujs-font-family: Arial, Helvetica, sans-serif;\n  font-family: var(--mujs-font-family, Arial, Helvetica, sans-serif);\n  text-rendering: optimizeLegibility;\n  word-break: normal;\n  font-size: 14px;\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n\nmujs-root * {\n  scrollbar-color: var(--mujs-txt-color, hsl(0, 0%, 100%)) hsl(224, 14%, 21%);\n  scrollbar-width: thin;\n}\n@supports not (scrollbar-width: thin) {\n  mujs-root * ::-webkit-scrollbar {\n    width: 1.4vw;\n    height: 3.3vh;\n  }\n  mujs-root * ::-webkit-scrollbar-track {\n    background-color: hsl(224, 14%, 21%);\n    border-radius: 16px;\n    margin-top: 3px;\n    margin-bottom: 3px;\n    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);\n  }\n  mujs-root * ::-webkit-scrollbar-thumb {\n    border-radius: 16px;\n    background-color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n    background-image: -webkit-linear-gradient(45deg, hsla(0, 0%, 100%, 0.2) 25%, transparent 25%, transparent 50%, hsla(0, 0%, 100%, 0.2) 50%, hsla(0, 0%, 100%, 0.2) 75%, transparent 75%, transparent);\n  }\n  mujs-root * ::-webkit-scrollbar-thumb:hover {\n    background: var(--mujs-txt-color, hsl(0, 0%, 100%));\n  }\n}\n\nmu-js {\n  line-height: normal;\n}\n\nmujs-section > label,\n.mujs-homepag e,\ntd.mujs-list,\n.install {\n  font-size: 16px;\n}\n\n.install,\n.mujs-homepage {\n  font-weight: 700;\n}\n\nmujs-section > label,\ntd.mujs-list {\n  font-weight: 500;\n}\n\n.mujs-sty-flex > mujs-btn {\n  margin: auto;\n}\n\n.mujs-invalid {\n  border-radius: 8px !important;\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-color: hsl(0, 100%, 50%) !important;\n}\n\nmujs-tabs,\nmujs-column,\nmujs-row,\n.mujs-sty-flex {\n  display: flex;\n}\n\nmujs-column,\nmujs-row {\n  gap: 0.5em;\n}\n\n@media screen and (max-width: 800px) {\n  mujs-column {\n    flex-flow: row wrap;\n  }\n}\nmujs-column count-frame[data-counter=greasyfork] {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\nmujs-column count-frame[data-counter=sleazyfork] {\n  background: var(--mujs-sf-color, hsl(12, 86%, 50%));\n}\nmujs-column count-frame[data-counter=github] {\n  background: hsl(213, 13%, 16%);\n}\nmujs-column count-frame[data-counter=openuserjs] {\n  background: hsla(12, 86%, 50%, 0.568);\n}\n\nmujs-row {\n  flex-flow: column wrap;\n}\n\nmu-js {\n  cursor: default;\n}\n\n.hidden {\n  display: none !important;\n  z-index: -1 !important;\n}\n\nmujs-main {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n  background: var(--mujs-background-color, hsl(222, 14%, 33%)) !important;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 16px;\n}\n@media screen and (max-height: 720px) {\n  mujs-main:not(.webext-page) {\n    height: 100% !important;\n    bottom: 0rem !important;\n    right: 0rem !important;\n    margin: 0rem !important;\n  }\n}\nmujs-main.expanded {\n  height: 100% !important;\n  bottom: 0rem !important;\n}\nmujs-main:not(.webext-page) {\n  position: fixed;\n  height: 492px;\n}\nmujs-main:not(.webext-page):not(.expanded) {\n  margin-left: 1rem;\n  margin-right: 1rem;\n  right: 1rem;\n  bottom: 1rem;\n}\nmujs-main:not(.hidden) {\n  z-index: 100000000000000000 !important;\n  display: flex !important;\n  flex-direction: column !important;\n}\nmujs-main > * {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n}\nmujs-main mujs-toolbar {\n  order: 0;\n  padding: 0.5em;\n  display: flex;\n  place-content: space-between;\n}\nmujs-main mujs-toolbar mujs-tabs {\n  overflow: hidden;\n  order: 0;\n}\nmujs-main mujs-toolbar mujs-column {\n  flex-flow: row nowrap;\n  order: 999999999999;\n}\nmujs-main mujs-toolbar > * {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nmujs-main mujs-tabs {\n  gap: 0.5em;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  flex-flow: row wrap;\n}\nmujs-main mujs-tabs mujs-tab {\n  padding: 0.25em;\n  min-width: 150px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  place-content: space-between;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background: transparent;\n}\nmujs-main mujs-tabs mujs-tab.active {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\nmujs-main mujs-tabs mujs-tab:not(.active):hover {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\nmujs-main mujs-tabs mujs-tab mujs-host {\n  float: left;\n  overflow: auto;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nmujs-main mujs-tabs mujs-tab mu-js {\n  float: right;\n}\nmujs-main mujs-tabs mujs-addtab {\n  order: 999999999999;\n  font-size: 20px;\n  padding: 0px 0.25em;\n}\nmujs-main mujs-tabs mujs-addtab:hover {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n}\nmujs-main mujs-tab,\nmujs-main mujs-btn,\nmujs-main input {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\nmujs-main input {\n  background: hsla(0, 0%, 0%, 0);\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-main input:not([type=checkbox]) {\n  border: transparent;\n  outline: none !important;\n}\nmujs-main textarea {\n  background: inherit;\n  overflow-y: auto;\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 10px;\n  resize: vertical;\n  outline: none;\n  font-family: monospace;\n  font-size: 14px;\n}\nmujs-main textarea:focus {\n  outline: none;\n}\nmujs-main th,\nmujs-main .mujs-cfg *:not(input[type=password], input[type=text], input[type=number]) {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\nmujs-main .mujs-footer {\n  order: 3;\n  overflow-x: hidden;\n  text-align: center;\n  border-radius: 16px;\n}\nmujs-main .mujs-footer > * {\n  min-height: 50px;\n}\nmujs-main .mujs-footer .error:nth-child(even) {\n  background: var(--mujs-even-err, hsl(0, 100%, 22%)) !important;\n}\nmujs-main .mujs-footer .error:nth-child(odd) {\n  background: var(--mujs-odd-err, hsl(0, 100%, 11%)) !important;\n}\nmujs-main .mujs-prompt {\n  align-items: center;\n  justify-content: center;\n}\nmujs-main .mujs-prompt svg,\nmujs-main .mujs-prompt img {\n  width: 14px;\n  height: 14px;\n  background: transparent;\n}\nmujs-main .mujs-prompt > .prompt {\n  position: absolute;\n  background: var(--mujs-background-color, hsl(222, 14%, 33%)) !important;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 16px;\n  text-align: center;\n  padding: 0.5em;\n  z-index: 1;\n}\nmujs-main .mujs-prompt > .prompt .prompt-head {\n  font-size: 18px;\n}\nmujs-main .mujs-prompt > .prompt .prompt-body {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 0.5em;\n  padding-top: 0.5em;\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-deny] {\n  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-deny]:hover {\n  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-confirm] {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\nmujs-main .mujs-prompt > .prompt mujs-btn[data-command=prompt-confirm]:hover {\n  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\n\n.mainframe {\n  background: transparent;\n  position: fixed;\n  bottom: var(--mujs-position-bottom, 1rem);\n  right: var(--mujs-position-right, 1rem);\n  top: var(--mujs-position-top, unset);\n  left: var(--mujs-position-left, unset);\n}\n.mainframe count-frame {\n  width: fit-content;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  height: auto;\n  padding: 14px 16px;\n}\n.mainframe.error {\n  opacity: 1 !important;\n}\n.mainframe.error count-frame {\n  background: var(--mujs-even-err, hsl(0, 100%, 22%)) !important;\n}\n.mainframe:not(.hidden) {\n  z-index: 100000000000000000 !important;\n  display: block;\n}\n\ncount-frame {\n  border-radius: 1000px;\n  margin: 0px 3px;\n  padding: 4px 6px;\n  border: 2px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));\n  font-size: 16px;\n  font-weight: 400;\n  display: inline-block;\n  text-align: center;\n  min-width: 1em;\n  background: var(--mujs-background-color, hsl(222, 14%, 33%));\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmujs-header {\n  order: 1;\n  display: flex;\n  border-bottom: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  padding-bottom: 0.5em;\n  font-size: 1em;\n  place-content: space-between;\n  height: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  gap: 1em;\n}\nmujs-header > *:not(mujs-url) {\n  height: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n}\nmujs-header mujs-url {\n  order: 0;\n  flex-grow: 1;\n}\nmujs-header mujs-url > input {\n  width: 100%;\n  height: 100%;\n  background: var(--mujs-even-row, hsl(222, 14%, 18%));\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 4px;\n}\nmujs-header .rate-container {\n  order: 1;\n}\nmujs-header .mujs-sty-flex {\n  order: 2;\n}\nmujs-header .btn-frame {\n  order: 999999999999;\n}\n\nmujs-body {\n  order: 2;\n  overflow-x: hidden;\n  padding: 0px;\n  height: 100%;\n  border: 1px solid var(--mujs-border-b-color, hsla(0, 0%, 0%, 0));\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n}\nmujs-body .mujs-ratings {\n  padding: 0 0.25em;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  border-radius: 1000px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nmujs-body mu-jsbtn {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\nmujs-body table,\nmujs-body th,\nmujs-body td {\n  border-collapse: collapse;\n}\nmujs-body table {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n}\n@media screen and (max-width: 1180px) {\n  mujs-body table thead > tr {\n    display: table-column;\n  }\n  mujs-body table .frame:not(.webext-page) {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    border-bottom: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n  }\n  mujs-body table .frame:not(.webext-page) td {\n    margin: auto;\n    border-bottom: 1px solid transparent;\n  }\n  mujs-body table .frame:not(.webext-page) td > mujs-a,\n  mujs-body table .frame:not(.webext-page) td > mu-js,\n  mujs-body table .frame:not(.webext-page) td > mujs-column {\n    text-align: center;\n    justify-content: center;\n  }\n  mujs-body table .frame:not(.webext-page) td:not(.mujs-name, .install-btn) {\n    width: 25%;\n  }\n  mujs-body table .frame:not(.webext-page) .mujs-name {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 550px) {\n  mujs-body table .frame:not(.webext-page) td {\n    margin: 1rem !important;\n  }\n  mujs-body table .frame:not(.webext-page) td:not(.mujs-name, .install-btn) {\n    width: auto !important;\n  }\n}\nmujs-body table th,\nmujs-body table td {\n  border-bottom: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-body table th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: hsla(222, 14%, 33%, 0.75);\n}\nmujs-body table th.mujs-header-name {\n  width: 50%;\n}\n@media screen and (max-width: 800px) {\n  mujs-body table th.mujs-header-name {\n    width: auto !important;\n  }\n}\nmujs-body table .frame:nth-child(even) {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;\n}\nmujs-body table .frame:nth-child(odd) {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;\n}\nmujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mujs-a {\n  color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\nmujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mu-jsbtn {\n  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n}\nmujs-body table .frame:not([data-engine=sleazyfork], [data-engine=greasyfork]) mu-jsbtn:hover {\n  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mujs-a, mujs-body table .frame[data-engine=greasyfork] mujs-a {\n  color: var(--mujs-gf-color, hsl(197, 100%, 50%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mujs-a:hover, mujs-body table .frame[data-engine=greasyfork] mujs-a:hover {\n  color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mu-jsbtn, mujs-body table .frame[data-engine=greasyfork] mu-jsbtn {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\nmujs-body table .frame[data-engine=sleazyfork] mu-jsbtn:hover, mujs-body table .frame[data-engine=greasyfork] mu-jsbtn:hover {\n  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\nmujs-body table .frame[data-good] mujs-a, mujs-body table .frame[data-author] mujs-a {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\nmujs-body table .frame[data-good] mujs-a:hover, mujs-body table .frame[data-author] mujs-a:hover {\n  color: hsl(81, 56%, 43%);\n}\nmujs-body table .frame[data-good] .mujs-list, mujs-body table .frame[data-author] .mujs-list {\n  color: hsl(0, 0%, 100%);\n}\nmujs-body table .frame[data-good] mu-jsbtn, mujs-body table .frame[data-author] mu-jsbtn {\n  color: hsl(215, 47%, 24%);\n  background: var(--mujs-placeholder, hsl(81, 56%, 54%));\n  border-color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\nmujs-body table .frame[data-good] mu-jsbtn:hover, mujs-body table .frame[data-author] mu-jsbtn:hover {\n  background: hsl(81, 56%, 65%);\n  border-color: hsl(81, 56%, 65%);\n}\nmujs-body table .frame .mujs-ratings[data-el=good] {\n  border-color: hsl(120, 50%, 40%);\n  background-color: hsla(120, 50%, 40%, 0.102);\n  color: hsl(120, 100%, 60%);\n}\nmujs-body table .frame .mujs-ratings[data-el=ok] {\n  border-color: hsl(60, 100%, 30%);\n  background-color: hsla(60, 100%, 30%, 0.102);\n  color: hsl(60, 100%, 50%);\n}\nmujs-body table .frame .mujs-ratings[data-el=bad] {\n  border-color: hsl(0, 100%, 30%);\n  background-color: hsla(0, 50%, 40%, 0.102);\n  color: hsl(0, 100%, 50%);\n}\nmujs-body table .frame svg {\n  fill: currentColor;\n}\nmujs-body table .frame svg,\nmujs-body table .frame img {\n  width: 14px;\n  height: 14px;\n  background: transparent;\n}\nmujs-body table .frame > td:not(.mujs-name) {\n  text-align: center;\n}\nmujs-body table .frame > .mujs-name > mujs-a {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\nmujs-body table .frame > .mujs-name mu-jsbtn,\nmujs-body table .frame > .mujs-name mu-js {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\nmujs-body table .frame > .mujs-name > mu-jsbtn {\n  margin: auto;\n}\nmujs-body table .frame > .mujs-name > mujs-column > mu-jsbtn {\n  padding: 0px 7px;\n}\nmujs-body table .frame > .mujs-uframe > mujs-a {\n  font-size: 16px;\n  font-weight: 500;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\nmujs-body table .frame [data-el=more-info] > mujs-row {\n  gap: 0.25em;\n}\nmujs-body table .frame [data-el=matches] {\n  gap: 0.25em;\n  max-width: 40em;\n}\nmujs-body table .frame [data-el=matches] .mujs-grants {\n  display: inline-flex;\n  flex-flow: row wrap;\n  overflow: auto;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-height: 5em;\n  gap: 0.2em;\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a {\n  display: inline;\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a:not([data-command]) {\n  cursor: default !important;\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a::after {\n  content: ", ";\n  color: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-body table .frame [data-el=matches] .mujs-grants > mujs-a:last-child::after {\n  content: "";\n}\n\n@media screen and (max-width: 1150px) {\n  .mujs-cfg {\n    margin: 0px auto 1rem auto !important;\n  }\n}\n.mujs-cfg {\n  height: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n}\n@media screen and (max-height: 720px) {\n  .mujs-cfg:not(.webext-page) {\n    height: 100%;\n    height: -moz-available;\n    height: -webkit-fill-available;\n    width: 100%;\n    width: -moz-available;\n    width: -webkit-fill-available;\n    overflow-x: auto;\n    padding: 0.5em;\n  }\n}\n.mujs-cfg mujs-section {\n  border-radius: 16px;\n  padding: 0.5em;\n}\n.mujs-cfg mujs-section:nth-child(even) {\n  background: var(--mujs-even-row, hsl(222, 14%, 18%)) !important;\n}\n.mujs-cfg mujs-section:nth-child(odd) {\n  background: var(--mujs-odd-row, hsl(222, 14%, 33%)) !important;\n}\n.mujs-cfg mujs-section input[type=text]::-webkit-input-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]::-moz-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]:-ms-input-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]::-ms-input-placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section input[type=text]::placeholder {\n  color: var(--mujs-placeholder, hsl(81, 56%, 54%));\n}\n.mujs-cfg mujs-section > label {\n  display: flex;\n  justify-content: space-between;\n}\n.mujs-cfg mujs-section > label input:not([type=checkbox]) {\n  font-size: 14px;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n.mujs-cfg mujs-section > input {\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n  margin-top: 5px;\n  border-radius: 4px;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n.mujs-cfg .mujs-inlab {\n  position: relative;\n  width: 38px;\n}\n.mujs-cfg .mujs-inlab input[type=checkbox] {\n  display: none;\n}\n.mujs-cfg .mujs-inlab input[type=checkbox]:checked + label {\n  margin-left: 0;\n  background: var(--mujs-chck-color, hsla(0, 0%, 100%, 0.568));\n}\n.mujs-cfg .mujs-inlab input[type=checkbox]:checked + label:before {\n  right: 0px;\n}\n.mujs-cfg .mujs-inlab input[type=checkbox][data-name=greasyfork]:checked + label, .mujs-cfg .mujs-inlab input[type=checkbox][data-name=sleazyfork]:checked + label {\n  background: var(--mujs-chck-gf, hsla(197, 100%, 50%, 0.568));\n}\n.mujs-cfg .mujs-inlab input[type=checkbox][data-name=openuserjs]:checked + label {\n  background: var(--mujs-chck-open, hsla(12, 86%, 50%, 0.568));\n}\n.mujs-cfg .mujs-inlab input[type=checkbox][data-name=github]:checked + label {\n  background: var(--mujs-chck-git, hsla(213, 13%, 16%, 0.568));\n}\n.mujs-cfg .mujs-inlab label {\n  padding: 0;\n  display: block;\n  overflow: hidden;\n  height: 16px;\n  border-radius: 20px;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\n.mujs-cfg .mujs-inlab label:before {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin: -2px;\n  background: var(--mujs-txt-color, hsl(0, 0%, 100%));\n  position: absolute;\n  top: 0;\n  right: 20px;\n  border-radius: 20px;\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset] {\n  background: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n  border-color: var(--mujs-sf-btn-color, hsl(12, 86%, 50%));\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=reset]:hover {\n  background: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n  border-color: var(--mujs-sf-txt-color, hsl(12, 79%, 55%));\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save] {\n  background: var(--mujs-gf-color, hsl(204, 100%, 40%));\n  border-color: var(--mujs-gf-color, hsl(204, 100%, 40%));\n}\n.mujs-cfg .mujs-sty-flex mujs-btn[data-command=save]:hover {\n  background: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n  border-color: var(--mujs-gf-btn-color, hsl(211, 87%, 56%));\n}\n.mujs-cfg:not(.webext-page) {\n  margin: 1rem 25rem;\n}\n\nmujs-a {\n  display: inline-block;\n}\n\n.mujs-name {\n  display: flex;\n  flex-flow: column wrap;\n  gap: 0.5em;\n}\n.mujs-name span {\n  font-size: 0.8em !important;\n}\n\nmujs-btn {\n  font-style: normal;\n  font-weight: 500;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  text-align: center;\n  border: 1px solid var(--mujs-txt-color, hsl(0, 0%, 100%));\n  font-size: 16px;\n  border-radius: 4px;\n  line-height: 1;\n  padding: 6px 15px;\n}\nmujs-btn svg {\n  fill: var(--mujs-txt-color, hsl(0, 0%, 100%));\n}\nmujs-btn svg,\nmujs-btn img {\n  width: 14px;\n  height: 14px;\n}\n\nmu-jsbtn {\n  font-size: 14px;\n  border-radius: 4px;\n  font-style: normal;\n  padding: 7px 15%;\n  font-weight: 400;\n  font-variant: normal;\n  line-height: normal;\n  display: block;\n  text-align: center;\n}\n\nmujs-a,\nmu-jsbtn,\n.mujs-pointer,\n.mujs-cfg mujs-section *:not(input[type=password], input[type=text], input[type=number]),\n.mainbtn,\n.mainframe,\nmujs-btn {\n  cursor: pointer !important;\n}\n',"primary-stylesheet")))throw new Error("Failed to initialize script!",{cause:"loadCSS"});this.injected=!0,this.initFn(),this.elementsReady&&_(e)&&e.call(this,this.shadowRoot)}catch(e){n(e),this.remove()}}}initFn(){this.renderTheme(o.theme);for(const e of o.engines){if(e.enabled){const t=S("count-frame","",{dataset:{counter:e.name},title:e.query?decodeURIComponent(e.query):e.url,textContent:"0"});this.countframe.append(t)}this.counters[e.name]=0}const e=this.cfgpage,t=this.table,n=this.exBtn,s=this.supported,a=this.frame,r=this.refresh,l=this.cache,c=this.host,d=this.urlBar;this.tab=new class{constructor(e){this.Tab=new Map,this.blank=i,this.protocal="mujs:",this.protoReg=new RegExp(`${this.protocal}(.+)`),this.el={add:S("mujs-addtab","",{textContent:"+",dataset:{command:"new-tab"}}),head:S("mujs-tabs"),root:e},this.el.head.append(this.el.add),this.el.root.append(this.el.head),this.custom=()=>{}}hasTab(...e){for(const t of e){if(!this.Tab.has(t))return!1;const e=L(this.Tab.get(t)).filter((e=>t===e.dataset.host));if(C(e))return!1}return!0}storeTab(e){const t=e??this.blank;return this.Tab.has(t)||this.Tab.set(t,new Set),this.Tab.get(t)}cache(e,...t){const n=e??this.blank,s=this.storeTab(n);for(const e of L(t))s.has(e)||s.add(e);return this.Tab.set(n,s),s}intFN(o){if(!o.startsWith(this.protocal))return;"settings"===o.match(this.protoReg)[1]&&(O.cl.remove([e,n],"hidden"),O.cl.add(t,"hidden"),s||O.attr(a,"style","height: 100%;"))}active(s,a=!0){for(const o of L(s,!1)){if(O.cl.add([e,n],"hidden"),O.cl.remove(t,"hidden"),O.cl.remove(j("mujs-tab",this.el.head),"active"),O.cl.add(o,"active"),!a)continue;const s=o.dataset.host??this.blank;s===this.blank?r():s.startsWith(this.protocal)?this.intFN(s):this.custom(s)}}close(e){for(const t of L(e,!1)){const e=t.dataset.host;l.has(e)&&l.delete(e),O.cl.has(t,"active")&&r();const n=t.previousElementSibling??t.nextElementSibling;n&&"new-tab"!==n.dataset.command&&this.active(n),this.Tab.has(e)&&this.Tab.delete(e),t.remove()}}create(e=void 0){if("string"==typeof e){if(e.startsWith(this.protocal)&&this.hasTab(e))return void this.active(this.Tab.get(e));const t=L(this.storeTab(e)).filter((t=>e===t.dataset.host));if(!M(t))return}const t=S("mujs-tab","",{dataset:{command:"switch-tab"},style:`order: ${this.el.head.childElementCount};`}),n=S("mu-js","",{dataset:{command:"close-tab"},title:b("close"),textContent:"X"}),s=S("mujs-host");if(t.append(s,n),this.el.head.append(t),this.active(t,!1),this.cache(e,t),k(e))r(),d.placeholder=b("newTab"),t.dataset.host=this.blank,s.title=b("newTab"),s.textContent=b("newTab");else if(e.startsWith(this.protocal)){const n=e.match(this.protoReg)[1];t.dataset.host=e||c,s.title=n||t.dataset.host,s.textContent=s.title,this.intFN(e)}else t.dataset.host=e||c,s.title=e||c,s.textContent=s.title;return t}}(this.toolbar),this.tab.create(this.host);const m=this.tabbody,u=(e,t)=>e.children[t].innerText||e.children[t].textContent;for(const e of this.tabhead.rows[0].cells)O.text(e)!==b("install")&&(O.cl.add(e,"mujs-pointer"),z(e,"click",(()=>{var t,n;Array.from(m.querySelectorAll("tr")).sort((t=Array.from(e.parentNode.children).indexOf(e),n=this.asc=!this.asc,(e,s)=>{return a=u(n?e:s,t),o=u(n?s:e,t),""===a||""===o||isNaN(a)||isNaN(o)?a.toString().localeCompare(o):a-o;var a,o})).forEach((e=>m.appendChild(e)))})))}init(){try{this.mainframe=S("mu-js","mainframe",{style:`opacity: ${this.opacityMin};`}),this.countframe=S("mujs-column"),this.mainbtn=S("count-frame","mainbtn",{textContent:"0"}),this.urlBar=S("input","mujs-url-bar",{autocomplete:"off",spellcheck:!1,type:"text",placeholder:b("search_placeholder")}),this.rateContainer=S("mujs-column","rate-container"),this.footer=S("mujs-row","mujs-footer"),this.tabbody=S("tbody"),this.promptElem=S("mujs-row","mujs-prompt"),this.toolbar=S("mujs-toolbar"),this.table=S("table"),this.tabhead=S("thead"),this.header=S("mujs-header"),this.tbody=S("mujs-body"),this.cfgpage=S("mujs-row","mujs-cfg hidden"),this.btnframe=S("mujs-column","btn-frame"),this.exBtn=S("mujs-column","mujs-sty-flex hidden"),this.fsearch=S("mujs-btn","hidden"),this.exportCFG=S("mujs-btn","mujs-export",{textContent:b("export_config"),dataset:{command:"export-cfg"}}),this.importCFG=S("mujs-btn","mujs-import",{textContent:b("import_config"),dataset:{command:"import-cfg"}}),this.exportTheme=S("mujs-btn","mujs-export",{textContent:b("export_theme"),dataset:{command:"export-theme"}}),this.importTheme=S("mujs-btn","mujs-import",{textContent:b("import_theme"),dataset:{command:"import-theme"}}),this.btnHandles=S("mujs-column","btn-handles"),this.btnHide=S("mujs-btn","hide-list",{title:b("min"),innerHTML:H.load("hide"),dataset:{command:"hide-list"}}),this.btnfullscreen=S("mujs-btn","fullscreen",{title:b("max"),innerHTML:H.load("fullscreen"),dataset:{command:"fullscreen"}}),this.main=S("mujs-main","hidden"),this.urlContainer=S("mujs-url"),this.closebtn=S("mujs-btn","close",{title:b("close"),innerHTML:H.load("close"),dataset:{command:"close"}}),this.btncfg=S("mujs-btn","settings hidden",{title:"Settings",innerHTML:H.load("cfg"),dataset:{command:"settings"}}),this.btnhome=S("mujs-btn","github hidden",{title:`GitHub (v${E.script.version.includes(".")||E.script.version.includes("Book")?E.script.version:E.script.version.slice(0,5)})`,innerHTML:H.load("gh"),dataset:{command:"open-tab",webpage:E.script.namespace}}),this.btnissue=S("mujs-btn","issue hidden",{innerHTML:H.load("issue"),title:b("issue"),dataset:{command:"open-tab",webpage:E.script.bugs??"https://github.com/magicoflolis/Userscript-Plus/issues"}}),this.btngreasy=S("mujs-btn","greasy hidden",{title:"Greasy Fork",innerHTML:H.load("gf"),dataset:{command:"open-tab",webpage:"https://greasyfork.org/scripts/421603"}}),this.btnnav=S("mujs-btn","nav",{title:"Navigation",innerHTML:H.load("nav"),dataset:{command:"navigation"}});return(e=>{const t=S("tr");for(const n of L(e)){const e=S("th",n.class??"",n);t.append(e)}this.tabhead.append(t),this.table.append(this.tabhead,this.tabbody)})([{class:"mujs-header-name",textContent:b("name")},{textContent:b("createdby")},{textContent:b("daily_installs")},{textContent:b("updated")},{textContent:b("install")}]),this.btnHandles.append(this.btnHide,this.btnfullscreen,this.closebtn),this.btnframe.append(this.btnhome,this.btngreasy,this.btnissue,this.btncfg,this.btnnav),this.toolbar.append(this.btnHandles),this.urlContainer.append(this.urlBar),this.header.append(this.urlContainer,this.rateContainer,this.countframe,this.btnframe),this.tbody.append(this.table,this.cfgpage),this.main.append(this.toolbar,this.header,this.tbody,this.footer,this.promptElem),this.mainframe.append(this.mainbtn),this.exBtn.append(this.importCFG,this.importTheme,this.exportCFG,this.exportTheme),this.header.append(this.exBtn),this.root.append(this.mainframe,this.main),!0}catch(e){n(e)}return!1}remove(){A.store.clear(),this.frame&&this.frame.remove()}async save(){return this.unsaved=!1,await $.setValue("Config",o),s("Saved:",o),o}loadCSS(e,t="CSS"){try{if("string"!=typeof t)throw new Error('"name" must be a typeof "string"',{cause:"loadCSS"});if(g(`style[data-role="${t}"]`,this.root))return g(`style[data-role="${t}"]`,this.root);if("string"!=typeof e)throw new Error('"css" must be a typeof "string"',{cause:"loadCSS"});if(C(e))throw new Error(`"${t}" contains empty CSS string`,{cause:"loadCSS"});const n=M(this.root.shadowRoot)?this.root:this.root.shadowRoot;if(u){let s;if(_(GM.addElement)?s=GM.addElement(n,"style",{textContent:e}):_(GM_addElement)&&(s=GM_addElement(n,"style",{textContent:e})),w(s))return s.dataset.insertedBy=E.script.name,s.dataset.role=t,s}const s=S("style","",{textContent:e,dataset:{insertedBy:E.script.name,role:t}});return n.appendChild(s),s}catch(e){n(e)}return null}checkBlacklist(e){e=e||this.host;let t=!1;/accounts*\.google\./.test(this.webpage.host)&&(t=!0);for(const n of L(o.blacklist))if("string"==typeof n){if(n.startsWith("userjs-")){const s=/userjs-(\w+)/.exec(n)[1],a=h[s];if(y(a).includes("RegExp")){if(!a.test(e))continue;t=!0}else x(a)&&a.host===this.host&&(t=!0)}}else if(x(n)){if(!n.enabled)continue;if(!0===n.regex){if(!new RegExp(n.url,n.flags).test(e))continue;t=!0}if(Array.isArray(n.url))for(const s of n.url)e.includes(s)&&(t=!0);if(!e.includes(n.url))continue;t=!0}return this.isBlacklisted=t,t}getInfo(e){const t=v(e||this.webpage),n=this.getHost(t.host);return{domain:this.getDomain(t.host),host:n,webpage:t}}getHost(e=""){return e.split(".").splice(-2).join(".")}getDomain(e=""){return e.split(".").at(-2)??i}renderTheme(e){if((e=e||o.theme)===p.theme)return;const t=this.root.style;for(const[n,s]of Object.entries(e)){const a=`--mujs-${n}`,o=t.getPropertyValue(a);M(s)&&(e[n]=o),o!==s&&(t.removeProperty(a),t.setProperty(a,s))}}makePrompt(e,t={},n=!0){if(g(".prompt",this.promptElem))for(const e of j(".prompt",this.promptElem))e.dataset.prompt&&e.remove();const s=S("mu-js","prompt",{dataset:{prompt:e}}),a=S("mu-js","prompt-head",{innerHTML:`${H.load("refresh")} ${e}`});if(s.append(a),n){const e=S("mu-js","prompt-body",{dataset:t}),n=S("mujs-btn","prompt-confirm",{innerHTML:"Confirm",dataset:{command:"prompt-confirm"}}),a=S("mujs-btn","prompt-deny",{innerHTML:"Deny",dataset:{command:"prompt-deny"}});e.append(n,a),s.append(e)}this.promptElem.append(s)}makeError(...e){const t=r(),n=S("mu-js","error");let s="";for(const t of e)s+=`${"string"==typeof t?t:`${t.cause?`[${t.cause}] `:""}${t.message} ${t.stack??""}`}\n`,x(t)&&t.notify&&O.cl.add(this.mainframe,"error");n.appendChild(t.createTextNode(s)),this.footer.append(n)}showError(...e){n(...e),this.makeError(...e)}updateCounter(e,t){this.counters[t.name]+=e,this.counters.total+=e,this.updateCounters()}updateCounters(){for(const[e,t]of Object.entries(this.counters))"total"!==e&&g(`count-frame[data-counter="${e}"]`,this.countframe)&&O.text(g(`count-frame[data-counter="${e}"]`,this.countframe),t);O.text(this.mainbtn,this.counters.total)}refresh(){this.urlBar.placeholder=b("newTab"),this.counters.total=0;for(const e of o.engines)this.counters[e.name]=0;this.updateCounters(),O.cl.remove(j("tr[data-engine]",this.tabbody),"hidden"),O.cl.remove(j("mujs-section[data-name]",this.cfgpage),"hidden"),O.prop([this.tabbody,this.rateContainer,this.footer],"innerHTML","")}};function I(){try{const{mainframe:e,urlBar:t,rateContainer:r,footer:h,tabbody:y,toolbar:v,tabhead:T,cfgpage:E,fsearch:$,btnfullscreen:U,main:I,btncfg:B,btnhome:F,btnissue:q,btngreasy:D,tab:Z,userjsCache:P,updateCounter:J,showError:W}=V,X=V.timeouts.frame,K=A.maps.cfg,Y=()=>{for(const e of o.engines)if(K.has(e.name)){if(K.get(e.name).checked=e.enabled,"github"===e.name){const t=K.get("github-token");O.prop(t,"value",e.token)}}for(const[e,t]of Object.entries(o))if("boolean"==typeof t&&K.has(e)){const n=K.get(e);"checkbox"===n.type?n.checked=t:O.prop(n,"value",t)}O.prop(K.get("blacklist"),"value",JSON.stringify(o.blacklist,null," ")),O.prop(K.get("theme"),"value",JSON.stringify(o.theme,null," ")),V.renderTheme(o.theme)},Q=async e=>{const t=window.top.location;_(t.assign)?t.assign(e.href):t.href=e.href,e.remove(),await G()};if(z(I,"click",(async t=>{try{const n=t.target.closest("[data-command]");if(!n)return;const s=/prompt-/.test(n.dataset.command);let i=n.dataset,l=i.command,c=!1;if(s&&(i=n.parentElement.dataset,l=i.command,c=/confirm/.test(n.dataset.command),n.parentElement.parentElement.remove()),"install-script"===l&&i.userjs){let e=i.userjs;if(!s&&i.userjs.endsWith(".user.css"))return void V.makePrompt(b("prmpt_css"),i);s!==c&&(e=i.userjs.replace(/\.user\.css$/,".user.js"));const t=S("a","",{onclick(e){e.preventDefault(),Q(e.target)}});t.href=e,t.click()}else{if("open-tab"===l&&i.webpage){if(u){if(_(GM.openInTab))return GM.openInTab(i.webpage);if(_(GM_openInTab))return GM_openInTab(i.webpage,{active:!0,insert:!0})}return window.open(i.webpage,"_blank")}if("navigation"===l)O.cl.has(D,"hidden")?O.cl.remove([B,D,F,q],"hidden"):O.cl.add([B,D,F,q],"hidden");else if("list-description"===l){const e=[],t=new Set(["TD","MUJS-A","MU-JS"]);for(const s of n.parentElement.childNodes)t.has(s.tagName)||"TEXTAREA"===s.tagName&&M(s.value)||e.push(s);n.nextElementSibling&&(e.push(n.nextElementSibling),n.nextElementSibling.nextElementSibling&&e.push(n.nextElementSibling.nextElementSibling)),O.cl.has(e[0],"hidden")?O.cl.remove(e,"hidden"):O.cl.add(e,"hidden")}else if("close"===l)V.remove();else if("show-filter"===l)O.cl.toggle($,"hidden");else if("fullscreen"===l)O.cl.has(U,"expanded")?(O.cl.remove([U,I],"expanded"),O.prop(U,"innerHTML",H.load("fsOpen"))):(O.cl.add([U,I],"expanded"),O.prop(U,"innerHTML",H.load("fsClose")));else if("hide-list"===l)O.cl.add(I,"hidden"),O.cl.remove(e,"hidden"),ie();else if("save"===l)V.rebuild=!0,O.prop(r,"innerHTML",""),O.prop(n,"disabled")||(V.save(),R(),V.rebuild&&(V.cache.clear(),de.build()),V.unsaved=!1,V.rebuild=!1);else if("reset"===l){if(o=p,O.cl.remove(e,"error"),g(".error",h))for(const e of j(".error",h))e.remove();V.unsaved=!0,V.rebuild=!0,Y()}else if("settings"===l)V.unsaved&&W("Unsaved changes"),Z.create("mujs:settings"),V.rebuild=!1;else if("new-tab"===l)Z.create();else if("switch-tab"===l)Z.active(n);else if("close-tab"===l&&n.parentElement)Z.close(n.parentElement);else if("download-userjs"===l){if(!V.userjsCache.has(+i.userjs))return;const e=V.userjsCache.get(+i.userjs);let t=e.code_url;if(!s&&e.code_url.endsWith(".user.css"))return void V.makePrompt("Download as UserStyle?",i);s!==c&&(t=e.code_url.replace(/\.user\.css$/,".user.js"));const n=(await e._mujs.code.request(!1,t)).data;if("string"!=typeof n)return;const a=i.userjsName??i.userjs,o=s!==c?".user.js":".user.css",r=new Blob([n],{type:"text/plain"}),l=S("a","mujs_Downloader");l.href=URL.createObjectURL(r),l.download=`${a}${o}`,l.click(),URL.revokeObjectURL(l.href),l.remove()}else if("load-userjs"===l){if(!V.userjsCache.has(+i.userjs))return;const e=g("textarea",n.parentElement.parentElement);if(!M(e.value))return void O.cl.toggle(e,"hidden");const t=V.userjsCache.get(+i.userjs),s=(await t._mujs.code.request()).data;if("string"!=typeof s)return;const a=new ae(s);e.value=a.get_code_block(),O.cl.remove(e,"hidden");const o=(e,n,s)=>{const a=t._mujs.code[e];if(M(a)){const e=S("mujs-a","",{textContent:b("listing_none")});n.append(e)}else{O.prop(n,"innerHTML",""),O.cl.remove(s,"hidden");for(const t of a)if("string"==typeof t&&t.startsWith("http")){const e=S("mujs-a","",{textContent:t,dataset:{command:"open-tab",webpage:t}});n.append(e)}else if(x(t))if("resource"===e)for(const[e,s]of Object.entries(t)){const t=S("mujs-a","",{textContent:e??"ERROR"});s.startsWith("http")&&(t.dataset.command="open-tab",t.dataset.webpage=s),n.append(t)}else{const e=S("mujs-a","",{textContent:t.text});t.domain&&(e.dataset.command="open-tab",e.dataset.webpage=`https://${t.text}`),n.append(e)}else{const e=S("mujs-a","",{textContent:t});n.append(e)}}},r=j('mujs-column[data-el="matches"]',n.parentElement.parentElement);for(const e of L(r))o(e.dataset.type,g(".mujs-grants",e),e)}else if(/export-/.test(l)){const e=JSON.stringify("export-cfg"===l?o:o.theme,null," "),t=(new TextEncoder).encode(e),n=new Blob([t],{type:"application/json;charset=utf-8"}),s=S("a","mujs-exporter",{href:URL.createObjectURL(n),download:`Magic_Userscript_${"export-cfg"===l?"config":"theme"}.json`});s.click(),URL.revokeObjectURL(s.href)}else if(/import-/.test(l)){if(g("input",n.parentElement))return void g("input",n.parentElement).click();const e=S("input","hidden",{type:"file",accept:".json",onchange(t){try{[...t.target.files].forEach((t=>{const n=new FileReader;n.readAsText(t),n.onload=()=>{const s=JSON.parse(n.result);s.blacklist?(a(`Imported config: { ${t.name} }`,s),o=s,V.unsaved=!0,V.rebuild=!0,Y(),V.save(),R(),V.cache.clear(),de.build(),V.unsaved=!1,V.rebuild=!1):(a(`Imported theme: { ${t.name} }`,s),o.theme=s,V.renderTheme(o.theme)),e.remove()},n.onerror=()=>{W(n.error),e.remove()}}))}catch(t){W(t),e.remove()}}});n.parentElement.append(e),e.click()}}}catch(e){W(e)}})),z(I,"auxclick",(e=>{if(1!==e.button)return;const t=e.target.closest("[data-command]");if(!t)return;const n=t.dataset.command;"switch-tab"===n||"close-tab"===n?Z.close(t):"new-tab"===n&&Z.create()})),!m){const e=async(e,t)=>{"mouseenter"===t?(X.clear(...X.ids),V.timeouts.mouse.clear(...V.timeouts.mouse.ids),e.style.opacity=V.opacityMax):"mouseleave"===t&&(await V.timeouts.mouse.set(o.time),e.style.opacity=V.opacityMin)};for(const t of["mouseenter","mouseleave"])z(I,t,(t=>{t.preventDefault(),t.stopPropagation(),e(t.target,t.type)}))}const ee="// ==UserScript==",te="// ==/UserScript==",ne=["com","net","org","de","co.uk"],se=["http://*","https://*","http://*/*","https://*/*","http*://*","http*://*/*","*","*://*","*://*/*","http*"];class ae{code;data_meta_block;data_code_block;data_meta;data_names;constructor(e){this.code=e,this.get_all()}get_all(){this.get_meta_block(),this.get_code_block(),this.parse_meta(),this.calculate_applies_to_names()}get_meta_block(){if(M(this.code))return null;if(this.data_meta_block)return this.data_meta_block;const e=this.code.indexOf(ee);if(k(e))return null;const t=this.code.indexOf(te,e);if(k(t))return null;const n=this.code.substring(e+ee.length,t);return this.data_meta_block=n,n}get_code_block(){if(M(this.code))return null;if(this.data_code_block)return this.data_code_block;const e=this.code.indexOf(ee);if(k(e))return null;const t=this.code.indexOf(te,e);if(k(t))return null;const n=this.code.substring(t+te.length,this.code.length),s=[];for(const e of n.split("\n"))M(e)||s.push(e);const a=s.join("\n");return this.data_code_block=a,a}parse_meta(){if(M(this.code))return null;if(this.data_meta)return this.data_meta;const e={},t=this.get_meta_block(),n=new Map;for(const e of t.split("\n")){const t=e.match(/\/\/\s+@([a-zA-Z:-]+)\s+(.*)/);if(k(t))continue;const s=t[1].trim(),a=t[2].trim();n.has(s)||n.set(s,[]);const o=n.get(s);o.push(a),n.set(s,o)}for(const[t,s]of n)s.length>1?e[t]=s:e[t]=s[0];return this.data_meta=e,this.data_meta}calculate_applies_to_names(){if(M(this.code))return null;if(this.data_names)return this.data_names;const e=this.parse_meta();let t=[];for(const[n,s]of Object.entries(e))/include|match/.test(n)&&(t=Array.isArray(s)?t.concat(s):t.concat([s]));if(M(t))return[];if(this.intersect(t,se))return[];const s=new Set,a=e=>{s.has(e)||s.add(e)};for(let e of t)try{const t=e;let n=[];if(e.match(/^\/(.*)\/$/))n=[e];else{let t=e.match(/^\*(https?:.*)/i);k(t)||(e=t[1]),e=e.replace(/^\*:/i,"http:").replace(/^\*\/\//i,"http://").replace(/^http\*:/i,"http:").replace(/^(https?):([^/])/i,"$1://$2"),t=e.match(/^([a-z]+:\/\/)\*\.?([a-z0-9-]+(?:.[a-z0-9-]+)+.*)/i),k(t)||(e=t[1]+t[2]),t=e.match(/^\*\.?([a-z0-9-]+\.[a-z0-9-]+.*)/i),k(t)||(e=`http://${t[1]}`),t=e.match(/^http\*(?:\/\/)?\.?((?:[a-z0-9-]+)(?:\.[a-z0-9-]+)+.*)/i),k(t)||(e=`http://${t[1]}`),t=e.match(/^([a-z]+:\/\/([a-z0-9-]+(?:\.[a-z0-9-]+)*\.))\*(.*)/),k(t)?n=[e]:t[2].match(/A([0-9]+\.){2,}z/)?(e=`${t[1]}tld${t[3]}`,n=[e.split("*")[0]]):n=[e]}for(const e of n)try{const n=new URL(e),{host:s}=n;if(k(s))a({text:t,domain:!1,tld_extra:!1});else if(!s.includes(".")&&s.includes("*"))a({text:t,domain:!1,tld_extra:!1});else if(s.endsWith(".tld"))for(let e=0;e<ne.length;e++){const t=ne[e];a({text:s.replace(/tld$/i,t),domain:!0,tld_extra:0!=e})}else s.endsWith(".")?a({text:s.slice(0,-1),domain:!0,tld_extra:!1}):a({text:s,domain:!0,tld_extra:!1})}catch(e){a({text:t,domain:!1,tld_extra:!1})}}catch(e){n(e)}const o=[...s];return this.data_names=o,this.data_names}intersect(e=[],t=[]){for(const n of e)if(t.includes(n))return!0;for(const n of t)if(e.includes(n))return!0;return!1}}const oe=(e={})=>{const t={id:0,bad_ratings:0,good_ratings:0,ok_ratings:0,daily_installs:0,total_installs:0,name:"NOT FOUND",description:"NOT FOUND",version:"0.0.0",url:i,code_url:i,created_at:Date.now(),code_updated_at:Date.now(),locale:"NOT FOUND",deleted:!1,users:[{id:0,name:"NOT FOUND",url:i}]};for(const a in t)n=e,s=a,(void 0!==Object.hasOwn?Object.hasOwn(n,s):Object.prototype.hasOwnProperty.call(n,s))||(e[a]=t[a]);var n,s;return e},re=(e="",t={})=>{if(!t.root||!t.type)return;const{root:n,type:s}=t,a=S("mu-js","mujs-list",{textContent:`${e}: `}),o=S("mu-js","mujs-grants"),r=S("mujs-column","mujs-list",{dataset:{el:"matches",type:s}});r.append(a,o),n.append(r);const i=t.list??[];if(M(i)){const e=S("mujs-a","",{textContent:b("listing_none")});return o.append(e),void O.cl.add(r,"hidden")}for(const e of i)if("string"==typeof e&&e.startsWith("http")){const t=S("mujs-a","",{textContent:e,dataset:{command:"open-tab",webpage:e}});o.append(t)}else if(x(e))if("resource"===s)for(const[t,n]of Object.entries(e)){const e=S("mujs-a","",{textContent:t??"ERROR"});n.startsWith("http")&&(e.dataset.command="open-tab",e.dataset.webpage=n),o.append(e)}else{const t=S("mujs-a","",{textContent:e.text});e.domain&&(t.dataset.command="open-tab",t.dataset.webpage=`https://${e.text}`),o.append(t)}else{const t=S("mujs-a","",{textContent:e});o.append(t)}},ie=async t=>{if(t=t??o.time,X.clear(...X.ids),!O.cl.has(e,"hidden"))return"number"!=typeof t||Number.isNaN(t)?await X.set(1e4):await X.set(V.isBlacklisted?t/2:t),V.remove(),X.clear(...X.ids)},le=(e,t)=>{if(421603===(e=oe(e)).id)return;if(c.includes(e.id)||c.includes(e.url))return;V.userjsCache.has(e.id)||V.userjsCache.set(e.id,e);const n=S("td","install-btn"),s=S("td","mujs-uframe"),a=S("td","mujs-list",{textContent:e.daily_installs}),r=S("td","mujs-list",{textContent:f.toDate(e.code_updated_at)}),i=S("td","mujs-name"),d=S("mujs-column","mujs-list hidden",{dataset:{el:"more-info"}}),m=S("mujs-column","mujs-list hidden"),u=S("mujs-row","mujs-list"),h=S("mujs-row","mujs-list"),p=S("mujs-column","mujs-list"),g=S("mujs-a","mujs-homepage",{textContent:e.name,title:e.url,dataset:{command:"open-tab",webpage:e.url}}),j=S("mu-js","mujs-list",{textContent:`${b("version_number")}: ${e.version}`}),v=S("mu-js","mujs-list",{textContent:`${b("created_date")}: ${f.toDate(e.created_at)}`}),w=S("mu-js","mujs-list",{title:e.license??b("no_license"),textContent:`${b("license")}: ${e.license??b("no_license")}`,style:"text-overflow: ellipsis; overflow: hidden; white-space: nowrap; width: fit-content; max-width: 20em;"}),x=S("mu-js","mujs-list",{textContent:`${b("total_installs")}: ${f.toNumber(e.total_installs)}`}),_=S("mu-js","mujs-list",{title:b("ratings"),textContent:`${b("ratings")}:`}),C=S("mu-js","mujs-list mujs-ratings",{title:b("good"),textContent:e.good_ratings,dataset:{el:"good"}}),M=S("mu-js","mujs-list mujs-ratings",{title:b("ok"),textContent:e.ok_ratings,dataset:{el:"ok"}}),L=S("mu-js","mujs-list mujs-ratings",{title:b("bad"),textContent:e.bad_ratings,dataset:{el:"bad"}}),z=S("mu-js","mujs-list mujs-pointer",{title:e.description,textContent:e.description,dataset:{command:"list-description"}}),T=S("mu-jsbtn","install",{innerHTML:`${H.load("install")} ${b("install")}`,title:`${b("install")} "${e.name}"`,dataset:{command:"install-script",userjs:e.code_url}}),E=S("mu-jsbtn","",{innerHTML:`${H.load("install")} ${b("saveFile")}`,dataset:{command:"download-userjs",userjs:e.id,userjsName:e.name}}),A=S("tr","frame",{dataset:{scriptId:e.id}}),$=S("textarea","code-area hidden",{dataset:{name:"code"},rows:"10",autocomplete:!1,spellcheck:!1,wrap:"soft"}),U=S("mu-jsbtn","",{innerHTML:`${H.load("search")} ${b("preview_code")}`,dataset:{command:"load-userjs",userjs:e.id}});t&&(A.dataset.engine=t,!t.includes("fork")&&o.recommend.others&&l.includes(e.url)&&(A.dataset.good="upsell"));for(const t of e.users){const e=S("mujs-a","",{innerHTML:t.name,title:t.url,dataset:{command:"open-tab",webpage:t.url}});o.recommend.author&&166061===t.id&&(A.dataset.author="upsell",O.prop(e,"innerHTML",`${t.name} ${H.load("verified")}`)),s.append(e)}t.includes("fork")&&o.recommend.others&&l.includes(e.id)&&(A.dataset.good="upsell"),n.append(T),p.append(_,C,M,L),u.append(x,p,j,v),re(b("code_size"),{list:e._mujs.code.code_size,type:"size",root:u}),h.append(w),re(b("antifeatures"),{list:e._mujs.code.antifeatures,type:"antifeatures",root:h}),re(b("applies_to"),{list:e._mujs.code.match,type:"match",root:h}),re("@grant",{list:e._mujs.code.grant,type:"grant",root:h}),re("@require",{list:e._mujs.code.meta?.require,type:"require",root:h});const N=e._mujs.code.meta?.resource;re("@resource",{list:k(N)?[]:[N],type:"resource",root:h}),d.append(u,h),m.append(E,U),i.append(g,z,d,m,$);const R=e._mujs.code.data;if(R){const e=new ae(R);$.value=e.get_code_block()}for(const e of[i,s,a,r,n])A.append(e);return y.append(A),e._mujs.root=A,A};class ce{engines;cache;intHost;constructor(e=void 0){M(e)&&(e=V.host),this.engines=o.engines,this.cache=V.cache.get(e),this.host=e}set host(e){if(this.intHost=e,!V.cache.has(e)){const t={};for(const e of o.engines)t[e.name]=[];V.cache.set(e,t)}V.checkBlacklist(e)?(W(`Blacklisted "${e}"`),ie(),this.blacklisted=!0):this.blacklisted=!1;this.engines=o.engines.filter((t=>t.enabled&&(t=>{for(const[n,s]of Object.entries(d))if(n===t&&s.includes(e))return!1;return!0})(t.name))),this.cache=V.cache.get(e)}get host(){return this.intHost}async build(){try{if(V.refresh(),this.blacklisted)return;if(M(this.engines))return V.opacityMin="0",void(e.style.opacity=V.opacityMin);s(" Building list",{cache:this.cache,engines:this.engines});const n=[],a=[],i=this.host;for(const e of this.engines){const t=this.cache[`${e.name}`];if(!M(t)){for(const e of t)w(e._mujs.root)&&y.append(e._mujs.root);J(t.length,e);continue}const s=t=>{const n={...t,_mujs:{root:{},info:{engine:e,host:i},code:{antifeatures:[],grant:[],match:[],meta:{},request:async function(e=!1,s){if(this.data)return this;this.data="";const a=await N.req(s??t.code_url,"GET","text").catch(W);if("string"!=typeof a)return this;Object.assign(this,{data:a,code_size:[N.format(a.length)]});const o=new Set,r=new Set,i=new ae(a),l=i.parse_meta(),c=i.calculate_applies_to_names();if(e)for(const e of f.cache)l[`name:${e}`]&&(Object.assign(n,{name:l[`name:${e}`]}),this.translated=!0),l[`description:${e}`]&&(Object.assign(n,{description:l[`description:${e}`]}),this.translated=!0);for(const[e,t]of Object.entries(l))if(/grant/.test(e))for(const e of L(t,!1))o.has(e)||o.add(e);else if(/antifeature/.test(e))for(const e of L(t,!1))r.has(e)||r.add(e);if("string"==typeof l.require){const e=l.require;l.require=[e]}if(l.resource){const e={};if("string"==typeof l.resource){const t=/(.+)\s+(.+)/.exec(l.resource);t&&(e[t[1].trim()]=t[2])}else for(const t of l.resource){const n=/(.+)\s+(http.+)/.exec(t);n&&(e[n[1].trim()]=n[2])}l.resource=e}return Object.assign(this,{meta:l,match:c,grant:[...o],antifeatures:[...r]}),this}}}};return n},l=t=>e.query?decodeURIComponent(e.query).replace(/\{host\}/g,i):t,c=async t=>{if(!t)return void W("Invalid data received from the server, check internet connection");const n=(Array.isArray(t)?t:Array.isArray(t.query)?t.query:[]).filter((e=>!e.deleted));if(C(n))return;const a=n.map(s),r=[],i=a.filter((e=>!(o.filterlang&&!(e=>{const t=e.locale.split("-")[0]??e.locale;return!!f.cache.includes(t)||(r.push(e),!1)})(e))));let l=i;const c=[];for(const e of r){(await e._mujs.code.request(!0)).translated&&c.push(e)}l=[...new Set([...c,...i])];for(const t of l)o.codePreview&&!t._mujs.code.data&&await t._mujs.code.request(),le(t,e.name);this.cache[e.name].push(...l),J(l.length,e)},d=async t=>{try{if(!t)return void W("Invalid data received from the server, TODO fix this");const a=t.documentElement;if(/openuserjs/gi.test(e.name))for(const t of j(".col-sm-8 .tr-link",a)){for(;k(g(".script-version",t));)await new Promise((e=>requestAnimationFrame(e)));const a=O.prop(g(".tr-link-a",t),"href").replace(new RegExp(document.location.origin,"gi"),"https://openuserjs.org"),r=oe(s({name:O.text(g(".tr-link-a",t)),description:O.text(g("p",t)),version:O.text(g(".script-version",t)),url:a,code_url:`${a.replace(/\/scripts/gi,"/install")}.user.js`,total_installs:O.text(g("td:nth-child(2) p",t)),created_at:O.attr(g("td:nth-child(4) time",t),"datetime"),code_updated_at:O.attr(g("td:nth-child(4) time",t),"datetime"),users:[{name:O.text(g(".inline-block a",t)),url:O.prop(g(".inline-block a",t),"href")}]}));o.codePreview&&!r._mujs.code.data&&await r._mujs.code.request(),le(r,e.name),n.push(r)}this.cache[e.name].push(...n),J(n.length,e)}catch(e){W(e)}},m=async t=>{try{if(C(t.items))return void W("Invalid data received from the server, TODO fix this");for(const a of t.items){const t=oe(s({name:a.name,description:M(a.repository.description)?b("no_license"):a.repository.description,url:a.html_url,code_url:a.html_url.replace(/\/blob\//g,"/raw/"),code_updated_at:a.commit||Date.now(),total_installs:a.score,users:[{name:a.repository.owner.login,url:a.repository.owner.html_url}]}));o.codePreview&&!t._mujs.code.data&&await t._mujs.code.request(),le(t,e.name),n.push(t)}this.cache[e.name].push(...n),J(t.items.length,e)}catch(e){W(e)}};let u;if(/github/gi.test(e.name)){if(M(e.token)){W(`"${e.name}" requires a token to use`);continue}u=N.req(l(`${e.url}"// ==UserScript=="+${i}+ "// ==/UserScript=="+in:file+language:js&per_page=30`),"GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then(m).then((()=>{N.req("https://api.github.com/rate_limit","GET","json",{headers:{Accept:"application/vnd.github+json",Authorization:`Bearer ${e.token}`,"X-GitHub-Api-Version":"2022-11-28"}}).then((e=>{for(const[t,n]of Object.entries(e.resources.code_search)){const e=S("mujs-row","rate-info",{textContent:`${t.toUpperCase()}: ${n}`});r.append(e)}})).catch(W)})).catch(W)}else u=/openuserjs/gi.test(e.name)?N.req(l(`${e.url}${i}`),"GET","document").then(d).catch((t=>{W(`Engine: "${e.name}"`,t)})):N.req(l(`${e.url}/scripts/by-site/${i}.json?language=all`)).then(c).catch(W);u&&a.push(u)}t.placeholder=b("search_placeholder"),t.value="",Promise.allSettled(a).then((()=>{T.rows[0].cells[2].dispatchEvent(new MouseEvent("click")),T.rows[0].cells[2].dispatchEvent(new MouseEvent("click"))}))}catch(e){W(e)}}}const de=new ce,me=()=>{const e=(e,t=null,s,a={})=>{e=e??b("no_license"),s=s??b("no_license");const r=S("mujs-section","",{dataset:{name:s}}),i=S("label"),l=S("mu-js","",{textContent:e});if(i.append(l),r.append(i),E.append(r),k(t))return i;const c=S("input","",{type:t,dataset:{name:s},...a});if(K.has(s)||K.set(s,c),"checkbox"===t){const e=S("mu-js","mujs-inlab"),t=S("label","",{onclick(){c.dispatchEvent(new MouseEvent("click"))}});if(e.append(c,t),i.append(e),s.includes("-"))return c;if(/(greasy|sleazy)fork|openuserjs|gi(thub|st)/gi.test(s)){for(const e of o.engines)if(e.name===s){if(c.checked=e.enabled,c.dataset.engine=e.name,z(c,"change",(t=>{V.unsaved=!0,V.rebuild=!0,e.enabled=t.target.checked})),e.query){const t=p.engines.find((t=>t.name===e.name)),a=S("input","",{type:"text",defaultValue:"",value:decodeURIComponent(e.query)??"",placeholder:decodeURIComponent(t.query)??"",dataset:{name:s,engine:e.name},onchange(t){V.unsaved=!0,V.rebuild=!0;try{e.query=encodeURIComponent(new URL(t.target.value).toString())}catch(e){n(e)}}});r.append(a)}if("github"===e.name){const t=S("input","",{type:"text",defaultValue:"",value:e.token??"",placeholder:"Paste Access Token",dataset:{engine:"github-token"},onchange(t){V.unsaved=!0,V.rebuild=!0,e.token=t.target.value}});r.append(t),K.set("github-token",t)}}}else c.checked=o[s],z(c,"change",(e=>{V.unsaved=!0,/filterlang/i.test(s)&&(V.rebuild=!0),o[s]=e.target.checked}))}else i.append(c);return c};u&&e("Sync with GM","checkbox","cache"),e(b("userjs_fullscreen"),"checkbox","autoexpand",{onchange(e){e.target.checked?(O.cl.add([U,I],"expanded"),O.prop(U,"innerHTML",H.load("fsClose"))):(O.cl.remove([U,I],"expanded"),O.prop(U,"innerHTML",H.load("fsOpen")))}}),e(b("redirect"),"checkbox","sleazyredirect"),e(b("filter"),"checkbox","filterlang"),e(b("preview_code"),"checkbox","codePreview");for(const t of[e("Recommend author","checkbox","recommend-author"),e("Recommend scripts","checkbox","recommend-others")]){const e="recommend-author"===t.dataset.name?"author":"others";t.checked=o.recommend[e],z(t,"change",(t=>{V.unsaved=!0,o.recommend[e]=t.target.checked}))}e("Greasy Fork","checkbox","greasyfork"),e("Sleazy Fork","checkbox","sleazyfork"),e("Open UserJS","checkbox","openuserjs"),e("GitHub API","checkbox","github"),e(`${b("dtime")} (ms)`,"number","time",{defaultValue:1e4,value:o.time,min:0,step:500,onbeforeinput(e){e.target.validity.badInput?(O.cl.add(e.target,"mujs-invalid"),O.prop(s,"disabled",!0)):(O.cl.remove(e.target,"mujs-invalid"),O.prop(s,"disabled",!1))},oninput(e){V.unsaved=!0;const t=e.target;t.validity.badInput||t.validity.rangeUnderflow&&"-1"!==t.value?(O.cl.add(t,"mujs-invalid"),O.prop(s,"disabled",!0)):(O.cl.remove(t,"mujs-invalid"),O.prop(s,"disabled",!1),o.time=M(t.value)?o.time:parseFloat(t.value))}});const t=S("mu-js","mujs-sty-flex"),s=S("mujs-btn","save",{textContent:b("save"),dataset:{command:"save"},disabled:!1}),a=S("mujs-btn","reset",{textContent:b("reset"),dataset:{command:"reset"}}),r=S("textarea","",{dataset:{name:"blacklist"},rows:"10",autocomplete:!1,spellcheck:!1,wrap:"soft",value:JSON.stringify(o.blacklist,null," "),oninput(e){let t=!0;try{o.blacklist=JSON.parse(e.target.value),t=!0}catch(e){n(e),t=!1}finally{t?(O.cl.remove(e.target,"mujs-invalid"),O.prop(s,"disabled",!1)):(O.cl.add(e.target,"mujs-invalid"),O.prop(s,"disabled",!0))}}}),i=S("textarea","",{dataset:{name:"theme"},rows:"10",autocomplete:!1,spellcheck:!1,wrap:"soft",value:JSON.stringify(o.theme,null," "),oninput(e){let t=!0;try{o.theme=JSON.parse(e.target.value),V.renderTheme(JSON.parse(e.target.value)),t=!0}catch(e){n(e),t=!1}finally{t?(O.cl.remove(e.target,"mujs-invalid"),O.prop(s,"disabled",!1)):(O.cl.add(e.target,"mujs-invalid"),O.prop(s,"disabled",!0))}}});K.set("blacklist",r),K.set("theme",i),t.append(a,s),E.append(r,i,t)};V.tab.custom=e=>{de.host=e,de.build()},z(e,"mouseenter",(e=>{e.preventDefault(),e.stopPropagation(),e.target.style.opacity=V.opacityMax,X.clear(...X.ids)})),z(e,"mouseleave",(e=>{e.preventDefault(),e.stopPropagation(),e.target.style.opacity=V.opacityMin,ie()})),z(e,"click",(t=>{t.preventDefault(),X.clear(...X.ids),O.cl.remove(I,"hidden"),O.cl.add(e,"hidden"),o.autoexpand&&(O.cl.add([U,I],"expanded"),O.prop(U,"innerHTML",H.load("fsClose"))),O.cl.has(e,"error")&&Z.create("mujs:settings")})),z(t,"input",(e=>{if(e.preventDefault(),t.placeholder===b("newTab"))return;const n=e.target.value;if(M(n))return O.cl.remove(j("tr[data-engine]",y),"hidden"),void O.cl.remove(j("mujs-section[data-name]",E),"hidden");const s=new Set;if(!O.cl.has(E,"hidden")){const e=new RegExp(n,"gi");for(const t of j("mujs-section[data-name]",E))t&&(s.has(t)||t.dataset.name.match(e)&&s.add(t));return O.cl.add(j("mujs-section[data-name]",E),"hidden"),void O.cl.remove([...s],"hidden")}const a=(e,t)=>{const a=n.replace(e,""),o=new RegExp(a,"gi");for(const e of P.values()){const n=e._mujs.root;if(!n)continue;if(s.has(n))continue;let a=e[t];"number"==typeof a&&(a=`${e[t]}`),a&&a.match(o)&&s.add(n)}};if(n.match(/^(code_url|url):/))a(/^(code_url|url):/,"code_url");else if(n.match(/^(author|users?):/)){const e=n.replace(/^(author|users?):/,""),t=new RegExp(e,"gi");for(const e of P.values()){const n=e._mujs.root;if(n&&(!s.has(n)&&e.users))for(const a of e.users)for(const e of Object.values(a))("string"==typeof e&&e.match(t)||"number"==typeof e&&`${e}`.match(t))&&s.add(n)}}else if(n.match(/^(locale|i18n):/))a(/^(locale|i18n):/,"locale");else if(n.match(/^id:/))a(/^id:/,"id");else if(n.match(/^license:/))a(/^license:/,"license");else if(n.match(/^name:/))a(/^name:/,"name");else if(n.match(/^description:/))a(/^description:/,"description");else if(n.match(/^(search_engine|engine):/)){const e=n.replace(/^(search_engine|engine):/,""),t=new RegExp(e,"gi");for(const e of P.values()){const n=e._mujs.root;if(n&&(!s.has(n)&&e._mujs.info.engine))for(const a of Object.values(e._mujs.info.engine))"string"==typeof a&&a.match(t)&&s.add(n)}}else{const e=new RegExp(n,"gi");for(const t of P.values()){const n=t._mujs.root;if(!n)continue;if(s.has(n))continue;t.name&&t.name.match(e)&&s.add(n),t.description&&t.description.match(e)&&s.add(n);const a=t._mujs.code.data;if(a){const t=new ae(a).parse_meta(a);for(const a of Object.keys(t))/name|desc/i.test(a)&&a.match(e)&&s.add(n)}}}O.cl.add(j("tr[data-engine]",y),"hidden"),O.cl.remove([...s],"hidden")})),z(t,"change",(e=>{e.preventDefault();const n=e.target.value;if(t.placeholder===b("newTab")&&g("mujs-tab.active",v)){const e=g("mujs-tab.active",v),t=g("mujs-host",e);if(n.startsWith(Z.protocal))return Z.close(e),void(Z.hasTab(n)?Z.active(Z.Tab.get(n)):Z.create(n));if("*"===n)return e.dataset.host=n,t.title="<All Sites>",t.textContent="<All Sites>",de.host=n,void de.build();const s=V.getHost(n);return V.checkBlacklist(s)?void W(`Blacklisted "${s}"`):(e.dataset.host=s,t.title=s,t.textContent=s,de.host=s,void de.build())}})),me(),de.build().then(ie),((...e)=>{const t=new Date;console.debug("[%cMagic Userscript+%c] %cDBG","color: rgb(29, 155, 240);","","color: rgb(255, 212, 0);",`[${t.getHours()}:${("0"+t.getMinutes()).slice(-2)}:${("0"+t.getSeconds()).slice(-2)}]`,...e)})("Container",V)}catch(e){n(e),V.remove()}}const G=async()=>{const e=await $.getValue("Config",p);var t;o={...p,...e},s("Config:",o),_(t=e=>{try{if(null===window.location)throw new Error('"window.location" is null, reload the webpage or use a different one');if(null===e)throw new Error('"doc" is null, reload the webpage or use a different one');window.trustedTypes&&window.trustedTypes.createPolicy&&window.trustedTypes.createPolicy("default",{createHTML:e=>e}),R(),V.inject(I,e),U.register(b("userjs_inject"),(()=>{V.inject(I,e)})),U.register(b("userjs_close"),(()=>{V.remove()}))}catch(e){n(e)}})&&("interactive"!==document.readyState&&"complete"!==document.readyState||t.call({},document),document.addEventListener("DOMContentLoaded",(e=>t.call({},e.target)),{once:!0}))};G()})();