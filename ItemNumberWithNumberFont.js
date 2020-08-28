//=============================================================================
// ItemNumberWithNumberFont.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Draws item numbers with the number font.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help ItemNumberWithNumberFont v1.0 (2020-08-28)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc アイテムの数を数字フォントで描画します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help ItemNumberWithNumberFont v1.0 (2020-08-28)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_ItemList_numberWidth = Window_ItemList.prototype.numberWidth;
    Window_ItemList.prototype.numberWidth = function() {
        const lastFontFace = this.contents.fontFace;
        this.contents.fontFace = $gameSystem.numberFontFace();
        const result = _Window_ItemList_numberWidth.apply(this, arguments);
        this.contents.fontFace = lastFontFace;
        return result;
    };
    
    const _Window_ItemList_drawItemNumber =
        Window_ItemList.prototype.drawItemNumber;
    Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
        const lastFontFace = this.contents.fontFace;
        this.contents.fontFace = $gameSystem.numberFontFace();
        _Window_ItemList_drawItemNumber.apply(this, arguments);
        this.contents.fontFace = lastFontFace;
    };
})();
