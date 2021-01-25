import { CommonFieldTypes, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/** 
 * 
 * @param {Manifest} manifest Manifest instance to add components to
*/

export default function(manifest) {
    manifest.addTemplate({
        name: 'service_template',
        fields: [
            { name: 'title', type: CommonFieldTypes.SingleLineText },
            { name: 'serviceIcon', type: CommonFieldTypes.Image },
            { name: 'serviceInfo', type: CommonFieldTypes.RichText }
        ]
    })
}