//=============================================================================
// SkipFirstTitle.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Skips the title screen and starts a new game when no savefile exists.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SkipFirstTitle v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc セーブファイルが存在しない場合、タイトル画面を表示せずニューゲームします。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SkipFirstTitle v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Scene_Boot_startNormalGame = Scene_Boot.prototype.startNormalGame;
    Scene_Boot.prototype.startNormalGame = function() {
        _Scene_Boot_startNormalGame.apply(this, arguments);
        if (!DataManager.isAnySavefileExists()) {
            SceneManager.goto(Scene_Map);
        }
    };
})();
