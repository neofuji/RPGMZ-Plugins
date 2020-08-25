//=============================================================================
// SealEscapeCommand.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Creates a trait to disable the [Escape] command.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SealEscapeCommand v1.0 (2020-08-25)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 *
 * Actors/Classes/Weapons/Armors/States note:
 *   <seal_escape>  : Seal escape command
 */

/*:ja
 * @target MZ
 * @plugindesc ［逃げる］コマンドが使用できなくなる特徴を作ります。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SealEscapeCommand v1.0 (2020-08-25)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 *
 * アクター／職業／武器／防具／ステートのメモ:
 *   <seal_escape>  : ［逃げる］コマンド封印
 */

(() => {
    const _BattleManager_canEscape = BattleManager.canEscape;
    BattleManager.canEscape = function() {
        return (
            _BattleManager_canEscape.apply(this, arguments) &&
            !$gameParty.members().some(actor =>
                actor.traitObjects().some(obj => obj.meta.seal_escape === true)
            )
        );
    };
})();
