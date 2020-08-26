//=============================================================================
// ChangeFaceImageInText.js
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Enables changing the face image at any time in [Show Text].
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help ChangeFaceImageInText v1.0 (2020-08-26)
 * Copyright (c) 2020 Toru Higuruma
 * This plugin is provided under the MIT License.
 *
 * Escape characters (only available in [Show Text]):
 *   \F[n]  Changes the showing face image to n-th face in the same file.
 *          Also variables can be used as n.
 *
 * It does not provide plugin commands.
 */

/*:ja
 * @target MZ
 * @plugindesc ［文章の表示］の途中、任意の時点で顔グラフィックを変更できるようにします。
 * @author Toru Higuruma
 * @url https://github.com/neofuji/RPGMZ-Plugins
 *
 * @help ChangeFaceImageInText v1.0 (2020-08-26)
 * Copyright (c) 2020 Toru Higuruma
 * このプラグインは MIT License の下で提供されます。
 *
 * 制御文字（［文章の表示］でのみ有効）:
 *   \F[n]  表示中の顔グラフィックを同じファイルの n 番目の顔に変更します。
 *          n には変数を使用することもできます。
 *
 * プラグインコマンドはありません。
 */

(() => {
    const _Window_Message_processEscapeCharacter =
            Window_Message.prototype.processEscapeCharacter;
    Window_Message.prototype.processEscapeCharacter = function(code, textState) {
        switch (code) {
            case "F":
                const faceName = $gameMessage.faceName();
                const faceIndex = this.obtainEscapeParam(textState) - 1;
                const rtl = $gameMessage.isRTL();
                const width = ImageManager.faceWidth;
                const height = this.innerHeight;
                const x = rtl ? this.innerWidth - width - 4 : 4;
                this.contents.clearRect(x, 0, width, height);
                $gameMessage.setFaceImage(faceName, faceIndex);
                this.drawMessageFace();
                break;
            default:
                _Window_Message_processEscapeCharacter.apply(this, arguments);
                break;
        }
    };
})();
