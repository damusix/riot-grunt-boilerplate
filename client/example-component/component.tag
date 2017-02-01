<example-component>

    <p style='background-color: { colors[_i] }'>

        Example Component!
        <button onclick={ clickme }>Click me!</button>

    </p>

    <script>

        this._i = 0

        this.colors = ['#FCC', '#CFC', '#CCF']

        clickme() {

            this._i++

            if (this._i > this.colors.length-1)
                this._i = 0

        }

    </script>

</example-component>
