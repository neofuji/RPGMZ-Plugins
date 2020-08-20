//=============================================================================
// MapNameAfterLoad.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Shows map name after loading savefile.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help MapNameAfterLoad v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc セーブファイルのロード後にマップ名を表示します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help MapNameAfterLoad v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {
        _Scene_Map_start.apply(this, arguments);
        if (SceneManager.isPreviousScene(Scene_Load)) {
            this._mapNameWindow.open();
        }
    };
})();
