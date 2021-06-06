'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tuya2-0 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link">CommonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CommonModule-3ad20b09b2d445e0153c3fc3017b8208"' : 'data-target="#xs-injectables-links-module-CommonModule-3ad20b09b2d445e0153c3fc3017b8208"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonModule-3ad20b09b2d445e0153c3fc3017b8208"' :
                                        'id="xs-injectables-links-module-CommonModule-3ad20b09b2d445e0153c3fc3017b8208"' }>
                                        <li class="link">
                                            <a href="injectables/ColorConversionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ColorConversionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContactTuyaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContactTuyaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LifxModule.html" data-type="entity-link">LifxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' : 'data-target="#xs-controllers-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' :
                                            'id="xs-controllers-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' }>
                                            <li class="link">
                                                <a href="controllers/LifxController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LifxController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' : 'data-target="#xs-injectables-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' :
                                        'id="xs-injectables-links-module-LifxModule-36e88733586f1a50c2775ce69b1ecfed"' }>
                                        <li class="link">
                                            <a href="injectables/LifxService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LifxService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NooieModule.html" data-type="entity-link">NooieModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' : 'data-target="#xs-controllers-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' :
                                            'id="xs-controllers-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' }>
                                            <li class="link">
                                                <a href="controllers/NooieController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NooieController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' : 'data-target="#xs-injectables-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' :
                                        'id="xs-injectables-links-module-NooieModule-acb4c083e724d26565fd66f872ce9f90"' }>
                                        <li class="link">
                                            <a href="injectables/ColorConversionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ColorConversionService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContactTuyaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContactTuyaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NooieService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NooieService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TuyaModule.html" data-type="entity-link">TuyaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' : 'data-target="#xs-controllers-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' :
                                            'id="xs-controllers-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' }>
                                            <li class="link">
                                                <a href="controllers/TuyaController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TuyaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' : 'data-target="#xs-injectables-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' :
                                        'id="xs-injectables-links-module-TuyaModule-044b26905f627630e55a0dffc7fa29bc"' }>
                                        <li class="link">
                                            <a href="injectables/ContactTuyaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ContactTuyaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TuyaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TuyaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/QueryLifxDTO.html" data-type="entity-link">QueryLifxDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryMultipleDeviceDTO.html" data-type="entity-link">QueryMultipleDeviceDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/QueryNooieDeviceDTO.html" data-type="entity-link">QueryNooieDeviceDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuerySingleDeviceDTO.html" data-type="entity-link">QuerySingleDeviceDTO</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IDataSet.html" data-type="entity-link">IDataSet</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataTuya.html" data-type="entity-link">IDataTuya</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDps.html" data-type="entity-link">IDps</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMakeCalc.html" data-type="entity-link">IMakeCalc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISetData.html" data-type="entity-link">ISetData</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});