const Clinics = Backbone.Collection.extend({
    
    model: Clinic,
    url: 'http://localhost:3001/clinics',

    initialize: function() {
        
    }
})