const Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'clinic/:id': 'clinicDetais'
    },

    index: function() {
        
        const clinics = new Clinics()
    
        clinics.fetch()
            .then(res => {
                const clinicsView = new ClinicsView({ collection: clinics })
            })
    },

    clinicDetais: function() {

    }
})