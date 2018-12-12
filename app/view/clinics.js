const ClinicsView = Backbone.View.extend({
    el: '#clinic-list',
    
    events: {
        "click li.clinic-list-item": "clinicDetails"
    },

    initialize: function() {
        this.render()
    },

    render: function() {
        
        const listElement = this.el

        const listClinics = this.collection.map(clinic => (`
            <li class="clinic-list-item" clinic-id="${clinic.attributes.id}">
                <h2 class='clinic-name'>${clinic.attributes.name}</h2>
                <img src="${clinic.attributes.logo}" />
                <p class="clinic-short-description">${clinic.attributes.shortDescription}</p>
            </li>
        `)).join('')

        listElement.innerHTML = listClinics
    },

    clinicDetails: function(element) {
        
        const clinicId = element.target.closest('LI').getAttribute('clinic-id')

        this.collection.navigateToClinic(clinicId)
        
    }
})