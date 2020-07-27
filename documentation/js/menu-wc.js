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
                    <a href="index.html" data-type="index-link">@itay.gold/npm-registry documentation</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-22fa36df4f34d2420e1c221d87ee2084"' : 'data-target="#xs-components-links-module-AppModule-22fa36df4f34d2420e1c221d87ee2084"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-22fa36df4f34d2420e1c221d87ee2084"' :
                                            'id="xs-components-links-module-AppModule-22fa36df4f34d2420e1c221d87ee2084"' }>
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
                                <a href="modules/AppServerModule.html" data-type="entity-link">AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-607cb2a95e133d5d728c4c32f462544b"' : 'data-target="#xs-components-links-module-AppServerModule-607cb2a95e133d5d728c4c32f462544b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-607cb2a95e133d5d728c4c32f462544b"' :
                                            'id="xs-components-links-module-AppServerModule-607cb2a95e133d5d728c4c32f462544b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickDatePickerDemoModule.html" data-type="entity-link">ClickDatePickerDemoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickDatePickerDemoModule-9008ecd666585cc3dd29d9d6c376db62"' : 'data-target="#xs-components-links-module-ClickDatePickerDemoModule-9008ecd666585cc3dd29d9d6c376db62"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickDatePickerDemoModule-9008ecd666585cc3dd29d9d6c376db62"' :
                                            'id="xs-components-links-module-ClickDatePickerDemoModule-9008ecd666585cc3dd29d9d6c376db62"' }>
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
                                            'data-target="#components-links-module-ClickDatePickerRangeDemoModule-b2ed39547f9b26e9b0aa2e600937f373"' : 'data-target="#xs-components-links-module-ClickDatePickerRangeDemoModule-b2ed39547f9b26e9b0aa2e600937f373"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickDatePickerRangeDemoModule-b2ed39547f9b26e9b0aa2e600937f373"' :
                                            'id="xs-components-links-module-ClickDatePickerRangeDemoModule-b2ed39547f9b26e9b0aa2e600937f373"' }>
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
                                            'data-target="#components-links-module-ClickIconDemoModule-95727c497cf2126048591bfb342643e9"' : 'data-target="#xs-components-links-module-ClickIconDemoModule-95727c497cf2126048591bfb342643e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickIconDemoModule-95727c497cf2126048591bfb342643e9"' :
                                            'id="xs-components-links-module-ClickIconDemoModule-95727c497cf2126048591bfb342643e9"' }>
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
                                <a href="modules/ClickMeseageDialogDemoModule.html" data-type="entity-link">ClickMeseageDialogDemoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickMeseageDialogDemoModule-790e169750b261804cad8e89c2e766ef"' : 'data-target="#xs-components-links-module-ClickMeseageDialogDemoModule-790e169750b261804cad8e89c2e766ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickMeseageDialogDemoModule-790e169750b261804cad8e89c2e766ef"' :
                                            'id="xs-components-links-module-ClickMeseageDialogDemoModule-790e169750b261804cad8e89c2e766ef"' }>
                                            <li class="link">
                                                <a href="components/ClickMessageDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickMessageDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickMessageDialogDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickMessageDialogDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickMessageDialogInternalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickMessageDialogInternalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickMessageDialogDemoRoutingModule.html" data-type="entity-link">ClickMessageDialogDemoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickSearchInputModule.html" data-type="entity-link">ClickSearchInputModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickSearchInputModule-c297257ea0e5838b36c1310c797c4a6e"' : 'data-target="#xs-components-links-module-ClickSearchInputModule-c297257ea0e5838b36c1310c797c4a6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickSearchInputModule-c297257ea0e5838b36c1310c797c4a6e"' :
                                            'id="xs-components-links-module-ClickSearchInputModule-c297257ea0e5838b36c1310c797c4a6e"' }>
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
                                <a href="modules/ClickTimeDomainModule.html" data-type="entity-link">ClickTimeDomainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickTimeDomainModule-e42b91f5796d12b50b8c0c725453a403"' : 'data-target="#xs-components-links-module-ClickTimeDomainModule-e42b91f5796d12b50b8c0c725453a403"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickTimeDomainModule-e42b91f5796d12b50b8c0c725453a403"' :
                                            'id="xs-components-links-module-ClickTimeDomainModule-e42b91f5796d12b50b8c0c725453a403"' }>
                                            <li class="link">
                                                <a href="components/ClickDateRangeCalendarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDateRangeCalendarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickTimeDomainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTimeDomainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickTimeDomainDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTimeDomainDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickTimeDomainModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickTimeDomainModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClickTimeDomainRoutingModule.html" data-type="entity-link">ClickTimeDomainRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClickTreeViewModule.html" data-type="entity-link">ClickTreeViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClickTreeViewModule-22e4891c74ce172b7d4ce145f0780fd2"' : 'data-target="#xs-components-links-module-ClickTreeViewModule-22e4891c74ce172b7d4ce145f0780fd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickTreeViewModule-22e4891c74ce172b7d4ce145f0780fd2"' :
                                            'id="xs-components-links-module-ClickTreeViewModule-22e4891c74ce172b7d4ce145f0780fd2"' }>
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
                                            'data-target="#components-links-module-ClickTristateCheckboxModule-7f92127464d47fc7e687b508795851c9"' : 'data-target="#xs-components-links-module-ClickTristateCheckboxModule-7f92127464d47fc7e687b508795851c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickTristateCheckboxModule-7f92127464d47fc7e687b508795851c9"' :
                                            'id="xs-components-links-module-ClickTristateCheckboxModule-7f92127464d47fc7e687b508795851c9"' }>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ClickKeyNode.html" data-type="entity-link">ClickKeyNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickNavigationTreeLevel.html" data-type="entity-link">ClickNavigationTreeLevel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickTimeDomainState.html" data-type="entity-link">ClickTimeDomainState</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClickTreeNode.html" data-type="entity-link">ClickTreeNode</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageDialogData.html" data-type="entity-link">MessageDialogData</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageDialogResponse.html" data-type="entity-link">MessageDialogResponse</a>
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
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
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
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
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
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});