var input = document.getElementById('texts');
        var place = document.getElementById('val');
        var warn = document.getElementById('warn');
        var value = document.getElementById('val');

        document.querySelector('.btn').addEventListener('click', function () {
            let check = true;
            warn.style.display = 'none';
            input.style.borderColor = '';
            input.style.fontWeight = 'normal';

            if (input.value.length > 16) {
                showWarning("Numbers must be exactly 16");
                check = false;
            } else if (input.value.length < 16) {
                showWarning("Numbers must be exactly 16");
                check = false;
            } else if (input.value === '') {
                showWarning("The box should not be empty");
                check = false;
            } else {
                var tot = 0;
                for (let i = 0; i < 16; i++) {
                    let v = parseInt(input.value[i], 10);
                    if (isNaN(v)) {
                        showWarning("Invalid character in input");
                        check = false;
                        break;
                    }

                    if (i % 2 === 0) {
                        v *= 2;
                        if (v > 9) {
                            tot += v - 9;
                        } else {
                            tot += v;
                        }
                    } else {
                        tot += v;
                    }
                }

                if (check) {
                    console.log(tot);
                    if (tot % 10 === 0) {
                        value.textContent = "It is a valid Credit card number";
                    } else {
                        value.textContent = "It is not a valid Credit card Number";
                    }
                }
            }
        });

        function showWarning(message) {
            warn.style.display = 'block';
            warn.style.color = 'red';
            warn.style.margin = 'auto';
            warn.style.position = "absolute";
            warn.style.bottom = "40%";
            warn.style.right = "40%";
            warn.style.fontSize = "19px";
            warn.textContent = message;
            input.style.borderColor = 'red';
            input.style.fontWeight = 'bold';
            warn.style.fontWeight = 'bold';
            input.value = '';
        }