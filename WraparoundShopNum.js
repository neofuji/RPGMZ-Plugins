//=============================================================================
// WraparoundShopNum.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Wraparound number input in shop.
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help WraparoundShopNum v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc ショップの個数入力で最大値と最小値をループさせます。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help WraparoundShopNum v1.0 (2020-08-20)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_ShopNumber_processNumberChange =
            Window_ShopNumber.prototype.processNumberChange;
    Window_ShopNumber.prototype.processNumberChange = function() {
        if (this.isOpenAndActive()) {
            if (this._number === this._max) {
                if (Input.isTriggered("right") || Input.isTriggered("up")) {
                    this.changeNumber(1 - this._max);
                    return;
                }
            }
            if (this._number === 1) {
                if (Input.isTriggered("left") || Input.isTriggered("down")) {
                    this.changeNumber(this._max - 1);
                    return;
                }
            }
        }
        _Window_ShopNumber_processNumberChange.apply(this, arguments);
    };

    const _Window_ShopNumber_onButtonUp =
        Window_ShopNumber.prototype.onButtonUp;
    Window_ShopNumber.prototype.onButtonUp = function() {
        if (this._number === this._max) {
            this.changeNumber(1 - this._max);
            return;
        }
        _Window_ShopNumber_onButtonUp.apply(this, arguments);
    };

    const _Window_ShopNumber_onButtonUp2 =
        Window_ShopNumber.prototype.onButtonUp2;
    Window_ShopNumber.prototype.onButtonUp2 = function() {
        if (this._number === this._max) {
            this.changeNumber(1 - this._max);
            return;
        }
        _Window_ShopNumber_onButtonUp2.apply(this, arguments);
    };

    const _Window_ShopNumber_onButtonDown =
        Window_ShopNumber.prototype.onButtonDown;
    Window_ShopNumber.prototype.onButtonDown = function() {
        if (this._number === 1) {
            this.changeNumber(this._max - 1);
            return;
        }
        _Window_ShopNumber_onButtonDown.apply(this, arguments);
    };

    const _Window_ShopNumber_onButtonDown2 =
        Window_ShopNumber.prototype.onButtonDown2;
    Window_ShopNumber.prototype.onButtonDown2 = function() {
        if (this._number === 1) {
            this.changeNumber(this._max - 1);
            return;
        }
        _Window_ShopNumber_onButtonDown2.apply(this, arguments);
    };
})();
