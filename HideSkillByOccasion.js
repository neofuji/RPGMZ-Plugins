//=============================================================================
// HideSkillByOccasion.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Hides skills not matching occasion in battle.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help HideSkillByOccasion v1.1 (2025-05-15)
 * Copyright (c) 2025 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc 戦闘中、バトル画面で使用可能でないスキルを非表示にします。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help HideSkillByOccasion v1.1 (2025-05-15)
 * Copyright (c) 2025 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    if (!Window_BattleSkill.prototype.hasOwnProperty("includes")) {
        Window_BattleSkill.prototype.includes = function(item) {
            return Window_SkillList.prototype.includes.apply(this, arguments);
        };
    }

    const _Window_BattleSkill_includes = Window_BattleSkill.prototype.includes;
    Window_BattleSkill.prototype.includes = function(item) {
        return (
            _Window_BattleSkill_includes.apply(this, arguments) &&
            this._actor.isOccasionOk(item)
        );
    };
})();
