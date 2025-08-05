function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value;
  const resultsDiv = document.getElementById("results");

  // This is just a placeholder. In real use, you’d call a search API.
  resultsDiv.innerHTML = `You searched for: <strong>${query}</strong><br><em>(This is just a mockup.)</em>`;

  return false;
}
