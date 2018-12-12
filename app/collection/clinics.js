const Clinics = Backbone.Collection.extend({
    
    model: Clinic,
    url: 'http://localhost:3001/clinics',

    initialize: function() {
        
    },

    navigateToClinic: function(id) {
        console.log(id)
    }
})