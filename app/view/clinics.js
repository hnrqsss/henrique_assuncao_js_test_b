const ClinicsView = Backbone.View.extend({
    el: '#clinic-list',
    events: {},

    initialize: function() {
        this.render()
    },

    render: function() {
        
        const listElement = this.el

        const listClinics = this.collection.map(({attributes}) => (`
            <li class="clinic-list-item" >
                <h2 class='clinic-name'>${attributes.name}</h2>
                <img src="${attributes.logo}" />
                <p class="clinic-short-description">${attributes.shortDescription}</p>
            </li>
        `)).join('')

        listElement.innerHTML = listClinics
    }


})