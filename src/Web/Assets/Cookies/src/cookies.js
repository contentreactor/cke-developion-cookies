import { Plugin, ButtonView } from 'ckeditor5'
import shortcodesIcon from './../theme/icons/ckeditor.svg?raw'

export class Cookies extends Plugin {
	static get pluginName() {
		return 'Cookies'
	}

	init() {
		const editor = this.editor
		const base = this.editor.data.processor
		// const shyButton = window.shyButton
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
					const text = writer.createText('shyButton.placeholder')
					editor.model.insertContent(text, editor.model.document.selection)
				})
			})

			return buttonView
		})
	}
}

export default Cookies
