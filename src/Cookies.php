<?php

namespace ContentReactor\CkeDevelopionCookies;

use ContentReactor\CkeDevelopionCookies\Web\Assets\Cookies\CookiesAsset;
use Craft;
use craft\web\Application as CraftWebApp;
use craft\ckeditor\Plugin as Ckeditor;
use craft\i18n\PhpMessageSource;
use yii\base\BootstrapInterface;
use yii\base\Module;

class Cookies extends Module implements BootstrapInterface
{
	public const ID = 'cke-developion-cookies';

	public function __construct($id = self::ID, $parent = null, array $config = [])
	{
		parent::__construct($id, $parent, $config);
	}

	public function bootstrap($app): void
	{
		if (!$app instanceof CraftWebApp) {
			return;
		}

		if (Craft::$app->getRequest()->getIsCpRequest()) {
			Craft::$app->getI18n()->translations['cke-developion-cookies'] = [
				'class' => PhpMessageSource::class,
				'basePath' => __DIR__ . '/Translations',
				'allowOverrides' => true,
			];

			CKEditor::registerCkeditorPackage(CookiesAsset::class, 'cookies.js');
		}
	}
}
