//=============================================================================
// GoldWithNumberFont.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Draws gold with the number font.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help GoldWithNumberFont v1.0 (2020-08-29)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc お金を数字フォントで描画します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help GoldWithNumberFont v1.0 (2020-08-29)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_Base_drawCurrencyValue =
        Window_Base.prototype.drawCurrencyValue;
    Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
        const lastFontFace = this.contents.fontFace;
        this.contents.fontFace = $gameSystem.numberFontFace();
        _Window_Base_drawCurrencyValue.apply(this, arguments);
        this.contents.fontFace = lastFontFace;
    };
})();
