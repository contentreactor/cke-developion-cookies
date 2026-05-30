import { Plugin } from 'ckeditor5/src/core'
import { ButtonView } from 'ckeditor5/src/ui'
import buttonIcon from './../theme/icons/ckeditor.svg'

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
				label: 'Insert Cookies Info',
				icon: buttonIcon,
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
