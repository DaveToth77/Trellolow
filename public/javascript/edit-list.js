async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="list-title"]').value.trim();

    const response = await fetch(`/api/lists/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-list-form').addEventListener('submit', editFormHandler);
  