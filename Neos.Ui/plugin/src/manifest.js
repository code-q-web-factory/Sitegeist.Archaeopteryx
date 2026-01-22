import manifest from '@neos-project/neos-ui-extensibility';

import {registerLinkTypes, registerDialog, createEditor} from '@sitegeist/archaeopteryx-core';
import {registerInspectorEditors} from '@sitegeist/archaeopteryx-inspector-editor';
import {registerLinkButton} from '@sitegeist/archaeopteryx-link-button';

// Minimal change to Archaeopteryx manifest.js
// Expose Archaeopteryx's Field wrapper for external link type implementations
// This Field is wrapped with FieldGroupContext to properly prefix field names
import {Field} from '@sitegeist/archaeopteryx-core/src/framework';
window['@sitegeist/archaeopteryx'] = { Field };

manifest('@sitegeist/archaeopteryx-plugin', {}, (globalRegistry, {store, configuration, routes}) => {
    const editor = createEditor();
    const neosContextProperties = {globalRegistry, store, configuration, routes};

    registerLinkTypes(globalRegistry);
    registerDialog(neosContextProperties, editor);
    registerInspectorEditors(neosContextProperties, editor);
    registerLinkButton(neosContextProperties, editor);
});
