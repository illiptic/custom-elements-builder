(function () {
    ceb.name('input-text')
        .properties({
            placeholder: {
                attribute: true,
                delegate: {
                    target: 'input'
                }
            },
            value: {
                attribute: true,
                observable: true,
                delegate: {
                    target: 'input'
                }
            }
        })
        .feature(cebFeatureTemplate, {
            template: '<input type="text" class="form-control">'
        })
        .feature(cebFeatureFrp)
        .register();
}());
