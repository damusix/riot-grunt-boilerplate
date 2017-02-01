describe('Boilerplate Test', function() {

    it('riot should be defined', function() {

        assert(typeof riot === 'object', 'riot is defined');

    });

    it('route should be defined', function() {

        assert(typeof route === 'function', 'route is defined');

    });

    it('global app variable should be an object', function() {

        assert(typeof app === 'object', 'app is an object');

    });

    it('global app variable should be riot-observable', function() {

        assert(typeof app.on === 'function', 'app is riot-observable');

    });

    it('should mount app tag', function() {

        document.body.appendChild(document.createElement('app'));
        riot.mount('app');
        expect(document.querySelector('app > h1').textContent).to.equal('Riot Grunt Biolerplate');

    });

    it('should mount example component', function() {

        document.body.appendChild(document.createElement('example-component'));
        riot.mount('example-component');

        var elm = document.querySelector('example-component > p');
        assert(elm.nodeName === 'P');

        var btn = document.querySelector('example-component p button');
        assert(btn.nodeName === 'BUTTON');

        btn.click();

        assert(/\#CFC/.test(elm.attributes.style.value));



    });

});
