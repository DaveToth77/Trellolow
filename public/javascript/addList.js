async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="list-title"]').value;
  
    const response = await fetch(`/api/lists`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        // user_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
      console.log(response.statusText);
    }
  }
  
  document.querySelector('.new-list-form').addEventListener('submit', newFormHandler);
  