//=============================================================================
// DisableSealedSkillCommand.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Disables commands of sealed skill type in battle.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help DisableSealedSkillCommand v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc 戦闘中、封印されたスキルタイプのコマンドを選べなくします。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help DisableSealedSkillCommand v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_ActorCommand_addSkillCommands =
            Window_ActorCommand.prototype.addSkillCommands;
    Window_ActorCommand.prototype.addSkillCommands = function() {
        _Window_ActorCommand_addSkillCommands.apply(this, arguments);
        for (const command of this._list) {
            if (command.symbol === "skill") {
                command.enabled = !this._actor.isSkillTypeSealed(command.ext);
            }
        }
    };
})();
