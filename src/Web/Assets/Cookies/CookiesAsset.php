<?php
declare(strict_types=1);

namespace ContentReactor\CkeDevelopionCookies\Web\Assets\Cookies;

use Craft;
use craft\ckeditor\web\assets\BaseCkeditorPackageAsset;

class CookiesAsset extends BaseCkeditorPackageAsset
{
	/** @var string */
	public $sourcePath = __DIR__ . '/dist';
	public string $namespace = '@contentreactor/ckeditor5-cookies';

	public $js = [
		['cookies.js', 'type' => 'module']
	];

	public array $pluginNames = [
		'Cookies',
	];

	public array $toolbarItems = [
		'cookies',
	];

	public function registerPackage(): void
	{
		Craft::$app->getView()->registerTranslations('cke-developion-cookies', [
			'Insert Cookie Data',
			'Name',
			'Category',
			'Description',
			'Vendor',
		]);

		parent::registerPackage();
	}
}
