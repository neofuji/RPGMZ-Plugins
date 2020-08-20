//=============================================================================
// InitTargetActorToUser.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Changes initial target actor of skills/items to user in battle.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help InitTargetActorToUser v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc 戦闘中、スキルやアイテムの対象アクターの初期値を使用者に変更します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help InitTargetActorToUser v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_BattleActor_show = Window_BattleActor.prototype.show;
    Window_BattleActor.prototype.show = function() {
        _Window_BattleActor_show.apply(this, arguments);
        this.forceSelect(BattleManager.actor().index());
    };
})();
