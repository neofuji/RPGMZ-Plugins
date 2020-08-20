//=============================================================================
// SkipActorSelectInMenu.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Skips actor selection in menu when only 1 actor in party.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SkipActorSelectInMenu v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc 1人パーティーのとき、メニュー画面でアクター選択をスキップします。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SkipActorSelectInMenu v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
    Scene_Menu.prototype.commandPersonal = function() {
        if ($gameParty.size() === 1) {
            $gameParty.setMenuActor($gameParty.members()[0]);
            this.onPersonalOk();
            return;
        }
        _Scene_Menu_commandPersonal.apply(this, arguments);
    };
})();
