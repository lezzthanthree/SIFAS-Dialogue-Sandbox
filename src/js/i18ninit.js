import i18n from "i18next";

const i18nInit = () => {
	i18n.init({
		interpolation: { escapeValue: false },
		lng: "en",
		resources: {
			en: {
				translation: {
					save: "Save",
					clear: "Clear",
					"background-header": "Background",
					"background-upload": "Background", // This has an upload icon beside it
					"text-header": "Text",
					"text-font-size": "Text Font Size",
					"name-tag-header": "Name Tag",
					you: "You", // not watanabe.
					others: "Others",
					default: "--Default--",
					"icon-upload": "Icon", // This has an upload icon beside it
					"icon-upload-info":
						"You are about to upload a custom icon. For the best experience, upload icons with a 5:4 ratio.",
					"experimental-header": "Experimental",
					"font-offset": "Font Offset",
					"font-offset-info":
						"If the text in the canvas do not line up correctly, adjustments may be necessary.",
					"font-shadow": "Font Shadow",
					"sprites-header": "Sprites",
					"sprites-delete-layer-warn": "Sprites",
					"sprites-upload": "Sprites", // This has an upload icon beside it
					"sprites-upload-info":
						"You are uploading a custom sprite. For best experience, upload sprites that are 512x1024 or 1024x1024 in size.",
					"custom-sprite-warn":
						"This is a custom sprite. Costume selection is disabled.",
					"character-header": "Character",
					"costume-header": "Costume",
					front: "Front",
					back: "Back",
					"expression-header": "Expression",
					"options-header": "Options",
					"x-offset": "X-Offset",
					"y-offset": "Y-Offset",
					scale: "Scale",
					hidden: "Hidden", // DoubleTime, HardRock
					custom: "Custom",
					"enter-a-value": "Enter a value",
					"enter-a-value-error":
						"Please input a valid number... *honk*",
					"delete-layer-warn":
						"This is the only layer and cannot be deleted. Use the 'Hidden' option instead.",
					"clear-warn":
						"You are about to clear the canvas! Any progress will be lost. \nPressing 'OK' will proceed the action.",
					layer: "Layer",
				},
			},
			es: {
				translation: {
					save: "Guardar",
					clear: "Borrar",
					"background-header": "Fondo",
					"background-upload": "Subir fondo", // This has an upload icon beside it
					"text-header": "Texto",
					"text-font-size": "Tamaño del texto",
					"name-tag-header": "Etiqueta de nombre",
					you: "Tú", // not watanabe.
					others: "Otras",
					default: "--Por defecto--",
					"icon-upload": "Subir icono", // This has an upload icon beside it
					"icon-upload-info":
						"Estás a punto de subir un icono personalizado. Sube un icono con el ratio 5:4 para una experiencia mejor.",
					"experimental-header": "Experimental",
					"font-offset": "Desfase de la fuente",
					"font-offset-info":
						"Si el texto dentro del canvas no se alinea correctamente, es necesario ajustarlo.",
					"font-shadow": "Sombra de la fuente",
					"sprites-header": "Sprites",
					"sprites-delete-layer-warn": "Sprites",
					"sprites-upload": "Subir sprite", // This has an upload icon beside it
					"sprites-upload-info":
						"Estás a punto de subir un sprite personalizado. Se recomienda subir sprites que tengan tamaño de 512x1024 o 1024x1024 para tener una experiencia mejor.",
					"custom-sprite-warn":
						"Esto es un sprite personalizado. Se ha desactivado la selección de vestido.",
					"character-header": "Personaje",
					"costume-header": "Vestido",
					front: "Delantero",
					back: "Trasero",
					"expression-header": "Expresión",
					"options-header": "Opciones",
					"x-offset": "Desfase X",
					"y-offset": "Desfase Y",
					scale: "Escala",
					hidden: "Oculto", // DoubleTime, HardRock
					custom: "Personalizado",
					"enter-a-value": "Introduce un valor",
					"enter-a-value-error":
						"Por favor, introduce un valor válido ... *honk*",
					"delete-layer-warn":
						"Esta es la única capa que hay y no se puede borrar. En su lugar utiliza la opción 'Ocultar'.",
					"clear-warn":
						"¡Estás a punto de borrar el canvas! Se perderá todo el progreso que se ha hecho. \nAl pulsar 'OK' se procederá a la acción.",
					layer: "Capa",
				},
			},
			jp: {
				translation: {
					save: "保存",
					clear: "クリア",
					"background-header": "背景",
					"background-upload": "背景", // This has an upload icon beside it
					"text-header": "テキスト",
					"text-font-size": "テキストのフォントサイズ",
					"name-tag-header": "名前欄",
					you: "あなた", // not watanabe.
					others: "他の",
					default: "--デフォルト--",
					"icon-upload": "アイコン", // This has an upload icon beside it
					"icon-upload-info":
						"カスタムアイコンをアップロードしようとしています。最高の体験のために、5:4の比率のアイコンをアップロードしてください。",
					"experimental-header": "実験的",
					"font-offset": "フォントオフセット",
					"font-offset-info":
						"キャンバス内のテキストが正しく整列していない場合は、調整が必要です。",
					"font-shadow": "フォントシャドウ",
					"sprites-header": "立ち絵",
					"sprites-delete-layer-warn": "立ち絵",
					"sprites-upload": "立ち絵", // This has an upload icon beside it
					"sprites-upload-info":
						"カスタム立ち絵をアップロードしようとしています。最高の体験のために、512x1024または1024x1024のサイズの立ち絵をアップロードしてください。",
					"custom-sprite-warn":
						"これはカスタム立ち絵です。衣類の選択は無効になっています。",
					"character-header": "キャラクター",
					"costume-header": "衣類",
					front: "フロント",
					back: "バック",
					"expression-header": "表情",
					"options-header": "オプション",
					"x-offset": "X-オフセット",
					"y-offset": "Y-オフセット",
					scale: "スケール",
					hidden: "隠し", // DoubleTime, HardRock
					custom: "カスタム",
					"enter-a-value": "値を入力",
					"enter-a-value-error":
						"有効な数値を入力してください... *honk*", // honk is a sound effect
					"delete-layer-warn":
						"これは唯一のレイヤーであり、削除できません。代わりに「非表示」オプションを使用してください。",
					"clear-warn":
						"キャンバスをクリアしようとしています！ 進捗状況が失われます。\n「OK」を押すと操作が実行されます。",
					layer: "レイヤー",
				},
			},
			zh_tw: {
				translation: {
					save: "保存",
					clear: "清除",
					"background-header": "背景",
					"background-upload": "背景", // This has an upload icon beside it
					"text-header": "文字",
					"text-font-size": "文字大小",
					"name-tag-header": "名稱欄",
					you: "你", // not watanabe.
					others: "其他",
					default: "--預設--",
					"icon-upload": "上傳圖示", // This has an upload icon beside it
					"icon-upload-info":
						"您即將上傳自定義圖示。為了獲得最佳體驗，請上傳 5:4 的圖示。",
					"experimental-header": "實驗性",
					"font-offset": "字體偏移",
					"font-offset-info":
						"如果畫布中的文字未對齊，可能需要進行調整。",
					"font-shadow": "字體陰影",
					"sprites-header": "立繪",
					"sprites-delete-layer-warn": "立繪",
					"sprites-upload": "上傳立繪", // This has an upload icon beside it
					"sprites-upload-info":
						"您即將上傳自定義立繪。為了獲得最佳體驗，請上傳 512x1024 或 1024x1024 大小的立繪。",
					"custom-sprite-warn":
						"這是自定義立繪。服裝選擇已停用。",
					"character-header": "角色",
					"costume-header": "服裝",
					front: "正面",
					back: "背面",
					"expression-header": "表情",
					"options-header": "選項",
					"x-offset": "X-偏移",
					"y-offset": "Y-偏移",
					scale: "比例",
					hidden: "隱藏", // DoubleTime, HardRock
					custom: "自定義",
					"enter-a-value": "輸入數值",
					"enter-a-value-error":
						"請輸入有效數字... *honk*",
					"delete-layer-warn":
						"這是唯一的圖層，無法刪除。請使用“隱藏”選項。",
					"clear-warn":
						"您即將清除畫布！任何進度都將丟失。\n按下“確定”將執行此操作。",
					layer: "圖層",
				},
			},
			zh_cn: {
				translation: {
					save: "保存",
					clear: "清除",
					"background-header": "背景",
					"background-upload": "背景", // This has an upload icon beside it
					"text-header": "文字",
					"text-font-size": "文字大小",
					"name-tag-header": "名称栏",
					you: "你", // not watanabe.
					others: "其他",
					default: "--默认--",
					"icon-upload": "上传图标", // This has an upload icon beside it
					"icon-upload-info":
						"您即将上传自定义图标。为了获得最佳体验，请上传 5:4 的图标。",
					"experimental-header": "实验性",
					"font-offset": "字体偏移",
					"font-offset-info":
						"如果画布中的文字未对齐，可能需要进行调整。",
					"font-shadow": "字体阴影",
					"sprites-header": "立绘",
					"sprites-delete-layer-warn": "立绘",
					"sprites-upload": "上传立绘", // This has an upload icon beside it
					"sprites-upload-info":
						"您即将上传自定义立绘。为了获得最佳体验，请上传 512x1024 或 1024x1024 大小的立绘。",
					"custom-sprite-warn":
						"这是自定义立绘。服装选择已停用。",
					"character-header": "角色",
					"costume-header": "服装",
					front: "正面",
					back: "背面",
					"expression-header": "表情",
					"options-header": "选项",
					"x-offset": "X-偏移",
					"y-offset": "Y-偏移",
					scale: "比例",
					hidden: "隐藏", // DoubleTime, HardRock
					custom: "自定义",
					"enter-a-value": "输入数值",
					"enter-a-value-error":
						"请输入有效数字... *honk*", // honk is a sound effect
					"delete-layer-warn":
						"这是唯一的图层，无法删除。请使用“隐藏”选项。",
					"clear-warn":
						"您即将清除画布！任何进度都将丢失。\n按下“确定”将执行此操作。",
					layer: "图层",
				},
			},
		},
	});
	const language = localStorage.getItem("language");
	i18n.changeLanguage(language ? language : "en");
};

export default i18nInit;
