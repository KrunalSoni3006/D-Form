/*!
 * jQuery Dynamic Form Library v1.0.0
 *
 * Copyright (c) 2019 Kunal Soni
 * Released under the MIT license
 * 
 * Date: 2019-04-01
 */
jQuery.fn.dform = function (_obj) {
    let elements = [];
    if (_obj.elements.length > 0) {
        jQuery(_obj.elements).each(function (key, elmValue) {
            let wrapperDiv = document.createElement("div");
            elmValue.wrapperClass = elmValue.wrapperClass == "" || elmValue.wrapperClass == null || elmValue.wrapperClass == undefined ? "form-group" : elmValue.wrapperClass;
            elmValue.wrapperAttributes = elmValue.wrapperAttributes == "" || elmValue.wrapperAttributes == null || elmValue.wrapperAttributes == undefined ? [] : elmValue.wrapperAttributes;
            wrapperDiv.setAttribute("Class", elmValue.wrapperClass)
            if (elmValue.wrapperAttributes.length > 0) {
                jQuery(Object.keys(elmValue.wrapperAttributes[0])).each(function (key, value) {
                    wrapperDiv.setAttribute(value, elmValue.wrapperAttributes[0][
                        [value]
                    ]);
                });
            }

            let elmLabel = document.createElement("Label");
            elmValue.labelAttributes = elmValue.labelAttributes == "" || elmValue.labelAttributes == null || elmValue.labelAttributes == undefined ? [] : elmValue.labelAttributes;
            elmLabel.setAttribute("for", elmValue.elementAttributes[0]["id"]);
            if (elmValue.labelAttributes.length > 0) {
                jQuery(Object.keys(elmValue.labelAttributes[0])).each(function (key, value) {
                    elmLabel.setAttribute(value, elmValue.labelAttributes[0][value]);

                });
            }
            elmLabel.innerHTML = elmValue.Label;

            elmValue.elementname = elmValue.elementname == "" || elmValue.elementname == null || elmValue.elementname == undefined ? "input" : elmValue.elementname;
            let newElement = document.createElement(elmValue.elementname);
            jQuery(Object.keys(elmValue.elementAttributes[0])).each(function (key, value) {
                newElement.setAttribute(value, elmValue.elementAttributes[0][
                    [value]
                ]);
            });
            if (elmValue.LabelPosition === 1) {
                $(wrapperDiv).append(newElement);
                $(wrapperDiv).append(elmLabel);
            } else {
                $(wrapperDiv).append(elmLabel);
                $(wrapperDiv).append(newElement);
            }

            elements.push(wrapperDiv);
        });
        $(this).append(elements)
    }
};