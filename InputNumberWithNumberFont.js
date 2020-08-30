//=============================================================================
// InputNumberWithNumberFont.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Draws [Input Number] with the number font.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help InputNumberWithNumberFont v1.0 (2020-08-30)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc ［数値入力の処理］を数字フォントで描画します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help InputNumberWithNumberFont v1.0 (2020-08-30)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_NumberInput_drawItem = Window_NumberInput.prototype.drawItem;
    Window_NumberInput.prototype.drawItem = function(index) {
        const lastFontFace = this.contents.fontFace;
        this.contents.fontFace = $gameSystem.numberFontFace();
        _Window_NumberInput_drawItem.apply(this, arguments);
        this.contents.fontFace = lastFontFace;
    };
})();
