import { Plugin, ButtonView, Table, TableColumnResize, TableToolbar, GeneralHtmlSupport } from 'ckeditor5'
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
				label: Craft.t('cke-developion-cookies', 'Insert Cookie Data'),
				icon: shortcodesIcon,
				withText: false,
				tooltip: true,
			})

			buttonView.on('execute', () => {
				editor.model.change(writer => {
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
							const htmlContent = `<table>` +
							`<colgroup><col style="width: 20%" /><col style="width: 20%" /><col style="width: 40%" /><col style="width: 10%" /></colgroup>` +
							`<thead><tr><th>${Craft.t('cke-developion-cookies', 'Name')}</th><th>${Craft.t('cke-developion-cookies', 'Vendor')}</th><th>${Craft.t('cke-developion-cookies', 'Description')}</th><th>${Craft.t('cke-developion-cookies', 'Category')}</th></tr></thead>` +
							`<tbody>`+ data.data.map(cookie => `<tr><td>${cookie.cookie_name}</td><td>${cookie.vendor ?? ''}</td><td>${cookie.description ?? ''}</td><td>${cookie.category ?? ''}</td></tr>`).join('') +`</tbody></table>`
							const viewFragment = editor.data.processor.toView(htmlContent)
							const modelFragment = editor.data.toModel(viewFragment)
							editor.model.insertContent(modelFragment, editor.model.document.selection)
						})
						.catch(e => console.log(e))
				})
			})

			return buttonView
		})
	}
}

export default Cookies
