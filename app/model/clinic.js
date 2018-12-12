const Clinic = Backbone.Model.extend({

    defaults: {
        id: 0,
        name: '',
        description: '',
        shortDescription: '',
        logo: '//link',
        images: []
    },

    initialize: function(clinic = null) {
        if(clinic !== null)
            this.set({shortDescription: utils.reduceText(clinic.description)})
    }
})

const clinic = new Clinic(test)

console.log(clinic.attributes)