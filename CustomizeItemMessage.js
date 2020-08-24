//=============================================================================
// CustomizeItemMessage.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Enables changing [Use Item] message for each item.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help CustomizeItemMessage v1.0 (2020-08-24)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 *
 * Item note:
 *   <message1:%1 raises %2 aloft!>                     : Message line 1
 *   <message2:%2 begins to shine even more brightly!>  : Message line 2
 */

/*:ja
 * @target MZ
 * @plugindesc ［アイテム使用］のメッセージをアイテムごとに変更できるようにします。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help CustomizeItemMessage v1.0 (2020-08-24)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 *
 * アイテムのメモ:
 *   <message1:%1は%2を高くささげた！>                  : メッセージ 1 行目
 *   <message2:あたりにまばゆいばかりの光が広がるっ！>  : メッセージ 2 行目
 */

(() => {
    Window_BattleLog.prototype.displayAction = function(subject, item) {
        const numMethods = this._methods.length;
        if (DataManager.isSkill(item)) {
            this.displayItemMessage(item.message1, subject, item);
            this.displayItemMessage(item.message2, subject, item);
        } else {
            if ("message1" in item.meta) {
                this.displayItemMessage(item.meta.message1, subject, item);
            } else {
                this.displayItemMessage(TextManager.useItem, subject, item);
            }
            this.displayItemMessage(item.meta.message2, subject, item);
        }
        if (this._methods.length === numMethods) {
            this.push("wait");
        }
    };
})();
