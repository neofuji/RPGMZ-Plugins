//=============================================================================
// SkillCostWithNumberFont.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Draws skill costs with the number font.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SkillCostWithNumberFont v1.0 (2020-08-27)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc スキルのコストを数字フォントで描画します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SkillCostWithNumberFont v1.0 (2020-08-27)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_SkillList_costWidth = Window_SkillList.prototype.costWidth;
    Window_SkillList.prototype.costWidth = function() {
        const lastFontFace = this.contents.fontFace;
        this.contents.fontFace = $gameSystem.numberFontFace();
        const result = _Window_SkillList_costWidth.apply(this, arguments);
        this.contents.fontFace = lastFontFace;
        return result;
    };

    const _Window_SkillList_drawSkillCost =
        Window_SkillList.prototype.drawSkillCost;
    Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
        const lastFontFace = this.contents.fontFace;
        this.contents.fontFace = $gameSystem.numberFontFace();
        _Window_SkillList_drawSkillCost.apply(this, arguments);
        this.contents.fontFace = lastFontFace;
    };
})();
