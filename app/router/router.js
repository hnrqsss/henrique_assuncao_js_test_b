const Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'clinic/:id': 'clinicDetais'
    },

    fetchClinics: async function() {
        
        const clinics = new Clinics()
        
        const response = await clinics.fetch()
        
        this.fetchedClinics = await response

        clinics.reset(this.fetchedClinics)
        
        return clinics
    },

    index: function() {
        
        this.fetchClinics()
                .then(clinics => {
                    new ClinicsView({ collection: clinics })                 
                })
    },

    clinicDetais: function(id) {
        
        this.fetchClinics()
                .then(clinics => {
                    const clinic = clinics.get(id)
                    new ClinicView({ collection: clinic })
                })

    }
})