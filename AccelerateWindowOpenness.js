//=============================================================================
// AccelerateWindowOpenness.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Accelerates/decelerates all animations opening/closing a window.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help AccelerateWindowOpenness v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc すべてのウィンドウの開閉アニメーションを加減速させます。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help AccelerateWindowOpenness v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    Window_Base.prototype.updateOpen = function() {
        if (this._opening) {
            this.openness += Math.floor((281 - this.openness) / 3);
            if (this.isOpen()) {
                this._opening = false;
            }
        }
    };

    Window_Base.prototype.updateClose = function() {
        if (this._closing) {
            this.openness -= Math.floor((281 - this.openness) / 2);
            if (this.isClosed()) {
                this._closing = false;
            }
        }
    };
})();
