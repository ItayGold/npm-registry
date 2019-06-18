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
                                            'data-target="#components-links-module-AppModule-e192cb80c71d51925eea8491fcbf9652"' : 'data-target="#xs-components-links-module-AppModule-e192cb80c71d51925eea8491fcbf9652"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e192cb80c71d51925eea8491fcbf9652"' :
                                            'id="xs-components-links-module-AppModule-e192cb80c71d51925eea8491fcbf9652"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickDatePickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDatePickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClickDatepickerRangeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDatepickerRangeComponent</a>
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
                                            'data-target="#components-links-module-ClickDatePickerDemoModule-c83b62743ce63ed31eb2ac7ead4333a7"' : 'data-target="#xs-components-links-module-ClickDatePickerDemoModule-c83b62743ce63ed31eb2ac7ead4333a7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickDatePickerDemoModule-c83b62743ce63ed31eb2ac7ead4333a7"' :
                                            'id="xs-components-links-module-ClickDatePickerDemoModule-c83b62743ce63ed31eb2ac7ead4333a7"' }>
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
                                            'data-target="#components-links-module-ClickDatePickerRangeDemoModule-0248bbc1a1e5edf0b26995818e60c1df"' : 'data-target="#xs-components-links-module-ClickDatePickerRangeDemoModule-0248bbc1a1e5edf0b26995818e60c1df"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickDatePickerRangeDemoModule-0248bbc1a1e5edf0b26995818e60c1df"' :
                                            'id="xs-components-links-module-ClickDatePickerRangeDemoModule-0248bbc1a1e5edf0b26995818e60c1df"' }>
                                            <li class="link">
                                                <a href="components/ClickDatePickerRangeDemoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickDatePickerRangeDemoComponent</a>
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
                                            'data-target="#components-links-module-ClickIconDemoModule-826f1e94376a27fd995d3ca53bada1a3"' : 'data-target="#xs-components-links-module-ClickIconDemoModule-826f1e94376a27fd995d3ca53bada1a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClickIconDemoModule-826f1e94376a27fd995d3ca53bada1a3"' :
                                            'id="xs-components-links-module-ClickIconDemoModule-826f1e94376a27fd995d3ca53bada1a3"' }>
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