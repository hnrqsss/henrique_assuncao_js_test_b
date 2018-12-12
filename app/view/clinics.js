const ClinicsView = Backbone.View.extend({
    el: '#clinic-list',
    events: {},

    initialize: function() {
        this.render()
    },

    render: function() {
        
        const listElement = this.el

        const listClinics = this.collection.map(clinic => (`
            <li class="clinic-list-item" >
                <h2 class='clinic-name'>${clinic.attributes.name}</h2>
                <img src="${clinic.attributes.logo}" />
                <p class="clinic-short-description">${clinic.attributes.shortDescription}</p>
            </li>
        `)).join('')

        listElement.innerHTML = listClinics
    }


})