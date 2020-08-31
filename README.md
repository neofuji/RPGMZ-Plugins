# RPGMZ-Plugins
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

Simple plugins for RPG Maker MZ

Some plugins are also available on [RGSS3-Plugins](https://git.io/tic), [RPGMV-Plugins](https://git.io/tmv).

## Author
[Toru Higuruma](https://github.com/neofuji)

## Plugins
- [RememberSkillByType](/RememberSkillByType.js) v1.0 (2020-08-20)
  - Remembers last-used skill for each skill type.
  - 最後に使用したスキルをスキルタイプごとに記憶します。
- [DisableSealedSkillCommand](/DisableSealedSkillCommand.js) v1.0 (2020-08-20)
  - Disables commands of sealed skill type in battle.
  - 戦闘中、封印されたスキルタイプのコマンドを選べなくします。
- [HideSkillByOccasion](/HideSkillByOccasion.js) v1.0 (2020-08-20)
  - Hides skills not matching occasion in battle.
  - 戦闘中、バトル画面で使用可能でないスキルを非表示にします。
- [HideSkillByWtype](/HideSkillByWtype.js) v1.0 (2020-08-20)
  - Hides skills not matching equipped weapon type in battle.
  - 戦闘中、必要武器の条件を満たさないスキルを非表示にします。
- [InitTargetActorToUser](/InitTargetActorToUser.js) v1.0 (2020-08-20)
  - Changes initial target actor of skills/items to user in battle.
  - 戦闘中、スキルやアイテムの対象アクターの初期値を使用者に変更します。
- [SkipFirstTitle](/SkipFirstTitle.js) v1.0 (2020-08-20)
  - Skips the title screen and starts a new game when no savefile exists.
  - セーブファイルが存在しない場合、タイトル画面を表示せずニューゲームします。
- [MapNameAfterLoad](/MapNameAfterLoad.js) v1.0 (2020-08-20)
  - Shows map name after loading savefile.
  - セーブファイルのロード後にマップ名を表示します。
- [WraparoundShopNum](/WraparoundShopNum.js) v1.0 (2020-08-20)
  - Wraparound number input in shop.
  - ショップの個数入力で最大値と最小値をループさせます。
- [SkipActorSelectInMenu](/SkipActorSelectInMenu.js) v1.0 (2020-08-20)
  - Skips actor selection in menu when only 1 actor in party.
  - 1人パーティーのとき、メニュー画面でアクター選択をスキップします。
- [AccelerateWindowOpenness](/AccelerateWindowOpenness.js) v1.0 (2020-08-20)
  - Accelerates/decelerates all animations opening/closing a window.
  - すべてのウィンドウの開閉アニメーションを加減速させます。
- [CustomizeItemMessage](/CustomizeItemMessage.js) v1.0 (2020-08-24)
  - Enables changing [Use Item] message for each item.
  - ［アイテム使用］のメッセージをアイテムごとに変更できるようにします。
- [SealEscapeCommand](/SealEscapeCommand.js) v1.0 (2020-08-25)
  - Creates a trait to disable the [Escape] command.
  - ［逃げる］コマンドが使用できなくなる特徴を作ります。
- [ChangeFaceImageInText](/ChangeFaceImageInText.js) v1.0 (2020-08-26)
  - Enables changing the face image at any time in [Show Text].
  - ［文章の表示］の途中、任意の時点で顔グラフィックを変更できるようにします。
- [SkillCostWithNumberFont](/SkillCostWithNumberFont.js) v1.0 (2020-08-27)
  - Draws skill costs with the number font.
  - スキルのコストを数字フォントで描画します。
- [ItemNumberWithNumberFont](/ItemNumberWithNumberFont.js) v1.0 (2020-08-28)
  - Draws item numbers with the number font.
  - アイテムの数を数字フォントで描画します。
- [GoldWithNumberFont](/GoldWithNumberFont.js) v1.0 (2020-08-29)
  - Draws gold with the number font.
  - お金を数字フォントで描画します。
- [InputNumberWithNumberFont](/InputNumberWithNumberFont.js) v1.0 (2020-08-30)
  - Draws [Input Number] with the number font.
  - ［数値入力の処理］を数字フォントで描画します。
- [SupportZWJEmoji](/SupportZWJEmoji.js) v1.0 (2020-08-31)
  - Fixes [Show Text] to draw correctly emojis like 🧑‍🤝‍🧑.
  - 🧑‍🤝‍🧑といった絵文字を正しく描画するよう［文章の表示］を修正します。
