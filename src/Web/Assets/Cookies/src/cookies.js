import { Plugin, ButtonView } from 'ckeditor5'
import shortcodesIcon from './../theme/icons/ckeditor.svg?raw'

export class Cookies extends Plugin {
	static get pluginName() {
		return 'Cookies'
	}

	init() {
		const editor = this.editor
		const base = this.editor.data.processor
		const { t } = editor.locale

		editor.ui.componentFactory.add('cookies', locale => {
			const buttonView = new ButtonView(locale)

			buttonView.set({
				label: 'shyButton.label',
				icon: shortcodesIcon,
				withText: false,
				tooltip: true,
			})

			buttonView.on('execute', () => {
				editor.model.change(writer => {
					const text = writer.createText('[cookie]')
					editor.model.insertContent(text, editor.model.document.selection)

					const formBody = new FormData()

					formBody.append('action', '_craft-cookies/utilities/get-data')
					formBody.append(Craft.csrfTokenName, Craft.csrfTokenValue)

					fetch(location.origin, {
						method: 'POST',
						headers: {
							Accept: 'application/json',
						},
						body: formBody,
					})
						.then(response => response.json())
						.then(data => {
							console.log(data)
						})
				})
			})

			return buttonView
		})
	}
}

export default Cookies
