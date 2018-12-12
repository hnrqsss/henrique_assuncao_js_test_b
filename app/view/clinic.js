const ClinicView = Backbone.View.extend({
    el: document.getElementById('clinic-list').parentElement,
    events: {},

    initialize: function() {
        this.render()
    },

    render: function() {
        
        this.el.innerHTML = ''

        const { attributes } = this.collection

        this.el.innerHTML += `
            <div class="clinic-item" >
                <h2 class='clinic-name'>${attributes.name}</h2>
                <img src="${attributes.logo}" />
                <p class="clinic-short-description">${attributes.description}</p>
            </li>
        `
    }


})