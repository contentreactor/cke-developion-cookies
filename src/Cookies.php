<?php

namespace ContentReactor\CkeDevelopionCookies;

use ContentReactor\CkeDevelopionCookies\Web\Assets\Cookies\CookiesAsset;
use Craft;
use craft\web\Application as CraftWebApp;
use craft\ckeditor\Plugin as Ckeditor;
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
			CKEditor::registerCkeditorPackage(CookiesAsset::class);
		}
	}
}
