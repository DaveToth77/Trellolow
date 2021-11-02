async function addCard(event) {

    event.preventDefault();
    const title = document.querySelector('#cardTitle').value.trim();
    const content = document.querySelector('#cardContent').value.trim();

    console.log(title, content)

    if (title && content) {

        const response = await fetch(`api/cards`, {
            method: 'post',
            body: JSON.stringify({
              title,
              content
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
            console.log('Card added');
        } else {
            console.log(`err at addCard`)
            alert(response.err);
        }
    }

}