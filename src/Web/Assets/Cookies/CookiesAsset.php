<?php
declare(strict_types=1);

namespace ContentReactor\CkeDevelopionCookies\Web\Assets\Cookies;

use craft\ckeditor\web\assets\BaseCkeditorPackageAsset;
use craft\web\assets\cp\CpAsset;

class CookiesAsset extends BaseCkeditorPackageAsset
{
	/** @var string */
	public $sourcePath = __DIR__ . '/build';

	public $js = [
		['tokens.js']
	];

	public $depends = [
		CpAsset::class,
	];

	public array $pluginNames = [
		'Cookies',
	];

	public array $toolbarItems = [
		'cookies',
	];
}
