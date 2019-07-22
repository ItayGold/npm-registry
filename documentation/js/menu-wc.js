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
                    <a href="index.html" data-type="index-link">@click/npm-registry documentation</a>
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
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c62a7f33cfc70769a5194197929ad7ad"' : 'data-target="#xs-components-links-module-AppModule-c62a7f33cfc70769a5194197929ad7ad"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c62a7f33cfc70769a5194197929ad7ad"' :
                                            'id="xs-components-links-module-AppModule-c62a7f33cfc70769a5194197929ad7ad"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickDatePickerDemoModule.html" data-type="entity-link">ClickDatePickerDemoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickDatePickerDemoModule-042f368bb6ce9f13df5027785f008fe0"' : 'data-target="#xs-components-links-module-ClickDatePickerDemoModule-042f368bb6ce9f13df5027785f008fe0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickDatePickerDemoModule-042f368bb6ce9f13df5027785f008fe0"' :
                                            'id="xs-components-links-module-ClickDatePickerDemoModule-042f368bb6ce9f13df5027785f008fe0"' }>
                                            <li class="link">
                                                <a href="components/ClickDatePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDatePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickDatePickerDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDatePickerDemoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickDatePickerRangeDemoModule.html" data-type="entity-link">ClickDatePickerRangeDemoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickDatePickerRangeDemoModule-745f67c76704a962776a1b5ed34e1226"' : 'data-target="#xs-components-links-module-ClickDatePickerRangeDemoModule-745f67c76704a962776a1b5ed34e1226"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickDatePickerRangeDemoModule-745f67c76704a962776a1b5ed34e1226"' :
                                            'id="xs-components-links-module-ClickDatePickerRangeDemoModule-745f67c76704a962776a1b5ed34e1226"' }>
                                            <li class="link">
                                                <a href="components/ClickDatePickerRangeDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDatePickerRangeDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickDatepickerRangeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDatepickerRangeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickDatePickerRangeDemoRoutingModule.html" data-type="entity-link">ClickDatePickerRangeDemoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickDatePickerRoutingModule.html" data-type="entity-link">ClickDatePickerRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickIconDemoModule.html" data-type="entity-link">ClickIconDemoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickIconDemoModule-8fb12c020496bf395eb621068f37d868"' : 'data-target="#xs-components-links-module-ClickIconDemoModule-8fb12c020496bf395eb621068f37d868"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickIconDemoModule-8fb12c020496bf395eb621068f37d868"' :
                                            'id="xs-components-links-module-ClickIconDemoModule-8fb12c020496bf395eb621068f37d868"' }>
                                            <li class="link">
                                                <a href="components/ClickIconComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickIconComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickIconDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickIconDemoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickIconDemoRoutingModule.html" data-type="entity-link">ClickIconDemoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickSearchInputModule.html" data-type="entity-link">ClickSearchInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickSearchInputModule-d1b0ed20630be846006568b7a22fbe5d"' : 'data-target="#xs-components-links-module-ClickSearchInputModule-d1b0ed20630be846006568b7a22fbe5d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickSearchInputModule-d1b0ed20630be846006568b7a22fbe5d"' :
                                            'id="xs-components-links-module-ClickSearchInputModule-d1b0ed20630be846006568b7a22fbe5d"' }>
                                            <li class="link">
                                                <a href="components/ClickSearchInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickSearchInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickSearchInputDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickSearchInputDemoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickSearchInputRoutingModule.html" data-type="entity-link">ClickSearchInputRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickTreeViewModule.html" data-type="entity-link">ClickTreeViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickTreeViewModule-16b36dcab37885ea803a90bb475bd91c"' : 'data-target="#xs-components-links-module-ClickTreeViewModule-16b36dcab37885ea803a90bb475bd91c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickTreeViewModule-16b36dcab37885ea803a90bb475bd91c"' :
                                            'id="xs-components-links-module-ClickTreeViewModule-16b36dcab37885ea803a90bb475bd91c"' }>
                                            <li class="link">
                                                <a href="components/ClickTreeNodeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTreeNodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickTreeViewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTreeViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickTreeViewDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTreeViewDemoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickTreeViewRoutingModule.html" data-type="entity-link">ClickTreeViewRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickTristateCheckboxModule.html" data-type="entity-link">ClickTristateCheckboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickTristateCheckboxModule-264f2171f7c40d585198f4fe35c35109"' : 'data-target="#xs-components-links-module-ClickTristateCheckboxModule-264f2171f7c40d585198f4fe35c35109"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickTristateCheckboxModule-264f2171f7c40d585198f4fe35c35109"' :
                                            'id="xs-components-links-module-ClickTristateCheckboxModule-264f2171f7c40d585198f4fe35c35109"' }>
                                            <li class="link">
                                                <a href="components/ClickTristateCheckboxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTristateCheckboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickTristateCheckboxDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTristateCheckboxDemoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickTristateCheckboxRoutingModule.html" data-type="entity-link">ClickTristateCheckboxRoutingModule</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ClickKeyNode.html" data-type="entity-link">ClickKeyNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickNavigationTreeLevel.html" data-type="entity-link">ClickNavigationTreeLevel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickTreeNode.html" data-type="entity-link">ClickTreeNode</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClickTreeViewCalculationService.html" data-type="entity-link">ClickTreeViewCalculationService</a>
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
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClickITreeViewSelection.html" data-type="entity-link">ClickITreeViewSelection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tooltip.html" data-type="entity-link">Tooltip</a>
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
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});