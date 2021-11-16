function run() {
    yt = window.location.search;
    ytParams = new URLSearchParams(yt);
    id = ytParams.get('v');

    fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyCsug6NbG5YyrL3gQllYu9HVefXHzSY8GU`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            dislikeCount = data["items"][0].statistics.dislikeCount.toString();
            dislikeString = document.querySelectorAll('#menu #top-level-buttons-computed ytd-toggle-button-renderer a yt-formatted-string')[1]
            dislikeString.textContent = dislikeCount;
        })
}

document.onload = run();