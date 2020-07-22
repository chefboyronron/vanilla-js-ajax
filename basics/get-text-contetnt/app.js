document.getElementById('button').addEventListener('click', getData);

function getData() {
    const xhr = new XMLHttpRequest
        output = document.getElementById('output');

    output.innerHTML = '';

    xhr.open('GET', 'some-json-file.json', true);

    // Optional - Used for spinners/loaders
    xhr.onprogress  = function() {
        // readyStatus = 3
        output.innerHTML = 'loading.....';
    }

    xhr.onload = function() {
        if( xhr.status === 200 && xhr.readyState === 4 ) {
            // for JSON file
            let persons = JSON.parse(xhr.responseText),
                html = '';

            persons.forEach(function (person) {
                html += `
                    ID: ${person.id} <br>
                    Name: ${person.name} <br>
                `;
            });

            output.innerHTML = html;
        }
        if( xhr.status === 404 ) {
            output.innerHTML = xhr.status + ': Not found!';
        }
    }
    xhr.send();
}

/*
readyState Value
0: request not initialized
1: server connection stablished
2: request receive
3: processing request
4: request finished and response is ready

HTTP Statuses
200: "OK"
403: "Forbidden"
404: "Not found"
*/