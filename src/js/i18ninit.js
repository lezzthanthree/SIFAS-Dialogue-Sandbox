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
				translation: {},
			},
		},
	});
	const language = localStorage.getItem("language");
	i18n.changeLanguage(language ? language : "en");
};

export default i18nInit;
