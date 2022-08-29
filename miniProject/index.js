fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {

        let main = document.createElement('div');
        main.classList.add('wrapper');

        for (const item of data) {

            let x = document.createElement('a');
            x.href = `user-details.html?id=${item.id}`;
            x.innerText = " - read more - ";

            let child = document.createElement('div');
            let p = document.createElement('p');
            child.classList.add('child');
            p.append(`${item.id} -- ${item.name}`)
            child.append(p, x);
            main.append(child);

        }

        document.body.append(main);
    });