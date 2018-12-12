const Clinics = Backbone.Collection.extend({
    
    model: Clinic,
    url: 'http://localhost:3001/clinics',

    navigateToClinic: function(id) {
        
        const router = new Router()

        router.navigate(`#clinic/${id}`,true)
    }
})