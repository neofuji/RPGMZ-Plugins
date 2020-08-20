//=============================================================================
// RememberSkillByType.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Remembers last-used skill for each skill type.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help RememberSkillByType v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc 最後に使用したスキルをスキルタイプごとに記憶します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help RememberSkillByType v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Game_Actor_initMembers = Game_Actor.prototype.initMembers;
    Game_Actor.prototype.initMembers = function() {
        _Game_Actor_initMembers.apply(this, arguments);
        this._lastMenuSkillsByStype = [];
        this._lastBattleSkillsByStype = [];
    };

    const _Game_Actor_setLastMenuSkill = Game_Actor.prototype.setLastMenuSkill;
    Game_Actor.prototype.setLastMenuSkill = function(skill) {
        _Game_Actor_setLastMenuSkill.apply(this, arguments);
        const skills = this._lastMenuSkillsByStype;
        if (skills[skill.stypeId]) {
            skills[skill.stypeId].setObject(skill);
        } else {
            skills[skill.stypeId] = new Game_Item(skill);
        }
    };

    const _Game_Actor_setLastBattleSkill =
        Game_Actor.prototype.setLastBattleSkill;
    Game_Actor.prototype.setLastBattleSkill = function(skill) {
        _Game_Actor_setLastBattleSkill.apply(this, arguments);
        const skills = this._lastBattleSkillsByStype;
        if (skills[skill.stypeId]) {
            skills[skill.stypeId].setObject(skill);
        } else {
            skills[skill.stypeId] = new Game_Item(skill);
        }
    };

    Game_Actor.prototype.getLastSkillByStype = function(stypeId) {
        if ($gameParty.inBattle()) {
            return this.getLastBattleSkillByStype(stypeId);
        } else {
            return this.getLastMenuSkillByStype(stypeId);
        }
    };

    Game_Actor.prototype.getLastMenuSkillByStype = function(stypeId) {
        const skill = this._lastMenuSkillsByStype[stypeId];
        return skill ? skill.object() : null;
    };

    Game_Actor.prototype.getLastBattleSkillByStype = function(stypeId) {
        const skill = this._lastBattleSkillsByStype[stypeId];
        return skill ? skill.object() : null;
    };

    Window_SkillList.prototype.selectLast = function() {
        const skill = this._actor.getLastSkillByStype(this._stypeId);
        const index = this._data.indexOf(skill);
        this.forceSelect(index >= 0 ? index : 0);
    };
})();
