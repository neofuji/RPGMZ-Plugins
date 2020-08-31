//=============================================================================
// SupportZWJEmoji.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Fixes [Show Text] to draw correctly emojis like 🧑‍🤝‍🧑.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SupportZWJEmoji v1.0 (2020-08-31)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc 🧑‍🤝‍🧑といった絵文字を正しく描画するよう［文章の表示］を修正します。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help SupportZWJEmoji v1.0 (2020-08-31)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_Message_canBreakHere = Window_Message.prototype.canBreakHere;
    Window_Message.prototype.canBreakHere = function(textState) {
        if (!_Window_Message_canBreakHere.apply(this, arguments)) {
            return false;
        }
        if (!this.isEndOfText(textState)) {
            const c = textState.text[textState.index];
            const b = textState.text[textState.index - 1];
            if (c.charCodeAt(0) === 0x200d || b.charCodeAt(0) === 0x200d) {
                return false;
            }
        }
        return true;
    };
})();
