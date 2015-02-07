(function () {

    var cebDisplayFieldTpl = '';
    cebDisplayFieldTpl += '<div class="form-group">';
    cebDisplayFieldTpl += '<label></label>';
    cebDisplayFieldTpl += '<ceb-empty ceb-content><ceb-empty>';
    cebDisplayFieldTpl += '<span class="help-block"></span>';
    cebDisplayFieldTpl += '</div>';

    ceb.name('display-field')
        .properties({
            label: {
                attribute: true,
                delegate: {
                    target: 'label',
                    property: 'textContent'
                }
            },
            help: {
                attribute: true,
                delegate: {
                    target: '.help-block',
                    property: 'textContent'
                }
            }
        })
        .feature(cebFeatureTemplate, {
            template: cebDisplayFieldTpl
        })
        .register();
}());
